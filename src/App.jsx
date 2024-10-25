

import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
      
     <Header></Header>
     <main className='md:flex'> 
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </main>
      
    </>
  )
}

export default App
