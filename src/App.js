import React from 'react';

import Header from './components/Header';
// import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {

    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App;
