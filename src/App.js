import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Projects from "./components/Projects/Projects"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import Blog1 from "./components/Blogs/Data/Blog1";
import PGWPextension from "./components/Blogs/Data/PGWPextension";
import AgriBlog from "./components/Blogs/Data/AgriBlog";
import EducationPoints from "./components/Blogs/Data/EducationPoints";
import SkilledAmount from "./components/Blogs/Data/SkilledAmount";

import Draws from "./components/Draws/Draws";
import ExpressEntry from "./components/Draws/DrawTables/ExpressEntry";
import BCpnp from "./components/Draws/DrawTables/BCpnp";
// import FavIcon from "./assets/Logos/favicon.png";


class App extends Component {
  render() {

    const meta = {
      title: 'Rhythm Immigration',
      description: 'Rhythm Immigration Consultancy Services Inc provides personalized and strategic consultancy services to individuals and families on all Canadian immigration visa categories. We help our clients to accomplish their dream of settling, living, studying and working in Canada by assessing their profiles and finding the best immigration pathways for them. Contact: +1 (604) 906-1717',
      link: {
        icon: '/web/favicon.png',
      }

    };

    return (



      <DocumentMeta {...meta}>

        <Router>
          <Navigation />
          <Switch>


            <Route exact path="/"><Home /><Footer /></Route>
            {/* <Route path="/projects"><Projects /><Footer /></Route> */}
            <Route path="/services"><Services /><Footer /></Route>

            <Route path="/blogs"><Blogs /><Footer /></Route>
            <Route path="/blog/empp"><Blog1 /><Footer /></Route>
            <Route path="/blog/pgwp-extension"><PGWPextension /><Footer /></Route>
            <Route path="/blog/agri-food"><AgriBlog /><Footer /></Route>
            <Route path="/blog/education-points"><EducationPoints /><Footer /></Route>
            <Route path="/blog/skilled-immigrant-amount"><SkilledAmount /><Footer /></Route>

            <Route path="/draws"><Draws />

              <Route path="/draws/express-entry"><ExpressEntry /> </Route>
              <Route path="/draws/bc-pnp"><BCpnp /> </Route>
              <Route path="/draws/tronto-pnp"><Blog1 /> </Route>

              <Footer /></Route>

            {/* <Route path="/faq"><Faq /><Footer /></Route>
          <Route path="/info"><Info /><Footer /></Route>
          <Route path="/about"><About /><Footer /></Route>

          <Route exact path="/main" component={Main}/>

          <Route path="/ourmusicians"><OurMusicians /><Footer /></Route>
          <Route path="/gamesrules"><GamesRules /><Footer /></Route>
          <Route path="/greenconcerts"><GreenConcerts /><Footer /></Route>


          <Route exact path="/order" component={Ordering}/>
          <Route exact path="/admin" component={Admin_Dash}/>
          <Route path="/musician/admin" component={Musician_Dash}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/musician" component={Musician}/>
          <Route path="/maps" component={Maps}/> */}


          </Switch>
        </Router>
      </DocumentMeta>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;