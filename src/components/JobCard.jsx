import React, { Component } from 'react';

import './JobCard.css';

export default class JobCard extends Component {

	render() {
		const { job } = this.props;

		return (
			<li className="job-card">
				<h3>{job.title}</h3>
				<span>{job.startDate}</span>
				<p>{job.description}</p>
			</li>
		);
	}
}