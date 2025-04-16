function mostrarQuemSouEu() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosLondrinenseTechSection = document.getElementById("projetos-londrinense-tech");
    var projetosPensamentoComputacionalSection = document.getElementById("projetos-pensamento-computacional");

    document.body.classList.add("no-scroll");

    esconderSecoes([apresentacaoSection, projetosLondrinenseTechSection, projetosPensamentoComputacionalSection]);

    quemSouEuSection.style.display = "block";
    quemSouEuSection.classList.add("full-screen");

    setTimeout(function () {
        quemSouEuSection.classList.add("visible");
    }, 10);
}

function mostrarApresentacao() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosLondrinenseTechSection = document.getElementById("projetos-londrinense-tech");
    var projetosPensamentoComputacionalSection = document.getElementById("projetos-pensamento-computacional");

    document.body.classList.remove("no-scroll");

    esconderSecoes([quemSouEuSection, projetosLondrinenseTechSection, projetosPensamentoComputacionalSection]);

    apresentacaoSection.style.display = "block";
    setTimeout(function () {
        apresentacaoSection.classList.add("visible");
    }, 10);
}

function mostrarProjetosLondrinenseTech() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosLondrinenseTechSection = document.getElementById("projetos-londrinense-tech");
    var projetosPensamentoComputacionalSection = document.getElementById("projetos-pensamento-computacional");

    document.body.classList.remove("no-scroll");

    esconderSecoes([apresentacaoSection, quemSouEuSection, projetosPensamentoComputacionalSection]);

    projetosLondrinenseTechSection.style.display = "block";
    setTimeout(function () {
        projetosLondrinenseTechSection.classList.add("visible");
    }, 10);
}

function mostrarProjetosPensamentoComputacional() {
    var apresentacaoSection = document.getElementById("apresentacao");
    var quemSouEuSection = document.getElementById("quem-sou-eu");
    var projetosLondrinenseTechSection = document.getElementById("projetos-londrinense-tech");
    var projetosPensamentoComputacionalSection = document.getElementById("projetos-pensamento-computacional");

    document.body.classList.remove("no-scroll");

    esconderSecoes([apresentacaoSection, quemSouEuSection, projetosLondrinenseTechSection]);

    projetosPensamentoComputacionalSection.style.display = "block";
    setTimeout(function () {
        projetosPensamentoComputacionalSection.classList.add("visible");
    }, 10);
}

function esconderSecoes(secoes) {
    for (var i = 0; i < secoes.length; i++) {
        secoes[i].classList.remove("visible");
        secoes[i].style.display = "none";
    }
}

window.onload = function () {
    var apresentacaoSection = document.getElementById("apresentacao");
    apresentacaoSection.classList.add("visible");
};