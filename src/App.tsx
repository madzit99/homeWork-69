import { Route, Routes } from "react-router-dom"
import Layout from "./containers/Layout/Layout"
import Home from "./containers/Home/Home"

const App = () => {

  return (
    <>
      <Layout/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
