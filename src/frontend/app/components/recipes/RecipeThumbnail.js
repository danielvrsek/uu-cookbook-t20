import React, { Component } from 'react';

export default class RecipeThumbnail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);

		return (
			<div className="col">
				<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('img/unsplash-photo-1.jpg')", backgroundSize: "contain"}}>
					<div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
						<label className="pt-5 mt-4 mb-3 lh-1 fw-bold">{this.props.name}</label>
						<ul className="d-flex list-unstyled mt-auto">
							<li className="me-auto">
							</li>
							<li className="d-flex align-items-center me-3">
								<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
								<small>{this.props.mealCount} porce</small>
							</li>
							<li className="d-flex align-items-center">
							<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
								<small>{this.props.preparationMin} min.</small>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}

	renderMealCount
}