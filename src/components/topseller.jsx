import tick from '../assets/tick.svg'

const topSellerCard = ({count, imgSrc, cardName, sale}) => {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-card">
          <div className="profile-card-number">{count}</div>
          <div className="profile-card-pictue">
            <img src={imgSrc} alt="Girl in a jacket" />
            <div className="profile-card-tick">
              <img src={tick} alt="tick" className="profile-card-tick-image" />
            </div>
          </div>
          <div className="profile-card-text">{cardName}
            <div className="profile-card-price">{sale}</div>
          </div>
        </div>
      </div>
    </>
  )
};
export default topSellerCard;