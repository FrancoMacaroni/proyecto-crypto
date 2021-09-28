class Usuario {
  constructor(usuario, nombre, apellido, contraseña) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.contraseña = contraseña;
  }
}

function registrarse() {
  let resp = confirm("Ya estas registrado ? ");
  if (resp) {


  } else {

    let resp = confirm("Desea registrarse ?");
    if (resp) {

      let user = prompt("Ingrese usuario");
      let nombre = prompt("Ingrese nombre");
      let apellido = prompt("Ingrese apellido");
      let contraseña = prompt("Ingrese contraseña");

      let usuario_nuevo = new Usuario(user, nombre, apellido, contraseña);
      guardar_usuario(usuario_nuevo);
    }
  }
}

function buscar_usuario() {

  if (!localStorage.getItem("listaUsuarios")) {
    console.error('No hay usuarios todavia')
    return
  }

  let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
  let user = (document.getElementById('txtCorreo')).value;
  let pass = (document.getElementById('txtContraseña')).value;
  let signForm = document.getElementById('signForm')
  let found = almacenados.find((element) =>
    ((element.usuario).toLowerCase() === user.toLowerCase()) && (element.contraseña === pass))
  found !== undefined
    ? signForm.innerHTML = (`<p>Bienvenido, ${found.nombre} ${found.apellido}!</p>`)
    : console.error(`El usuario o contraseña son incorrectos`)
}

function guardar_usuario(usuario_nuevo) {

  let item = localStorage.getItem("listaUsuarios");
  if (item) {
    let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    let found = almacenados.find((element) => (element.usuario).toLowerCase() === (usuario_nuevo.usuario).toLowerCase())
    if (found === undefined) {
      almacenados.push(usuario_nuevo);
      let almacenados_string = JSON.stringify(almacenados);
      localStorage.setItem("listaUsuarios", almacenados_string);
      alert("Usuario registrado con exito");
    } else {
      alert('El usuario ingresado ya existe')
      alert('Realice nuevamente el proceso de registro')
      registrarse()
    }

  } else {

    let almacenados = new Array();
    almacenados.push(usuario_nuevo);
    let almacenados_string = JSON.stringify(almacenados);
    localStorage.setItem("listaUsuarios", almacenados_string);
  }
}