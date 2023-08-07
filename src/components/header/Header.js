import './Header.scss'

import NavigationPanel from "../UI/NavigationPanel/NavigationPanel";

const Header = () => {
    return (
        <header className="pageHeader">
            <div className="container">
                <div className="logo">
                    <h1>Blogo</h1>
                </div>
                <NavigationPanel />
            </div>
        </header>
    )
};

export default Header;