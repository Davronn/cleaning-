import { NotificationAdd, Person, Search } from "@mui/icons-material";
import "../sass/DashboardTop.scss";
import { useNavigate } from "react-router-dom";
function DashboardTop() {
    const nav = useNavigate();
  return (
    <div>
      <div className="top_dash">
        <div className="search">
          <button>Buyurtma qoshish</button>
          <div className="input">
            <Search />
            <input placeholder="Qidiruv" type="text" name="" id="" />
          </div>
        </div>
        <div className="profile">
          <NotificationAdd />
          <div onClick={()=>nav("/profile")} className="user">
            <Person  values="large"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTop;
