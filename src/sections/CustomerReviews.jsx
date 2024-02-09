import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="mt-4 m-auto info-text text-center max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-1 gap-14 justify-evenly items-center max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews
