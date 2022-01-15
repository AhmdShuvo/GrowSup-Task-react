import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
	const {user,LogOUt}=useAuth();
    return (
        <div  className="section navigation_bar">
			<div  className="container">
				<div  className="nav">
					<ul>
						<li><a href="/" >Home</a></li>
						<li><a href="/about" >About us</a></li>
						<li><a href="#" >Gallery</a></li>
						<li><a href="contact" >Contact us</a></li>
						<li><a href="/register" >Registration</a></li>
						<li><a href="/dashboard" >dashboard</a></li>
						<li onClick={LogOUt} >{ user.email ? <a href="/home" >Logout</a>: <a href="/login" >Login</a>}</li>
					</ul>
				</div>
			</div>
		</div>
    );
};

export default Navigation;