//popup voor store/ info en stats
document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".openPopup");
    const closeButtons = document.querySelectorAll(".closePopup");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const popupId = `popup-${button.dataset.popup}`;
            document.getElementById(popupId).classList.add("open");
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".popup").classList.remove("open");
        });
    });
});

//planet klikker zelf
let aantal_alliens = 0;

function klik() {
    document.getElementById("aantal_alliens").innerHTML = "Totaal Alliens:  ";
    aantal_alliens++;
    document.getElementById("aantal_alliens").innerHTML += aantal_alliens;
}

function adjustHeight(element) {
    element.style.height = "auto"; // Reset de hoogte
    element.style.height = element.scrollHeight + "px"; // Pas de hoogte aan op basis van inhoud
}

let index = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    function updateSlide() {
        slides.style.transform = `translateX(${-index * 100 / totalSlides}%)`;
    }
    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateSlide();
    }
    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
    }
    updateSlide();

