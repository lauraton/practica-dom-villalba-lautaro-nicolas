const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  }
];

let copiaPersonajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  }
];



const rowcontainer = document.querySelector("#row-container");
const eliminar = document.querySelector("#eliminarlaneta");
const verPersonajes = document.querySelector("#verPersonajes");
const formulario = document.querySelector("#formulario")
const buscarNombre = document.querySelector("#buscarNombre");
const btnBuscar = document.querySelector("#btnBuscar");

verPersonajes.addEventListener("click", () => {
    cargarHeroes(copiaPersonajes)
}
)

const cargarHeroes = (heroes) => {

    rowcontainer.innerHTML = "";

    heroes.forEach(heroe => {
        rowcontainer.innerHTML += `
        <div class="col-3 my-2" data-id="${heroe.id}">
            <div class="card" style="width: 18rem">
                <img src="${heroe.imagen}" alt="" class="top-card" />

                <div class="card-body">
                    <h5 class="card-title">${heroe.nombre}</h5>

                    <button class="btn btn-danger eliminar-boton">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

rowcontainer.addEventListener ("click", (e) => {
    if (e.target.classList.contains("eliminar-boton")) {
        const cercano = e.target.closest(".col-3")
        console.log(cercano)

        const idHeroe = cercano.dataset.id;


        copiaPersonajes = copiaPersonajes.filter(heroe => {
          return heroe.id != idHeroe;
        })
 cercano.remove()
       
        console.log(personajes)
    }
}
)

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorNombre = formulario.nombre.value;
    const valorImagen = formulario.imagen.value;

    const nuevoObjeto = {
        id: copiaPersonajes.length + 1,
        nombre: valorNombre,
        imagen: valorImagen
    };

    personajes.push(nuevoObjeto);
    copiaPersonajes.push(nuevoObjeto);

    cargarHeroes(copiaPersonajes);

    formulario.reset();
});

btnBuscar.addEventListener("click", () => {

    const texto = buscarNombre.value.toLowerCase();

    const filtrados = copiaPersonajes.filter(heroe => {
        return heroe.nombre.toLowerCase().includes(texto);
    });

    cargarHeroes(filtrados);

});