import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from "@mui/material/Paper";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TuneIcon from '@mui/icons-material/Tune';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Link, useLocation} from "react-router-dom";
import {useState,useEffect} from "react";

export default function NavTabs() {
  const [value, setValue] = useState<number>(0);
  let location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/chart':
        setValue(1);
        break;
      case '/settings':
        setValue(2);
        break;
    }
  }, [location]);


  return (
    <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event: React.SyntheticEvent, value: number) => {
          console.log(event);
          setValue(value)
        }}>
        <BottomNavigationAction component={Link} to="/" icon={<AddBoxIcon/>}/>
        <BottomNavigationAction component={Link} to="/chart" icon={<BarChartIcon/>}/>
        <BottomNavigationAction component={Link} to="/settings" icon={<TuneIcon/>}/>
      </BottomNavigation>
    </Paper>
  );
}