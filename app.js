const dark_btn = document.getElementById("dark_btn")
const body = document.getElementById("body")
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")

dark_btn.addEventListener("click", () => {
    header.style.display = "none"
    main.style.display = "none"
    footer.style.display = "none"
    body.style.backgroundColor = "#4F5D75"
    body.style.height = "100vh"
    body.style.width = "100vw"
    body.style.display = "flex"
    body.style.alignItems = "center"
    body.style.justifyContent = "center"

    let p = document.createElement("p")
    p.id = "pblague"
    body.appendChild(p)
    p.textContent = "C'est une blague ... Recharger la page !"
})






