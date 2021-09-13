import { useEffect,useState } from 'react';
import Nav from './commonComponents/navbar'
import { Link, useParams } from 'react-router-dom';
import Footer from './commonComponents/footer'
import SwitchButton from './commonComponents/switchButton'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function CreateCollectible() {
  // let param = useParams();
  let {id} = useParams();

  useEffect(()=> {
    console.log(id, 'id is printed here');
  },[])
  const [isOnSale, setIsOnSale] = useState(false);
  const [isInstantPrice, setIsInstantPrice] = useState(false);
  const [isOnPurchased, setIsOnPurchased] = useState(false)
  const options = [
    'ETH', 'DAI', 'RARI', 'ATRI', 'ABST', 'ADORs'
  ];
  const [imagePreview, setImagePreview] = useState(null);
  const defaultOption = options[0];
  const onUploadFile = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImagePreview(reader.result);
    }

    reader.readAsDataURL(file)
  }
  return (
    <div >
      <Nav />
      <div className="collectible-main-container">
        <div className="collectible-main-box">
          <div className="collectible-main-inner-box">
            <div className="collectible-items-container">
              <button className="connect-button">
                <svg viewBox="0 0 14 12" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z" fill="currentColor"></path></svg>
                <Link to='/create'>Manage collectible type</Link>
              </button>
              <div className="create-main-box-text-box"> <span className="create-main-box-text">
                Create {id == 'erc721' ? ('single'): ('multiple')} collectible</span></div>
              <div className="collectible-uploads-container">
                <div className="collectible-uploads-left">
                  <div className="collectible-uploads-left-box">
                    <div className="collectible-uploads-file-container">
                      <div className="collectible-uploads-file-text Preview-text">Upload file</div>
                      <div className="collectible-uploads-file-box">
                        <div className="collectible-uploads-file-main-container">
                       { imagePreview !== null &&
                        <div className="Preview-img-cross" onClick={()=> setImagePreview(null)}>
                          <svg viewBox="0 0 16 16" fill="none" width="13.200000000000001" height="13.200000000000001" xlmns="http://www.w3.org/2000/svg"><path d="M4 12L12 4" stroke="currentColor" stroke-width="2"></path><path d="M12 12L4 4" stroke="currentColor" stroke-width="2"></path></svg>
                        </div>
                        }
                          {
                            imagePreview !== null ?
                              (<label for={'file_upload'}>
                                
                                <img className="Preview-img" src={imagePreview} width='300' height='300' alt="" />
                                <input hidden id='file_upload' onChange={onUploadFile} accept="image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm,audio/mp3,audio/webm,audio/mpeg" name="primary-attachment" type="file" />
                              </label>)
                              :
                              (<label for={'file_upload'}>
                                <div className="choose-file-text">PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</div>
                                <div className="choose-files">Choose File</div>
                                <input hidden id='file_upload' onChange={onUploadFile} accept="image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm,audio/mp3,audio/webm,audio/mpeg" name="primary-attachment" type="file" />
                              </label>
                              )
                          }
                        </div>
                      </div>
                    </div>
                    <div className="collectible-put-on-sale-container">
                      <div>
                        <div className="put-on-sale put-on-sale-text">Put on sale</div>
                        <div className="put-on-sale-desc">You’ll receive bids on this item</div>
                      </div>
                      <SwitchButton value={isOnSale} onChange={() => setIsOnSale(!isOnSale)} />
                    </div>
                    {isOnSale && (<div className="collectible-put-on-sale-container">
                      <div>
                        <div className="put-on-sale-text">Instant sale price</div>
                        <div className="put-on-sale-desc">Enter the price for which the item will be instantly sold</div>
                      </div>
                      <SwitchButton value={isInstantPrice} onChange={() => setIsInstantPrice(!isInstantPrice)} />
                    </div>)}
                    {isInstantPrice && (<div className="collectible-price-for-one-sale-container">
                      <div className="collectible-one-piece">
                        <textarea className="digital-key-text-area" placeholder="Enter price for one piece"   value="" ></textarea>
                        <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="collectible-dropdown" />
                      </div>
                      <div className="collectible-one-piece-service-fee">
                        <div>Service fee 2.5%</div>
                        <div>You will receive 0 ETH $0.00</div>
                      </div>
                    </div>)}
                    <div className="collectible-put-on-sale-container">
                      <div>
                        <div className="put-on-sale-text unlock-once-purchased">Unlock once purchased</div>
                        <div className="put-on-sale-desc">Content will be unlocked after successful transaction</div>
                      </div>
                      <SwitchButton value={isOnPurchased} onChange={() => setIsOnPurchased(!isOnPurchased)} />
                    </div>
                    {isOnPurchased && (<div className="collectible-price-for-one-sale-container">
                      <div>
                        <textarea className="digital-key-text-area" placeholder="Digital key, code to redeem or link to a file..."   value="" ></textarea>
                      </div>
                      <div className="put-on-sale-desc">Tip: Markdown syntax is supported</div>
                    </div>)}
                    <div className="collectible-price-for-one-sale-container">
                      <div className="Preview-text">Choose collection</div>
                      <div className="collectible-choose-collection-main">
                        <div className="collectible-choose-collection-left">
                          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50" fill="rgba(4, 4, 5, 1)"><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" color="currentColor"></path></svg>
                          <div className="collectible-choose-collection-iner-box">
                            <div className="collectible-choose-collection-item-uper-text">Create</div>
                            <div className="collectible-choose-collection-item-bottom-text">ERC-721</div>
                          </div>
                        </div>
                        <div className="collectible-choose-collection-right">
                          <img src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N&w=100" alt="" />
                          <div className="collectible-choose-collection-iner-box">
                            <div className="collectible-choose-collection-item-uper-text">Rarible</div>
                            <div className="collectible-choose-collection-item-bottom-text">RARI</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collectible-price-for-one-sale-container">
                      <div className="Preview-text">Name</div>
                      <div>
                        <input className="digital-key-text-area" placeholder="e. g. Redeemable T-Shirt with logo"   defaultValue="" type="text" />
                      </div>
                    </div>
                    <div className="collectible-price-for-one-sale-container">
                      <div className="collectible-description-box">
                        <div className="Preview-text">Description</div><div className="put-on-sale-desc">(Optional)</div>
                      </div>
                      <div>
                        <input className="digital-key-text-area" placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt"   defaultValue="" type="text" />
                      </div>
                      <div className="put-on-sale-desc">With preserved line-breaks</div>
                    </div>
                    <div className="collectible-price-for-one-sale-container royalties-and-no-copies">
                      <div>
                      <div className="Preview-text">Royalties</div>
                      <div>
                        <input className="digital-key-text-area" placeholder="E. g. 10%"   defaultValue="" type="text" />
                      </div>
                      </div>
                      {id !== 'erc721' ? (
                        <div>
                        <div className="Preview-text">Number of copies</div>
                        <div>
                          <input className="digital-key-text-area" placeholder="E. g. 10%"   defaultValue="" type="text" />
                        </div>
                        </div>
                      ): (<></>)}
                      
                    </div>
                    <div className="collectible-price-for-one-sale-container">
                      <div className="Preview-text">Properties</div>
                      <div className="collectible-description-box">
                        <input className="digital-key-text-area" placeholder="e.g. Size"   defaultValue="" type="text" />
                        <input className="digital-key-text-area" placeholder="e.g. M"   defaultValue="" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="collectible-uploads-bottom">
                    <div className="collectible-uploads-bottom-main">
                      <div className="collectible-uploads-bottom-main-container">
                        <div className="collectible-uploads-bottom-main-box">
                          <div className="collectible-wallet-and-crate">
                            Connect wallet and create
                          </div>
                        </div>
                        <div className="collectible-unsaved-changes">unsaved changes</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collectible-uploads-right Preview-text">
                  Preview
                    <div className="collectible-uploads-right-Preview">
                    <div className="collectible-uploads-right-Preview-main">
                      <div className="collectible-uploads-right-Preview-main-container choose-file-text">
                        {
                            imagePreview !== null ?
                              (<label for={'file_upload'}>
                                <img className="Preview-img" src={imagePreview} width='194' height='194' alt="" />
                                <input hidden id='file_upload' onChange={onUploadFile} accept="image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm,audio/mp3,audio/webm,audio/mpeg" name="primary-attachment" type="file" />
                              </label>)
                              :
                              (
                                'Preview of your new collectible'
                              )
                          }
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateCollectible;
