import Layout from "../components/layout";
import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
              >
                <Button>child care</Button>
                <Button>missionaries</Button>
                <Button>overseas causes</Button>
                <Button>inner city caring</Button>
                <Button>illness</Button>
                <Button>hardships</Button>
                <Button>meal trains</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
