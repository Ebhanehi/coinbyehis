// import logo from './logo.svg';
// import React, { Component } from "react"
// import './App.css';
// import Greet  from './components/Greet.js'
// import Welcome from './components/Welcome.js'
// import Hello from './components/Hello.js'


// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Welcome/>
//       <Hello/>
//       <Clock/>

    
//     </div>
//   );
// }

// export default App;




// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleCount = this.handleCount.bind(this);
//   }
//   handleCount() {
//     this.setState({count: this.state.count + 1 })
//   }
//   render(){
//     return(
//       <div>
//         <h2>Click Counter</h2>
//         <p>You have clicked me {this.state.count} times </p>
//         <button onClick={this.handleCount}>Click me</button>
//           </div>
//       );
//     }
//   }

// export default App;

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Food from "./components/Food";
// function App() {
//     return(
//         <>
//         <Header></Header>
//         <Food></Food>
//         <Footer></Footer>
//         </>
//     )
      
// }

// export default App;



// import Card from "./components/Card";
// function App() {
//     return(
//         <>
//         <Card/>
//         </>
//     )
      
// }

// export default App;


// import Homemed from "./components/Medplan/Homemed.js";
import Navbar from "./components/Medplan/Navbar.js";
import Imagemed from "./components/Medplan/Imagemed.js";
import Philosophy from "./components/Medplan/Philosophy.js";


function App() {
    return(
        <div className="App">
        {/* <Homemed/> */}
        <Navbar/>
        <Imagemed/>
        <Philosophy/>


        </div>
    )
}

export default App
