import { Link } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   console.log(id,name,status,species,gender,origin,image)

   return (
      <><button className="close" onClick={() => onClose(id)} >X</button>
      <div className="card">
         <img src={image} alt='imagen' width={"100%"}/>
         <Link to={`/detail/${id}`} >
         <h4 className="card-name">{name}</h4>
         </Link>
         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
      </div>
      </> 
   );
}
