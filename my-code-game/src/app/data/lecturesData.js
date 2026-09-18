export const videoLectures = [
  {
    id: "lec-1",
    title: "Pointer Arithmetic & Memory Layout in C",
    instructor: "Prof. Alan Vance",
    topic: "C / C++",
    duration: "24:18",
    level: "Intermediate",
    xpReward: 60,
    thumbnailIcon: "⚡",
    embedUrl: "https://www.youtube-nocookie.com/embed/zuegQmMdy8M",
    summary: "Deep dive into how pointers point to raw memory addresses, how pointer arithmetic changes based on sizeof(T), and how pointer decays work in arrays.",
    chapters: [
      { time: "00:00", title: "Introduction & Virtual Address Space" },
      { time: "05:12", title: "Address-of (&) and Dereference (*) operators" },
      { time: "11:45", title: "Pointer Arithmetic step sizing: ptr + 1" },
      { time: "18:20", title: "Void pointers and type casting dangers" }
    ],
    keyTakeaways: [
      "ptr + 1 advances the pointer by sizeof(*ptr) bytes, not 1 byte.",
      "Array variables decay into pointers when passed to functions.",
      "Accessing out-of-bounds memory causes undefined behavior or segfaults."
    ],
    codeSnippet: `#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    int *p = arr; // points to &arr[0]
    
    printf("Value: %d\\n", *p);       // 10
    printf("Next:  %d\\n", *(p + 1)); // 20 (advances 4 bytes)
    return 0;
}`
  },
  {
    id: "lec-2",
    title: "Mastering Big-O, Big-Omega & Time Complexities",
    instructor: "Elena Rostova, Principal Engineer",
    topic: "DSA",
    duration: "31:40",
    level: "Beginner",
    xpReward: 70,
    thumbnailIcon: "⏱️",
    embedUrl: "https://www.youtube-nocookie.com/embed/D6xkbGLQesk",
    summary: "A rigorous yet intuitive breakdown of asymptotic complexity notation, counting steps, dropping constants, and mastering nested loops.",
    chapters: [
      { time: "00:00", title: "Why benchmarks lie & Big-O wins" },
      { time: "06:40", title: "O(1), O(log n), O(n), O(n log n), O(n^2)" },
      { time: "16:20", title: "Calculating nested loops with dependent variables" },
      { time: "24:10", title: "Space complexity & Call stack depth" }
    ],
    keyTakeaways: [
      "Big-O characterizes the upper bound growth rate as input n grows arbitrarily large.",
      "Constants and lower-order terms are dropped because high-order powers dominate.",
      "Recursive calls consume O(depth) auxiliary stack space."
    ],
    codeSnippet: `// Example: O(log n) Binary Search
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // avoids overflow
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },
  {
    id: "lec-3",
    title: "Graph Traversal Masterclass: BFS vs DFS Intuition",
    instructor: "David Chen, Algorithm Specialist",
    topic: "DSA",
    duration: "28:55",
    level: "Advanced",
    xpReward: 80,
    thumbnailIcon: "🕸️",
    embedUrl: "https://www.youtube-nocookie.com/embed/pcKY4hjDrxk",
    summary: "When to use BFS (Queue / Shortest Path in unweighted graphs) vs DFS (Stack / Recursion / Cycle detection / Topological ordering).",
    chapters: [
      { time: "00:00", title: "Graph representation: Adjacency List vs Matrix" },
      { time: "07:30", title: "Breadth-First Search step-by-step with Queue" },
      { time: "15:40", title: "Depth-First Search recursive exploration" },
      { time: "22:15", title: "Cycle detection in Directed & Undirected graphs" }
    ],
    keyTakeaways: [
      "BFS visits level-by-level using a FIFO queue; optimal for shortest path on unweighted edges.",
      "DFS dives deep using LIFO stack; ideal for topological sort, connected components, and maze traversal.",
      "Always track visited nodes to avoid infinite loops in cyclic graphs."
    ],
    codeSnippet: `// BFS using Queue
#include <queue>
#include <vector>

void bfs(int start, const std::vector<std::vector<int>>& adj) {
    std::vector<bool> visited(adj.size(), false);
    std::queue<int> q;
    
    q.push(start);
    visited[start] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`
  },
  {
    id: "lec-4",
    title: "Concurrency, Deadlocks & Thread Synchronization",
    instructor: "Dr. Marcus Reed",
    topic: "Advanced Topics",
    duration: "35:10",
    level: "Advanced",
    xpReward: 90,
    thumbnailIcon: "⚡",
    embedUrl: "https://www.youtube-nocookie.com/embed/7ENFeb-J75k",
    summary: "Understand the four Coffman conditions that trigger deadlocks, compare Mutex vs Binary Semaphore, and build a lock-free ring buffer.",
    chapters: [
      { time: "00:00", title: "Processes vs Threads & Shared Address Space" },
      { time: "08:15", title: "Race conditions & Critical sections" },
      { time: "18:30", title: "Mutex, Semaphore, and Condition Variables" },
      { time: "27:50", title: "Preventing Deadlocks with strict Lock Ordering" }
    ],
    keyTakeaways: [
      "A race condition occurs when concurrent threads access shared data without synchronization.",
      "Enforcing a global lock acquisition hierarchy prevents circular-wait deadlocks.",
      "Atomic CPU instructions (like compare-and-swap CAS) power lock-free algorithms."
    ],
    codeSnippet: `// Thread-Safe Mutex Guard in C++
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;
int counter = 0;

void increment() {
    std::lock_guard<std::mutex> lock(mtx); // automatically unlocks on scope exit
    counter++;
}`
  },
  {
    id: "lec-5",
    title: "System Design Essentials: Caching & Load Balancing",
    instructor: "Sarah Jenkins, Ex-FAANG Architect",
    topic: "System Design",
    duration: "40:20",
    level: "Advanced",
    xpReward: 100,
    thumbnailIcon: "🏛️",
    embedUrl: "https://www.youtube-nocookie.com/embed/bUHFg8CZFws",
    summary: "How modern high-throughput distributed systems handle millions of requests per second using reverse proxies, consistent hashing, and LRU caches.",
    chapters: [
      { time: "00:00", title: "Vertical vs Horizontal Scaling" },
      { time: "09:45", title: "Reverse Proxy & Load Balancing Algorithms" },
      { time: "20:30", title: "Consistent Hashing Ring" },
      { time: "31:10", title: "Cache Invalidation: Write-Through vs Write-Back" }
    ],
    keyTakeaways: [
      "Consistent hashing minimizes cache redistribution when server nodes are added or removed.",
      "Write-through guarantees data consistency; write-back provides lowest write latency.",
      "Always design for single points of failure (SPOF) with redundancy."
    ],
    codeSnippet: `// LRU Cache conceptual design
// Hash Map for O(1) key lookups -> Points to Doubly Linked List Node
// Doubly Linked List for O(1) eviction and move-to-front`
  }
];
