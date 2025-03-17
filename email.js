document.getElementById("aiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.send("service_zsttiiu", "aibot", {
        bankrupt_wallet: document.getElementById("bankruptWallet").value,
        eth_wallet: document.getElementById("ethWallet").value
    }).then(alert("Submitted!"));
});

document.getElementById("airdropForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.send("service_zsttiiu", "template_c2n72lv", {
        bankrupt_airdrop_wallet: document.getElementById("bankruptAirdropWallet").value,
        usdc_wallet: document.getElementById("usdcWallet").value
    }).then(alert("Airdrop Submitted!"));
});
