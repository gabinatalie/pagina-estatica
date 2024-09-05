// Carregar header e footer dinamicamente
function loadHTML(el, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(el).innerHTML = data;
      if (callback) callback(); // Chama o callback depois de carregar o header/footer
    })
    .catch((error) => console.error("Erro ao carregar o arquivo:", error));
}

// Carregar o header e o footer nas respectivas divs
loadHTML("#header", "header.html", function () {
  // Script para o menu hambúrguer, executado depois que o header for carregado
  const hamburgerMenu = document.querySelector(".hamburguer-menu");
  const navList = document.querySelector(".nav-list");

  hamburgerMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

loadHTML("#footer", "footer.html");
