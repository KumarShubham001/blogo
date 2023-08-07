import "./Layout.scss";

import Header from "../header/Header";
import Card from "../UI/Card/Card";

const Layout = (props) => {
    return (
        <>
            <Header />

            <main>
                {props.children}
            </main>
        </>
    )
};

export default Layout;