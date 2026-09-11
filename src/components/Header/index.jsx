import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Header() {
  return (
	<div className="screen">
		<header>
			<nav className="navbar">
                <h1> Superheroes</h1>
				<NavLink className="nav-links" to="/">Home</NavLink>
                <NavLink className="nav-links" to="/heroes">Heroes</NavLink>
                <NavLink className="nav-links" to="/search">Search</NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
  )
}