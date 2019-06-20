initSidebarItems({"struct":[["NoHashHasher","A `NoHashHasher<T>` where `T` is one of {`u8`, `u16`, `u32`, `u64`, `usize`, `i8`, `i16`, `i32`, `i64`, `isize`} is a stateless implementation of `Hasher` which does not actually hash at all. By itself this hasher is largely useless, but when used in `HashMap`s whose domain matches `T` the resulting map operations involving hashing are faster than with any other possible hashing algorithm."]],"type":[["BuildNoHashHasher","An alias for `BuildHasherDefault` for use with `NoHashHasher`."],["IntMap","A `HashMap` with an integer domain, using `NoHashHasher` to perform no hashing at all."],["IntSet","A `HashSet` of integers, using `NoHashHasher` to perform no hashing at all."]]});