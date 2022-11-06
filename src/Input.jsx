import React from 'react'

const Input =({nombre, setNombre, password, setPassword}) => {

    return(
        <div className="Formato">
            <h5>Nombre</h5>
            <input type="text" className = "form-control-sm" placeholder="Ingresa usuario" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
               <h6>Contraseña</h6>
            <input type="password" className = "form-control-sm" placeholder="Ingresa contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

    )
}
export default Input