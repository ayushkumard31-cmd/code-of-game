"use client";

import { useState } from "react";

const questions = [
  ["What is the worst-case time complexity of finding an element in an unsorted array?", "O(1)", "O(log n)", "O(n)", "O(n²)", 2],
  ["Which principle dictates how a Stack processes data?", "FIFO", "LIFO", "Random access", "Priority queueing", 1],
  ["Which principle dictates how a standard Queue processes data?", "FIFO", "LIFO", "Binary tree traversal", "Hashing", 0],
  ["Which condition identifies the end of a singly linked list?", "temp->next == head", "temp->next == NULL", "temp == head->next", "temp->data == 0", 1],
  ["Which data structure uses contiguous memory blocks?", "Linked List", "Binary Tree", "Array", "Graph", 2],
  ["Maximum children of a node in a standard Binary Tree?", "1", "2", "3", "Infinite", 1],
  ["Which structure gives O(1) average cache lookups?", "Hash Table", "Stack", "Queue", "Linked List", 0],
  ["Absolute worst-case time complexity of QuickSort?", "O(n)", "O(n log n)", "O(n²)", "O(1)", 2],
  ["Which traversal finds shortest paths in an unweighted graph?", "DFS", "BFS", "Bubble Sort", "Binary Search", 1],
  ["What is a Turing Machine fundamentally?", "Hardware", "A model of computation", "A debugging tool", "A processor", 1],
  ["The Halting Problem asks whether a program will...", "Have errors", "Compile", "Stop or run forever", "Run in O(1)", 2],
  ["Who proved the Halting Problem undecidable?", "Alan Turing", "John von Neumann", "Charles Babbage", "Donald Knuth", 0],
  ["The tape in a Turing Machine represents...", "Read-only storage", "A stack", "A queue", "Infinite cell-based memory", 3],
  ["A Turing-decidable machine will...", "Always halt with a correct answer", "Only halt for Yes", "Loop for No", "Need exponential time", 0],
];

const codeLevels = [
  ["Loop Injection", "// Print 1, 2, and 3 back-to-back\n_____ ;", "123", ["printf(\"123\")"], "A single printf can emit all three digits."],
  ["Array Traversal", "int arr[] = {4, 5, 6};\nfor(int i = 0; i < 3; i++) {\n  _____ ;\n}", "456", ["printf(\"%d\",arr[i])"], "Print the element at index i."],
  ["Pointer Basics", "int val = 99;\nint *ptr = &val;\n_____ ;", "99", ["printf(\"%d\",*ptr)"], "Dereference ptr using *."],
  ["Conditional Logic", "int num = 8;\nif(_____) {\n  printf(\"Even\");\n}", "Even", ["num%2==0", "!(num%2)"], "The remainder after division by 2 should be zero."],
  ["Array Accumulation", "int sum = 0;\nfor(int i = 0; i < 3; i++) {\n  _____ ;\n}", "30", ["sum+=arr[i]", "sum=sum+arr[i]"], "Add arr[i] into sum."],
  ["Linked List Traversal", "struct Node* temp = &n1;\nwhile(_____) {\n  temp = temp->next;\n}", "99", ["temp->next!=null", "temp->next"], "Continue while another node exists."],
  ["Stack Pop", "int stack[] = {10, 20, 88};\nint top = 2;\nint val = _____ ;", "88", ["stack[top--]"], "Read top, then decrement it."],
  ["Queue Enqueue", "int queue[5];\nint rear = -1;\n_____ ;", "77", ["queue[++rear]=77", "rear++;queue[rear]=77"], "Advance rear, then store 77."],
  ["Queue Dequeue", "int front = 0;\nint val = _____ ;", "Val:10 Front:1", ["queue[front++]"], "Read front, then increment it."],
  ["Linked List Head Insert", "struct Node* head = &n1;\nstruct Node new_node = {5, NULL};\n_____ ;\nhead = &new_node;", "5->10", ["new_node.next=head"], "Point the new node at the current head."],
  ["Stack Peek", "int stack[] = {5, 15, 25};\nint top = 2;\nint val = _____ ;", "Val:25 Top:2", ["stack[top]"], "Read top without changing it."],
];

const clean = (v) => v.toLowerCase().replace(/\s|;+$/g, "");

