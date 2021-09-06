import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './index.css';
import App from './App';
// import Counter from './Counter';
import Blog from './shop/Blog';
import blogDetail from './shop/blogDetail';
import Home from './shop/Home';
import Footer from './shop/Footer';
import Header from './shop/Header';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(
  <div>
    {/* <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/blogdetail' component={blogDetail} />
        </Switch>
      </App>
    </Router> */}
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>


  </div>, document.getElementById('root'))
// < App />
// document.getElementById('root')
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
