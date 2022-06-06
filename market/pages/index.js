import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div className=''>
   
        <header className="transparent">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex sm-pt10">
                  <div className="de-flex-col">
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="02_dark-index.html">
                          <img alt="" src="images/logo-light.png" />
                        </a>
                      </div>
                    </div>
                    <div className="de-flex-col">
                      <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                    </div>
                  </div>
                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu">
                      <li>
                        <a href="02_dark-index.html">Home<span /></a>
                        <ul>
                          <li><a href="03_grey-index.html">New: Grey Scheme</a></li>
                          <li><a href="02_dark-index.html">Homepage 1</a></li>
                          <li><a href="02_dark-index-2.html">Homepage 2</a></li>
                          <li><a href="02_dark-index-3.html">Homepage 3</a></li>
                          <li><a href="02_dark-index-4.html">Homepage 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="02_dark-explore.html">Explore<span /></a>
                        <ul>
                          <li><a href="02_dark-explore.html">Explore</a></li>
                          <li><a href="02_dark-explore-2.html">Explore 2</a></li>
                          <li><a href="02_dark-collection.html">Collections</a></li>
                          <li>
                            <a href="02_dark-live-auction.html">Live Auction</a>
                          </li>
                          <li>
                            <a href="02_dark-item-details.html">Item Details</a>
                          </li>
                          <li><a href="02_dark-help-center.html">Help Center</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages<span /></a>
                        <ul>
                          <li><a href="02_dark-author.html">Author</a></li>
                          <li><a href="02_dark-wallet.html">Wallet</a></li>
                          <li><a href="02_dark-profile.html">Profile</a></li>
                          <li><a href="02_dark-create-options.html">Create</a></li>
                          <li><a href="02_dark-news.html">News</a></li>
                          <li><a href="02_dark-gallery.html">Gallery</a></li>
                          <li><a href="02_dark-login.html">Login</a></li>
                          <li><a href="02_dark-login-2.html">Login 2</a></li>
                          <li><a href="02_dark-register.html">Register</a></li>
                          <li><a href="02_dark-contact.html">Contact Us</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Stats<span /></a>
                        <ul>
                          <li><a href="02_dark-activity.html">Activity</a></li>
                          <li><a href="02_dark-rankings.html">Rankings</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Elements<span /></a>
                        <ul>
                          <li>
                            <a href="02_dark-icons-elegant.html">Elegant Icons</a>
                          </li>
                          <li>
                            <a href="02_dark-icons-etline.html">Etline Icons</a>
                          </li>
                          <li>
                            <a href="02_dark-icons-font-awesome.html">Font Awesome Icons</a>
                          </li>
                          <li><a href="02_dark-accordion.html">Accordion</a></li>
                          <li><a href="02_dark-alerts.html">Alerts</a></li>
                          <li><a href="02_dark-counters.html">Counters</a></li>
                          <li><a href="02_dark-modal.html">Modal</a></li>
                          <li><a href="02_dark-popover.html">Popover</a></li>
                          <li>
                            <a href="02_dark-pricing-table.html">Pricing Table</a>
                          </li>
                          <li>
                            <a href="02_dark-progress-bar.html">Progress Bar</a>
                          </li>
                          <li><a href="02_dark-tabs.html">Tabs</a></li>
                          <li><a href="02_dark-tooltips.html">Tooltips</a></li>
                        </ul>
                      </li>
                    </ul>
                    <div className="menu_side_area">
                      <a href="02_dark-wallet.html" className="btn-main"><i className="icon_wallet_alt" /><span>Connect Wallet</span></a>
                      <span id="menu-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section id="subheader" className="text-light" style={{backgroundImage:"url(images/background/subheader.jpg)"}}>
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Explore</h1>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </section>
          <section aria-label="section">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-lg-12">
                  <div className="items_filter">
                    <form action="blank.php" className="row form-dark" id="form_quick_search" method="post" name="form_quick_search">
                      <div className="col text-center">
                        <input className="form-control" id="name_1" name="name_1" placeholder="search item here..." type="text" />
                        <a href="#" id="btn-submit"><i className="fa fa-search bg-color-secondary" /></a>
                        <div className="clearfix" />
                      </div>
                    </form>
                    <div id="item_category" className="dropdown">
                      <a href="#" className="btn-selector">All categories</a>
                      <ul>
                        <li className="active"><span>All categories</span></li>
                        <li><span>Art</span></li>
                        <li><span>Music</span></li>
                        <li><span>Domain Names</span></li>
                        <li><span>Virtual World</span></li>
                        <li><span>Trading Cards</span></li>
                        <li><span>Collectibles</span></li>
                        <li><span>Sports</span></li>
                        <li><span>Utility</span></li>
                      </ul>
                    </div>
                    <div id="buy_category" className="dropdown">
                      <a href="#" className="btn-selector">Buy Now</a>
                      <ul>
                        <li className="active"><span>Buy Now</span></li>
                        <li><span>On Auction</span></li>
                        <li><span>Has Offers</span></li>
                      </ul>
                    </div>
                    <div id="items_type" className="dropdown">
                      <a href="#" className="btn-selector">All Items</a>
                      <ul>
                        <li className="active"><span>All Items</span></li>
                        <li><span>Single Items</span></li>
                        <li><span>Bundles</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">
                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button >Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg" /></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg" /></a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg" /></a>
                          </div>
                        </div>
                      </div>
                      <a href="item-details.html">
                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                      </a>
                    </div>
                    <div className="nft__item_info">
                      <a href="item-details.html">
                        <h4>Cute Astronout</h4>
                      </a>
                      <div className="nft__item_click">
                        <span />
                      </div>
                      <div className="nft__item_price">0.005 ETH<span>1/30</span></div>
                      <div className="nft__item_action">
                        <a href="#">Place a bid</a>
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart" /><span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
                </div>
              </div>
            </div>
          </section>
        </div>
    
    
      </div>
      
      
  )
  
}
