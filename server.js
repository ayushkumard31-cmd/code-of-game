const express=require('express');
const app=express();
const PORT=3000;

const mcqData=require('./mcq.json');
const snippetData=require('./snippets.json');

//TEST
app.get('/',(req,res)=>{
    res.send("DSA Dungeon server is ALIVE!");
});

app.get('/api/mcqs',(req,res)=>{
    res.join(mcqData);
});

app.get('/api/mcqs',(req,res)=>{
    res.join(snippetData);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);

});




