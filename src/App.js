import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
// import FavIcon from "./assets/Logos/favicon.png";


class App extends Component {
  render() {

    const meta = {
      title: 'Rhythm Immigration',
      description: 'Rhythm Immigration Website. We offer Canadian Immigration Services.',
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
            <Route path="/projects"><Projects /><Footer /></Route>
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