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
let currentSlide = 0;

function prevSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const containerWidth = document.querySelector('.slides-container').offsetWidth; // Krijg de breedte van de container

    // Ga naar de vorige slide, of naar de laatste als we aan het begin zijn
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;

    // Zorg ervoor dat de verschuiving correct is
    slides.style.transform = `translateX(-${currentSlide * containerWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const containerWidth = document.querySelector('.slides-container').offsetWidth; // Krijg de breedte van de container

    // Ga naar de volgende slide, of naar de eerste als we aan het einde zijn
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;

    // Zorg ervoor dat de verschuiving correct is
    slides.style.transform = `translateX(-${currentSlide * containerWidth}px)`;
}

// Zorg ervoor dat de breedte van de slides correct wordt ingesteld wanneer de pagina laadt
window.addEventListener('load', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const containerWidth = document.querySelector('.slides-container').offsetWidth; // Krijg de breedte van de container
    
    // Stel de breedte van de .slides container in
    slides.style.width = `${totalSlides * 100}%`; // Zorg ervoor dat de slides-container de juiste breedte krijgt
});
