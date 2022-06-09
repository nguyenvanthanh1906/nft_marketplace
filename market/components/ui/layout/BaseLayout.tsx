import { FunctionComponent } from "react";
import Navbar from "../navbar";

const BaseLayout: FunctionComponent = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default BaseLayout;