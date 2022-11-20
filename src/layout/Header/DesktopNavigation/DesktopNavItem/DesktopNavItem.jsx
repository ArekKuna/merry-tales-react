import { NavLink } from "react-router-dom";

const DesktopNavItem = ({links}) => {
    return <>
        {links.map(({ to, text, id }) => (
            <NavLink key={id} to={to}>{text}</NavLink>
        ))}
    </>;
}

export default DesktopNavItem