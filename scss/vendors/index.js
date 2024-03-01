// Au sein de ce fichier nous allons organiser tous les boutons en JavaScript

/* Au clique du navbarBurger, le menu se dévoile */

navbar__burger.addEventListener("click", () => {
    navbarContent.classList.toggle("active");
    navbar__burger.classList.toggle("cross");

});