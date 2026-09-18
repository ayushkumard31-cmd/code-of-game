export const learningPathTracks = [
  {
    id: "basics",
    title: "Programming Basics",
    icon: "🌱",
    tagline: "Core building blocks of computational thinking and program execution.",
    color: "#a9ff43",
    levels: [
      {
        id: "pb-1",
        title: "Variables, Primitive Types & Memory",
        level: "Level 1",
        desc: "Understand stack allocation, bits, bytes, signed vs unsigned representations, and variable lifetimes.",
        duration: "45 mins",
        xp: 60,
        concepts: ["Integer bit widths", "IEEE 754 Floating point", "Type promotion & casting", "Stack memory allocation"]
      },
      {
        id: "pb-2",
        title: "Control Flow & Logic Branching",
        level: "Level 2",
        desc: "Master if-else conditions, short-circuit boolean evaluation, switch statement jump tables.",
        duration: "50 mins",
        xp: 70,
        concepts: ["Branch prediction", "Short-circuit evaluation", "Fallthrough semantics", "Ternary operators"]
      },
      {
        id: "pb-3",
        title: "Loops, Iteration & Invariants",
        level: "Level 3",
        desc: "For, while, and do-while execution models, break/continue nuances, off-by-one errors, and termination proofs.",
        duration: "60 mins",
        xp: 80,
        concepts: ["Loop invariants", "Nested loop complexity", "Break vs Continue", "Infinite loop prevention"]
      },
      {
        id: "pb-4",
        title: "Functions, Call Stack & Scope",
        level: "Level 4",
        desc: "Activation records, parameter passing (by-value vs by-reference), stack frames, and recursion basics.",
        duration: "65 mins",
        xp: 90,
        concepts: ["Stack frames", "Pass-by-value vs Reference", "Function pointers", "Base cases in recursion"]
      },
      {
        id: "pb-5",
        title: "Arrays & Contiguous Memory",
        level: "Level 5",
        desc: "Array indexing arithmetic, row-major vs column-major orders, spatial locality, and buffer bounds.",
        duration: "75 mins",
        xp: 100,
        concepts: ["Pointer arithmetic", "Cache lines & spatial locality", "Multidimensional memory layouts", "Bounds checking"]
      }
    ]
  },
  {
    id: "languages",
    title: "C / C++ / Java / Python",
    icon: "⚡",
    tagline: "Language idioms, execution runtimes, type systems, and compiler internals.",
    color: "#46d8e7",
    levels: [
      {
        id: "lang-c",
        title: "C: Pointers, Structs & Manual Memory",
        level: "C Core",
        desc: "Direct hardware manipulation, pointer arithmetic, malloc/free heap lifecycle, header files, and segment memory.",
        duration: "90 mins",
        xp: 120,
        concepts: ["Double pointers (**ptr)", "malloc/free & memory leaks", "Struct padding & alignment", "Header guards & compilation pipeline"]
      },
      {
        id: "lang-cpp",
        title: "C++: OOP, STL, References & RAII",
        level: "C++ Core",
        desc: "Classes, virtual method tables (vtable), templates, RAII smart pointers (unique_ptr, shared_ptr), and vector/map STL.",
        duration: "110 mins",
        xp: 130,
        concepts: ["RAII & Smart Pointers", "Virtual destructor & vtable", "STL Containers & Iterators", "Move semantics (rvalue)"]
      },
      {
        id: "lang-java",
        title: "Java: JVM Architecture, Collections & Concurrency",
        level: "Java Core",
        desc: "Bytecode compilation, JVM memory model (Eden, Survivor, Metaspace), garbage collection algorithms, and Collections Framework.",
        duration: "100 mins",
        xp: 120,
        concepts: ["JVM Garbage Collection", "Generics & type erasure", "HashMap collision & Red-Black trees", "Thread synchronization"]
      },
      {
        id: "lang-python",
        title: "Python: Dynamic Typing, Data Model & GIL",
        level: "Python Core",
        desc: "Dunder magic methods, iterators/generators, decorators, Global Interpreter Lock (GIL), and reference-counting GC.",
        duration: "85 mins",
        xp: 110,
        concepts: ["Global Interpreter Lock (GIL)", "Generators & Yield", "Decorators & Closures", "Dict hash-table implementation"]
      }
    ]
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms (DSA)",
    icon: "🗺️",
    tagline: "From Big-O analysis to advanced graph traversal and dynamic programming.",
    color: "#ffb627",
    levels: [
      {
        id: "dsa-1",
        title: "Asymptotic Complexity & Big-O",
        level: "Module 1",
        desc: "Time and Space complexity, Best/Average/Worst cases, Big-O, Big-Omega, Big-Theta, and Master Theorem.",
        duration: "60 mins",
        xp: 80,
        concepts: ["Time vs Space trade-off", "Master Theorem", "Amortized Analysis (e.g. ArrayList growth)", "Recursive recurrence relations"]
      },
      {
        id: "dsa-2",
        title: "Linked Lists, Stacks & Queues",
        level: "Module 2",
        desc: "Singly/Doubly/Circular linked lists, LIFO monotonic stacks, FIFO circular ring buffers, and deque implementations.",
        duration: "80 mins",
        xp: 100,
        concepts: ["Fast & Slow Pointers (Floyd's Cycle)", "Monotonic Stack (Next Greater Element)", "Circular Queue using array", "Queue using 2 Stacks"]
      },
      {
        id: "dsa-3",
        title: "Trees, BST & Heaps (Priority Queues)",
        level: "Module 3",
        desc: "Binary Trees, DFS/BFS traversals, Binary Search Trees, AVL balance factors, and Binary Min/Max Heaps.",
        duration: "100 mins",
        xp: 130,
        concepts: ["Tree Traversals (In/Pre/Post/Level-order)", "LCA (Lowest Common Ancestor)", "Heapify & Priority Queue", "Self-balancing AVL rotation"]
      },
      {
        id: "dsa-4",
        title: "Graphs: BFS, DFS & Shortest Path",
        level: "Module 4",
        desc: "Adjacency matrix vs list, BFS/DFS cycles, Dijkstra's algorithm, Bellman-Ford, and Topological Sort.",
        duration: "120 mins",
        xp: 150,
        concepts: ["Dijkstra with Min-Heap", "Kahn's Topological Sort", "Disjoint Set Union (DSU / Union-Find)", "Cycle detection in directed graphs"]
      },
      {
        id: "dsa-5",
        title: "Dynamic Programming & Greedy",
        level: "Module 5",
        desc: "Memoization vs Tabulation, optimal substructure, 1D/2D states, 0/1 Knapsack, Longest Common Subsequence, and Interval Scheduling.",
        duration: "140 mins",
        xp: 180,
        concepts: ["State formulation & transition", "0/1 Knapsack & Unbounded", "LCS & Edit Distance", "Interval Scheduling (Greedy)"]
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Topics & System Design",
    icon: "🔮",
    tagline: "High-performance systems, multithreading, bitwise mastery, and low-level engineering.",
    color: "#f052b5",
    levels: [
      {
        id: "adv-1",
        title: "Bit Manipulation & Low-Level Tricks",
        level: "Advanced 1",
        desc: "Bitwise AND, OR, XOR, shifts, two's complement, Brian Kernighan's algorithm, bitmasks, and submask enumeration.",
        duration: "70 mins",
        xp: 110,
        concepts: ["Brian Kernighan's Popcount", "XOR Swap & Single Number tricks", "Bitmask Dynamic Programming", "Power of Two verification"]
      },
      {
        id: "adv-2",
        title: "Concurrency, Threads & Synchronization",
        level: "Advanced 2",
        desc: "Processes vs Threads, race conditions, mutex locks, semaphores, deadlock conditions, and thread-safe data structures.",
        duration: "95 mins",
        xp: 140,
        concepts: ["Deadlock Coffman Conditions", "Mutex vs Binary Semaphore", "Atomic operations (CAS)", "Producer-Consumer Queue"]
      },
      {
        id: "adv-3",
        title: "Operating Systems & Virtual Memory",
        level: "Advanced 3",
        desc: "Virtual addresses, page tables, TLB cache hits, context switching overhead, system calls, and file descriptors.",
        duration: "110 mins",
        xp: 150,
        concepts: ["Page Faults & Demand Paging", "TLB (Translation Lookaside Buffer)", "Kernel vs User space", "System Call trap overhead"]
      },
      {
        id: "adv-4",
        title: "System Design: Scalability & Caching",
        level: "Advanced 4",
        desc: "Client-server architecture, Load balancers, Caching strategies (LRU/LFU, Write-Through/Back), Sharding, and CAP Theorem.",
        duration: "130 mins",
        xp: 180,
        concepts: ["LRU Cache implementation", "Consistent Hashing ring", "CAP Theorem trade-offs", "Database Indexes (B+ Trees)"]
      }
    ]
  }
];
