import Nav from './commonComponents/navbar'
import Footer from './commonComponents/footer'
import NoItems from './commonComponents/noItemsFound'

const Following = () => {

  return (
    <div>
      <Nav />
      <div className="following-main-container">
      <div className="following-text">Following</div>
      <div className="folloeing-noitems">
      <NoItems />
      </div>
      </div>
      <Footer />
    </div>
  )

}
export default Following;