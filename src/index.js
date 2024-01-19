// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './components/clock';
// import SignInForm from './components/SignInForm';
// import Toggle from './components/Toggle';
// import Forms from './components/FORMS/Forms'
import React from 'react';
// import Name from './components/Name';
// import Example from './components/Example';
// import{BrowserRouter,Routes,Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="blogs" element={<Blogs />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} />
//     </Route>
//    </Routes>
//  </BrowserRouter>
   <React.StrictMode>
  
     <App />
   </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
