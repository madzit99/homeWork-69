import { Route, Routes } from "react-router-dom"
import Layout from "./containers/Layout/Layout"
import Home from "./containers/Home/Home"
import ShowInfo from "./containers/ShowInfo/ShowInfo";

const App = () => {

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<ShowInfo />} />
        <Route path="*" element={<h1>Ничего не найдено!</h1>} />
      </Routes>
    </>
  );
}

export default App
