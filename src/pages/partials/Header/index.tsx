import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Tooltip,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//images
import logo from "../../../assets/images/logo.jpg";

import {
  useStyles,
  LogoDiv,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";

const Header = () => {
  const classes = useStyles();
  const [categorie, setCategorie] = React.useState('')

  const handleChange = (event: any) => {
    setCategorie(event.target.value);
  };

  const categories = [

  ]
  return (
    <>
      <LogoDiv>
        <img className={classes.logoStyle} src={logo} alt="logo" />
        <div>
          <Tooltip title="your Shopping cart">
            <IconButton>
              <ShoppingCartIcon className={classes.iconStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="your Profile">
            <IconButton>
              <AccountCircleIcon className={classes.iconStyle} />
            </IconButton>
          </Tooltip>
        </div>
      </LogoDiv>
      <Box sx={{ flexGrow: 1 }} style={{ margin: "3rem" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              {/* sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }} */}
            </IconButton>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value="genre"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
