import { BrowserRouter } from "react-router-dom"
import { Router } from "./Global/Routes/Router" 
import { Footer } from "./Global/components/Footer/Footer"
import { DataProvider } from "./Global/Context/DataContext"
import { Nav } from "./Global/components/Nav/Nav"

function App() {

  return (
    < DataProvider>
        <BrowserRouter>
        <Nav />
          <Router />
          <Footer />
        </BrowserRouter>
    </DataProvider>
  )
}

export default App
