import Header from './modules/Header';
import * as Pages from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//? work around the spinner? 🤔
//todo: provide font fallbacks for wordmark, test css helper libs

const App = () => {
  return (
    <Router>
      <div id="app" className="cursor-pointer pb-24 z-auto relative">
        <Header />
        <main className="pt-20 px-4 w-full h-full">
          <Switch>
            <Route exact path="/" component={Pages.Home} />
            <Route exact path="/categories" component={Pages.DataCategories} />
            <Route
              exact
              path="/sub-categories"
              component={Pages.SubDataCategories}
            />
            <Route
              exact
              path="/national-overview"
              component={Pages.NationalOverview}
            />
            <Route path="*" exact component={Pages.Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
