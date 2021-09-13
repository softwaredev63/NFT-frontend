import {Link} from 'react-router-dom';

 const NoItems=() => {
  return (
  <div className="noitems-found-main">
    <div className="noitems-found-test-1">No items found</div>
    <div className="noitems-found-test-2">Come back soon! Or try to browse</div>
    <div className="noitems-found-test-2">something for you on our marketplace</div>
    <div className="edit-profile Browse-marketplace-button"><Link to='/'>Browse marketplace</Link></div>
  </div>
  )
 }
export default NoItems;