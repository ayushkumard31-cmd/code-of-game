export const interviewCategories = [
  { id: "all", label: "All Questions" },
  { id: "easy", label: "Easy", color: "#a9ff43" },
  { id: "medium", label: "Medium", color: "#ffb627" },
  { id: "hard", label: "Hard", color: "#ff5340" },
  { id: "dsa", label: "DSA Problems" },
  { id: "company", label: "Company-Style Questions" }
];

export const interviewQuestions = [
  {
    id: "int-1",
    title: "Merge Two Sorted Linked Lists",
    difficulty: "easy",
    category: "dsa",
    company: "Amazon, Microsoft",
    frequency: "95%",
    acceptance: "63%",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list by splicing together the nodes of the first two lists.",
    timeComplexity: "O(n + m)",
    spaceComplexity: "O(1) auxiliary",
    hint: "Use a dummy head node to simplify edge cases when selecting the smaller head.",
    rubric: [
      "Handles null/empty list1 or list2 immediately",
      "Maintains monotonic sorted order via comparison pointer",
      "Appends leftover nodes in O(1) time without redundant loops"
    ],
    starterCode: `struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode *tail = &dummy;
    
    while (list1 && list2) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    tail->next = list1 ? list1 : list2;
    return dummy.next;
}`
  },
  {
    id: "int-2",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "dsa",
    company: "Google, Meta, Amazon",
    frequency: "98%",
    acceptance: "35%",
    description: "Given a string s, find the length of the longest substring without duplicate characters using the Sliding Window pattern.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m, n)) where m is charset size",
    hint: "Keep a hash map of characters to their most recent index to skip the left window pointer forward immediately.",
    rubric: [
      "Correctly expands right pointer and updates maximum window length",
      "Correctly jumps left pointer to max(left, lastSeenIndex + 1)",
      "Handles single character and empty string edge cases"
    ],
    starterCode: `int lengthOfLongestSubstring(char* s) {
    int lastSeen[256];
    for (int i = 0; i < 256; i++) lastSeen[i] = -1;
    
    int maxLen = 0, left = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        unsigned char c = s[right];
        if (lastSeen[c] >= left) {
            left = lastSeen[c] + 1;
        }
        lastSeen[c] = right;
        int curLen = right - left + 1;
        if (curLen > maxLen) maxLen = curLen;
    }
    return maxLen;
}`
  },
  {
    id: "int-3",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "company",
    company: "Google, Uber, Goldman Sachs",
    frequency: "94%",
    acceptance: "60%",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) with Two Pointers",
    hint: "Water trapped on any column is determined by min(max_left, max_right) - height[i]. Use two pointers moving inward from both ends.",
    rubric: [
      "Identifies that the smaller boundary determines the water level",
      "Implements O(1) space two-pointer inward approach",
      "Correctly accumulates water when height < boundary"
    ],
    starterCode: `int trap(int* height, int heightSize) {
    if (heightSize <= 2) return 0;
    int left = 0, right = heightSize - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`
  },
  {
    id: "int-4",
    title: "LRU Cache Design (Company-Style System)",
    difficulty: "hard",
    category: "company",
    company: "Amazon, Microsoft, Apple",
    frequency: "96%",
    acceptance: "42%",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) get and put operations.",
    timeComplexity: "O(1) for both get and put",
    spaceComplexity: "O(capacity)",
    hint: "Combine a Hash Map (for O(1) key lookup) with a Doubly Linked List (for O(1) node detachment and head insertion).",
    rubric: [
      "Utilizes dummy head and tail nodes to eliminate edge-case pointer null checks",
      "get() moves accessed node to MRU head",
      "put() evicts LRU tail node when capacity limit is breached"
    ],
    starterCode: `// Architecture:
// HashMap<Key, Node*> + DoublyLinkedList (head <-> MRU ... LRU <-> tail)`
  },
  {
    id: "int-5",
    title: "Kth Largest Element in an Array",
    difficulty: "medium",
    category: "dsa",
    company: "Meta, ByteDance, Netflix",
    frequency: "90%",
    acceptance: "66%",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array. Can you solve it in O(n) average time?",
    timeComplexity: "O(n) average via QuickSelect or O(n log k) via Min-Heap",
    spaceComplexity: "O(k) or O(1)",
    hint: "Maintain a Min-Heap of size k. If the new element is greater than the heap root, pop and push.",
    rubric: [
      "Understands difference between sorting O(n log n) vs QuickSelect O(n) average",
      "Correctly handles duplicates in nums array",
      "Maintains correct k window"
    ],
    starterCode: `// C++ Min-Heap implementation
#include <vector>
#include <queue>

int findKthLargest(std::vector<int>& nums, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k) minHeap.pop();
    }
    return minHeap.top();
}`
  }
];
