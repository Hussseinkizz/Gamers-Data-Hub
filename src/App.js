import Header from "./modules/Header";
import { DataCategories, Home, NationalOverview, Page404 } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? work around the spinner? 🤔 

const App = () => {

  return (
    <Router>
      <div
        id="app"
        className="cursor-pointer pb-24 z-auto relative"
      >
        <Header />
        <main className="pt-20 px-4 w-full h-full">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" exact component={DataCategories} />
            <Route path="/national-overview" exact component={NationalOverview} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
