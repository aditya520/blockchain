initSidebarItems({"struct":[["ApiRef","Auxiliary wrapper that holds an api instance and binds it to the given lifetime."],["BlakeTwo256","Blake2-256 Hash implementation."],["Identity","A structure that performs identity conversion."],["IdentityLookup","A lookup implementation returning the input value."]],"trait":[["Applyable","An \"executable\" piece of information, used by the standard Substrate Executive in order to enact a piece of extrinsic information by marshalling and dispatching to a named function call."],["BlindCheckable","A \"checkable\" piece of information, used by the standard Substrate Executive in order to check the validity of a piece of extrinsic information, usually by verifying the signature. Implement for pieces of information that don't require additional context in order to be checked."],["Block","Something which fulfills the abstract idea of a Substrate block. It has types for an `Extrinsic` piece of information as well as a `Header`."],["BlockNumberToHash","Translate a block number into a hash."],["Bounded","Numbers which have upper and lower bounds"],["CheckEqual","Something that can be checked for equality and printed out to a debug channel if bad."],["Checkable","A \"checkable\" piece of information, used by the standard Substrate Executive in order to check the validity of a piece of extrinsic information, usually by verifying the signature. Implement for pieces of information that require some additional context `Context` in order to be checked."],["CheckedAdd","Performs addition that returns `None` instead of wrapping around on overflow."],["CheckedConversion","Convenience type to work around the highly unergonomic syntax needed to invoke the functions of overloaded generic traits, in this case `TryFrom` and `TryInto`."],["CheckedDiv","Performs division that returns `None` instead of panicking on division by zero and instead of wrapping around on underflow and overflow."],["CheckedMul","Performs multiplication that returns `None` instead of wrapping around on underflow or overflow."],["CheckedShl","Performs a left shift that returns `None` on shifts larger than the type width."],["CheckedShr","Performs a right shift that returns `None` on shifts larger than the type width."],["CheckedSub","Performs subtraction that returns `None` instead of wrapping around on underflow."],["Clear","Trait for things that can be clear (have no bits set). For numeric types, essentially the same as `Zero`."],["Convert","Extensible conversion trait. Generic over both source and destination types."],["CurrentHeight","Get the \"current\" block number."],["EnsureOrigin","Some sort of check on the origin is performed by this object."],["Extrinsic","Something that acts like an `Extrinsic`."],["GetNodeBlockType","A marker trait for something that knows the type of the node block."],["GetRuntimeBlockType","A marker trait for something that knows the type of the runtime block."],["Hash","Abstraction around hashing"],["Header","Something which fulfills the abstract idea of a Substrate header. It has types for a `Number`, a `Hash` and a `Digest`. It provides access to an `extrinsics_root`, `state_root` and `parent_hash`, as well as a `digest` and a block `number`."],["IntegerSquareRoot","A trait implementing integer square root."],["Lazy","A lazy value."],["Lookup","Means of changing one type into another in a manner dependent on the source type."],["MaybeDebug","A type that implements Debug when in std environment."],["MaybeDisplay","A type that implements Display when in std environment."],["MaybeHash","A type that implements Hash when in std environment."],["MaybeSerialize","A type that implements Serialize when in std environment."],["MaybeSerializeDebug","A type that implements Serialize, DeserializeOwned and Debug when in std environment."],["MaybeSerializeDebugButNotDeserialize","A type that implements Serialize and Debug when in std environment."],["Member","A type that can be used in runtime structures."],["OffchainWorker","Off-chain computation trait."],["OnFinalize","The block finalization trait. Implementing this lets you express what should happen for your module when the block is ending."],["OnInitialize","The block initialization trait. Implementing this lets you express what should happen for your module when the block is beginning (right before the first extrinsic is executed)."],["One","Defines a multiplicative identity element for `Self`."],["OpaqueKeys","Opaque datatype that may be destructured into a series of raw byte slices (which represent individual keys)."],["ProvideRuntimeApi","Something that provides a runtime api."],["RuntimeApiInfo","Something that provides information about a runtime api."],["SaturatedConversion","Convenience type to work around the highly unergonomic syntax needed to invoke the functions of overloaded generic traits, in this case `SaturatedFrom` and `SaturatedInto`."],["Saturating","Simple trait to use checked mul and max value to give a saturated mul operation over supported types."],["SimpleArithmetic","A meta trait for arithmetic."],["SimpleBitOps","A meta trait for all bit ops."],["StaticLookup","Means of changing one type into another in a manner dependent on the source type. This variant is different to `Lookup` in that it doesn't (can cannot) require any context."],["UniqueSaturatedFrom","Just like `From` except that if the source value is too big to fit into the destination type then it'll saturate the destination."],["UniqueSaturatedInto","Just like `Into` except that if the source value is too big to fit into the destination type then it'll saturate the destination."],["ValidateUnsigned","Something that can validate unsigned extrinsics."],["Verify","Means of signature verification."],["Zero","Defines an additive identity element for `Self`."]],"type":[["DigestFor","Extract the digest type for a block."],["DigestItemFor","Extract the digest item type for a block."],["HashFor","Extract the hashing type for a block."],["NumberFor","Extract the number type for a block."]]});