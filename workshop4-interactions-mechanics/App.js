import React from "react"
import { Router } from "@reach/router"
import "./variables.scss"
import "./styles.scss"
import Header from "workshop4-components/header"
import ComponentSandbox from "./component-sandbox"
import HomePage from "workshop4-components/page-home"
import AboutPage from "workshop4-components/page-about"
import SubmitListingPage from "workshop4-components/page-submit-listing"
import HikesPage from "workshop4-components/page-adventures-hikes"
import ListingsPage from "workshop4-components/page-listings"
import Listing from "workshop4-components/page-listing-detail"
import KeyboardExercise from "./exercise2-focus-management-js/page-listing-detail"
import ScreenReaderExercise from "./exercise3-screen-reader-overlap/page-listing-detail"
import AnnouncementsExercise from "./exercise4-announcements-with-AT/page-submit-listing"
import AppScriptingPage from "./exercise5-advanced-scripting-ARIA/page-adventures-hikes"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/workshop4-interactions-mechanics/" />
				<AboutPage path="/workshop4-interactions-mechanics/about" />
				<SubmitListingPage path="/workshop4-interactions-mechanics/submit-listing" />
				<HikesPage path="/workshop4-interactions-mechanics/adventures-hikes" />
				<ListingsPage path="/workshop4-interactions-mechanics/listings" />
				<Listing path="/workshop4-interactions-mechanics/listing/:id" />
				<KeyboardExercise path="/workshop4-interactions-mechanics/exercise2/:id" />
				<ScreenReaderExercise path="/workshop4-interactions-mechanics/exercise3/:id" />
				<AnnouncementsExercise path="/workshop4-interactions-mechanics/exercise4/submit-listing" />
				<AppScriptingPage path="/workshop4-interactions-mechanics/exercise5/adventures-hikes" />
				<ComponentSandbox path="/workshop4-interactions-mechanics/component-sandbox" />
			</Router>
		</main>
		<footer id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}
