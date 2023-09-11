import { BrowserRouter } from "react-router-dom"
import { Router } from "./Global/Routes/Router" 
import { NextUIProvider } from "@nextui-org/react"
import { Footer } from "./Global/components/Footer/Footer"

function App() {

  return (
    <NextUIProvider>
        <BrowserRouter>
          <Router />
          <Footer />
        </BrowserRouter>
    </NextUIProvider> 
  )
}

export default App
