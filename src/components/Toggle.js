// import React  from 'react';

//    class Toggle extends React.Component {
//      constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this) ;
//      }
// handleClick() {
//   this.setState(prevState => ({
//     isToggleOn: !prevState.isToggleOn
//   }));
// }

// render() {
//   return (
//     <button onClick={this.handleClick}>
//       {this.state.isToggleOn ? 'ON' : 'OFF'}
//     </button>
//    );
//  }
// }

// export default Toggle;


import React, {Component} from 'react'
   class SignInForm extends Component {
    constructor(props) {
         super(props);
         this.state = {
             email: ' ',
             password: ' ',
         };

        //  this.handleInputChange = this.handleInputChange.bind(this);
        //  this.handleSignIn = this.handleSignIn.bind(this);
     }
  
     handleInputChange = (e) => {
         const {name, value } = e.target;
         this.setState({[name]: value});
     };

     handleSignIn = () => {
         console.log('Signing in with: ', this.state.email, this.state.password );

     };

     render() {
         return( 
             <form>
               <label> Email:</label>
                <input type="email" name='email' value={this.state.email} onChange={this.handleInputChange} />
                <br></br>
              <label> Password:</label>
              <input type="password" name='password' value={this.state.password} onChange={this.handleInputChange} />
                 <br></br>
               <button type="button" onClick={this.handleSignIn}>
                    Sign In
                    </button> 
   
   
                  </form>
      );
   }

    

 }

 export default SignInForm;


//  import React from 'react'
//  import React, {useState} from 'react';

//  const SignInForm = () => {
//      const [email, SetEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignIn = () => {
//         console.log('sSigning in with: ', email, password);
//     };


    //  return(
//          <form>
// //             <label> Email:</label>
// //             <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} />
            
// //             <label> Password:</label>
// //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

// //             <button type="button" onClick={handleSignIn}>
// //                 Sign In
// //                 </button> 


// //                 </form>
//     );
//  };

// export default SignInForm;




 

// function Myform() {
//     return (
//        <form>
//        <label>Enter your name: 
//         <input type="text"  placeholder="name"/>
//         </label>

//         </form>
//     )
// }

