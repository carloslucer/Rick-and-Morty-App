import { useState } from "react"
import { useNavigate } from "react-router-dom"
import validation from "./validation"

export default function Form(){
 const [userData, setuserData] = useState({email:"",password:""})
 const [errors, setErrors] = useState({email:"",password:""})
 const navigate = useNavigate()

 const hanletOnchange = (event) => {
    console.log(event)
    setuserData({...userData,[event.target.name] : event.target.value})
    setErrors(validation({...userData,[event.target.name] : event.target.value}))
 }

function handleSubmit(event) {
    event.preventDefault()
    setuserData({...userData,
               email:"",
               password:"" })
   
    navigate("/home")
}

 return(<div>
        <form className="form" onSubmit={handleSubmit}>
            <div class="container-fluid">
            <h2>Formulario acceso</h2>
            <br/>
            <label htmlFor="">email: </label>
            <br/>
            <input value={userData.email} name="email" type="email" placeholder="ingrese email" onChange={hanletOnchange} />
            <br/> 
            <p>
                {errors.email}
            </p>
            <label htmlFor="">password: </label>
            <br/>
            <input name="password" value={userData.password} onChange={hanletOnchange} type="password" placeholder="ingrese constraseña"/>
            <br />
            <p>
                {errors.password}
            </p>
            <br />
            <button disabled={!userData.email || !userData.password || errors.email || errors.password} >submit</button>
            </div>
            
        </form>
        
    </div>)
}