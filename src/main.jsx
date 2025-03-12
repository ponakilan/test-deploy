
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from "./Header.jsx"
import ListOfIngredients from "./list.jsx"
createRoot(document.getElementById('root')).render(
  <>
    <HeaderComponent />
    <ListOfIngredients />
  </>
  
)
