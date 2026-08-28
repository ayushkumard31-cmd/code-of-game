export const tierConfig = [
  { name: "LEVEL 1 · BEGINNER", count: 20, xp: 50, color: "#58d68d" },
  { name: "LEVEL 2 · INTERMEDIATE", count: 15, xp: 100, color: "#4ec9e8" },
  { name: "LEVEL 3 · ADVANCED", count: 10, xp: 175, color: "#b377ff" },
  { name: "LEVEL 4 · EXPERT", count: 5, xp: 300, color: "#ff6b5f" },
];

const rotate = (choices, correct, shift) => {
  const amount = shift % choices.length;
  const moved = [...choices.slice(amount), ...choices.slice(0, amount)];
  return { choices: moved, answer: (correct - amount + choices.length) % choices.length };
};

function question(type, title, prompt, choices, correct, hint, code, index) {
  return { type, title, prompt, hint, code, ...rotate(choices, correct, index) };
}

const dsaQuestion = (i, tier) => {
  const n = 8 + i * 2;
  const set = [
    ["Array access", `What is the time complexity of reading array index ${i % 7}?`, ["O(1)", "O(log n)", "O(n)", "O(n²)"], 0, "Direct indexing does not scan the array."],
    ["Stack behavior", `After pushing ${i + 2}, ${i + 3}, ${i + 4}, which value is popped first?`, [`${i + 4}`, `${i + 2}`, `${i + 3}`, "None"], 0, "A stack is last-in, first-out."],
    ["Queue behavior", `After enqueueing ${i + 1}, ${i + 2}, ${i + 3}, which leaves first?`, [`${i + 1}`, `${i + 3}`, `${i + 2}`, "None"], 0, "A queue is first-in, first-out."],
    ["Binary search", `At most how many halvings are needed to search about ${2 ** (4 + (i % 6))} sorted items?`, [`${4 + (i % 6)}`, `${2 ** (4 + (i % 6))}`, "1", `${8 + (i % 6)}`], 0, "Binary search halves the remaining range."],
    ["Tree structure", "What is the maximum number of children of a binary-tree node?", ["2", "1", "3", "Unlimited"], 0, "Binary means at most two branches."],
    ["Linked lists", `To insert at the head of a singly linked list, what must the new node point to?`, ["The old head", "NULL always", "The tail", "Itself"], 0, "Preserve the existing chain."],
    ["Hash tables", `Which event usually hurts hash-table lookup performance?`, ["Many collisions", "A small key", "FIFO order", "Recursion"], 0, "Several keys competing for one bucket requires extra work."],
    ["Graph traversal", `Which traversal finds shortest paths in an unweighted graph with ${n} vertices?`, ["BFS", "DFS", "Inorder", "Quicksort"], 0, "Explore equally distant neighbors together."],
    ["Sorting", `Which bound describes merge sort on ${n} values?`, ["O(n log n)", "O(n²)", "O(1)", "O(log n)"], 0, "It divides, then performs linear merging."],
    ["Recursion", `What prevents a recursive function from calling itself forever?`, ["A base case", "A hash key", "A queue", "A compiler flag"], 0, "It is the stopping condition."],
  ][i % 10];
  const expert = tier === 3 ? "Analyze carefully: " : "";
  return question("DSA TRIAL", set[0], expert + set[1], set[2], set[3], set[4], null, i);
};

const codeQuestion = (i, tier) => {
  const x = 3 + i;
  const set = [
    ["Print a value", `int x = ${x};\n_____`, `Which line prints ${x}?`, [`printf("%d", x);`, "printf(x);", "print(x);", "cout << x;"], 0, "C printf needs a format specifier."],
    ["Loop boundary", `int a[${(i % 5) + 3}];\nfor (int j = 0; _____; j++)`, "Choose the safe boundary.", [`j < ${(i % 5) + 3}`, `j <= ${(i % 5) + 3}`, "j > 0", "j != -1"], 0, "The array size is one more than its final index."],
    ["Pointer read", `int score = ${x};\nint *p = &score;\n_____`, "How do you print the pointed-to value?", [`printf("%d", *p);`, `printf("%d", p);`, "printf(*score);", "p = score;"], 0, "Use * to dereference p."],
    ["Even check", `int value = ${x * 2};\nif (_____) puts("even");`, "Complete the condition.", ["value % 2 == 0", "value / 2 == 0", "value = 2", "value % 2 == 1"], 0, "Even numbers leave remainder zero."],
    ["Array sum", `int total = 0;\nfor(int j=0;j<${(i % 4) + 2};j++) _____;`, "Accumulate every element of a.", ["total += a[j]", "total = a", "a[j] += total", "total++"], 0, "Add the current element into total."],
    ["String length", `char word[] = "code";\nint n = _____;`, "Get the string length.", ["strlen(word)", "sizeof(char)", "word.length", "length(word)"], 0, "The C string library provides strlen."],
    ["Allocate memory", `int *items = _____;`, `Allocate space for ${x} integers.`, [`malloc(${x} * sizeof(int))`, `malloc(${x})`, `new int[${x}]`, "alloc(int)"], 0, "Multiply the element count by the element size."],
    ["Swap values", `int temp = a;\na = b;\n_____`, "Complete the swap.", ["b = temp;", "temp = b;", "a = temp;", "b = a;"], 0, "The saved original a belongs in b."],
    ["Function result", `int square(int n) {\n  _____\n}`, "Return the square of n.", ["return n * n;", "print(n*n);", "n * n;", "return n + n;"], 0, "A non-void function must return its result."],
    ["Linked node", `struct Node *node = malloc(sizeof *node);\n_____`, "Initialize its next pointer safely.", ["node->next = NULL;", "node.next = NULL;", "next->node = 0;", "node = NULL;"], 0, "Use -> through a structure pointer."],
  ][i % 10];
  return question("CODE FORGE", set[0], set[2], set[3], set[4], set[5], set[1], i + tier);
};

