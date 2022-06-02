import { Routes, Route} from "react-router-dom";
import Product from "./Product";
import Men from "./Men";
import Women from "./Women";
import ProductDetails  from "./ProdectDetails";
import Navbar from "./Navbar";
import About from "./About";
import MenDetails from "./MenDetail";
import Footer from "./Footer";
import WomenDetails from "./WomenDetails";
import Contact from "./Contact";
import Cart from "./Cart";
import "./Style.css"
import Login from "./Login";
function AllRoutes(){
   return (
    <>
    <Navbar/>
    <Routes> 
        <Route path="/" element={<Product/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Men/:id" element={<MenDetails/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Women/:id" element={<WomenDetails/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    <Footer />
    </>
    )
}
export default AllRoutes