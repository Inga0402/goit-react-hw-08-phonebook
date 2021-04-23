import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import authSelectors from "../../redux/auth/auth-selectors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#FFF8DC",
  },
});

const AppBar = () => {
  const isSignIn = useSelector(authSelectors.getIsSignIn);
  const style = useStyles();

  return (
    <header className={style.header}>
      <Navigation />
      {isSignIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
