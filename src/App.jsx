import './App.css'
import Card from './components/Card/Card'

//import { useEffect, useState } from 'react';

// function App() {
//   const [characterList, setCharacterList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://rickandmortyapi.com/api/character');
//         const data = await response.json();
//         const simplifiedData = data.results.map(({ name, image }) => ({ name, image }));
//         setCharacterList(simplifiedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="cards">
//       {characterList.map((item, index) => (
//         <Card item={item} key={index} />
//       ))}
//     </div>
//   );
// }

function App (){
     
  const item1 = {
     name: 'Rick Sanches',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    ,texto : {
      estatus: 'Vivo',
      especie: 'Humana',
      origem: 'Terra '
    } 
  }

   const item2 = {
     name: 'Baby Wizard',
     image: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg'
     ,texto : {
      estatus: 'Vivo',
      especie: 'Humana',
      origem: 'Terra C-137'
    }
    }

  const item3 = {
   name: 'Summer Smith',
   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' ,
   texto : {
    estatus: 'Vivo',
    especie: 'Humana',
    origem: 'Terra '
  }
  }
  const itens =   [ item1, item2, item3]

  
 return( <>
 <div className="cards">
  {/* <Card item={item1} />
     <Card item={item2}/> */}

   {itens.map( (item,i)=><Card item={item} key={i}/>)}
  </div>
  </>
  
  )
}

 
export default App;