/* import { A } from '@patched/hookrouter/dist/Link';
import React, { Component } from 'react';
import { RecipeCategory } from '../../../backend/entities/recipeCategory';

export default class Category extends Component {
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
				
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={style}>
						<div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
							<label className="pt-5 mt-4 mb-3 lh-1 fw-bold">{this.props.name}</label>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="me-auto">
								</li>
								<li className="d-flex align-items-center me-3">
                                    
									<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                    <CatOverview />
                                </li>
								<li className="d-flex align-items-center">
									<svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
									
								</li>
							</ul>
						</div>
					</div>
			</div>
		)
	}
}

class CatOverview extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <div className="link-text container px-4 py-5" id="custom-cards">
                <div className="link-text row row-cols-3 row-cols-lg-5 align-items-stretch g-4 py-5">
                    {this.props.RecipeCategory.map(RecipeCategory =>
                        <Category key={categories.id} {...categories} />
                    )}
                </div>
            </div>
        )
    }
} */