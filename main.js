//COnsumo la lista si valido que que esa url hay autopauta

let imagenNormal = "https://via.placeholder.com/768x110"
let imagenresponsive = "https://via.placeholder.com/400x110"

let urls = [{
        nombre: "Autopauta",
        img: "https://via.placeholder.com/768x110",
        imgresponsive: "https://via.placeholder.com/768x110",
        caida: "https://via.placeholder.com/768x110",
        url: "/credito"
    },
    {
        nombre: "Autopauta1",
        img: "https://via.placeholder.com/768x110",
        imgresponsive: "https://via.placeholder.com/768x110",
        caida: "https://via.placeholder.com/768x110",
        url: "/subsidio"
    }
]

function autopauta(img, imgresponsive, caida, url) {
    if (url == document.URL) {
        return `
    <div class="diego">
        <a href="${caida}" target="_blank">
        <picture>
        <source media="(min-width:650px)" srcset="${img}">
        <source media="(min-width:465px)" srcset="${imgresponsive}">
        <img src="${imgresponsive}" alt="Flowers" style="width:auto;">
        </picture>
        </a>
    </div>
    `
    }
}

document.write(autopauta(imagenNormal, imagenresponsive, "https://www.google.com/", "http://127.0.0.1:5500/index.html" ))

