import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

export default function Navbar() {
	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3" style={{ paddingInline: '110px' }}>
				<div className="container-fluid">
					<Link className="navbar-brand text-warning" to="/">BlogHub</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">Home</Link>
							</li>
							{/*
							<li className="nav-item">
								<Link className="nav-link" to="/business">Business</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/entertainment">Entertainment</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/health">Health</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/science">Science</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sports">Sports</Link>
							</li>
							 */}


							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Categories
								</a>
								<ul class="dropdown-menu">
									<li><Link class="dropdown-item" to="#">Business</Link></li>
									<li><Link class="dropdown-item" to="#">Entertainment</Link></li>
									<li><Link class="dropdown-item" to="#">Health</Link></li>
									<li><Link class="dropdown-item" to="#">Science</Link></li>
									<li><Link class="dropdown-item" to="#">Sports</Link></li>
									<li><Link class="dropdown-item" to="#">Technology</Link></li>
								</ul>
							</li>


							<li className="nav-item">
								<Link className="nav-link" to="/help">Help</Link>
							</li>
						</ul>
						<form className="d-flex">
							<input className="form-control me-2 text-primary" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-warning" type="submit">Search</button>
						</form>
						<img className="user_icon mx-3" src="user-regular.svg" style={{ color: "white", height: '25px' }} data-tooltip-variant="light" />
						<Tooltip anchorSelect=".user_icon" place="bottom">
							User Profile
						</Tooltip>
					</div>
				</div>
			</nav>
		</>
	)
}
