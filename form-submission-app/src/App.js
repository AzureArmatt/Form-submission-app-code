import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Policy from "./pages/Policy";
import Summary from "./pages/Summary";

function App() {
  const [linkClicked, setLinkClicked] = useState(0);
  
  return (
    <div>
      <nav className="navigation">
        <ul className="links">
          <NavLink to="/home" className="navlink" activeStyle={{color: "yellow"}}>Home</NavLink>
          <NavLink to="/privacy" className="navlink" activeStyle={{color: "yellow"}}>Privacy policy</NavLink>
        </ul>
      </nav>
      <Route path="/" exact>
        <Redirect to="/home"/>
      </Route>
      <Route path="/home" exact>
        <Home onLinkClick={setLinkClicked}/>
      </Route>
      <Route path="/form" exact>
        <Redirect to="/home"/>
      </Route>
      <Route path="/form/:code">
        {linkClicked === 1 ? <Form clicked={linkClicked}/> : <Redirect to="/home"/>}
      </Route>
      <Route path="/privacy">
        <Policy />
      </Route>
      <Route path="/summary">
        <Summary />
      </Route>
    </div>
  );
}
//dokonczyc FORM, zrobic ekran potwierdzenia, 
//zrobic strone na netlify jak mozna, wyslac odpowiedz
export default App;
