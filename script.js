// creamos una funcion que se auto ejecute 

((d)=>{
    // declaramos las variables
    const menu = d.querySelector(".container-menu");
    const buttonMenu = d.querySelector(".button-menu");

    buttonMenu.addEventListener("click", (e)=>{
        buttonMenu.firstElementChild.classList.toggle("none");
        buttonMenu.lastElementChild.classList.toggle("none");
        menu.classList.toggle('is-active');

    })

    d.addEventListener("click", (e) => {
        if(!e.target.matches(".container-menu b")) return false;
        
        buttonMenu.firstElementChild.classList.remove("none");
        buttonMenu.lastElementChild.classList.add("none");
        menu.classList.remove("is-active");
        
    })

})(document)