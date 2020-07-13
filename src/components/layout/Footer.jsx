import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  footer: {
    color: "ghostwhite",
    backgroundColor: "#222222",
    width: "100vw",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>@All right reserved to Panker</p>
      </div>
    </footer>
  );
}
export default withStyles(styles)(Footer);
