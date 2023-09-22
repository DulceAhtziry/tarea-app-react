import { useEffect, useReducer, useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { FormularioTareas } from "./components/FormularioTareas/FormularioTareas"
import { Header } from "./components/Header/Header"
import { TareasAgregadas } from "./components/TareasAgregadas/TareasAgregadas"
import { tareaReducer } from "./reducers/tareaReducer"
import Swal from 'sweetalert2'


export const App = () =>{
    const init = () => {
        return JSON.parse(localStorage.getItem("tareas")) || []
    }
    const [state, dispatch] = useReducer(tareaReducer, [], init)

    const[descripcion,setDescripcion] = useState("")

    useEffect(() => {
      localStorage.setItem("tareas", JSON.stringify(state))
    }, [state])
    

    const handleInputChange = (evento) =>{
        setDescripcion(evento.target.value)
        console.log(descripcion);
    }

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        console.log(evento);
        if (descripcion.trim() === "") {
            Swal.fire("La descripción de la tarea no puede estar vacía.");
            return; // Detiene la función si la tarea está vacía
          }
        const tareaNueva = {
            id: new Date().getTime(),
            descripcion: descripcion,
            realizado: false
        }
    
        const action = {
            type: "agregar",
            payload: tareaNueva
    
        }
        dispatch(action)
        setDescripcion("")
    }

    

    const handleCambiar = (id) => {
        dispatch({
            type: "cambiar",
            payload: id
        })
       
    }
    
    const handleEliminar = (id) => {
      Swal.fire({
        title: 'Estas seguro de borrarlo?',
        text: "Si se borra ya no se podra recuperar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "borrar",
            payload: id
        })
          Swal.fire(
            'Eliminado!',
            'Se borro.',
            'success'
          )
        }
      })
       
    }

    let terminadas = 0;
    for(let i = 0; i < state.length; i++){
        if (state[i].realizado === true) {
            terminadas++;
        }
    }
    
    let porcentaje = terminadas / state.length

    return (
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 order-1 order-md-1 mx-auto">
                    <FormularioTareas  descripcion={descripcion} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
                </div>
                <div className="col-12 col-md-8 order-2 order-md-2 mt-4">
                    <div className="row justify-content-center"> 
                        {
                            state.map((tarea, index) => {
                            return <TareasAgregadas key={index} tarea={tarea} porcentaje={porcentaje} handleCambiar={handleCambiar} handleEliminar={handleEliminar}  index={tarea.id} contador={index +1} />
                            })
                        }
                        
                    </div>
                </div>

            </div>
        </div>
        <Footer porcentaje={porcentaje}/>
        
        </>
    )
}
//const App = () => <h1>holamundo</h1> esta es la opcion mas condensada

