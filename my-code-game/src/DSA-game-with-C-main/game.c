#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


typedef struct{
    int id;
    char question[256];
    char optionA[100];
    char optionB[100];
    char optionC[100];
    char optionD[100];
    char correctans;
} MCQ;

typedef struct{
    int id;
    char description[256];
    char broken_code[1024];
    char expected_output[50];
} Snippet;

MCQ* load_mcq_data(int *out_total_count);
Snippet* load_snippet_data(int *out_total_count);

int compile_and_evaluate(const char *player_code, const char *full_code, const char *expected_output)
{
    FILE *fp;
    
    fp = fopen("temp.c", "w");
    if (fp == NULL) return 0;

    fprintf(fp, "#include <stdio.h>\n");
    fprintf(fp, "int main() {\n");

    char *blank = strstr(full_code, "_____");
    if (blank != NULL) {
        for (const char *p = full_code; p < blank; p++) {
            if (*p == '~') fputc('\n', fp);
            else fputc(*p, fp);
        }
        fprintf(fp, "%s", player_code);
        for (const char *p = blank + 5; *p != '\0'; p++) { 
            if (*p == '~') fputc('\n', fp);
            else fputc(*p, fp);
        }
    } else {
        fprintf(fp, "    %s\n", player_code);
    }

    fprintf(fp, "\n    return 0;\n");
    fprintf(fp, "}\n");
    fclose(fp);

   
    if(system("compiler\\tcc.exe temp.c -o temp.exe") != 0) return 0;
    system("temp.exe > out.txt");
    fp = fopen("out.txt", "r");
    if(fp == NULL) return 0;

    char actual_output[256] = ""; 
    
    if (fgets(actual_output, sizeof(actual_output), fp) != NULL) {
        actual_output[strcspn(actual_output, "\r\n")] = '\0';
    }
    fclose(fp);

    
    remove("temp.c");
    remove("temp.exe");
    remove("out.txt");
    
    if(strcmp(actual_output, expected_output) == 0){
        return 1;
    }
    
    return 0;
}
int main()
{
    int mcq_count=0;

    MCQ *question_bank=load_mcq_data(&mcq_count);
    if(question_bank==NULL){
        printf("CRITICAL SYSTEM FAILURE: Could not load MCQ assets.\n");
        return 1;
    }
    int snippet_count=0;
    Snippet *snippet_bank=load_snippet_data(&snippet_count);
    if(snippet_bank==NULL){
        printf("CRITICAL SYSTEM FAILURE: Could not load Snippet assets.\n");
        return 1;
    }

    int game_running=1;
    int choice;

    while(game_running)
    {
        printf("\n=========================================\n");
        printf("||          D S A   D U N G E O N      ||\n");
        printf("=========================================\n");
        printf("1. Enter the Dungeon (MCQs)\n");
        printf("2. Code Injection (Snippets)\n");
        printf("3. Exit\n");
        printf("> ");

        scanf("%d",&choice);
        int c;
        while ((c=getchar())!='\n' && c!=EOF);
        if (choice==1){
            printf("\n[LOADING LEVEL 1...]\n");
            for(int i=0;i<mcq_count;i++){
                char player_ans;
                printf("\n=========================================\n");
                printf(" ROOM %d\n", i + 1);
                printf("=========================================\n");
                printf("%d-%s\n\n",question_bank[i].id, question_bank[i].question);
                printf("%s\n", question_bank[i].optionA);
                printf("%s\n", question_bank[i].optionB);
                printf("%s\n", question_bank[i].optionC);
                printf("%s\n\n", question_bank[i].optionD);

                printf("> Enter your answer: \n");
                scanf(" %c",&player_ans);

                player_ans=toupper(player_ans);

                if(player_ans==question_bank[i].correctans){
                    printf("\n[SUCCESS] Correct! You advance to the next room.\n");
                }
                else {
                    printf("\n[FATAL ERROR] Incorrect. The correct answer was %c.\n", question_bank[i].correctans);
                    printf("You have been kicked out of the dungeon.\n");    
                    break;
                }   
            }
            printf("\n--- RUN COMPLETE ---\n");
        }
        else if(choice==2){
            printf("\n[LOADING LEVEL 2: CODE INJECTION...]\n");

            for(int i=0;i<snippet_count;i++) {
                char player_code[256];
                printf("\n=========================================\n");
                printf(" LEVEL %d: %s\n", snippet_bank[i].id,snippet_bank[i].description);
                printf("=========================================\n");
                printf("INCOMPLETE LOGIC:\n");
                printf("-----------------------------------------\n");

                for (int j=0;snippet_bank[i].broken_code[j]!='\0';j++) {
                    if(snippet_bank[i].broken_code[j]=='~'){
                        printf("\n");
                    }else {
                        printf("%c", snippet_bank[i].broken_code[j]);
                    }
                }

                printf("\n-----------------------------------------\n");
                printf("> Inject missing code: \n");

                fgets(player_code,sizeof(player_code),stdin);
                player_code[strcspn(player_code,"\n")]='\0';

                printf("[COMPILING...]\n");
                if(compile_and_evaluate(player_code,snippet_bank[i].broken_code,snippet_bank[i].expected_output)){
                    printf("\n[SUCCESS] Code compiled and logic executed perfectly. Proceeding...\n");                   
                } else {
                    printf("\n[FATAL ERROR] Compilation failed or output was incorrect.\n");
                    printf("System locked.\n");
                    break;
                }
            }
            printf("\n--- RUN COMPLETE ---\n");
        }
        else if(choice==3){
            printf("\nExiting system...\n");
            game_running=0; 
        }
        else {
            printf("\nInvalid input. Please enter 1, 2 or 3.\n");
        }
    }   
    free(question_bank);
    free(snippet_bank);
    return 0;
}
MCQ* load_mcq_data(int *out_total_count){
    FILE *fp;
    char line[600];
    int total=0;
    int count=0;

    fp=fopen("mcq_data.txt","r");
    if(fp==NULL) {
        return NULL;
    }
    while (fgets(line,sizeof(line),fp)){
        total++;
    }
    rewind(fp);

    MCQ *bank=malloc(total*sizeof(MCQ));
    if(bank==NULL){
        fclose(fp);
        return NULL;
    }

    while(fgets(line,sizeof(line),fp) && count<total) {
        bank[count].id=atoi(strtok(line,"|"));
        strcpy(bank[count].question,strtok(NULL,"|"));
        strcpy(bank[count].optionA, strtok(NULL, "|"));
        strcpy(bank[count].optionB, strtok(NULL, "|"));
        strcpy(bank[count].optionC, strtok(NULL, "|"));
        strcpy(bank[count].optionD, strtok(NULL, "|"));
        bank[count].correctans = strtok(NULL, "|")[0];
        count++;
    }

    fclose(fp);

    *out_total_count=total;
    return bank;    
}
Snippet* load_snippet_data(int *out_total_count) {
    FILE *fp;
    char line[1200];
    int total=0;
    int count=0;

    fp=fopen("snippet_data.txt","r");
    if(fp==NULL){
        return NULL;
    }
    while(fgets(line,sizeof(line),fp)){
        total++;
    }
    rewind(fp);
    Snippet *bank=malloc(total*sizeof(Snippet));
    if(bank==NULL){
        fclose(fp);
        return NULL;
    }
    while(fgets(line,sizeof(line),fp) && count<total){
        bank[count].id=atoi(strtok(line,"|"));
        strcpy(bank[count].description,strtok(NULL,"|"));
        strcpy(bank[count].broken_code,strtok(NULL,"|"));

        char *ans=strtok(NULL,"|");
        if (ans!=NULL){
            strcpy(bank[count].expected_output,ans);
            bank[count].expected_output[strcspn(bank[count].expected_output,"\r\n")]='\0';
        }
        count++;
    }
    fclose(fp);
    *out_total_count=total;
    return bank;
}