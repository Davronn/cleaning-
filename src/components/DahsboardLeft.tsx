import {  DryCleaning, Email, Home, Person, Settings, VolunteerActivism } from "@mui/icons-material";
import "../sass/DashboardLeft.scss";
function Dahsboard() {
  return (
    <div>
      <div className="left_dash">
        <h1 className="logo">Logo</h1>
        <div className="icons">
          <div className="icon active ">
            <Home />
            <h2>Asosiy</h2>
          </div>
          <div className="icon">
            <DryCleaning />
            <h2>Buyurtmalar</h2>
          </div>
          <div className="icon">
            <Person />
            <h2>Mijozlar</h2>
          </div>
          <div className="icon">
            <Email />
            <h2>SMS marketting</h2>
          </div>
          <div className="icon">
            <VolunteerActivism />
            <h2>Xizmatlar</h2>
          </div>
          <div className="icon">
            <Settings />
            <h2>Sozlamalar</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dahsboard;
