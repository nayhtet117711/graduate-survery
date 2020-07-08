import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from "react-router-dom";

import Home from "./src/pages/home"
import SurveyForm from "./src/pages/survey-form"
import Results from "./src/pages/results"

class App extends Component {
	constructor() {
		super()
	}

	componentDidMount() {

	}

	render() {
		console.log(window.location.pathname)
		return (
			<Router>
				<div className="container-fluid-1 h-100" >
					<header className="default-header">
						<nav className="navbar navbar-expand-lg  navbar-light">
							<div className="container">
								<a className="navbar-brand" href="/">
									{/* <img width="42" src="https://www.utycc.edu.mm/stock-img/xlogo.png.pagespeed.ic.Ri0Fndsv59.webp" alt="" /> */}
									<span className="px-2 text-white utycc-title">UT-YCC</span>
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="lnr lnr-menu"></span>
								</button>
								<div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
									<ul className="navbar-nav">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About</Link></li>
										<li><Link to="/survey">Survey</Link></li>
										<li><Link to="/results">Results</Link></li>
									</ul>
								</div>
							</div>
						</nav>
					</header>

					<section className="home-banner-area">
						<div className="container">
							<div className="row justify-content-center fullscreen align-items-center" style={{ height: 817 }}>
								<div className="col-lg-6 col-md-8 home-banner-left">
									<h1 className="text-white">University of Technology<br /></h1>
									<h2 className="text-white" style={{ fontWeight: "normal" }}>(Yatanarpon Cyber City)</h2>

									<p className="mx-auto text-white  mt-20 mb-40">
										<span className="h2 text-white">&ldquo;</span>Shape and Bright Your Future at UTYCC<span className="h2 text-white">&rdquo;</span>
									</p>
								</div>
								<ImageContainer />
							</div>
						</div>
					</section>

					<section>
						<Switch>
							<Route path="/survey" component={SurveyForm} />
							<Route path="/results" component={Results} />
							<Route path="/" component={Home} />
						</Switch>
					</section>

					<footer className="footer-area section-gap">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-10 single-footer-widget pt-4">
									<h4>Contact Us</h4>
									<ul>
										<li><a className="d-flex"><i className="fa fa-phone px-2 primary-text-color pt-1" /><p>+95-025178100, +95-025178200, +95-025178103</p></a></li>
										<li><a className="d-flex"><i className="fa fa-envelope px-2 primary-text-color pt-1" /><p>info@utycc.edu.mm</p></a></li>
										<li><a className="d-flex"><i className="fa fa-envelope-o px-2 primary-text-color pt-1" /><p>most.yatanarpon@gmail.com</p></a></li>
										<li><a className="d-flex"><i className="fa fa-map-marker px-2 primary-text-color pt-1" /><p>At 28 miles on Mandalay – Lashio road, between Pyin Sar Village and Thone Taung Village, Pyin Oo Lwin, Myanmar.</p></a></li>
									</ul>
								</div>
							</div>
							<div className="footer-bottom row align-items-center">
								<div className="col-lg-6 col-md-12 footer-social justify-content-center">
									<a href="https://www.utycc.edu.mm/"><i className="fa fa-globe" title="Official website"></i></a>
									<a href="#"><i className="fa fa-facebook" title="Official facebook page"></i></a>
								</div>
							</div>
						</div>
					</footer>

				</div>
			</Router>
		);
	}

}

const ImageContainer = withRouter((props) => {
	// console.log(props.location.pathname)
	// console.log(props.location.pathname.trim() === "/")
	return (
		<div className="offset-lg-1 col-lg-5 col-md-12 home-banner-right">
			{ props.location.pathname.trim() === "/" &&
				<img style={{ display: props.location.pathname.trim() === "/" ? 'display' : 'none' }} className="img-fluid" src="https://colorlib.com/preview/theme/eclipse/img/header-img.png" alt="" />
			}
		</div>
	)
})

export default App;
