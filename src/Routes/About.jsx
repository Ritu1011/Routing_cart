import "./Style.css"
function About(){
    return(
        <>
      	<div id="navbar"></div>
	<div>
		<div className="about-bg">
			<div>
				<p>About Theory</p>
				<div className="about-link">
					<p>Origin</p>
					<div className="pip--line"></div>
					<p>Philosophy</p>
					<div className="pip--line"></div>
					<p>Future</p>
				</div>
			</div>
		</div>

		<div className="about-1">
			<div className="about-img">
				<img src="https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle11desktop" />
			</div>
			<div className="about-detail">
				<div className="about-mod">01</div>
				<div className="about-header-mod">Origin</div>
				<p>
					Twenty years ago, a pair of pants changed the way American women dress. Recognizing the need for clothes that felt great and fit perfectly, we developed an innovative stretch fabric that would dramatically improve a pant’s performance. These pants had the power to make women feel confident, smart, and stylish. Never before had American sportswear been so easy to wear to work and everywhere else.
				</p>
				<p>
					When Theory for men was established, similar foundation principles were used, so that they, too, could get dressed in innovative, highly functional, and stylish clothes.
				</p>
				<p>
					Watch award-winning filmmakers Jun Diaz and N + N Films's tribute to our 20-year history, New York City heritage, and vision for the future.
				</p>
			</div>	

		</div>
		<div className="about-2">
			<img src="https://cdn.media.amplience.net/i/theory/aboutusrectangle1desktop"/>
		</div>
		<div className="about-3">
			<div className="about3--detail">
				<div className="about-mod">02</div>
				<div className="about-header-mod">Philosophy</div>
				<p>
					We believe cool, expertly tailored pieces made from the best materials have the power to change the way we feel, improve the way we work, and inspire the way we live.
				</p>
			</div>
			<div className="about-philosophy">
				<div className="philo-bg-1">
					<div className="about-philo-detail">
						<h2>Fit</h2>
						<p>
							Our commitment to design, fit, and construction ensures exceptional comfort and quality.
						</p>
					</div>
				</div>
				<div className="philo-bg-2">
					<div className="about-philo-detail">
						<h2>Fabric</h2>
						<p>
							We source our materials from the best mills in the world and test every fabric for its hand-feel, durability, and design.
						</p>
					</div>
				</div>
				<div className="philo-bg-3">
					<div className="about-philo-detail">
						<h2>Style</h2>
						<p>
							Versatile, sophisticated, and easy to wear, our seasonal collections are designed with purpose.
						</p>
					</div>
				</div>
			</div>
		</div>

	</div>
        </>
    )
}
export default About