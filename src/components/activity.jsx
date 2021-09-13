import Nav from './commonComponents/navbar'
import { hotbid } from '../data/dummyData';
import { tags } from '../data/dummyData';
import icon from '../assets/icon.svg'
function Activity() {
  return (
    <div>
      <Nav />
      <div className="activity-main-container">
        <div className="activity-main-container-box">
          <div className="activity-box">
            <span className="activity-text">Activity</span>
            <div className="all-text-box">
              <span className="all-text">All</span>
            </div>
            <div className="all-main-container">
              <div className="all-activites-container">
                {hotbid.map(bid => (
                  <div className="activity-card-container">
                    <div className="activity-card-left">
                      <div className="activity-card-green-tick">
                        <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg"><path d="M1 5L5 9L13 1" stroke="#fff" stroke-width="2" stroke-linecap="round"></path></svg>
                      </div>
                      <img src={bid.imgSrc} alt="picture" />
                    </div>
                    <div className="activity-card-right">
                      <div className="activity-card-username">hominums</div>
                      <div className="activity-card-username-desc">started following Reaper’s🏔Valhalla</div>
                      <div className="activity-card-username-time">23 minutes ago</div>
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
          <div className="all-filter-container">
            <div className="activity-card-heading">filter
            </div>
            <div className="activity-card-tag-container">
              {
                tags.map(tag => (
                  <div className="activity-card-tag">
                    <div className="activity-card-icon">
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3V7.58579C2 7.851 2.10536 8.10536 2.29289 8.29289L7.29289 13.2929C7.68342 13.6834 8.31658 13.6834 8.70711 13.2929L13.2929 8.70711C13.6834 8.31658 13.6834 7.68342 13.2929 7.29289L8.29289 2.29289C8.10536 2.10536 7.851 2 7.58579 2H3C2.44772 2 2 2.44772 2 3ZM4.75 5.5C5.16421 5.5 5.5 5.16421 5.5 4.75C5.5 4.33579 5.16421 4 4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5Z" fill="#000"></path></svg>                      </div>
                    <div className="activity-card-text">
                      {tag.name}
                    </div>
                  </div>
                ))
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
