import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Grid from "@material-ui/core/Grid";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "0 auto"
    },
    signinButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(1.5)
    },
    subject: {
      marginTop: theme.spacing(2),
      padding: 0
    },
    img: {
      maxWidth: 450
    },
    copyRight: {
      bottom: theme.spacing(1),
      position: "fixed",
      margin: "0 auto"
    }
  })
);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink
        color="inherit"
        href="https://github.com/MASA-JAPAN/"
        target="_blank"
      >
        MASA
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Index() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <ThumbUpIcon />
          <Typography variant="h6" className={classes.title}>
            MASA SNS
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.signinButton}
          >
            SIGN IN
          </Button>
          <Button variant="contained" color="primary">
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.subject}
          >
            One of my portfolios
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => Router.push("/signup")}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item>
          <img src="/profile2.png" alt="" className={classes.img} />
        </Grid>
      </Grid>
      <Copyright />
    </div>
  );
}
