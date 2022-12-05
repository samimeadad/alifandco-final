import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import CoreTeam from './Pages/CoreTeam/CoreTeam';
import Services from './Pages/Services/Services';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Career from './Pages/Career/Career';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";


function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/coreteam" element={ <CoreTeam /> } />
        <Route exact path="/services" element={ <Services /> } />
        <Route exact path="/career" element={ <Career /> } />
        <Route exact path="/blog" element={ <Blog /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="*" element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
