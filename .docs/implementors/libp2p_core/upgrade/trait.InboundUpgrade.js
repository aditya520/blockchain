(function() {var implementors = {};
implementors["libp2p_core"] = [];
implementors["libp2p_deflate"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_deflate/struct.DeflateConfig.html\" title=\"struct libp2p_deflate::DeflateConfig\">DeflateConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_deflate::DeflateConfig"]},];
implementors["libp2p_floodsub"] = [{text:"impl&lt;TSocket&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;TSocket&gt; for <a class=\"struct\" href=\"libp2p_floodsub/protocol/struct.FloodsubConfig.html\" title=\"struct libp2p_floodsub::protocol::FloodsubConfig\">FloodsubConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TSocket: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a>,&nbsp;</span>",synthetic:false,types:["libp2p_floodsub::protocol::FloodsubConfig"]},];
implementors["libp2p_identify"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_identify/protocol/struct.IdentifyProtocolConfig.html\" title=\"struct libp2p_identify::protocol::IdentifyProtocolConfig\">IdentifyProtocolConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_identify::protocol::IdentifyProtocolConfig"]},];
implementors["libp2p_kad"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_kad/protocol/struct.KademliaProtocolConfig.html\" title=\"struct libp2p_kad::protocol::KademliaProtocolConfig\">KademliaProtocolConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_kad::protocol::KademliaProtocolConfig"]},];
implementors["libp2p_mplex"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_mplex/struct.MplexConfig.html\" title=\"struct libp2p_mplex::MplexConfig\">MplexConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_mplex::MplexConfig"]},];
implementors["libp2p_noise"] = [{text:"impl&lt;T, C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;T&gt; for <a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.IX.html\" title=\"enum libp2p_noise::IX\">IX</a>, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.IX.html\" title=\"enum libp2p_noise::IX\">IX</a>, C&gt;: <a class=\"trait\" href=\"libp2p_core/upgrade/trait.UpgradeInfo.html\" title=\"trait libp2p_core::upgrade::UpgradeInfo\">UpgradeInfo</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"libp2p_noise/trait.Protocol.html\" title=\"trait libp2p_noise::Protocol\">Protocol</a>&lt;C&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_noise::NoiseConfig"]},{text:"impl&lt;T, C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;T&gt; for <a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.XX.html\" title=\"enum libp2p_noise::XX\">XX</a>, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.XX.html\" title=\"enum libp2p_noise::XX\">XX</a>, C&gt;: <a class=\"trait\" href=\"libp2p_core/upgrade/trait.UpgradeInfo.html\" title=\"trait libp2p_core::upgrade::UpgradeInfo\">UpgradeInfo</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"libp2p_noise/trait.Protocol.html\" title=\"trait libp2p_noise::Protocol\">Protocol</a>&lt;C&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_noise::NoiseConfig"]},{text:"impl&lt;T, C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;T&gt; for <a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.IK.html\" title=\"enum libp2p_noise::IK\">IK</a>, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"libp2p_noise/struct.NoiseConfig.html\" title=\"struct libp2p_noise::NoiseConfig\">NoiseConfig</a>&lt;<a class=\"enum\" href=\"libp2p_noise/enum.IK.html\" title=\"enum libp2p_noise::IK\">IK</a>, C&gt;: <a class=\"trait\" href=\"libp2p_core/upgrade/trait.UpgradeInfo.html\" title=\"trait libp2p_core::upgrade::UpgradeInfo\">UpgradeInfo</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"libp2p_noise/trait.Protocol.html\" title=\"trait libp2p_noise::Protocol\">Protocol</a>&lt;C&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_noise::NoiseConfig"]},];
implementors["libp2p_ping"] = [{text:"impl&lt;TSocket&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;TSocket&gt; for <a class=\"struct\" href=\"libp2p_ping/protocol/struct.Ping.html\" title=\"struct libp2p_ping::protocol::Ping\">Ping</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TSocket: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_ping::protocol::Ping"]},];
implementors["libp2p_plaintext"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_plaintext/struct.PlainTextConfig.html\" title=\"struct libp2p_plaintext::PlainTextConfig\">PlainTextConfig</a>",synthetic:false,types:["libp2p_plaintext::PlainTextConfig"]},];
implementors["libp2p_secio"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;T&gt; for <a class=\"struct\" href=\"libp2p_secio/struct.SecioConfig.html\" title=\"struct libp2p_secio::SecioConfig\">SecioConfig</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_secio::SecioConfig"]},];
implementors["libp2p_yamux"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/upgrade/trait.InboundUpgrade.html\" title=\"trait libp2p_core::upgrade::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p_yamux/struct.Config.html\" title=\"struct libp2p_yamux::Config\">Config</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_yamux::Config"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
