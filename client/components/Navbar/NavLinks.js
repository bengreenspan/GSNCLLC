import React, {useRef, useState, useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
// import theme from "../../theme";


const NavLinks = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const dispatch = useDispatch();

  const navFull = 'rgba(255, 255, 255, 1)'
  const navHalf = 'rgba(0,0,255,0.3)'
  const navClear = 'rgba(255, 255, 255, 0)'

  const [navBackground, setNavBackground] = useState(navClear)

  const navRef = useRef()
navRef.current = navBackground

useEffect(() =>{
  const handleScroll = () => {
    if(window.scrollY > 210){
      setNavBackground(navHalf)
    }

  
    else{
      setNavBackground(navClear)
    }
  }
  document.addEventListener('scroll', handleScroll)
  return () => {
    document.removeEventListener('scroll', handleScroll)
  }
}, [])





  const select = useSelector((state) => state.auth.id);

  return (
    <Container sx={{ display: "flex"}}>
      {" "}
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography component={'span'}  variant='h5' style={{ml:10}}>
          <Link to="/#"  style={{ textDecoration: 'none',  color:'black'}}> Home</Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography  component={'span'}  variant='h5' >
          <Link to="/who" style={{textDecoration: 'none', color:'black'}}>About Us</Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography component={'span'}  variant='h5' >
        <Link to="/info" style={{textDecoration: 'none',  color:'black'}}>Contact Us</Link>
        </Typography>
      </MenuItem>
      {/* <Box sx={{ display: "flex", justifyContent: "right" }}> */}
      
      {/* </Box> */}
    </Container>
  );
};

export default NavLinks;
