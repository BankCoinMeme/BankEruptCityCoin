document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");

    // Falling Money Animation (Homepage)
    if (body.classList.contains("homepage")) {
        setInterval(() => {
            let money = document.createElement("img");
            money.src = "images/A-money.png";
            money.className = "falling-object";
            money.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(money);
            setTimeout(() => money.remove(), 3000);
        }, 500);
    }

    // Falling Coins Animation (Airdrop Signup Page)
    if (body.classList.contains("airdrop-signup")) {
        setInterval(() => {
            let coin = document.createElement("img");
            coin.src = "images/O-coin.png"; // Image for falling coins
            coin.className = "falling-object";
            coin.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(coin);
            setTimeout(() => coin.remove(), 3000);
        }, 500);
    }
});
