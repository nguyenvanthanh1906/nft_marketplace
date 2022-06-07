import { FunctionComponent } from "react";

type NftItemProps = {
    item: NftMeta;
  };

const NftItem: FunctionComponent<NftItemProps> = ({item}) => {
  return (
    <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="nft__item">
        <div className="author_list_pp">
          <a
            href="author.html"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Lori Hart"
          >
            <img className="lazy" src="images/author/author-4.jpg" alt="" />
            <i className="fa fa-check" />
          </a>
        </div>
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                  target="_blank"
                >
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                  target="_blank"
                >
                  <i className="fa fa-twitter fa-lg" />
                </a>
                <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://gigaland.io">
                  <i className="fa fa-envelope fa-lg" />
                </a>
              </div>
            </div>
          </div>
          <a href="item-details.html">
            <img
              src={item.image}
              className="lazy nft__item_preview"
              alt=""
            />
          </a>
        </div>
        <div className="nft__item_info">
          <a href="item-details.html">
            <h4>{item.name}</h4>
          </a>
          <div className="nft__item_click">
            <span />
          </div>
          <div className="nft__item_price">
            0.005 ETH<span>1/30</span>
          </div>
          <div className="nft__item_action">
            <a href="#">Place a bid</a>
          </div>
          <div className="nft__item_like">
            <i className="fa fa-heart" />
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItem;