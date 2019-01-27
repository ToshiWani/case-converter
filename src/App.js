import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CaseConverter extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange(e){
    const snake = this.snakeize(e.target.value);
    const kabab = this.kebabize(e.target.value);
    this.setState({ 
      pascal: this.pascalize(e.target.value),
      camel: this.camelize(e.target.value),
      snake: snake,
      upperSnake: snake.toUpperCase(),
      kabab: kabab,
      upperKabab: kabab.toUpperCase()
    });
  }
  
  /**
   * Convert string to camel case
   * @param {string} str 
   */
  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  /**
   * Convert string to pascal case
   * @param {string} str 
   */
  pascalize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => letter.toUpperCase())
      .replace(/\s+/g, '');
  }

  /**
   * Convert string to snake case
   * @param {string} str 
   */
  snakeize(str){
    str = str.toLowerCase();
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter : '_' + letter; 
    }).replace(/\s+/g, '');
  }

  /**
   * Convert string to kebab case
   * @param {string} str 
   */
  kebabize(str){
    str = str.toLowerCase();
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter : '-' + letter; 
    }).replace(/\s+/g, '');
  }

  render(){
    return(
      <form>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.pascal}</p>
        <p>{this.state.camel}</p>
        <p>{this.state.snake}</p>
        <p>{this.state.upperSnake}</p>
        <p>{this.state.kabab}</p>
        <p>{this.state.upperKabab}</p>
      </form>
    )
  }
}

const About = () => <h2>About</h2>;

const FunctionNameGenerator = () => (
  <div>
    <h2>Function Name Generator</h2>
    <p>To be continued...</p>
  </div>
);

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Case Converter</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">FunctionNameGenerator</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={CaseConverter} />
      <Route path="/users/" component={FunctionNameGenerator} />
      <Route path="/about/" component={About} />
    </div>
  </Router>
);

export default AppRouter;