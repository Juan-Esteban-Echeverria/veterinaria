
// CLASE PADRE PROPIETARIO
class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    // METODO DATOS DEL PROPIETARIO
    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el numero telefonico de contacto: ${this._telefono}`
    }
}

// CLASE HIJA ANIMAL
class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    // GETTER TIPO
    get getTipo(){
        return `El tipo de animal es un: ${this._tipo}`
    }
}

// CLASE NIETA MASCOTA
class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreM = nombreM
        this._enfermedad = enfermedad
    }
    // GETTER NOMBRE MASCOTA
    get getNombreM(){
        return `, mientras el nombre de la mascota es: ${this._nombreM}`
    }
    // SETTER NOMBRE MASCOTA
    set setNombre(nuevo_nombreM){
        this._nombreM = nuevo_nombreM
    }
    // GETTER ENFERMEDAD
    get getEnfermedad(){
        return ` y la enfermedad es: ${this._enfermedad}`
    }
    // SETTER ENFERMEDAD
    set setEnfermedad(nuevo_enfermedad){
        this._enfermedad = nuevo_enfermedad
    }
}

    // GUARDANDO LOS ELEMENTOS DEL DOM EN VARIABLES
    let dueño = document.getElementById('propietario')
    let telefono = document.getElementById('telefono')
    let direccion = document.getElementById('direccion')
    let nombreMascota = document.getElementById('nombreMascota')
    let tipo = document.getElementById('tipo')
    let enfermedad = document.getElementById('enfermedad')

        // ACCESO AL BOTON
        let agregar = document.getElementById('agregar')

        // EVENTO AL BOTON
        agregar.addEventListener('click', (e)=>{
            e.preventDefault()

            //NUEVA INSTANCIA DE MASCOTA
            const mascota = new Mascota()

            // OBTENCION DE LOS VALORES INGRESADOS POR EL USUARIO Y ASIGNACION AL OBJETO DE MASCOTA
            mascota._nombre = dueño.value
            mascota._direccion = direccion.value
            mascota._telefono = telefono.value
            mascota._tipo = tipo.value
            mascota.setNombre = nombreMascota.value
            mascota.setEnfermedad = enfermedad.value

            // ACCESO AL ELEMENTO DEL DOM PARA LOS RESULTADOS
            const resultado = document.getElementById('lista')

            // IMPRESION DE LOS DATOS DEL PROPIETARIO EN EL DOM
            const li1 = document.createElement('li')
            li1.innerHTML = mascota.datosPropietario()
            resultado.appendChild(li1)

            // IMPRESION DE LOS DATOS DE MASCOTA EN EL DOM
            const li2 = document.createElement('li')
            li2.innerHTML = mascota.getTipo + mascota.getNombreM + mascota.getEnfermedad
            resultado.appendChild(li2)
        })  

