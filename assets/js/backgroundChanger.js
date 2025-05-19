document.addEventListener("DOMContentLoaded", () => {
  const backgroundContainer = document.querySelector(".background-container");
  const images = [
    "../assets/imagenes/nyc.jpg",
    "../assets/imagenes/mexico-city.jpg",
    "../assets/imagenes/buenos-aires.jpg",
    "../assets/imagenes/sao-paulo.jpg",
    "../assets/imagenes/lima.jpg",
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
  }, 5000); // Cambia cada 5 segundos
});
