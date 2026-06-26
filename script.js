// تأثير ظهور العناصر عند فتح الصفحة
window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transform = "translateY(0)";
});

// تأثير على الشعار
const logo = document.querySelector(".logo");

if (logo) {
    setInterval(() => {
        logo.style.textShadow = "0 0 20px #00e5ff";
        setTimeout(() => {
            logo.style.textShadow = "none";
        }, 500);
    }, 2000);
}
