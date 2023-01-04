let listaProyectos = [];

// agregando informacion al array

listaProyectos.push({id: 1, proyecto: "Pagina responsive + Manejo del DOM", link: "./prueba.html"})
listaProyectos.push({id: 2, proyecto: "Contador de Macronutrientes", link: "./prueba2.html"})



// agregando informacion del arreglo al HTML

const divLista = document.querySelector(".lista");
console.log(divLista)

for(dato of listaProyectos){
    let parrafos = document.createElement("a"); 
    parrafos.classList.add("parrafos");
    parrafos.href = dato.link;
    parrafos.target = "_blank";
    parrafos.innerText =`${dato.id}.- ${dato.proyecto}`
    divLista.append(parrafos);
}

