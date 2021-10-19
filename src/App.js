import Header from "./components/header";
import GlobalStyle from "./components/styles/GlobalStyle";
import { Router } from 'react-router-dom'
import history from "./routes/history";
import Routes from "./routes";


function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Header/>
          <Routes/>
          <GlobalStyle/>
          </Router>
    </div>  
  );
}

export default App;
