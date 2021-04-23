import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import authSelectors from "../redux/auth/auth-selectors";
import loginImg from "./img-view-bg/hp-auth-img.jpg";
import noLoginImg from "./img-view-bg/hp-noauth-img.jpg";

const useStyles = createUseStyles({
  container: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "800px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "black",
  },
  text: {
    padding: 15,
    marginTop: 30,
    width: 280,
    fontSize: 16,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    opacity: 0.8,
    backdropFilter: "blur(100px)",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});

const HomePageView = () => {
  const signedIn = useSelector(authSelectors.getIsSignIn);
  const st = useStyles();
  return (
    <>
      {signedIn ? (
        <div
          style={{
            backgroundImage: `url(${loginImg})`,
          }}
          className={st.container}
        >
          <p className={st.text}>
            Welcome to your personal electronic phonebook! It will help you keep
            the necessary and important contacts. Now they will always be at
            your fingertips. And you can use them any second.
          </p>
        </div>
      ) : (
        <div
          className={st.container}
          style={{
            backgroundImage: `url(${noLoginImg})`,
          }}
        >
          <h3 className={st.title}>History of phonebook</h3>
          <p className={st.text}>
            The official mention of the production of phonebook sends us to the
            French city of Touré. Two hundred years ago, a family business was
            opened there to make special phonebook for housekeeping. In these
            small books, several nuances were provided that made it possible to
            use it during the working day, transferring it from place to place.
            The waterproof hard cover kept the book dry and made it possible to
            write on the go. The corners have been rounded so as not to rip
            through the pocket and not to prick the stomach or leg. Also, the
            notebook had an elastic band, which did not allow it to suddenly
            open, losing its contents, and a small pocket was attached to the
            cover for various small notes.
          </p>
        </div>
      )}
    </>
  );
};

export default HomePageView;
