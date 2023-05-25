import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import Movie from "@mui/icons-material/Movie";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton */}
          {/*   size="large" */}
          {/*   edge="start" */}
          {/*   color="inherit" */}
          {/*   aria-label="menu" */}
          {/*   sx={{ mr: 2 }} */}
          {/* > */}
          <Movie />
          {/* </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Pelis UNED
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
