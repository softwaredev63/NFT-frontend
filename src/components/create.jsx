import Nav from './commonComponents/navbar'
import { Link, useHistory } from 'react-router-dom';
import Footer from './commonComponents/footer'

function Create() {
  let history = useHistory();
  const showSingleCollectiblePage=(value)=>{
    history.push(`/create/${value}`);
  }
  return (
    <div >
      <Nav />
      <div className="create-main">
        <div className="create-main-container">
          <div className="create-main-box">
            <button className="connect-button">
              <svg viewBox="0 0 14 12" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z" fill="currentColor"></path></svg>
              <Link to='/'>Go back</Link>
            </button>
            <div className="create-main-box-text-box"> <span className="create-main-box-text">Create collectible</span></div>
            <div className="create-main-box-desc-box"> <span className="create-main-box-desc">Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times</span></div>
            <div className="create-items-main">
              <div className="create-items" onClick={()=>showSingleCollectiblePage('erc721')}>
                <div className="create-items-img"> <img src="https://rarible.com/static/2a78e39400f51f1dbeba13832f421092.png" alt="single" /></div>
                <div className="create-items-text">Single</div>
              </div>
              <div className="create-items" onClick={()=>showSingleCollectiblePage('erc1155')}>
                <div className="create-items-img"> <img src="https://rarible.com/static/48dc30c106da96755b60ead8627c8888.png" alt="single" /></div>
                <div className="create-items-text">Multiple</div>
              </div>
            </div>
            <div className="create-bottom"><span className="create-bottom-text">We do not own your private keys and cannot access your funds without your confirmation</span></div>
          </div>
        </div>
      </div>
     <Footer />
    </div>
  );
}

export default Create;
