import Home from "../../pages/index";
import Link from "next/link";
import { useRouter } from "../../node_modules/next/router";

const navigation = [
  { name: "Home", href: "/", curent: true },
  { name: "Create", href: "/nft/create", curent: false },
  {
    name: "Profile",
    href: "/profile",
    curent: false,
    children: [
      { name: "Show Profile", href: "/profile", curent: false },
      { name: "Update Profile", href: "/profile/update", curent: false },
    ],
  },
];

const renderLink = (item) => {
  if (item.children) {
    return (
      <li key={item.name} className="menu-item-has-children has-child">
        <a>
          {item.name}
          <span />
        </a>
        <ul>
          {item.children.map((child) => (
            <li key={child.name}>
              <Link key={child.name} href={child.href}>
                <a href="03_grey-index.html">{child.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li key={item.name}>
        <Link key={item.name} href={item.href}>
          <a>
            {item.name}
            <span />
          </a>
        </Link>
      </li>
    );
  }
};
export default function Navbar() {
  return (
    <>
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    <div id="logo">
                      <a href="02_dark-index.html">
                        <img alt="" src="../images/logo-light.png" />
                      </a>
                    </div>
                  </div>
                  <div className="de-flex-col">
                    <input
                      id="quick_search"
                      className="xs-hide"
                      name="quick_search"
                      placeholder="search item here..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    {navigation.map((item) => renderLink(item))}
                  </ul>
                  <div className="menu_side_area">
                    <a href="02_dark-wallet.html" className="btn-main">
                      <i className="icon_wallet_alt" />
                      <span>Connect Wallet</span>
                    </a>
                    <span id="menu-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
