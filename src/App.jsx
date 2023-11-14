import { puppyList } from './data.js'
import { useState } from 'react' 
import './App.css' 

const App = () => {
  const [puppies, setPuppies] = useState(puppyList)
  
  console.log(puppyList);

  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p>{puppy.name}</p>
        })
      }
    </div>
  )
}

export default App
