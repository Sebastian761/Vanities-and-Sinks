import { BrowserRouter } from "react-router-dom"
import { Router } from "./Global/Routes/Router" 
import { Footer } from "./Global/components/Footer/Footer"
import { DataProvider } from "./Global/Context/DataContext"

function App() {

  return (
    < DataProvider>
        <BrowserRouter>
          <Router />
          <Footer />
        </BrowserRouter>
    </DataProvider>
  )
}

export default App
