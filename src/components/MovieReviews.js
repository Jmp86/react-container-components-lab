import React from 'react'

function MovieReviews(props) {
    return <div className='review-list'>
        {props.reviews.map(review => {
            
            return  <div className='review'>
            <h2>{review.display_title}</h2>
            <img src={review.multimedia.src} alt={review.display_title}/>
            <p>{review.summary_short}</p>
            <p>Critics Pick: {review.critics_pick}</p>
            </div>}
            )}
    </div>
}

export default MovieReviews