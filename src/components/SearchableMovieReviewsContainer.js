import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5tyZiGiIkkHioAOfcprk3WAcxDqvq3bO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + '&query=';

class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
            
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then((reviews => {
            
            this.setState({
                reviews: reviews.results
            })
        }))
        
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
            
    render(){
        return(
            <div className='searchable-movie-reviews'>
               <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>            
            </div>
    )
    }
}
export default SearchableMovieReviewsContainer 
