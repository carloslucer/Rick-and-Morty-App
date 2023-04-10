import { Link } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   console.log(id,name,status,species,gender,origin,image)

   return (
      <div>
         {<><button  onClick={() => onClose(id)} >X</button>
         <h2>{id}</h2>
         <Link to={`/detail/${id}`} >
         <h3 className="card-name">{name}</h3>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='imagen' /></> }
      </div>
   );
}
