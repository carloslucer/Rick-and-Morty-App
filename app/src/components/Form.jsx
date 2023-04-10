export default function Form(){
    return(<div>
        <form className="form" >
            <div class="container-fluid">
            <h2>Formulario acceso</h2>
            <br/>
            <label htmlFor="">email: </label>
            <br/>
            <input type="text" placeholder="ingrese email"/>
            <br/> 
            <label htmlFor="">password: </label>
            <br/>
            <input type="password" placeholder="ingrese constraseña"/>
            <br />
            <br/>
            <button >submit</button>
            </div>
            
        </form>
        
    </div>)
}