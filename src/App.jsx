import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { useEffect } from "react";

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTopOnPageChange />
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
        <Footer className="mt-[100px]" />
      </HashRouter>
    </>
  );
}

export default App;
