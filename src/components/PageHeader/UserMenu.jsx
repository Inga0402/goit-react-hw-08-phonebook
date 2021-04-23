import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operation";
import Button from "../Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    marginRight: 12,
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "italic",
    color: "#DEB887",
  },
  link: {
    display: "inline-block",
    marginLeft: 15,
    borderRadius: 5,
    border: "1px solid #A52A2A",
    padding: 7,
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "#A52A2A",
    "&:hover": {
      color: "#A52A2A",
      backgroundColor: "#fff",
      border: "1px solid #A52A2A",
    },
  },
});

const UserMenu = () => {
  const style = useStyles();
  const dispath = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={style.container}>
      <span className={style.name}>Welcome, {name} </span>
      <Button
        type="button"
        onClick={() => dispath(authOperations.signOut())}
        value="Sign Out"
        className={style.link}
      />
    </div>
  );
};

export default UserMenu;
