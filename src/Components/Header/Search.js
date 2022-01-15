import React from 'react';

const Search = () => {
    return (
        <div  className="section logo_search">
        <div  className="container">
            <div  className="logo">
                <a href="#"  className="icon"><i  className="fab fa-pied-piper-pp"></i></a>
            </div>
            <div  className="search">
                <div  className="search_box">
                    <form action="" method="GET">
                    <input type="search" name="search"  className="" placeholder="Type your keyword" />
                    <button type="submit"  className=""><i  className="fas fa-search"></i></button>
                        </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Search;