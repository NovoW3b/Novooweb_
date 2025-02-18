document.addEventListener("DOMContentLoaded", () => {
      const a = document.querySelectorAll("nav ul li a");
      a.forEach(a => {
          a.addEventListener("click", function(a) {
              a.preventDefault();
              const b = this.getAttribute("href").substring(1),
                  c = document.getElementById(b);
              if (c) {
                  const a = document.querySelector("header").offsetHeight,
                      b = c.getBoundingClientRect().top,
                      d = b + window.pageYOffset - a + 20;
                  window.scrollTo({
                      top: d,
                      behavior: "smooth"
                  })
              }
          })
      });
      const b = document.querySelectorAll(".fade-in"),
          c = new IntersectionObserver((a, b) => {
              a.forEach(a => {
                  a.isIntersecting && (a.target.classList.add("visible"), b.unobserve(a.target))
              })
          }, {
              threshold: .1,
              rootMargin: "0px 0px -50px 0px"
          });
      b.forEach(a => {
          c.observe(a)
      })
  });
  const slides = document.querySelector(".slides"),
      slideImages = document.querySelectorAll(".slide"),
      totalSlides = slideImages.length;
  let indiceSlide = 0;
  
  function mostrarSlide(a) {
      const b = slides.clientWidth;
      slides.style.transform = `translateX(${-a*b}px)`
  }
  document.getElementById("proximo").addEventListener("click", () => {
      indiceSlide = (indiceSlide + 1) % totalSlides, mostrarSlide(indiceSlide)
  }), document.getElementById("anterior").addEventListener("click", () => {
      indiceSlide = (indiceSlide - 1 + totalSlides) % totalSlides, mostrarSlide(indiceSlide)
  });
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
      300 < window.scrollY ? backToTopBtn.classList.add("show") : backToTopBtn.classList.remove("show")
  }), backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  });
  const whatsappButton = document.getElementById("whatsappButton");
  window.addEventListener("scroll", () => {
      whatsappButton.style.display = 300 < window.scrollY ? "block" : "none"
  });