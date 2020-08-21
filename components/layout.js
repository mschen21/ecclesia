import Link from "next/link";
import Head from "next/head";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 100,
  },
}));

export default function Layout({
  children,
  title = "Ecclesia Care | helping churches care & share more",
}) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Container className={classes.root} maxWidth="lg" my={3}>
          <Typography>Ecclesia</Typography>
        </Container>
      </header>

      {children}

      <footer></footer>
    </div>
  );
}
