import { RouterProvider } from "react-router-dom"
import MyProvider from "./provider/MyProvider"
import { router } from "./routes/Router"


function App() {
  

  return (
    <>
      <MyProvider>
        <RouterProvider router={router}/>
      </MyProvider>
    </>
  )
}

export default App
