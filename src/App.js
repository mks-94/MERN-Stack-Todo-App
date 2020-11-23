import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";

import logo from "./assests/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
          >
            <img src={logo} height="30" width="30" alt="CodingTheSmartWay" />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-stack Todo App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