const bugQuestion = (i, tier) => {
  const size = 3 + (i % 6);
  const set = [
    ["Off-by-one", `int a[${size}];\nfor(int j=0; j<=${size}; j++) a[j]=j;`, "Which change prevents the out-of-bounds write?", [`Use j < ${size}`, `Use j <= ${size}`, "Start at 1", "Remove j++"], 0, "The final valid index is size - 1."],
    ["Null dereference", "struct Node *head = NULL;\nprintf(\"%d\", head->data);", "What must happen before dereferencing head?", ["Check head != NULL", "Increment head", "Free head", "Cast head"], 0, "NULL does not refer to an object."],
    ["Memory leak", `char *text = malloc(${size * 8});\nstrcpy(text, "quest");\nreturn;`, "What cleanup is missing?", ["free(text);", "delete text;", "text = 0 only;", "free(*text);"], 0, "Every successful malloc needs a matching free."],
    ["Wrong allocation", `int *a = malloc(${size});`, `Why may this allocation be too small for ${size} integers?`, ["It omits sizeof(int)", "malloc cannot allocate ints", "It needs calloc only", "The pointer must be char"], 0, "malloc receives bytes, not an element count."],
    ["Assignment in condition", "if (score = 100) puts(\"max\");", "Which fix performs comparison?", ["score == 100", "score != 100", "score := 100", "score equals 100"], 0, "One equals assigns; two compare."],
    ["Uninitialized value", "int total;\ntotal += 5;", "How should total be fixed?", ["Initialize total to 0", "Make total a pointer", "Free total", "Use a float"], 0, "The first += reads the old value."],
    ["Use after free", "int *p = malloc(sizeof(int));\nfree(p);\nprintf(\"%d\", *p);", "Which operation is invalid?", ["Dereferencing p after free", "Calling malloc", "Calling free", "Declaring p"], 0, "Freed storage no longer belongs to the program."],
    ["Buffer overflow", `char name[${size}];\nstrcpy(name, "long-player-name");`, "What is the core problem?", ["The source may exceed the buffer", "name is too large", "strcpy only copies ints", "The array needs free"], 0, "strcpy does not know the destination capacity."],
    ["Integer division", "float ratio = 5 / 2;", "Why does ratio become 2 instead of 2.5?", ["Both operands are integers", "ratio must be int", "Division is unsupported", "5 is too small"], 0, "Convert at least one operand to floating point."],
    ["Missing terminator", "char word[4] = {'c','o','d','e'};\nprintf(\"%s\", word);", "What makes %s unsafe here?", ["There is no null terminator", "The array is constant", "%s needs an int", "printf frees word"], 0, "C strings end with \\0."],
  ][i % 10];
  return question("BUG HUNT", set[0], set[2], set[3], set[4], set[5], set[1], i + tier * 2);
};

const builders = { dsa: dsaQuestion, code: codeQuestion, bugs: bugQuestion };

export function buildCampaign(mode) {
  let globalIndex = 0;
  return tierConfig.flatMap((tier, tierIndex) =>
    Array.from({ length: tier.count }, (_, localIndex) => ({
      ...builders[mode](globalIndex++, tierIndex),
      tier: tierIndex,
      tierQuestion: localIndex + 1,
      tierTotal: tier.count,
      xpReward: tier.xp,
    }))
  );
}

export function getRank(xp) {
  if (xp >= 5500) return { name: "LEGEND", next: 5500 };
  if (xp >= 4500) return { name: "CODE MASTER", next: 5500 };
  if (xp >= 2500) return { name: "BUG SLAYER", next: 4500 };
  if (xp >= 1200) return { name: "ALGORITHM KNIGHT", next: 2500 };
  if (xp >= 500) return { name: "CODE EXPLORER", next: 1200 };
  return { name: "ROOKIE", next: 500 };
}
