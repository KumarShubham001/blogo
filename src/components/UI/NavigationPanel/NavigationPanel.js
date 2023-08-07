import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./NavigationPanel.module.scss";

const NavigationPanel = () => {
    return (
        <ul className={classes.navigation}>
            <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
            <NavLink activeClassName={classes.active} to="/create-blog">New blog</NavLink>
        </ul>
    )
};

export default NavigationPanel;