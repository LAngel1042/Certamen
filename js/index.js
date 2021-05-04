tinymce.init({
    selector: '#detalle-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const Reos = [];
  const cargarTabla = ()=>{
  

  let tbody = document.querySelector("#tabla-tbody");

  tbody.innerHTML = "";

  for(let i=0; i < Reos.length; ++i){
    let p = Reos[i];

    let tr = document.createElement("tr");

    let tdNombre = document.createElement("td");
    let tdDetalle = document.createElement("td");
    let tdCiudad = document.createElement("td");
    let tdGravedad = document.createElement("td");
    
    
    tdNombre.innerText = p.Nombre;

 
    let gravedad = document.createElement("i");
 
 if ("#crimenes"=="<=3"){
    ("i"=="Leve");
 }else if ("#crimenes"=="<=4 and >=6"){
     ("i"=="Grave");
 }else if ("#crimenes"=="<=7 and >=15"){
     ("i"=="Peligroso");
 }else{
     ("i"=="Enemigo de la sociedad");
}
    if(p.Gravedad == "Leve"){
   tipo.classList.add("fas","fa-flushed","text-secondary","fa-3x");
 }else if(p.Gravedad == "Grave"){
   tipo.classList.add("fas", "fa-frown-open", "text-warning","fa-3x");
 }else if(p.Gravedad == "Peligroso"){
   tipo.classList.add("fas","fa-frown", "text-danger","fa-3x");
 }else if(p.Gravedad == "Enemigo de la sociedad"){
   tipo.classList.add("fas","fa-dizzy", "text-dark","fa-3x");

 }
    
    tdGravedad.classList.add("text-center");
    tdGravedad.appendChild(Gravedad);
   
    tdCiudad.innerHTML = p.Ciudad;
    
    tr.appendChild(tdNombre);
    tr.appendChild(tdDetalle);
    tr.appendChild(tdCiudad);
    tr.appendChild(tdGravedad);
    
    tbody.appendChild(tr);
  }
  
  };
  
  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
   let Nombre = document.querySelector("#nombre-txt","#apellido.txt").value;
   let Detalle = document.querySelector("#detalle-txt").value;
   let Ciudad = document.querySelector("#ciudad-select").checked;
   let Gravedad = document.querySelector("#crimenes").value; 
   
  
   let Reo = {};
  
   Reo.Nombre = Nombre;
   Reo.Detalle = Detalle;
   Reo.Ciudad = Ciudad;
   pokemon.Gravedad = Gravedad;
  
   Reos.push(Reo);
   cargarTabla();
   Swal.fire("Registro de criminal realizado");
  
  } );