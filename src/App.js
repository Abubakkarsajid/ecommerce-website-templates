import { Route, Routes } from "react-router-dom";
import { Footer } from "./comoents/Footer";
import { Navbar } from "./comoents/Navbar";
import { About } from "./files/About";
import { Cards } from "./files/Cards";
import { HeroSection } from "./files/HeroSection";
import Notfound from "./files/404Notfound";
import { SomeProducts } from "./files/SomeProducts";
import { Salecard } from "./files/Salecard";
import ProductDetails from "./files/SelectProduct";
import { BuyOrder } from "./files/Order/BuyOrder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <SomeProducts />
              {/* <SingleCard /> */}
              <Salecard />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Cards />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/shop/buy/:id" element={<BuyOrder />} />

        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
