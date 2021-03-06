import type { NextPage } from "next";
import { BaseLayout } from "@ui/index";
import { Nft } from '@_types/nft';
import { useOwnedNfts } from '@hooks/web3';
import { NftList } from "@ui";
import React, { useEffect } from 'react';
import $ from "jquery";

const Profile: NextPage = () => {
  const { nfts } = useOwnedNfts();
  useEffect(() => {
    $(".d-item").slice(0, 8).show();
  });
  return (
    <BaseLayout>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {/* section begin */}
        <section id="profile_banner" aria-label="section" className="text-light" style={{ backgroundImage: "url(../images/background/subheader.jpg)" }}>
        </section>
        {/* section close */}
        <section aria-label="section" className="d_coll no-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile">
                  <div className="profile_avatar">
                    <div className="d_profile_img">
                      <img src="images/author/author-1.jpg" alt="" />
                      <i className="fa fa-check" />
                    </div>
                    <div className="profile_name">
                      <h4>
                        Abstraction
                        <div className="clearfix" />
                        <span id="wallet" className="profile_wallet">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                        <button id="btn_copy" title="Copy Text">Copy</button>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <ul className="de_nav">
                    <li className="active"><span>On Sale</span></li>
                    <li><span>Owned</span></li>
                  </ul>
                  <div className="de_tab_content">
                    <div className="tab-1">
                      <div className="row">
                        <NftList nfts={nfts.data as Nft[]}></NftList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
export default Profile;
