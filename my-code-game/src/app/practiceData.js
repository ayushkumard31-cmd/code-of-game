export const subjectivePracticeQuestions = [
  {
    id: "prac-1",
    topic: "Arrays & Memory",
    title: "Dynamic Array Resizing & Amortized Complexity",
    difficulty: "Medium",
    prompt: "Explain how dynamic arrays (e.g. std::vector in C++ or dynamic realloc in C) achieve O(1) amortized insertion time even though copying an array takes O(n). What would happen if we increased the array capacity by a fixed constant (e.g. +10) instead of doubling (*2)?",
    hint: "Think about how often expensive resizes occur when doubling vs adding a fixed constant.",
    keyConcepts: [
      "Doubling capacity geometrically decreases the frequency of resizes.",
      "Inserting N elements triggers copies: 1 + 2 + 4 + 8 + ... + N ≈ 2N total operations.",
      "Total work 2N / N elements = O(1) amortized time per push.",
      "Adding a fixed constant (+K) leads to N/K resizes, totaling O(N²) overall work = O(N) per insertion."
    ],
    modelAnswer: `1. Geometric Growth Strategy:
When the dynamic array is full, its capacity is multiplied by a factor (usually 2x or 1.5x). A new block of memory is allocated and existing elements are copied.

2. Amortized O(1) Proof:
For N insertions, reallocations occur at sizes 1, 2, 4, 8, ..., N.
The total number of element copies is 1 + 2 + 4 + 8 + ... + N/2 = N - 1.
Adding the N direct insertions gives (2N - 1) total operations.
Divided by N elements, the average cost per insertion is O(1).

3. Pitfall of Constant Increment (+K):
If capacity grows by +K each time, inserting N elements requires N/K resizes.
The copy cost becomes K + 2K + 3K + ... + (N/K)*K ≈ K * (N/K)² / 2 = O(N² / K).
The amortized time per insertion degrades from O(1) to O(N).`
  },
  {
    id: "prac-2",
    topic: "Linked Lists",
    title: "Floyd's Cycle Detection Algorithm (Tortoise & Hare)",
    difficulty: "Medium",
    prompt: "How does Floyd's Tortoise and Hare algorithm detect a cycle in a singly linked list in O(N) time and O(1) space? Why is the fast pointer guaranteed not to skip over the slow pointer inside the cycle?",
    hint: "Consider the relative speed between the two pointers once both have entered the cycle.",
    keyConcepts: [
      "Slow pointer advances 1 step (s = s->next); Fast pointer advances 2 steps (f = f->next->next).",
      "Relative speed: with each iteration, the distance between Fast and Slow decreases by exactly 1 node.",
      "Since distance decreases by 1 step every turn, the distance must become 0 without jumping over.",
      "Runs in O(N) time and O(1) auxiliary space without modifying node structure or using hash tables."
    ],
    modelAnswer: `1. Algorithm Mechanics:
Initialize two pointers, slow and fast, at head.
In each step:
  slow = slow->next;
  fast = fast->next ? fast->next->next : NULL;
If fast reaches NULL, there is no cycle. If slow == fast, a cycle exists.

2. Why Fast cannot skip Slow:
Once both pointers are inside a cycle of length C:
Let the distance from fast to slow (moving forward along the cycle) be 'd' nodes.
In the next step, slow moves +1 and fast moves +2.
The new distance becomes (d - 2 + 1) = d - 1.
Because the distance reduces by exactly 1 node per iteration, 'd' counts down: d, d-1, d-2, ..., 1, 0.
It is impossible for fast to leap past slow without first landing on the exact same node (d = 0).

3. Complexity:
Time: O(N) where N is total node count.
Space: O(1) as only two pointer variables are used.`
  },
  {
    id: "prac-3",
    topic: "Stacks & Queues",
    title: "Implementing Undo/Redo & Monotonic Stack Use Cases",
    difficulty: "Hard",
    prompt: "1) How do you design an Undo/Redo mechanism using two stacks?\n2) What is a Monotonic Stack and in what scenarios (e.g. Next Greater Element, Daily Temperatures) does it reduce time complexity from O(n²) to O(n)?",
    hint: "Think about what happens to the Redo stack when a brand new action is performed.",
    keyConcepts: [
      "Undo Stack stores performed actions; Redo Stack stores reverted actions.",
      "Performing a new action pushes to Undo and clears the Redo stack.",
      "Monotonic Stack maintains elements in strictly increasing or decreasing order.",
      "Each element is pushed and popped at most once, guaranteeing O(n) total time."
    ],
    modelAnswer: `1. Two-Stack Undo/Redo Architecture:
- Execute(action): Apply action, push action state to UndoStack, clear RedoStack.
- Undo(): Pop top from UndoStack, revert state, push state to RedoStack.
- Redo(): Pop top from RedoStack, re-apply state, push state to UndoStack.
Clearing the Redo stack upon new execution is necessary because performing a new branch invalidates forward history.

2. Monotonic Stack Mechanics:
A monotonic stack keeps elements monotonically increasing or decreasing.
For 'Next Greater Element':
- Iterate through the array. While current element > stack.top(), pop stack.top() — the current element is its next greater element!
- Push current element onto stack.
Even though there is a nested while loop, each index enters and leaves the stack at most once, yielding linear O(N) time complexity instead of brute-force O(N²).`
  },
  {
    id: "prac-4",
    topic: "Trees & BST",
    title: "BST Worst-Case Degeneration & Self-Balancing Trees",
    difficulty: "Medium",
    prompt: "When does a standard Binary Search Tree degenerate into O(n) search time? How do self-balancing trees (AVL / Red-Black) maintain O(log n) height and search complexity?",
    hint: "Consider inserting already sorted numbers [1, 2, 3, 4, 5] into an unbalancing BST.",
    keyConcepts: [
      "Inserting sorted or reverse-sorted data creates a skewed tree resembling a linked list of height N.",
      "Search time in a skewed BST degrades from O(log n) to O(n).",
      "AVL trees maintain strict balance factor (|left_height - right_height| <= 1).",
      "Tree rotations (Left, Right, Left-Right, Right-Left) restore height in O(1) time per insertion/deletion."
    ],
    modelAnswer: `1. Degeneration to Linked List:
If keys are inserted in strictly ascending or descending order (e.g., 10, 20, 30, 40, 50), every new node is inserted as a right child.
The tree height becomes H = N.
Search, insertion, and deletion degrade from ideal O(log N) to worst-case O(N).

2. Self-Balancing Mechanism (AVL & Red-Black Trees):
- AVL Trees track the balance factor: BF = height(left) - height(right).
- If |BF| > 1 after an insert or delete, tree rotations (Single Left/Right or Double Left-Right/Right-Left) are performed.
- Rotations rearrange parent-child pointers in O(1) time without violating BST order (Left < Root < Right).
- By ensuring H <= 1.44 * log2(N), all lookup, insertion, and deletion operations remain guaranteed O(log N).`
  },
  {
    id: "prac-5",
    topic: "Hash Tables",
    title: "Hash Collisions: Chaining vs Open Addressing & Load Factors",
    difficulty: "Medium",
    prompt: "Compare Separate Chaining vs Open Addressing (Linear Probing) for hash table collision resolution. What is the 'load factor' (alpha = n/m), and why is rehashing triggered when alpha exceeds 0.7 - 0.75?",
    hint: "Think about cache locality and primary clustering in linear probing.",
    keyConcepts: [
      "Separate Chaining uses linked lists/buckets at each index; degrades gracefully under high load.",
      "Open Addressing finds alternative slots in the array directly (better cache locality, no pointer overhead).",
      "Linear Probing suffers from Primary Clustering where contiguous blocks of occupied buckets grow.",
      "Rehashing (allocating 2x table and re-inserting) keeps search time O(1) on average."
    ],
    modelAnswer: `1. Separate Chaining:
- Each hash table bucket contains a pointer to a linked list (or BST) of entries with matching hash codes.
- Pros: Simple deletion, handles alpha > 1 without failing.
- Cons: Extra pointer memory overhead, worse CPU cache locality.

2. Open Addressing (e.g. Linear Probing):
- All items live directly in the main array. On collision at index i, probe i+1, i+2, ...
- Pros: Excellent cache locality and zero pointer overhead.
- Cons: Suffers from Primary Clustering (runs of filled slots merge, causing long probe sequences). Deletions require tombstone markers.

3. Load Factor (alpha = n / m):
- Ratio of stored elements (n) to total bucket capacity (m).
- When alpha > 0.75 in open addressing, collisions spike exponentially and probe length increases, degrading lookups towards O(n).
- Rehashing allocates a new table of size ~2m and re-hashes all keys to restore O(1) average performance.`
  },
  {
    id: "prac-6",
    topic: "Graphs & Searching",
    title: "BFS vs DFS: Data Structure Choice & Shortest Path Properties",
    difficulty: "Hard",
    prompt: "Why does Breadth-First Search (BFS) guarantee the shortest path in unweighted graphs while Depth-First Search (DFS) does not? Why does BFS require a Queue while DFS uses a Stack/Recursion?",
    hint: "Think about the order of exploration: level-by-level concentric circles vs branch-by-branch plunge.",
    keyConcepts: [
      "BFS visits nodes in order of increasing distance (0, 1, 2, ... hops) from the source.",
      "Queue enforces FIFO order, ensuring all nodes at depth k are processed before depth k+1.",
      "DFS plunges as deep as possible along a single branch before backtracking, easily finding long paths first.",
      "Both algorithms run in O(V + E) time with adjacency lists."
    ],
    modelAnswer: `1. Shortest Path Property in Unweighted Graphs:
- BFS explores nodes in concentric layers: first all nodes at distance 1, then all nodes at distance 2, and so on.
- The first time BFS encounters target vertex T, it is guaranteed to be reached via the minimum possible number of edges.
- DFS explores deeply along one path until reaching a dead end. It may reach T after taking 20 edges even if a 1-edge direct shortcut existed.

2. Data Structure Role:
- BFS (FIFO Queue): Adding neighbors to the back of the queue ensures layer 'k' is completely exhausted before layer 'k+1' starts.
- DFS (LIFO Stack / Call Stack): Pushing neighbors to the stack causes the most recently discovered vertex to be investigated next, producing the plunge-and-backtrack behavior.

3. Complexity:
Time: O(V + E) using adjacency list representation.
Space: O(V) for visited set and queue/stack state.`
  },
  {
    id: "prac-7",
    topic: "Sorting & Complexity",
    title: "QuickSort vs MergeSort Trade-offs & Worst Case Pitfalls",
    difficulty: "Medium",
    prompt: "Why is MergeSort guaranteed O(n log n) while standard QuickSort can degrade to O(n²)? Why is QuickSort often preferred in practice for internal sorting despite its worst-case risk?",
    hint: "Consider in-place partitioning, cache locality, and auxiliary memory allocation.",
    keyConcepts: [
      "MergeSort always divides array into equal halves (T(n) = 2T(n/2) + O(n) = O(n log n)).",
      "MergeSort requires O(n) auxiliary memory for merging buffers.",
      "QuickSort with worst-case pivot (e.g. smallest element each time) produces subproblems of size (n-1) and 0 -> O(n²).",
      "Randomized pivot / Median-of-three prevents O(n²). QuickSort has superior cache locality and O(1) auxiliary space."
    ],
    modelAnswer: `1. Why QuickSort can degrade to O(n²):
If the chosen pivot is consistently the maximum or minimum element (e.g., picking the last element in an already sorted array), partition sizes are 0 and n-1.
Recurrence becomes T(n) = T(n-1) + O(n) = O(n²).
MergeSort always splits exactly in half: T(n) = 2T(n/2) + O(n) = O(n log n) in all cases (best, average, worst).

2. Why QuickSort is preferred in practice:
- In-place sorting: QuickSort requires O(log n) stack space and 0 extra buffer memory, whereas MergeSort requires O(n) temporary buffer allocation.
- Cache Locality: QuickSort partitions sequentially in contiguous memory blocks, resulting in fewer CPU cache misses.
- Mitigations: Using Randomized Pivoting, Median-of-Three, or IntroSort (switching to HeapSort if recursion depth exceeds 2*log n) eliminates the O(n²) risk completely.`
  },
  {
    id: "prac-8",
    topic: "System & Architecture",
    title: "Designing an O(1) LRU (Least Recently Used) Cache",
    difficulty: "Hard",
    prompt: "How do you design a Least Recently Used (LRU) Cache where both get(key) and put(key, value) operations execute in O(1) time complexity? Explain why neither a Hash Map alone nor a Doubly Linked List alone is sufficient.",
    hint: "One data structure provides O(1) key lookup, while the other allows O(1) node detachment and insertion.",
    keyConcepts: [
      "Hash Map alone cannot maintain order of recency in O(1) during arbitrary middle deletions.",
      "Doubly Linked List alone requires O(n) linear search to find a key by value.",
      "Combining Hash Map (Key -> Node pointer) + Doubly Linked List achieves O(1) get and put.",
      "Recent access moves node to head; eviction removes node from tail in O(1)."
    ],
    modelAnswer: `1. Why single structures fail:
- Array / Vector: O(1) index access, but removing an item and shifting elements takes O(N).
- Doubly Linked List alone: O(1) insertion/deletion once the pointer is known, but finding the node requires O(N) scan.
- Hash Map alone: O(1) key lookup, but has no inherent ordering to track which key was accessed least recently.

2. The Combined O(1) Architecture:
- Doubly Linked List (DLL): Head represents Most Recently Used (MRU); Tail represents Least Recently Used (LRU).
- Hash Map: Maps key -> Doubly Linked List Node*.

3. Operations:
- get(key):
  Look up node in Hash Map (O(1)). If missing, return -1.
  Detach node from current DLL position and prepend to Head (O(1)). Return node->value.
- put(key, value):
  If key exists, update value and move node to Head.
  If key is new:
    If capacity is full, remove Tail node from DLL and erase its key from Hash Map (O(1)).
    Create new node, insert at Head of DLL, and add to Hash Map (O(1)).`
  }
];
