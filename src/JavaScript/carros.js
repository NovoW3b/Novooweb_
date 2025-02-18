const buttons = document.querySelectorAll(".btn-buy");
buttons.forEach(a => {
    a.addEventListener("click", () => {
        alert("Obrigado por escolher a AutoLux! Entraremos em contato em breve.")
    })
}), window.onscroll = function() {
    mostrarBotaoTopo()
};

function mostrarBotaoTopo() {
    const a = document.getElementById("btnTopo");
    a.style.display = 20 < document.body.scrollTop || 20 < document.documentElement.scrollTop ? "block" : "none"
}

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
document.querySelectorAll("a[href^=\"#\"]").forEach(a => {
    a.addEventListener("click", function(a) {
        a.preventDefault();
        const b = document.querySelector(this.getAttribute("href"));
        b.scrollIntoView({
            behavior: "smooth"
        })
    })
});
const mobileMenu = document.querySelector("#mobile_nav");
mobileMenu && mobileMenu.addEventListener("click", function(a) {
    const b = a.target.closest(".mobile-item");
    b && (a.preventDefault(), document.querySelectorAll(".mobile-item").forEach(a => a.classList.remove("active")), b.classList.add("active"), setTimeout(() => {
        window.location.href = b.getAttribute("href")
    }, 50))
});

function openModal(a) {
    const b = document.getElementById("infoModal"),
        c = document.getElementById("modalInfoContent");
    c.innerHTML = {
        1: `<p>Informações adicionais sobre o Chevrolet Onix, incluindo histórico de manutenção, garantia, etc.</p>`,
        2: `<p>Informações adicionais sobre o Palio, incluindo consumo, proprietário anterior, etc.</p>`,
        3: `<p>Informações adicionais sobre o Civic, incluindo consumo, proprietário anterior, etc.</p>`
    } [a] || "<p>Informa\xE7\xF5es indispon\xEDveis.</p>", b.style.display = "flex"
}

function closeModal() {
    const a = document.getElementById("infoModal");
    a.style.display = "none"
}
window.onclick = function(a) {
    const b = document.getElementById("infoModal");
    a.target === b && (b.style.display = "none")
};