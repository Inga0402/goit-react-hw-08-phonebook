import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  link: {
    display: "inline-block",
    marginRight: 15,
    textDecoration: "none",
    border: "1px solid #A52A2A",
    borderRadius: 5,
    padding: 7,
    fontWeight: 600,
    color: "#A52A2A",
  },
  activeLink: {
    color: "#fff",
    backgroundColor: "#A52A2A",
  },
});

const AuthNav = () => {
  const style = useStyles();
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
