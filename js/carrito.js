
  const pintarCarrito = () => {
  
    modalContainer.innerHTML = ""
    modalContainer.style.display ="flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
      <h1 class= "modal-header-title"> Carrito </h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("boton")
      modalbutton.innerText = "X";
      modalbutton.className = "modalheaderbutton";
      
      modalbutton.addEventListener("click", () =>{
         modalContainer.style.display = "none";
      });

    modalHeader.append(modalbutton);


    carrito.forEach((producto) =>{
       let carritoContent = document.createElement("div")
       carritoContent.className = "modalcontent"
       carritoContent.innerHTML = `
          <h4> ${producto.nombre}</h4>
          <p> ${producto.precio} $ </p>
    `; 

    modalContainer.append(carritoContent);
    

    let eliminar = document.createElement("botoneliminar")
    eliminar.innerText = "✖️"
    eliminar.className = "eliminarproducto"
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarproducto)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0 );
    
    const totalcompra = document.createElement("div")
    totalcompra.className = "total-content"
    totalcompra.innerHTML = ` Total a pagar: $ ${total} `;
    modalContainer.append(totalcompra);

    
    const button = document.createElement("button")
     button.innerText = "Finalizar compra"
     button.className ="botondefinalizar"
      modalContainer.append(button);
     button.addEventListener("click", function () {
      Swal.fire({
          title: "Estas seguro?",
          text: "De finalizar la compra?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Finalizar la compra"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Excelente",
              text: "Su compra a sido realizada con exito!",
            });
          }
        });
     })
   

     }



  verCarrito.addEventListener("click", pintarCarrito)

  const eliminarproducto = () =>{
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId)=>{
      return carritoId !== foundId;
    });

    pintarCarrito();
    
    
  };

  
    
  
  