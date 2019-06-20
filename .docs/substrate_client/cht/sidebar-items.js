initSidebarItems({"fn":[["block_to_cht_number","Convert a block number to a CHT number. Returns `None` for `block_num` == 0, `Some` otherwise."],["build_proof","Build CHT-based header proof."],["check_proof","Check CHT-based header proof."],["check_proof_on_proving_backend","Check CHT-based header proof on pre-created proving backend."],["compute_root","Compute a CHT root from an iterator of block hashes. Fails if shorter than SIZE items. The items are assumed to proceed sequentially from `start_number(cht_num)`. Discards the trie's nodes."],["decode_cht_value","Convert CHT value into block header hash."],["encode_cht_key","Convert header number into CHT key."],["end_number","Get the ending block of a given CHT."],["for_each_cht_group","Group ordered blocks by CHT number and call functor with blocks of each group."],["is_build_required","Returns Some(cht_number) if CHT is need to be built when the block with given number is canonized."],["size","Gets default CHT size."],["start_number","Get the starting block of a given CHT. CHT 0 includes block 1...SIZE, CHT 1 includes block SIZE + 1 ... 2SIZE More generally: CHT N includes block (1 + NSIZE)...((N+1)*SIZE). This is because the genesis hash is assumed to be known and including it would be redundant."]]});