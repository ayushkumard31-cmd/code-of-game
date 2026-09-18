export const projectTiers = [
  { id: "beginner", label: "Beginner Projects", icon: "🌱", color: "#a9ff43" },
  { id: "intermediate", label: "Intermediate Projects", icon: "⚙️", color: "#ffb627" },
  { id: "advanced", label: "Advanced Projects", icon: "🔥", color: "#ff5340" }
];

export const projectsList = [
  {
    id: "proj-calc",
    tier: "beginner",
    title: "CLI Calculator & Expression Parser",
    tagline: "Build a command-line scientific calculator using an operator stack and Shunting-Yard algorithm.",
    languages: ["C", "C++", "Python"],
    difficulty: "Beginner",
    xpReward: 200,
    estimatedTime: "3-4 hours",
    architecture: "CLI Input Stream -> Lexer / Tokenizer -> Shunting-Yard Infix to Postfix (RPN) -> Postfix Evaluator Stack -> Result Output.",
    milestones: [
      "Tokenize user input string into numbers and operators (+, -, *, /, ^, parentheses)",
      "Implement Shunting-Yard algorithm with operator precedence and associativity",
      "Evaluate the generated Reverse Polish Notation (RPN) stack",
      "Handle division by zero and invalid syntax gracefully"
    ],
    starterSnippet: `// C Starter Template: CLI Expression Evaluator
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, char *argv[]) {
    printf("--- Antigravity CLI Calculator ---\\n");
    printf("Enter expression (e.g. 3 + 4 * 2): ");
    char expr[256];
    if (fgets(expr, sizeof(expr), stdin)) {
        // TODO: Tokenize and parse RPN stack
    }
    return 0;
}`
  },
  {
    id: "proj-cipher",
    tier: "beginner",
    title: "File Encryption & Steganography Tool",
    tagline: "Encrypt and decrypt files using XOR keystreams and hide secret messages in BMP image bytes.",
    languages: ["C", "Python"],
    difficulty: "Beginner",
    xpReward: 250,
    estimatedTime: "4-5 hours",
    architecture: "File I/O Stream -> Binary buffer -> Bitwise XOR / Least Significant Bit (LSB) encoder -> Output File.",
    milestones: [
      "Read and write binary files using fopen with rb/wb modes",
      "Implement a symmetric XOR stream cipher with a passphrase",
      "Parse 24-bit BMP image headers and embed binary payloads in the LSB of color channels",
      "Validate byte integrity using a simple checksum"
    ],
    starterSnippet: `// File XOR Encryptor in C
#include <stdio.h>

void xorEncrypt(const char *inPath, const char *outPath, char key) {
    FILE *fin = fopen(inPath, "rb");
    FILE *fout = fopen(outPath, "wb");
    int ch;
    while ((ch = fgetc(fin)) != EOF) {
        fputc(ch ^ key, fout);
    }
    fclose(fin);
    fclose(fout);
}`
  },
  {
    id: "proj-allocator",
    tier: "intermediate",
    title: "Custom Dynamic Memory Allocator (malloc/free clone)",
    tagline: "Implement your own heap memory manager in C with segregated free-lists and coalescing.",
    languages: ["C"],
    difficulty: "Intermediate",
    xpReward: 400,
    estimatedTime: "8-10 hours",
    architecture: "sbrk() / mmap() OS syscalls -> Free-list Block Headers -> First-Fit / Best-Fit allocation search -> Boundary Tag Coalescing on free().",
    milestones: [
      "Manage chunk block headers containing size and allocation status bit",
      "Implement my_malloc(size_t size) aligned to 8/16-byte CPU boundaries",
      "Implement my_free(void *ptr) with immediate neighbor block coalescing",
      "Benchmark throughput and fragmentation against standard glibc malloc"
    ],
    starterSnippet: `// Custom Allocator Block Header
#include <unistd.h>
#include <stdint.h>

typedef struct BlockHeader {
    size_t size;
    int is_free;
    struct BlockHeader *next;
} BlockHeader;

#define HEADER_SIZE sizeof(BlockHeader)

void* my_malloc(size_t size) {
    // Request memory from kernel using sbrk or mmap
    void *p = sbrk(size + HEADER_SIZE);
    if (p == (void*)-1) return NULL;
    BlockHeader *header = (BlockHeader*)p;
    header->size = size;
    header->is_free = 0;
    header->next = NULL;
    return (void*)(header + 1);
}`
  },
  {
    id: "proj-webserver",
    tier: "intermediate",
    title: "Multi-threaded HTTP 1.1 Web Server",
    tagline: "Build a POSIX socket HTTP server capable of serving static files and routing dynamic GET/POST endpoints.",
    languages: ["C", "C++", "Java"],
    difficulty: "Intermediate",
    xpReward: 450,
    estimatedTime: "10-12 hours",
    architecture: "POSIX Berkeley Sockets -> Worker Thread Pool -> HTTP Request Parser -> MIME Type Resolution -> HTTP/1.1 200 OK Response Builder.",
    milestones: [
      "Bind and listen on TCP port 8080 using socket(), bind(), and listen()",
      "Implement a fixed-size Thread Pool with a synchronized task queue to avoid thread exhaustion",
      "Parse HTTP headers (GET, Host, User-Agent, Content-Length)",
      "Serve static HTML/CSS/images with correct Content-Type headers"
    ],
    starterSnippet: `// Minimal TCP Socket Server in C
#include <stdio.h>
#include <netinet/in.h>
#include <unistd.h>

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in address = { .sin_family = AF_INET, .sin_port = htons(8080), .sin_addr.s_addr = INADDR_ANY };
    bind(server_fd, (struct sockaddr*)&address, sizeof(address));
    listen(server_fd, 10);
    printf("Server listening on port 8080...\\n");
    return 0;
}`
  },
  {
    id: "proj-redis",
    tier: "advanced",
    title: "Mini-Redis: In-Memory Key-Value Store",
    tagline: "Create an event-driven in-memory database supporting RESP protocol, expiration TTLs, and persistent append-only logs (AOF).",
    languages: ["C", "C++", "Go"],
    difficulty: "Advanced",
    xpReward: 600,
    estimatedTime: "15-20 hours",
    architecture: "Non-blocking I/O Event Loop (epoll / kqueue) -> RESP protocol parser -> Hash Table & Sorted Sets (Skip List) -> TTL Expiry Timer Wheel -> AOF Disk Persistence.",
    milestones: [
      "Implement non-blocking event loop using epoll/kqueue for single-threaded I/O multiplexing",
      "Parse Redis Serialization Protocol (RESP) strings, arrays, and bulk strings",
      "Support SET, GET, DEL, INCR, EXPIRE, and ZADD commands",
      "Implement a Skip List data structure for O(log n) sorted set ranking",
      "Implement Append-Only File (AOF) recovery on startup"
    ],
    starterSnippet: `// Mini Redis Event Loop Handler Skeleton
#include <sys/epoll.h>
#include <stdio.h>

void runEventLoop(int server_sock) {
    int epoll_fd = epoll_create1(0);
    struct epoll_event ev, events[64];
    ev.events = EPOLLIN;
    ev.data.fd = server_sock;
    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_sock, &ev);
    
    while (1) {
        int n = epoll_wait(epoll_fd, events, 64, -1);
        for (int i = 0; i < n; i++) {
            // Dispatch client requests
        }
    }
}`
  },
  {
    id: "proj-git",
    tier: "advanced",
    title: "Custom Git: VCS From Scratch",
    tagline: "Build a distributed version control tool from first principles using SHA-1 hashing, blobs, trees, and commit graphs.",
    languages: ["Python", "C++", "Rust"],
    difficulty: "Advanced",
    xpReward: 650,
    estimatedTime: "16-22 hours",
    architecture: ".git Directory Structure -> SHA-1 Content-Addressable Storage -> zlib Object Compression -> Blob / Tree / Commit Objects -> Branch References & HEAD -> Fast-Forward Merges.",
    milestones: [
      "Initialize .git repository directory structure (objects, refs, HEAD)",
      "Create hash-object command to write compressed zlib blobs to disk",
      "Build write-tree command parsing directory hierarchies into tree objects",
      "Implement commit-tree linking parent commits with author timestamps",
      "Implement branch switching and 3-way merge resolution"
    ],
    starterSnippet: `// Python Git Clone (mygit)
import hashlib
import zlib
import os

def hash_object(data, obj_type="blob", write=True):
    header = f"{obj_type} {len(data)}\\0".encode()
    full_data = header + data
    sha1 = hashlib.sha1(full_data).hexdigest()
    if write:
        path = os.path.join(".mygit", "objects", sha1[:2], sha1[2:])
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "wb") as f:
            f.write(zlib.compress(full_data))
    return sha1`
  }
];
