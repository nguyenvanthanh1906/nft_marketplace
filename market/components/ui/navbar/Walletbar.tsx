import { FunctionComponent } from "react"
import Link from "next/link";

type WalletbarProps = {
    isLoading: boolean;
    isInstalled: boolean;
    account: string | undefined;
    connect: () => void;
}


const Walletbar: FunctionComponent<WalletbarProps> = ({
    isInstalled,
    isLoading,
    connect,
    account
}) => {

    console.log("Is Loading: ", isLoading);
    console.log("Is Installed: ", isInstalled);
    if (isLoading) {
        return (
            <div className="menu_side_area">
                <a className="btn-main" onClick={() => {

                }}>
                    <i className="icon_wallet_alt" />
                    <span>Loading...</span>
                </a>
                <span id="menu-btn" />
            </div>
        )
    }
    if (account) {
        return (
            <ul id="mainmenu">
                <li className="menu-item-has-children has-child">
                    <a>
                    {`0x${account[2]}${account[3]}${account[4]}....${account.slice(-4)}`}
                        <span />
                    </a>
                    <ul>
                        <li>
                            <Link href="/profile">
                                <a href="03_grey-index.html">Profile</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/update">
                                <a href="03_grey-index.html">Update Profile</a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
    if (isInstalled) {
        return (
            <div className="menu_side_area">
                <a className="btn-main" onClick={() => {
                    connect()
                }}>
                    <i className="icon_wallet_alt" />
                    <span>Connect Wallet</span>
                </a>
                <span id="menu-btn" />
            </div>
        )
    } else {
        return (
            <div className="menu_side_area">
                <a className="btn-main" onClick={() => {
                    window.open('https://metamask.io', '_ blank');
                }}>
                    <i className="icon_wallet_alt" />
                    <span>Install Metamask</span>
                </a>
                <span id="menu-btn" />
            </div>)
    }
}

export default Walletbar;