
document.addEventListener("DOMContentLoaded", () => {

    const openButton = document.getElementById("openGift");
    const closeButton = document.getElementById("closeLetter");
    const overlay = document.getElementById("letterOverlay");

    if (!openButton || !closeButton || !overlay) {
        console.error("Error: Letter elements not found!");
        return;
    }

    function openLetter() {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLetter() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    openButton.addEventListener("click", openLetter);

    closeButton.addEventListener("click", closeLetter);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeLetter();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && overlay.classList.contains("active")) {
            closeLetter();
        }
    });

});
