console.log("O JavaScript esta funcionando perfeitamente!");

function windowSobre() {
 document.getElementById("sobre").addEventListener("click", () => {
    document.querySelector(".container_sair").classList.add("visible");
    document.querySelector(".container_sobre").classList.add("visible");
 })

 document.querySelector(".container_sair").addEventListener("click" , function(e) {
    this.classList.remove("visible");
    document.querySelector(".container_sobre").classList.remove("visible");
 })
}

windowSobre()