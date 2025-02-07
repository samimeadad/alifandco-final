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
import PersonalServices from "./Pages/Services/PersonalServices";
import BusinessServices from "./Pages/Services/BusinessServices";
import Member1 from "./Pages/CoreTeam/Member1";
import Member2 from "./Pages/CoreTeam/Member2";
import Blog1 from "./Pages/Blog/Blog1";
import Blog2 from "./Pages/Blog/Blog2";
import Blog3 from "./Pages/Blog/Blog3";
import Member4 from "./Pages/CoreTeam/Member4";
import Member5 from "./Pages/CoreTeam/Member5";
import Member6 from "./Pages/CoreTeam/Member6";


function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/core-team" element={ <CoreTeam /> } />
        <Route exact path="/core-team/member-1" element={ <Member1 /> } />
        <Route exact path="/core-team/member-2" element={ <Member2 /> } />
        <Route exact path="/core-team/member-4" element={ <Member4 /> } />
        <Route exact path="/core-team/member-5" element={ <Member5 /> } />
        <Route exact path="/core-team/member-6" element={ <Member6 /> } />
        <Route exact path="/services" element={ <Services /> } />
        <Route exact path="/business-services" element={ <BusinessServices /> } />
        <Route exact path="/personal-services" element={ <PersonalServices /> } />
        <Route exact path="/career" element={ <Career /> } />
        <Route exact path="/blog" element={ <Blog /> } />
        <Route exact path="/blog/blog-1" element={ <Blog1 /> } />
        <Route exact path="/blog/blog-2" element={ <Blog2 /> } />
        <Route exact path="/blog/blog-3" element={ <Blog3 /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="*" element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;