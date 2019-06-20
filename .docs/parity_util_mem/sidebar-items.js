initSidebarItems({"macro":[["malloc_size_of_is_0",""]],"mod":[["allocators","default allocator management Features are: - windows:  - no features: default implementation from servo `heapsize` crate  - weealloc: default to `estimate_size`  - dlmalloc: default to `estimate_size`  - jemalloc: default windows allocator is used instead - arch x86:  - no features: use default alloc  - jemalloc: use jemallocator crate  - weealloc: default to `estimate_size`  - dlmalloc: default to `estimate_size` - arch x86/macos:  - no features: use default alloc, requires using `estimate_size`  - jemalloc: use jemallocator crate  - weealloc: default to `estimate_size`  - dlmalloc: default to `estimate_size` - arch wasm32:  - no features: default to `estimate_size`  - weealloc: default to `estimate_size`  - dlmalloc: default to `estimate_size`  - jemalloc: compile error"]],"struct":[["MallocSizeOfOps","Operations used when measuring heap usage of data structures."],["Memzero","Wrapper to zero out memory when dropped."]],"trait":[["MallocSizeOf","Trait for measuring the \"deep\" heap usage of a data structure. This is the most commonly-used of the traits."]]});