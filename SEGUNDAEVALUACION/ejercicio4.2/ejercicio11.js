let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");
let div = document.getElementById("container");
function desplazarIntercalar() {

    // div.style.display = "flex";
    // div.style.alignItems = "flex-end"
    caja2.style.order = 1;
    caja1.style.order = 2;
    caja3.style.order = 4;
    caja4.style.order = 3;
    caja1.style.transform = "translateX(100vw)";
    caja2.style.transform = "translateX(100vw)";
    caja3.style.transform = "translateX(100vw)";
    caja4.style.transform = "translateX(100vw)";
    let bebes = div.children;

    for (let i = 0; i < bebes.length; i++) {
        bebes[i].style.transition = "transform 4s";
        bebes[i].style.transform = "translateX(650px)";
        bebes[i].addEventListener("mouseover", () => {
            bebes[i].style.transition = "transform 4s";
            // bebes[i].style.transform = "rotate(270deg)";
            bebes[i].style.transform = "translateX(650px) rotate(270deg)";

        });
        bebes[i].addEventListener("mouseout", () => {
            bebes[i].style.transform = "translateX(650px)";

        });
    }


}


function inicio() {
    div.style.display = "flex";
    div.style.alignItems = "flex-start"
    let bebes = div.children;

    for (let i = 0; i < bebes.length; i++) {
        bebes[i].style.transition = "transform 4s";
        bebes[i].style.transform = "translateX(0px) rotate(0deg)";
        bebes[i].addEventListener("mouseover", () => {
            bebes[i].style.transition = "transform 4s";
            bebes[i].style.transform = " rotate(270deg)";

        });
        bebes[i].addEventListener("mouseout", () => {
            bebes[i].style.transition = "transform 4s";

            bebes[i].style.transform = " translateX(0px) rotate(0deg)";

        });

    }

    caja2.style.order = 2;
    caja1.style.order = 1;
    caja3.style.order = 3;
    caja4.style.order = 4;
}