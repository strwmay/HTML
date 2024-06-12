trocaTema = () => {
    // const html = document.documentElement;
    // document.querySelector("body").style.background = "Pink";

    document.documentElement.classList.toggle("light")

    const isLight = document.documentElement.classList.contains("light");
    const imagem = isLight ? "./img/maymini.png" : "./img/minimay.png";
    const altdesc = isLight ? "uma garotinha olhando para cima de ponta cabeça" : "imagem de uma garotinha olhando para cima";
    document.querySelector("#profile img").setAttribute("src", imagem);
    document.querySelector("#profile img").setAttribute("alt", altdesc);
}