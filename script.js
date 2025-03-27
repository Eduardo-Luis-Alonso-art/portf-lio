function mostrarQuemSouEu() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosSection = document.getElementById("projetos");

    apresentacaoSection.classList.remove("visible");
    projetosSection.style.display = "none";

    quemSouEuSection.style.display = "block";
    quemSouEuSection.classList.add("full-screen");

    setTimeout(function() {
        quemSouEuSection.classList.add("visible");
    }, 10);
}

function mostrarApresentacao() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosSection = document.getElementById("projetos");

    quemSouEuSection.classList.remove("visible");
    quemSouEuSection.classList.remove("full-screen");
    quemSouEuSection.style.display = "none";
    projetosSection.style.display = "none";

    setTimeout(function() {
        apresentacaoSection.classList.add("visible");
    }, 10);
}

function mostrarProjetos() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosSection = document.getElementById("projetos");

    apresentacaoSection.classList.remove("visible");
    quemSouEuSection.classList.remove("visible");
    quemSouEuSection.style.display = "none";

    projetosSection.style.display = "block";
    setTimeout(function() {
        projetosSection.classList.add("visible");
    }, 10);
}

window.onload = function() {
    var apresentacaoSection = document.getElementById("apresentacao");
    apresentacaoSection.classList.add("visible");
};