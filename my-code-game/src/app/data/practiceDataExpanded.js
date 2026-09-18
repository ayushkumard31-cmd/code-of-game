export const practiceModes = [
  { id: "mcq", label: "MCQ", icon: "🔘", desc: "Fast-paced algorithmic & syntax multiple choice questions" },
  { id: "output", label: "Output Based", icon: "🖥️", desc: "Predict exact console outputs and trace memory side-effects" },
  { id: "debug", label: "Debugging", icon: "🐛", desc: "Identify and patch elusive logic, pointer, and compile bugs" },
  { id: "coding", label: "Coding Problems", icon: "⚡", desc: "Solve algorithmic challenges with starter code and test runner" }
];

export const mcqQuestions = [
  {
    id: "mcq-1",
    topic: "Algorithms",
    question: "What is the worst-case time complexity of finding a specific element in an unsorted array of size n?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctIndex: 2,
    explanation: "In an unsorted array, the target element might be at the very last index or not present at all, requiring checking all n elements (Linear Search O(n)).",
    xp: 30
  },
  {
    id: "mcq-2",
    topic: "Data Structures",
    question: "Which of the following operations on a standard Doubly Linked List takes O(1) time, given a pointer to the node to be deleted?",
    options: ["Delete the given node", "Find the median element", "Binary search for a value", "Sort the list"],
    correctIndex: 0,
    explanation: "Because each node in a doubly linked list has pointers to both its predecessor and successor, unlinking it takes O(1) operations.",
    xp: 35
  },
  {
    id: "mcq-3",
    topic: "C Internals",
    question: "In C, what happens when an array name is passed as an argument to a function?",
    options: [
      "The entire array is cloned onto the call stack",
      "The array decays into a pointer to its first element",
      "A compiler syntax error is generated",
      "The array size is automatically appended to the argument list"
    ],
    correctIndex: 1,
    explanation: "In C, arrays decay into a pointer to their first element (&arr[0]) when passed into function arguments.",
    xp: 40
  },
  {
    id: "mcq-4",
    topic: "Operating Systems",
    question: "Which Coffman condition is eliminated when all processes must request all required resources at the same time before execution begins?",
    options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"],
    correctIndex: 1,
    explanation: "The 'Hold and Wait' condition states that processes holding allocated resources can wait for additional ones. Requiring all resources upfront eliminates Hold and Wait.",
    xp: 45
  },
  {
    id: "mcq-5",
    topic: "Trees & Graphs",
    question: "What is the maximum number of nodes at depth d (where root is at depth 0) in a strict binary tree?",
    options: ["2^d", "2^(d + 1) - 1", "d^2", "2 * d"],
    correctIndex: 0,
    explanation: "At depth 0: 2^0 = 1 node. At depth 1: 2^1 = 2 nodes. At depth d: 2^d nodes.",
    xp: 35
  }
];

export const outputBasedQuestions = [
  {
    id: "out-1",
    language: "C",
    title: "Pointer Arithmetic & Array Decay",
    code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    ptr += 2;
    printf("%d %d", *ptr, *(ptr - 1));
    return 0;
}`,
    expectedOutput: "30 20",
    explanation: "arr begins with ptr pointing to arr[0]=10. ptr += 2 moves the pointer to arr[2]=30. *(ptr - 1) accesses arr[1]=20.",
    hint: "Remember pointer increments shift by element count, not byte count.",
    xp: 50
  },
  {
    id: "out-2",
    language: "C",
    title: "Prefix vs Postfix Increment in Expressions",
    code: `#include <stdio.h>

int main() {
    int a = 5;
    int b = ++a * 2;
    int c = a++ * 2;
    printf("%d %d %d", a, b, c);
    return 0;
}`,
    expectedOutput: "7 12 12",
    explanation: "1) ++a increments a from 5 to 6 first, so b = 6 * 2 = 12. 2) a++ uses current value 6 for c = 6 * 2 = 12, then a becomes 7. Final: 7 12 12.",
    hint: "Prefix (++x) updates before use; postfix (x++) updates after the evaluation.",
    xp: 50
  },
  {
    id: "out-3",
    language: "Python",
    title: "Mutable Default Argument Quirk",
    code: `def append_val(x, lst=[]):
    lst.append(x)
    return lst

print(append_val(1))
print(append_val(2))`,
    expectedOutput: "[1]\n[1, 2]",
    explanation: "In Python, default arguments are evaluated once at function definition time, not on every function call. The same list instance is reused.",
    hint: "In Python, default argument objects persist across invocations!",
    xp: 50
  }
];

export const debuggingQuestions = [
  {
    id: "dbg-1",
    title: "Off-by-One Buffer Overflow in Array Traversal",
    language: "C",
    buggyCode: `#include <stdio.h>

void printArray(int arr[], int size) {
    // BUG: Index out of bounds
    for (int i = 0; i <= size; i++) {
        printf("%d ", arr[i]);
    }
}`,
    fixedCode: `#include <stdio.h>

void printArray(int arr[], int size) {
    // FIXED: i < size
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}`,
    issueDescription: "The loop condition i <= size causes an off-by-one read past the allocated array bounds, accessing garbage memory or causing a segmentation fault.",
    fixExplanation: "Change i <= size to i < size so that the loop stops at index size - 1.",
    xp: 60
  },
  {
    id: "dbg-2",
    title: "Dangling Pointer after Free",
    language: "C",
    buggyCode: `#include <stdlib.h>
#include <stdio.h>

int* createNumber() {
    int *val = (int*)malloc(sizeof(int));
    *val = 42;
    free(val); // BUG: Freed before returning!
    return val;
}`,
    fixedCode: `#include <stdlib.h>
#include <stdio.h>

int* createNumber() {
    int *val = (int*)malloc(sizeof(int));
    *val = 42;
    // FIXED: Do not free here; caller must free when done
    return val;
}`,
    issueDescription: "free(val) releases the memory block back to the heap allocator. Returning a freed address creates a dangling pointer.",
    fixExplanation: "Allow the caller to manage the lifecycle of the allocated pointer and free it after usage.",
    xp: 60
  }
];

export const codingProblems = [
  {
    id: "code-two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays & Hash Tables",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return the indices of the two numbers such that they add up to \`target\`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0, 1]", explanation: "nums[0] + nums[1] == 9, so return [0, 1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1, 2]", explanation: "nums[1] + nums[2] == 6, so return [1, 2]" }
    ],
    starterCode: `// Language: JavaScript / C / Python compatible pseudo-test
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] }
    ],
    xp: 80
  },
  {
    id: "code-valid-parentheses",
    title: "Valid Parentheses (Stack)",
    difficulty: "Easy",
    category: "Stacks & Strings",
    description: `Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
Open brackets must be closed by the same type of brackets in the correct order.`,
    examples: [
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    starterCode: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
}`,
    testCases: [
      { input: { s: "()[]{}" }, expected: true },
      { input: { s: "(]" }, expected: false },
      { input: { s: "([{}])" }, expected: true }
    ],
    xp: 80
  },
  {
    id: "code-max-subarray",
    title: "Maximum Subarray (Kadane's Algorithm)",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.`,
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" }
    ],
    starterCode: `function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
    testCases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expected: 6 },
      { input: { nums: [1] }, expected: 1 },
      { input: { nums: [5, 4, -1, 7, 8] }, expected: 23 }
    ],
    xp: 100
  }
];
