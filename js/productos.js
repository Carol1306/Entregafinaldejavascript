const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("segundaentrega")) || [];

const getProduct = async () => {
 const response = await fetch ("./data.json");
 const data = await response.json();
  data.forEach((producto) => {
  let content = document.createElement("div")
  content.className = "productosacomprar"
  content.innerHTML = `
   <img src="${producto.img}">
   <h4>${producto.nombre}</h4>
   <p class= "precio"> ${producto.precio} $</p>
   <p class= "descripcion"> ${producto.descripcion} </p>
  `;
  
  shopContent.append(content)
 
  let comprar = document.createElement("button")
  comprar.innerText = "Comprar"
  comprar.className = "Comprar"
 
  content.append(comprar)
 
  comprar.addEventListener("click", () =>{
    carrito.push({
      id : producto.id,
      nombre : producto.nombre,
      precio : producto.precio,
    });
    savelocal();

  });
  
 });
 
};

getProduct();






//local storage
const savelocal = () =>{
    localStorage.setItem("segundaentrega", JSON.stringify(carrito))
}

