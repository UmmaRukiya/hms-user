import React from 'react';
import Header from './include/header';

import Footer from './include/footer';
import 'font-awesome/css/font-awesome.min.css';
import 'react-flaticons';
function UserLayout({children}) {
  return (
        <div id="app">
            <div id="main">
                <Header/>
                
                <main>{children}</main>
            
                <Footer/>
            </div>
                {/* Scroll Up */}
                {/* <div id="back-top" >
                    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
                </div> */}


        </div>
    )
}

export default UserLayout