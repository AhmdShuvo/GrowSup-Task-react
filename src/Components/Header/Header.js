import React from 'react';
import Navigation from './Navigation';
import Search from './Search';

const Header = () => {

    
    return (
        <>
            <header>
                <div  className="section title">
                    <div  className="container">
                        <div  className="mobile">
                            <a href="#"  className="icon"><i  className="fas fa-mobile"></i><span>+8801XXX-XXXXXX</span></a>
                        </div>
                        <div  className="social">
                            <ul>
                                <a href="#"  className="icon"><li><i  className="fab fa-facebook"></i></li></a>
                                <a href="#"  className="icon"><li><i  className="fab fa-twitter-square"></i></li></a>
                                <a href="#"  className="icon"><li><i  className="fab fa-instagram"></i></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* SEARCH COMPONENT  */}
            <Search></Search>
            {/* NAVIgation Component  */}
            <Navigation></Navigation>
        </>


    );
};

export default Header;