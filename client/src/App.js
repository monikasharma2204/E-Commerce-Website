
import ReactDOM from "react-dom/client";
import "./index.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import {useDispatch} from 'react-redux'
import { fetchCategories } from "./redux/categorySlice";
import Collection from "./pages/collection/Collection";
import Payments from "./components/payments/Payments";


function App() {
         
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

 return (
        <div className="App">
            <Navbar />
            <main>

            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/category/:categoryId?"
                        element={<Collection />}
                    />
                    
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                       <Route
                        path="/payments/:status"
                        element={<Payments />}
                    />
                    
              
              
                </Routes>
               
                
                </main>
        

                <Footer />
    </div>
        
                
    );

}
export default  App;
// if u want to create  a optional parameter then write a ? after  the parameter name 