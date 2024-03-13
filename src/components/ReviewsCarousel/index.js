import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRight = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-btn"
            onClick={this.onClickLeft}
            type="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="review-details">
            <img className="image" src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            className="arrow-btn"
            onClick={this.onClickRight}
            type="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
