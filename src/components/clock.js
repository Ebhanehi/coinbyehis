// In class components, "this" is used to access the component's instance variables, methods, and state.
// When a class component is instantiated, the "this" keyword refers to the instance of the component,
// and you can use it to access and manipulate the component's properties and state.

// For example, you might use "this.state" to access the component's state object, or "this.props" to access the component's props object.
import {Component} from 'react'
class Clock extends Component {
    constructor(props) {
   super(props);
   this.state = { date: new Date() };
    }
    componentDidMount() {
   this.timerID = setInterval(
    () => this.tick(),
    1000
   );
    }
    componentWillUnmount() {
   clearInterval(this.timerID);
    }
    tick() {
   this.setState({
    date: new Date()
   });
    }
    render() {
   return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
   );
    }
   }
   export default Clock