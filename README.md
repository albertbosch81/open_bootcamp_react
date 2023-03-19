# open_bootcamp_react

# Lessons 1, 2, 3

Enunciado del ejercicio:

Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

Nombre: que será un String.

Apellido: también un String.

Email: de nuevo un String.

Conectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea

Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:

El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente

# Lessons 4, 5, 6
Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo

// import React, { Component } from 'react'
// import ‘../../styles/clock.scss’;

// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: ‘Martín’,
//          apellidos: ‘San José’
//       };
//    }
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {this.state.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{this.state.nombre} {this.state.apellidos}</h3>
//          <h1>Edad: {this.state.edad}</h1>
//          </div>
//       )
//    }
//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }
// }
// export default Clock;


# Lessons 7, 8, 9
Enunciado del ejercicio:

En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:

Mostrar contacto. Crear contacto. Eliminar contacto. Cambiar el estado del contacto entre Conectado y Desconectado.

# Lessons 10, 11, 12
Enunciado del ejercicio:

En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.

Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.

Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

# Lessons 13, 14, 15
Enunciado del ejercicio:

Partiendo del proyecto final, deberéis utilizar crear un formulario con el que crear tareas. Para hacer esto usaréis:

Formik para el formulario.

Yup para las validaciones.

# Lessons 16, 17, 18
Enunciado del ejercicio:

Crear el sistema de enrutado de la aplicación en React:

Permitir la navegación de Login a Registro y viceversa

No podremos acceder a Tareas a no ser que nos hayamos logeado primero.

# Lessons 19, 20, 21
Enunciado del ejercicio:

Hacer una petición HTTP con Axios a la API descrita en la web https://api.chucknorris.io/ y crear un Componente React capaz de generar chistes aleatorios de Chuck Norris y mostrarlos.

Debe haber un botón que permita al usuario generar nuevos chistes.

También debe mostrarse un par de botones con Material UI que permitan votar (positivamente o negativamente un chiste).

Se debe mostrar el número de chistes te "han gustado" y cuántos "te han disgustado".

# Lessons 22, 23, 24
Enunciado del ejercicio:

Replicar desde cero el ejemplo de Redux que se ha realizado en la sesión 23, es importante asegurarse de haber asimilado y entendido todos los conceptos.

Repositorio con el proyecto: https://gitlab.com/masajo/ob-react-redux.git

#Lessons 26, 27
Enunciado del ejercicio:

Utiliza useReducer y useContext para poder gestionar tareas en un proyecto de React. El proyecto debe permitir:

Crear tareas

Borrar tareas

Filtrar tareas

Repo para uso de useReducer y useContext: https://gitlab.com/masajo/ob-react-usereducer
