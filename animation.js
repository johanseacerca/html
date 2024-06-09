// Animar las fotos
const photos = document.querySelectorAll(".animated-photo");

function animatePhotos() {
  photos.forEach((photo) => {
    photo.classList.add("virus-move");
  });
}

animatePhotos();

// Clonar las imágenes al hacer clic
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    const clone = photo.cloneNode(true);
    const xPos = Math.floor(Math.random() * window.innerWidth);
    const yPos = Math.floor(Math.random() * window.innerHeight);
    clone.style.left = `${xPos}px`;
    clone.style.top = `${yPos}px`;
    document.body.appendChild(clone);
  });
});
