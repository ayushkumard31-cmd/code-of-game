export const notesArticles = [
  {
    id: "theory-big-o",
    title: "Big-O Asymptotic Complexity Cheat Sheet",
    category: "DSA",
    readTime: "7 min read",
    summary: "Complete reference for Big-O time and space complexity across all fundamental data structures and sorting algorithms.",
    content: `
# Big-O Complexity Master Guide

Asymptotic notation allows us to express an algorithm's resource consumption (time or memory) as the input size $n$ scales toward infinity.

### Data Structure Operations Complexity

| Data Structure | Access | Search | Insertion | Deletion | Space (Worst) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Array** | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ | $O(n)$ |
| **Dynamic Array (ArrayList/Vector)** | $O(1)$ | $O(n)$ | $O(1)$ (Amortized) | $O(n)$ | $O(n)$ |
| **Singly Linked List** | $O(n)$ | $O(n)$ | $O(1)$ (at head) | $O(1)$ (at head) | $O(n)$ |
| **Stack (LIFO)** | $O(n)$ | $O(n)$ | $O(1)$ (Push) | $O(1)$ (Pop) | $O(n)$ |
| **Queue (FIFO)** | $O(n)$ | $O(n)$ | $O(1)$ (Enqueue) | $O(1)$ (Dequeue) | $O(n)$ |
| **Hash Table** | $N/A$ | $O(1)$ avg / $O(n)$ worst | $O(1)$ avg / $O(n)$ worst | $O(1)$ avg / $O(n)$ worst | $O(n)$ |
| **Binary Search Tree** | $O(\log n)$ avg / $O(n)$ worst | $O(\log n)$ avg / $O(n)$ worst | $O(\log n)$ avg / $O(n)$ worst | $O(\log n)$ avg / $O(n)$ worst | $O(n)$ |
| **AVL / Red-Black Tree** | $O(\log n)$ | $O(\log n)$ | $O(\log n)$ | $O(\log n)$ | $O(n)$ |

### Sorting Algorithms Reference

| Algorithm | Best Time | Average Time | Worst Time | Worst Space | Stable? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ (sorted input) | $O(\log n)$ | No |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | Yes |
| **Heap Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ | No |
| **Insertion Sort**| $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes |
| **Counting Sort** | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(k)$ | Yes |
`,
    codeSnippet: `// QuickSort Partitioning Function in C
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // pivot selection
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}`
  },
  {
    id: "theory-pointers-memory",
    title: "C & C++ Pointers, Stack vs Heap & Memory Segments",
    category: "C / C++",
    readTime: "9 min read",
    summary: "How operating systems structure a process's memory layout: Text, Data, BSS, Heap, and Stack segments.",
    content: `
# Memory Segments in a C/C++ Executable

When your compiled binary is loaded by the OS, it is assigned a virtual address space split into distinct regions:

1. **Text Segment (Code)**: Read-only section containing the compiled machine instructions.
2. **Initialized Data Segment (.data)**: Stores global and static variables initialized by the programmer.
3. **Uninitialized Data Segment (.bss)**: Stores uninitialized global/static variables; kernel zeroes them out.
4. **Heap**: Dynamic memory dynamically requested via \`malloc\` / \`new\`. Grows upward towards higher addresses.
5. **Stack**: Stores function call frames, parameters, and local variables. Grows downward toward lower addresses.

### Pointer vs Value Semantics
\`\`\`
int x = 42;
int *p = &x;     // p holds address of x (e.g. 0x7ffd10)
int **pp = &p;   // pp holds address of pointer p
\`\`\`
Dereferencing \`*p\` retrieves \`42\`. Dereferencing \`**pp\` first looks up \`p\`, then looks up \`x\`.
`,
    codeSnippet: `// Dynamic Allocation Safety Pattern
#include <stdlib.h>
#include <stdio.h>

void safeAllocation() {
    int *buffer = (int*)malloc(100 * sizeof(int));
    if (buffer == NULL) {
        perror("Allocation failed");
        return;
    }
    // Always pair malloc with free
    free(buffer);
    buffer = NULL; // Prevent dangling pointer
}`
  },
  {
    id: "theory-polyglot-comparison",
    title: "Language Matrix: C vs C++ vs Java vs Python",
    category: "Languages",
    readTime: "8 min read",
    summary: "Architectural comparison of execution models, compilation pipelines, memory management, and typing systems.",
    content: `
# Multi-Language Architecture Comparison

| Feature | C | C++ | Java | Python |
| :--- | :--- | :--- | :--- | :--- |
| **Typing** | Static, Weak | Static, Strong | Static, Strong | Dynamic, Strong |
| **Execution** | Native Machine Code | Native Machine Code | Bytecode on JVM (JIT) | Bytecode on CPython VM |
| **Memory Management** | Manual (\`malloc\`/\`free\`) | Manual + RAII Smart Pointers | Automatic Garbage Collector | Automatic Reference Counting + Cyclic GC |
| **Concurrency** | OS Threads (pthreads) | \`std::thread\`, atomics | Java Threads, Virtual Threads | GIL limits threads to single core for CPU tasks |
| **Primary Strength** | Raw speed, embedded systems | High-perf engines, games, STL | Enterprise servers, Android | Rapid scripting, Data Science, AI |

### Compilation Pipeline Comparison
- **C / C++**: Source \`->\` Preprocessor \`->\` Compiler \`->\` Assembler \`->\` Linker \`->\` Executable (.exe / ELF).
- **Java**: Source (.java) \`->\` \`javac\` \`->\` Bytecode (.class) \`->\` JVM JIT compiler executes hotspot native code.
- **Python**: Source (.py) \`->\` CPython parses to AST \`->\` Bytecode (.pyc) \`->\` Evaluation loop interprets opcodes.
`,
    codeSnippet: `// Example: Hello World across all 4 languages

// 1. C
// #include <stdio.h>
// int main() { printf("Hello World\\n"); return 0; }

// 2. C++
// #include <iostream>
// int main() { std::cout << "Hello World\\n"; return 0; }

// 3. Java
// class Main { public static void main(String[] args) { System.out.println("Hello World"); } }

// 4. Python
// print("Hello World")`
  },
  {
    id: "theory-system-design-basics",
    title: "System Design 101: Latency, Caching & CAP Theorem",
    category: "Advanced",
    readTime: "11 min read",
    summary: "The fundamental laws of building resilient, scalable, distributed backend architectures.",
    content: `
# System Design Fundamentals

### Latency Numbers Every Programmer Should Know
- L1 cache reference: **~0.5 ns**
- Branch mispredict: **~5 ns**
- L2 cache reference: **~7 ns**
- Main memory reference (RAM): **~100 ns**
- Read 1 MB sequentially from memory: **~3,000 ns**
- Send packet CA to Netherlands & back: **~150,000,000 ns (150 ms)**

### The CAP Theorem
In any asynchronous distributed network, you can only guarantee **two** of the following three properties simultaneously:
1. **Consistency (C)**: Every read receives the most recent write or an error.
2. **Availability (A)**: Every non-failing node returns a response, but it may not be the newest write.
3. **Partition Tolerance (P)**: The system continues to function despite network packet drops or node splits.

Since network partitions ($P$) are inevitable in physical infrastructure, systems must choose between **CP** (e.g. MongoDB, HBase) or **AP** (e.g. Cassandra, DynamoDB).
`,
    codeSnippet: `// Simple In-Memory LRU Node Structure in C++
struct Node {
    int key, value;
    Node *prev, *next;
    Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
};`
  }
];
