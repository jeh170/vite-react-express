import {
  AppBar,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link"

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar >
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h4">
              Gum Gum
            </Typography>
          </Grid>
          <Grid item xs={10}
            display="flex"
            alignItems="center"
          >
            <Stack direction='row' spacing={4}
            >
              <Link href="/hello" sx={{ color: "white" }} variant="h6">
                  Hello
              </Link>
              <Link href="/interview" sx={{ color: "white" }} variant="h6">
                  Interview
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;