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

				<div className="links">
					<a href="https://github.com/zgavin1"><i className="icon icon-github"></i></a>
					<a href="mailto:gavinzach@gmail.com"><i className="icon icon-mail"></i></a>
				</div>

				<section className="content">
					<ul className="content-list">
						<li>
							<ul className="job-list">
								{this.getJobCards()}
							</ul>
						</li>
						<li>
							<ul className="list-horizontal">
								<li><i className="icon icon-react"></i></li>
								<li><i className="icon icon-redux"></i></li>
								<li><i className="icon icon-angular"></i></li>
								<li><i className="icon icon-html5"></i></li>
								<li><i className="icon icon-css3"></i></li>
							</ul>
						</li>
					</ul>
				</section>

			</div>
		);
	}
}

export default App;
