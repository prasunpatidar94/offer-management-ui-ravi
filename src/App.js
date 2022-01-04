
import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Offers from "./pages/Offers";


function App() {
  return (
    <>
      <BrowserRouter basename="/Offers" >
        <Switch> 
          <Route exact path="/" component={Offers} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;


    // "react-router-dom": "^5.3.0",
