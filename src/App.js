import logo from './logo.svg';
import './App.css';
import Routes from "./routes/routes";
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="main-wrapper">
        {Routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return <div>{route.component(props)}</div>;
            }}
          />
        ))}

      </div>
    </HashRouter>
  );
}

export default App;
