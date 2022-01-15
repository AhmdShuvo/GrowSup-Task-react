import React from 'react';

const Contact = () => {
	return (
		<div>
			<div className="section contact_us">
				<div className="container">
					<h1>Contact Me</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="contact">
						<div className="contact_form">
							<h2 style={{ textAlign: "left" }}>Send Me a Message</h2>
							<form action="" method="POST">
								<input type="text" name="" placeholder="Full Name" />
								<input type="email" name="" placeholder="Email Address" />
								<input type="tel" name="" placeholder="Mobile Number" />
								<input type="text" name="" placeholder="Subject" />
								<textarea name="" placeholder="Message" rows="5"></textarea>
								<input type="submit" value="Send" />
							</form>

						</div>
						<div className="contact_map">

							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1069.187880022944!2d-74.0095758173678!3d40.71537472592485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1edc8120db%3A0x311cbe02e630426!2sStarbucks!5e0!3m2!1sen!2sbd!4v1537091912569" width="600" height="450" frameBorder="0"></iframe>

						</div>
					</div>
				</div>
			</div>
		</div>


	);
};

export default Contact;