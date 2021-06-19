import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Form from './Form';
import File from './File';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route path="/file/:id">
          <File />
        </Route>
        <Route path="/">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
