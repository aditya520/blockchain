initSidebarItems({"enum":[["Error","Serialization Error"],["FilterLevel","Logging filtering level"],["Level","Logging level associated with a logging `Record`"],["MutexDrainError","Error returned by `Mutex<D : Drain>`"]],"macro":[["b","Macro for building group of key-value pairs in `BorrowedKV`"],["crit","Log critical level record"],["debug","Log debug level record"],["error","Log error level record"],["info","Log info level record"],["kv","Macro for build `KV` implementing type"],["log","Log message a logging record"],["o","Macro for building group of key-value pairs: `OwnedKV`"],["record","Create `Record` at the given code location"],["record_static","Create `RecordStatic` at the given code location"],["slog_b","Alias of `b`"],["slog_crit","Log critical level record (alias)"],["slog_debug","Log debug level record (alias)"],["slog_error","Log error level record"],["slog_info","Log info level record (alias)"],["slog_kv","Alias of `kv`"],["slog_log","Log message a logging record (alias)"],["slog_o","Macro for building group of key-value pairs (alias)"],["slog_record","Create `Record` at the given code location (alias)"],["slog_record_static","Create `RecordStatic` at the given code location (alias)"],["slog_trace","Log trace level record (alias)"],["slog_warn","Log warning level record (alias)"],["trace","Log trace level record"],["warn","Log warning level record"]],"mod":[["ser","Compatibility name to ease upgrading from `slog v1`"]],"static":[["LOG_LEVEL_NAMES","Official capitalized logging (and logging filtering) level names"],["LOG_LEVEL_SHORT_NAMES","Official capitalized logging (and logging filtering) short level names"]],"struct":[["BorrowedKV","Borrowed `KV`"],["Discard","`Drain` discarding everything"],["Duplicate","`Drain` duplicating records into two other `Drain`s"],["Filter","`Drain` filtering records"],["FnValue","Explicit lazy-closure `Value`"],["Fuse","`Drain` panicking on error"],["IgnoreResult","`Drain` ignoring result"],["LevelFilter","`Drain` filtering records by `Record` logging level"],["Logger","Logging handle used to execute logging statements"],["MapError","`Drain` mapping error returned by another `Drain`"],["OwnedKV","Owned KV"],["OwnedKVList","Chain of `SyncMultiSerialize`-s of a `Logger` and its ancestors"],["PushFnValue","Lazy `Value` that writes to Serializer"],["PushFnValueSerializer","Handle passed to `PushFnValue` closure"],["Record","One logging record"],["RecordStatic","Information that can be static in the given record thus allowing to optimize record creation to be done mostly at compile-time."],["SingleKV","Single pair `Key` and `Value`"]],"trait":[["Drain","Logging drain"],["FilterFn","Function that can be used in `Filter` drain"],["KV","Key-value pair(s) for log events"],["MapErrFn","Function that can be used in `MapErr` drain"],["SendRefUnwindSafeDrain","`Drain + Send + RefUnwindSafe` bound"],["SendSyncRefUnwindSafeDrain","`Drain + Send + Sync + RefUnwindSafe` bound"],["SendSyncRefUnwindSafeKV","Thread-local safety bound for `KV`"],["SendSyncUnwindSafe","`Send + Sync + UnwindSafe` bound"],["SendSyncUnwindSafeDrain","`Drain + Send + Sync + UnwindSafe` bound"],["SerdeValue","A value that can be serialized via serde"],["Serializer","Serializer"],["Value","Value that can be serialized"]],"type":[["Key","Key type"],["OwnedKeyValueList","Compatibility name to ease upgrading from `slog v1`"],["PushFnSerializer","Old name of `PushFnValueSerializer`"],["PushLazy","Compatibility name to ease upgrading from `slog v1`"],["Result","Serialization `Result`"],["Serialize","Compatibility name to ease upgrading from `slog v1`"],["ValueSerializer","Compatibility name to ease upgrading from `slog v1`"]]});