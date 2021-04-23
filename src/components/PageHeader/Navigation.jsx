import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  link: {
    display: "inline-block",
    textDecoration: "none",
    marginRight: 15,
    fontWeight: 700,
    fontSize: 18,
    color: "#DEB887",
    "&:hover": {
      color: "#FF4500",
    },
  },
  activeLink: {
    color: "#A52A2A",
  },
});

const Navigation = () => {
  const isSignIn = useSelector(authSelectors.getIsSignIn);
  const style = useStyles();
  return (
    <nav>
      {isSignIn && (
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
