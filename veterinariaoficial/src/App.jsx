import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Masvendido from "./components/Masvendido";
import Exclusivo from "./components/Exclusivo";
import Ofertas from "./components/Ofertas";
import Testimonios from "./components/Testimonios";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import ProductosNuevos from "./components/ProductosNuevos";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />

        {showCart && <Cart setShowCart={setShowCart} />}

        <div id="Hero">
          <Hero />
        </div>

        <div id="Masvendido">
          <Masvendido />
        </div>

        <Collections />

        <div id="Exclusivo">
          <Exclusivo />
        </div>
        <div id="Producto Nuevos">
           <ProductosNuevos />
         </div>
        <div id="Ofertas">
          <Ofertas />
        </div>

        <div id="Servicios">
          <Servicios />
        </div>

        <div id="Nosotros">
          <AboutUs />
        </div>

        <div id="Contacto">
          <Contacto />
        </div>

        <div id="Testimonios">
          <Testimonios />
        </div>

        <Footer />

        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  );
};

export default App;
