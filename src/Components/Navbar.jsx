import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
 import { logout } from "../Redux/Login/Action";

import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

  const isAuthenticate = useSelector((store) => store.login.isAuthenticate)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('1');
   const navigate = useNavigate ()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="NavDiv">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" onClick={()=> navigate("/") } />
            <Tab label="Add" value="2" onClick={()=> navigate("/listing/create")} />
            <Tab label="LogIn" value="3" disabled ={isAuthenticate} onClick={()=> navigate("/login")} />
            <Tab label="LogOut" value="4" disabled ={!isAuthenticate} onClick={()=> { dispatch(logout()); navigate("/login")}} />
          </TabList>
        </Box>
      </TabContext>
    </Box>
    </div>
  )
}