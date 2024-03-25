import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  SignUp,
  Wishlist,
  Cart,
  Billing,
  Error,
} from "./pages";
import { Navbar, Footer } from "./sections";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/billing" element={<Billing />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
