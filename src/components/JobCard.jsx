import React, { Component } from 'react';

export default class JobCard extends Component {

	render() {
		const { job } = this.props;

		return (
			<li>
				<h3>{job.title}</h3>
				<span>{job.startDate}</span>
				<p>{job.description}</p>
			</li>
		);
	}
}