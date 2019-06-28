[<img src = "https://raw.githubusercontent.com/Trinkler/brand/master/assets/katal/banner.png" width = "100%">](https://katal.io)

# katal-chain

> [Katal](https://katal.io): Standard Framework for Finance.

## Usage [![Netlify Status](https://api.netlify.com/api/v1/badges/ad0fbe5e-064f-4c35-b916-2839c5f54851/deploy-status)](https://app.netlify.com/sites/katal-docs/deploys)

- [View Documentation](https://docs.katal.io)
- [Read Research Papers](https://github.com/Trinkler/katal-research)
- [Subscribe to Newsletter](https://software.us19.list-manage.com/subscribe?u=48964a7b4b5e9480604838bf2&id=982968577c)
- [Join Telegram](https://t.me/katalchain)
- [Join Reddit](https://www.reddit.com/r/katalchain)

### Initial Setup

```sh
# Install Rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
./init.sh
```

### Building

```sh
git clone git@github.com:Trinkler/katal-chain.git
cd katal-chain/
./build.sh
# Alternatively run: cargo build --release
cargo build
```

### Run

```sh
./target/debug/katal
```

### Checklist before RELEASE

```sh
# Build latest docs
./docs.sh
```
