import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5tyZiGiIkkHioAOfcprk3WAcxDqvq3bO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then((reviews => {
            
            this.setState({
                reviews: reviews.results
            })
        }))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
                
            </div>
        )
    }
}
export default LatestMovieReviewsContainer