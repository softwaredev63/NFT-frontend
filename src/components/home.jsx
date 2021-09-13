import Nav from './commonComponents/navbar'
import Trendings from './slider'
import HotBids from './hotbidslider'
import HotCollections from './hotcollection'
import Explore from './explore'
import Topseller from './topseller';
import { topseller } from '../data/dummyData';

function Home() {
  return (
    <div className="App">
      <Nav />
      <Trendings />
      <div className="seller-text">Top Sellers</div>
      <div className="top-saller-outer-container">
        <div className='topseller-container'>
          {topseller.map(saller => (
            <Topseller count={saller.count} cardName={saller.cardName} sale={saller.sale} imgSrc={saller.imgSrc} />
          ))}
        </div>

      </div>
      <div className="hot-bid-text">Hot Bids</div>
      <HotBids />
      <div className="hot-Collection-text">Hot Collection</div>
      <HotCollections />
      <div className="hot-Collection-text">Explore</div>
      <Explore />
    </div>
  );
}

export default Home;
