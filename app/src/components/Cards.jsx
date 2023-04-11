import Card from './Card';

export default function Cards({characters,onClose}) {
   console.log("hola")
   console.log(characters)
   return <div className='container'>
       {characters.map(personaje => {
         return<div key={personaje.id}> 
            <Card  id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={onClose}/>
         </div>
      })} 
   </div>;
}
