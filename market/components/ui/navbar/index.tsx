
import Link from "next/link";
import { useAccount, useNetwork } from '@hooks/web3';
import Walletbar from './Walletbar';

const navigation = [
  { name: "Home", href: "/", curent: true },
  { name: "Create", href: "/nft/create", curent: false },
  // {
  //   name: "Profile",
  //   href: "/profile",
  //   curent: false,
  //   children: [
  //     { name: "Show Profile", href: "/profile", curent: false },
  //     { name: "Update Profile", href: "/profile/update", curent: false },
  //   ],
  // },
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

  const { account } = useAccount();
 
  const { network } = useNetwork();

  return (
    <>
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
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
                  <Walletbar
                    isInstalled={account.isInstalled}
                    isLoading={account.isLoading}
                    connect={account.connect}
                    account={account.data}
                  />
                </div>
              </div>
            </div>
            <div className="network">
              <p>{network.isLoading ?
                "Loading..." :
                account.isInstalled ?
                  network.data :
                  "Install Web3 Wallet"}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
