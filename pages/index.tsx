import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    signinButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(1.5)
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
      <MuiLink color="inherit" href="https://github.com/MASA-JAPAN/">
        MASA
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
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
      <Grid container spacing={2} justify="center" direction="column">
        <Grid item>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            One of my portfolios
          </Typography>
        </Grid>
        <Grid item>
          <img src="/profile2.png" alt="" width="500px" />
        </Grid>
      </Grid>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        One of my portfolios
      </Typography>
      <Box>
        <img src="/profile2.png" alt="" width="500px" />
      </Box>
      <Copyright />
    </div>
  );
}
