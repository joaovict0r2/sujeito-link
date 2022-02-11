import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Links from './pages/Links'
import NotFound from "./pages/NotFound";

function RoutesApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mylinks" element={<Links />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;