export default function Home() {
  const [mode, setMode] = useState("home");
  const [level, setLevel] = useState(0);
  const [state, setState] = useState("play");
  const [choice, setChoice] = useState(null);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState(false);
  const total = mode === "quiz" ? questions.length : codeLevels.length;

  function start(next) { setMode(next); setLevel(0); setState("play"); setChoice(null); setCode(""); setMessage(""); setHint(false); }
  function advance() { if (level + 1 === total) setState("win"); else { setLevel(level + 1); setChoice(null); setCode(""); setMessage(""); setHint(false); } }
  function submitQuiz() { if (choice === questions[level][5]) { setMessage("ACCESS GRANTED"); setTimeout(advance, 600); } else setState("lost"); }
  function submitCode() {
    if (!code.trim()) return;
    if (codeLevels[level][3].some((item) => clean(item) === clean(code))) { setMessage(`OUTPUT: ${codeLevels[level][2]}`); setTimeout(advance, 750); }
    else setMessage("COMPILE ERROR — OUTPUT MISMATCH");
  }

  return <main className="shell">
    <div className="grid-bg" />
    <header><button className="logo" onClick={() => setMode("home")}><b>DS</b> DUNGEON</button><span className="online"><i /> SYSTEM ONLINE <small>v1.0.4</small></span></header>
    {mode === "home" ? <section className="home">
      <p className="kicker"><b>01</b> TERMINAL TRAINING PROTOCOL</p>
      <h1>MASTER THE<br/><em>ALGORITHM.</em></h1>
      <p className="intro">Descend into a gauntlet of data structures, logic traps, and broken C code. One wrong answer ends the run.</p>
      <div className="cards">
        <button className="card quiz" onClick={() => start("quiz")}><small>01 / THEORY</small><i>?</i><strong>THE DSA<br/>DUNGEON</strong><span>14 rooms · multiple choice · sudden death</span><b>ENTER DUNGEON →</b></button>
        <button className="card code" onClick={() => start("code")}><small>02 / PRACTICAL</small><i>&lt;/&gt;</i><strong>CODE<br/>INJECTION</strong><span>11 levels · repair C code · live validation</span><b>START INJECTION →</b></button>
      </div>
      <div className="stats"><span><b>25</b>TOTAL CHALLENGES</span><span><b>2</b>TRAINING PATHS</span><span><b>1</b>LIFE PER RUN</span></div>
    </section> : state !== "play" ? <section className={`ending ${state}`}>
      <code>{state === "win" ? "RUN_COMPLETE" : "FATAL_ERROR"}</code><h2>{state === "win" ? "DUNGEON\nCLEARED." : "SYSTEM\nLOCKED."}</h2>
      <p>{state === "win" ? `All ${total} challenges cleared. Your logic survived the dungeon.` : `Your run ended at ${mode === "quiz" ? "room" : "level"} ${level + 1}.`}</p>
      {state === "lost" && mode === "quiz" && <div className="reveal">CORRECT: {String.fromCharCode(65 + questions[level][5])} — {questions[level][questions[level][5] + 1]}</div>}
      <button className="primary" onClick={() => start(mode)}>RESTART RUN</button><button className="ghost" onClick={() => setMode("home")}>EXIT TO LOBBY</button>
    </section> : <section className="game">
      <aside><small>CURRENT RUN</small><h3>{mode === "quiz" ? "DSA DUNGEON" : "CODE INJECTION"}</h3><div className="counter"><b>{String(level + 1).padStart(2,"0")}</b> / {String(total).padStart(2,"0")}</div><div className="bar"><i style={{width:`${level / total * 100}%`}}/></div><div className="life">♥ <span><b>ONE LIFE</b><small>NO CHECKPOINTS</small></span></div><button onClick={() => setMode("home")}>× ABORT RUN</button></aside>
      <article>
        <div className="panel-head"><span>{mode === "quiz" ? `ROOM_${String(level + 1).padStart(2,"0")}` : `INJECTION_${String(level + 1).padStart(2,"0")}`}</span><b>{mode === "quiz" ? "KNOWLEDGE CHECK" : codeLevels[level][0].toUpperCase()}</b></div>
        {mode === "quiz" ? <><h2>{questions[level][0]}</h2><div className="options">{questions[level].slice(1,5).map((item,i)=><button key={item} className={choice===i?"active":""} onClick={()=>setChoice(i)}><b>{String.fromCharCode(65+i)}</b>{item}<i>↗</i></button>)}</div><div className="submit"><span className="success">{message}</span><button className="primary" disabled={choice===null||message} onClick={submitQuiz}>LOCK ANSWER →</button></div></> : <>
          <p className="instruction">Replace the highlighted blank so the program produces the expected output.</p><div className="editor"><div><i/><i/><i/><span>challenge_{level+1}.c</span></div><pre>{codeLevels[level][1]}</pre></div><div className="expected"><span>EXPECTED OUTPUT</span><code>{codeLevels[level][2]}</code></div><label>INJECT MISSING CODE</label><div className="input"><b>&gt;</b><input autoFocus value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submitCode()} placeholder="type C code here..."/><button onClick={submitCode}>RUN CODE</button></div><div className="under"><button onClick={()=>setHint(!hint)}>+ {hint?"HIDE HINT":"REQUEST HINT"}</button><span className={message.startsWith("OUTPUT")?"success":"error"}>{message}</span></div>{hint&&<p className="hint">{"// HINT: "}{codeLevels[level][4]}</p>}
        </>}
      </article>
    </section>}
    <footer><span>© 2026 DSA DUNGEON</span><span>BUILT FOR C PROGRAMMERS</span></footer>
  </main>;
}
