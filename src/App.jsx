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
 return( <>
 <div className="cards">
     <Card item={item1} />
     <Card item={item2}/>
  </div>
  </>
  
  )
}

export default App