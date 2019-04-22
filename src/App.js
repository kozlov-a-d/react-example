import React from 'react';

import Header from './components/Header';
// import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// function App () {
//     return (
//         <div>
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
//         </div>
//     )
// }
function App () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;
