export const TareasAgregadas = ({tarea,index, handleCambiar,handleEliminar, contador}) => {
  
  return (
    <>
        <div className={tarea.realizado ? "card bg-success" : "card bg-light"} style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Tarea: {contador}</h5>
            <p className="card-text">{tarea.descripcion}</p>
            <hr />
            <div className="d-grid gap-2">
              <button onClick={() => handleEliminar(index)}className="btn btn-danger">Borrar</button>
              <button onClick={() => handleCambiar(index)} className="btn btn-info"> {tarea.realizado ? "Terminado" : "Inconclusa"} </button>
            </div>
          </div>
        </div>
    </>
  ) 
}
