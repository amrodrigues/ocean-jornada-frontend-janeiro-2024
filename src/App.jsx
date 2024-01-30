import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    name: 'Rick Sanches',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const item2 = {
    name: 'Baby Wizard',
    image: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg'
  }

  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const itens = [ item1, item2, item3]
 return( <>
 <div className="cards">
  {/* <Card item={item1} />
     <Card item={item2}/> */}

   {itens.map( item=><Card item={item}/>)}
  </div>
  </>
  
  )
}

export default App