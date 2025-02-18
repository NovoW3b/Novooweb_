document.addEventListener("DOMContentLoaded", function () {
      const navItems = document.querySelectorAll("#nav_list .nav-item");
      navItems.forEach(item => {
          item.addEventListener("click", function () {
              navItems.forEach(navItem => navItem.classList.remove("active"));
              this.classList.add("active");
          });
      });
  });
  
  $(document).ready(function () {
      // Botão para alternar o menu mobile
      $("#mobile_btn").on("click", function () {
          $("#mobile_menu").toggleClass("active");
          $("#mobile_btn").find("i").toggleClass("fa-x");
      });
  
      const sections = $("section");
      const navItems = $(".nav-item");
  
      // Efeito de box-shadow no scroll
      $(window).on("scroll", function () {
          const header = $("header");
          const scrollTop = $(window).scrollTop() - header.outerHeight();
          let currentIndex = 0;
  
          if (scrollTop <= 0) {
              header.css("box-shadow", "none");
          } else {
              header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
          }
  
          // Destacar a seção atual no menu
          sections.each(function (index) {
              const section = $(this);
              const sectionTop = section.offset().top - 96;
              const sectionBottom = sectionTop + section.outerHeight();
  
              if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                  currentIndex = index;
                  return false; // Sai do loop
              }
          });
  
          navItems.removeClass("active");
          $(navItems[currentIndex]).addClass("active");
      });
  
      // Animações de revelação usando ScrollReveal
      ScrollReveal().reveal("#cta", {
          origin: "left",
          duration: 2000,
          distance: "20%"
      });
  
      ScrollReveal().reveal(".dish", {
          origin: "left",
          duration: 2000,
          distance: "20%"
      });
  
      ScrollReveal().reveal("#testimonial_chef", {
          origin: "left",
          duration: 1000,
          distance: "20%"
      });
  
      ScrollReveal().reveal(".feedback", {
          origin: "right",
          duration: 1000,
          distance: "20%"
      });
  
      // Adicionar classe "selected" ao clicar em um item do menu
      $(".nav-item").on("click", function () {
          $(".nav-item").removeClass("selected");
          $(this).addClass("selected");
      });
  });
  