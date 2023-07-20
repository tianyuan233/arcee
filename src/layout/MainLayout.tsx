import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import NavTabs from "../components/NavTabs.tsx";

export default function MainLayout() {
  return (
    <>
      <Box sx={{height: 'calc(100% - 56px)'}}>
        <Outlet/>
      </Box>
      <NavTabs/>
    </>
  )
}