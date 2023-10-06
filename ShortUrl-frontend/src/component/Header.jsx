import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4"> Make Short-URL</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default Header;
