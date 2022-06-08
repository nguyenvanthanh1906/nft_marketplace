import Head from "next/head";
import Image from "next/image";
import NextPage from "next";
import { BaseLayout, NftList } from "../components/index";
import { NftMeta } from "../types/nft";
import nfts from "../content/meta.json"

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        <section
          id="subheader"
          className="text-light"
          style={{ backgroundImage: "url(images/background/subheader.jpg)" }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Home</h1>
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
                  <form
                    action="blank.php"
                    className="row form-dark"
                    id="form_quick_search"
                    method="post"
                    name="form_quick_search"
                  >
                    <div className="col text-center">
                      <input
                        className="form-control"
                        id="name_1"
                        name="name_1"
                        placeholder="search item here..."
                        type="text"
                      />
                      <a href="#" id="btn-submit">
                        <i className="fa fa-search bg-color-secondary" />
                      </a>
                      <div className="clearfix" />
                    </div>
                  </form>
                  <div id="item_category" className="dropdown">
                    <a href="#" className="btn-selector">
                      All categories
                    </a>
                    <ul>
                      <li className="active">
                        <span>All categories</span>
                      </li>
                      <li>
                        <span>Art</span>
                      </li>
                      <li>
                        <span>Music</span>
                      </li>
                      <li>
                        <span>Domain Names</span>
                      </li>
                      <li>
                        <span>Virtual World</span>
                      </li>
                      <li>
                        <span>Trading Cards</span>
                      </li>
                      <li>
                        <span>Collectibles</span>
                      </li>
                      <li>
                        <span>Sports</span>
                      </li>
                      <li>
                        <span>Utility</span>
                      </li>
                    </ul>
                  </div>
                  <div id="buy_category" className="dropdown">
                    <a href="#" className="btn-selector">
                      Buy Now
                    </a>
                    <ul>
                      <li className="active">
                        <span>Buy Now</span>
                      </li>
                      <li>
                        <span>On Auction</span>
                      </li>
                      <li>
                        <span>Has Offers</span>
                      </li>
                    </ul>
                  </div>
                  <div id="items_type" className="dropdown">
                    <a href="#" className="btn-selector">
                      All Items
                    </a>
                    <ul>
                      <li className="active">
                        <span>All Items</span>
                      </li>
                      <li>
                        <span>Single Items</span>
                      </li>
                      <li>
                        <span>Bundles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <NftList nfts={nfts as NftMeta[]}></NftList>
              <div className="col-md-12 text-center">
                <a
                  href="#"
                  id="loadmore"
                  className="btn-main wow fadeInUp lead"
                >
                  Load more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};

export default Home;
