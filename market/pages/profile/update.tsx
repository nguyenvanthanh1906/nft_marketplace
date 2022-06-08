import type { NextPage } from "next";
import { BaseLayout } from "../../components/index";

const UpdateProfile: NextPage = () => {
  return (
    <BaseLayout>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {/* section begin */}
        <section
          id="subheader"
          className="text-light"
          style={{ backgroundImage: "url(../images/background/subheader.jpg)" }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Profile Settings</h1>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section id="section-main" aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form
                  id="form-create-item"
                  className="form-border"
                  method="post"
                  action="email.php"
                >
                  <div className="de_tab tab_simple">
                    <ul className="de_nav">
                      <li className="active">
                        <span>
                          <i className="fa fa-user" />
                          Profile
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-exclamation-circle" />
                          Notifications
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-paint-brush" />
                          Appearance
                        </span>
                      </li>
                    </ul>
                    <div className="de_tab_content">
                      <div className="tab-1">
                        <div className="row wow fadeIn">
                          <div className="col-lg-8 mb-sm-20">
                            <div className="field-set">
                              <h5>Username</h5>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder="Enter username"
                              />
                              <div className="spacer-20" />
                              <h5>Custom URL</h5>
                              <input
                                type="text"
                                name="custom_url"
                                id="custom_url"
                                className="form-control"
                                placeholder="Enter your custom URL"
                              />
                              <div className="spacer-20" />
                              <h5>Bio</h5>
                              <textarea
                                name="bio"
                                id="bio"
                                className="form-control"
                                placeholder="Tell the world who you are!"
                                defaultValue={""}
                              />
                              <div className="spacer-20" />
                              <h5>Email Address*</h5>
                              <input
                                type="text"
                                name="email_address"
                                id="email_address"
                                className="form-control"
                                placeholder="Enter email"
                              />
                              <div className="spacer-20" />
                              <h5>
                                <i className="fa fa-link" /> Your site
                              </h5>
                              <input
                                type="text"
                                name="your_site"
                                id="your_site"
                                className="form-control"
                                placeholder="Enter Website URL"
                              />
                              <div className="spacer-20" />
                              <h5>
                                <i className="fa fa-twitter" /> Twitter username
                              </h5>
                              <input
                                type="text"
                                name="twitter_usernam"
                                id="twitter_usernam"
                                className="form-control"
                                placeholder="Enter Twitter username"
                              />
                              <div className="spacer-20" />
                              <h5>
                                <i className="fa fa-instagram" /> Instagram
                                username
                              </h5>
                              <input
                                type="text"
                                name="instagram_username"
                                id="instagram_username"
                                className="form-control"
                                placeholder="Enter Instagram username"
                              />
                            </div>
                          </div>
                          <div id="sidebar" className="col-lg-4">
                            <h5>
                              Profile image{" "}
                              <i
                                className="fa fa-info-circle id-color-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Recommend 400 x 400. Max size: 50MB. Click the image to upload."
                              />
                            </h5>
                            <img
                              src="../images/author_single/author_thumbnail.jpg"
                              id="click_profile_img"
                              className="d-profile-img-edit img-fluid"
                              alt=""
                            />
                            <input type="file" id="upload_profile_img" />
                            <div className="spacer-30" />
                            <h5>
                              Profile banner{" "}
                              <i
                                className="fa fa-info-circle id-color-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Recommend 1500 x 500. Max size: 50MB. Click the image to upload."
                              />
                            </h5>
                            <img
                              src="../images/author_single/author_banner.jpg"
                              id="click_banner_img"
                              className="d-banner-img-edit img-fluid"
                              alt=""
                            />
                            <input type="file" id="upload_banner_img" />
                          </div>
                        </div>
                      </div>
                      <div className="tab-2">
                        <div className="row wow fadeIn">
                          <div className="col-md-6 mb-sm-20">
                            <div className="switch-with-title s2">
                              <h5>Item Sold</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-item-sold"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-item-sold" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When someone purhased your item.
                              </p>
                            </div>
                            <div className="spacer-20" />
                            <div className="switch-with-title s2">
                              <h5>Bid Activity</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-bid-activity"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-bid-activity" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When someone purhased your item.
                              </p>
                            </div>
                            <div className="spacer-20" />
                            <div className="switch-with-title s2">
                              <h5>Price Change</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-price-change"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-price-change" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When an item you made an offer on changes in
                                price.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="switch-with-title s2">
                              <h5>Auction Expiration</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-auction-expiration"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-auction-expiration" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When an auction you created ends.
                              </p>
                            </div>
                            <div className="spacer-20" />
                            <div className="switch-with-title s2">
                              <h5>Outbid</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-outbid"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-outbid" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When an offer you placed is exceeded by another
                                user.
                              </p>
                            </div>
                            <div className="spacer-20" />
                            <div className="switch-with-title s2">
                              <h5>Successful Purchase</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-successful-purchase"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-successful-purchase" />
                              </div>
                              <div className="clearfix" />
                              <p className="p-info">
                                When you successfully buy an item.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-3">
                        <div className="row wow fadeIn">
                          <div className="col-md-6 mb-sm-30">
                            <h5>Language</h5>
                            <p className="p-info">
                              Select your prefered language.
                            </p>
                            <div
                              id="select_lang"
                              className="dropdown fullwidth"
                            >
                              <a href="#" className="btn-selector">
                                English
                              </a>
                              <ul>
                                <li className="active">
                                  <span>English</span>
                                </li>
                                <li>
                                  <span>France</span>
                                </li>
                                <li>
                                  <span>German</span>
                                </li>
                                <li>
                                  <span>Japan</span>
                                </li>
                                <li>
                                  <span>Italy</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>Scheme</h5>
                            <p className="p-info">
                              Customize how Gigaland looks for you.
                            </p>
                            <div
                              id="select_scheme"
                              className="dropdown fullwidth"
                            >
                              <a href="#" className="btn-selector">
                                Default scheme
                              </a>
                              <ul>
                                <li className="active">
                                  <span>Default scheme</span>
                                </li>
                                <li>
                                  <span>Light scheme</span>
                                </li>
                                <li>
                                  <span>Dark scheme</span>
                                </li>
                                <li>
                                  <span>Grey scheme</span>
                                </li>
                                <li>
                                  <span>Retro scheme</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-30" />
                  <input
                    type="button"
                    id="submit"
                    className="btn-main"
                    defaultValue="Update profile"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
export default UpdateProfile;
