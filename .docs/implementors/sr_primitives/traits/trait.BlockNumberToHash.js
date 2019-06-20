(function() {var implementors = {};
implementors["srml_system"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"srml_system/trait.Trait.html\" title=\"trait srml_system::Trait\">Trait</a>&gt; <a class=\"trait\" href=\"sr_primitives/traits/trait.BlockNumberToHash.html\" title=\"trait sr_primitives::traits::BlockNumberToHash\">BlockNumberToHash</a> for <a class=\"struct\" href=\"srml_system/struct.ChainContext.html\" title=\"struct srml_system::ChainContext\">ChainContext</a>&lt;T&gt;",synthetic:false,types:["srml_system::ChainContext"]},];
implementors["substrate_client"] = [{text:"impl&lt;B, E, Block, RA&gt; <a class=\"trait\" href=\"sr_primitives/traits/trait.BlockNumberToHash.html\" title=\"trait sr_primitives::traits::BlockNumberToHash\">BlockNumberToHash</a> for <a class=\"struct\" href=\"substrate_client/struct.Client.html\" title=\"struct substrate_client::Client\">Client</a>&lt;B, E, Block, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"substrate_client/backend/trait.Backend.html\" title=\"trait substrate_client::backend::Backend\">Backend</a>&lt;Block, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"substrate_client/trait.CallExecutor.html\" title=\"trait substrate_client::CallExecutor\">CallExecutor</a>&lt;Block, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&lt;Hash = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt;,&nbsp;</span>",synthetic:false,types:["substrate_client::client::Client"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
