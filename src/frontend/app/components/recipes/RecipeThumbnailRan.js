import React, { Component } from 'react';
import { A } from '@patched/hookrouter/dist/Link';
import './RecipeDetailView.css'
export default class RecipeThumbnailRan extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let style = {
			backgroundImage: `url('img/${this.props.thumbnail}')`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center"
		}

		return (
			<div className="col">
                <A className="link-text" href={`/recipes/${this.props.id}`}>
				<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={style}>
					<div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
						<label className="pt-5 mt-4 mb-3 lh-1 fw-bold">{this.props.title}</label>
						<ul className="d-flex list-unstyled mt-auto">
							<li className="me-auto">
							</li>
							<li className="d-flex align-items-center me-3">
								<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
								<small>{this.props.servingSize} {this.getLocalizedServingSizeString(this.props.servingSize)}</small>
							</li>
							<li className="d-flex align-items-center">
								<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
								<small>{this.props.preparationLength} min.</small>
							</li>
						</ul>
					</div>
				</div>
				</A>
				<br />
			</div>

		)
	}

	getLocalizedServingSizeString(servingSize) {
		return servingSize < 5 ? "porce" : "porcí";
	}
}