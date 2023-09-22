

export const FormularioTareas = ({descripcion,handleSubmit,handleInputChange}) => {
  return (
    <>
      
      <h3>Agregar tarea</h3>
      <hr />
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="tareaInput" className="form-label">Descripción</label>
            <input onChange={(e) => handleInputChange(e)} value={descripcion} type="text" className="form-control" id="tareaInput" aria-describedby="descripcion"/>
            <div id="descripcion" className="form-text">Agrega la tarea</div>
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-success">Agregar</button>
        </div>
      </form>  
    </>
  )
}
