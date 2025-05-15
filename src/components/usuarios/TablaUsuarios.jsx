const TablaUsuarios = () => (
    <div className="table-responsive card p-3">
    <table className="table table-hover  w-100">
        <thead>
            <tr>
                <th>ID</th>                
                <th>NOMBRE COMPLETO</th>
                <th>CORREO</th>
                <th>ROL</th>
                <th>ESTADO</th>
            </tr>               
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>JUAN JOSE RAMIREZ PALMA</td>
                <td>JUAN.RAMIREZ@CORREO.CL</td>
                <td>Administrador</td>                
                <td>Activo</td>
            </tr>
        </tbody>

    </table>
    </div>
  )
  
  export default TablaUsuarios
