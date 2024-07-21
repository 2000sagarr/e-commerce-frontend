// ** MUI Imports
import Grid from "@mui/material/Grid";
import AdminPannel from "../../Styles/AdminPannelWrapper";
import CustomersTable from "../tables/CustomersTable";
import { ThemeProvider, createTheme } from "@mui/material";
import { customTheme, darkTheme } from "../them/customeThem";
import "./Admin.css";
import RecentOrders from "../tables/RecentOrders";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// bg-[#28243d]
const Dashboard = () => {
  const {auth}=useSelector(store=>store);
  const navigate=useNavigate()


 
  return (
    <div className="adminContainer ">
      <ThemeProvider theme={customTheme}>
        <AdminPannel>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RecentOrders />
            </Grid>
            <Grid item xs={12}>
              <CustomersTable />
            </Grid>
          </Grid>
        </AdminPannel>
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
