import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/Home";
import AddTaskContainer from "./container/AddTaskContainer";
import TaskListContainer from "./container/TaskListContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(reducers);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-task" component={AddTaskContainer} />
          <Route exact path="/list" component={TaskListContainer} />
        </Switch>
      </Router>
    }
  </Provider>,
  rootElement
);
