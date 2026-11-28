const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#navbarNav");

document.addEventListener("click", (event) => {

    const menuAberto = menu.classList.contains("show");

    if (menuAberto && !navbar.contains(event.target)) {

        const instancia = bootstrap.Collapse.getOrCreateInstance(menu);

        instancia.hide();

    }

});
