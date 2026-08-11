const senha = document.getElementById("senha")
const mudar = document.getElementById("mudar_senha")

mudar.addEventListener("click", () => {
    if(senha.type === "password"){
        senha.type = ("text")
        mudar.src = "../image/olho.png";
    }else{
        senha.type = "password"
        mudar.src = "../image/olho (1).png"
    }
});
