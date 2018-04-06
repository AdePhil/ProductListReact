import React, { PropTypes } from "react";
import ProductList from "./components/ProductList";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import './components/custom.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">A product List</h1>
        <div className="content">
          <ProductList />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
