// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hi, This is my first jsx statement</h1>
//       </header>
//     </div>
//   );
// }

// export default App;


// necessary features in component files

// library import(optional)
import React from 'react'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

// body - react functional component
function App(props){
  return(
    <div>
        <h1>React Functional Component</h1>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
    </div>
  )
}

// export
export default App;