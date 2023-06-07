
import './Necflis.css'
import { useState, useEffect } from 'react'


const Necflis = () => {
  {
    /*
    El hook useState es una de las herramientas fundamentales en React para manejar el estado en una 
    aplicacion , Es una forma de crear y actualizar variables de estado en un componente de react sin
    tener que escribir una clase completa . 
    */
  }
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const MY_KEY = "6492ab37";

  useEffect(() => {

    fetch(`http://www.omdbapi.com/?apikey=${MY_KEY}&s=${busqueda}`)
      //convertimos la respuesta en un Archivos de formato JSON 
      .then(respuesta => respuesta.json())
      .then(data => setPeliculas(data.Search))
      .catch(error => console.log(error))


  }, [busqueda])

  //Funcion manejador de eventos submit
  const handleSubmit = (event) => {
    //Cancela el evento si este es cancelable, 
    //sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    event.preventDefault();
    //Guardamos el valor cargado por el usuario en la variable busqueda
    setBusqueda(event.target.busqueda.value)
    //Vaciamos el campo busqueda
    event.target.busqueda.value = "";

  }

  

  return (
    <div>
      <h1>Necflis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="busqueda" />
        <button type='submit'>Buscar</button>
      </form>

      <ul>
        {
          peliculas === undefined ? <h2>La pelicula no esta disponible en nuestra base de datos</h2> : 
          peliculas.map(peli => (<li key={peli.imdID}><img src={peli.Poster} alt="" /> {peli.Title} </li>))
        }
      </ul>
    </div>
  )
}


export default Necflis