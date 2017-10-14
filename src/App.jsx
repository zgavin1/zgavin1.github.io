import React, { Component } from 'react';
import JobCard from './components/JobCard';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.getJobCards = this.getJobCards.bind(this);
	}

	getJobCards() {
		const jobs = [
			{
				title: 'Think Company',
				startDate: 'July 2016',
				description: 'An award-winning design consultancy in Philadelphia, I\'ve worked on a range of projects from Wordpress CMSs to Angular and React SPAs.'
			},
			{
				title: 'Quill',
				startDate: 'March 2016',
				description: 'An educational technology company, building software resources to teach critical writing skills. I learned on the job working on their suite of React-Redux applications.'
			}
		];

		return jobs.map((job, idx) => <JobCard key={idx} job={job} />);
	}

	render() {
		return (
			<div className="main">

				<header className="title">
					<h1 className="title-header">Hi - my name is Zach.</h1>
					<p className="title-info">I'm a UI Engineer.</p>
				</header>

				<section className="content">
					<ul>
						<li>
							Experience
							<ul>
								{this.getJobCards()}
							</ul>
						</li>
						<li>
							Skills
							<ul className="list-horizontal">
								<li>React<i className="icon icon-react"></i></li>
								<li>Redux<i className="icon icon-redux"></i></li>
								<li>Angular<i className="icon icon-angular"></i></li>
								<li>HTML5<i className="icon icon-html5"></i></li>
								<li>CSS<i className="icon icon-css3"></i></li>
							</ul>
						</li>
						<li>
							Links
							<ul className="list-horizontal">
								<li><a href="/">GitHub</a></li>
								<li><a href="/">LinkedIn</a></li>
								<li><a href="/">Twitter</a></li>
							</ul>
						</li>
					</ul>
				</section>

				<footer>
					<p>Contact me at <a href="mailto:gavinzach@gmail.com">gavinzach@gmail.com</a></p>
				</footer>

			</div>
		);
	}
}

export default App;
