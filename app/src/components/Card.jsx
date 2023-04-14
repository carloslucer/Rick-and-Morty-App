import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";



export default function Card({id,name,status,species,gender,origin,image,onClose,}) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()
   const favorites = useSelector(state => state.myFavorites)
   
   function handleFavorite() {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id)) 
      }
      else{
         setIsFav(true)
         dispatch(addFav({id,name,status,species,gender,origin,image,onClose,}))
      }
   }
   
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   return (
      <>
         <button className="close" onClick={() => onClose(id)}>
            X
         </button>
         <div className="card">
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
            <img src={image} alt="imagen" width={"100%"} />
            <Link to={`/detail/${id}`}>
               <h4 className="card-name">{name}</h4>
            </Link>
            <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4>
         </div>
      </>
   );
}
