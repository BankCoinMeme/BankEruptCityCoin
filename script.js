document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");
    if (body.classList.contains("homepage")) {
        setInterval(() => {
            let money = document.createElement("img");
            money.src = "images/A-money.png";
            money.className = "falling-money";
            money.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(money);
            setTimeout(() => money.remove(), 3000);
        }, 500);
    }
});
