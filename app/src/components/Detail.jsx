import axios from "axios"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"

const Detail = (props) => {
    const [character, setCharacter] = useState({});
    let {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              console.log(data)
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); 

    return(
        <div>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt="" />
        </div>
    )
}

export default Detail