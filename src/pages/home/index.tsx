import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/Home.scss";
import Dahsboard from "../../components/DahsboardLeft";
import DashboardTop from "../../components/DashboardTop";

const Home = () => {
  const nav = useNavigate();
  const acess_token = localStorage.getItem("access__token");
  useEffect(() => {
    if (!acess_token) {
      nav("/login");
    }
    console.log(acess_token);
  }, [acess_token]);
  return (
    <div className="home_df">
      <Dahsboard />
      <div className="home">
        <DashboardTop />
        <div className="aside">
          <div className="boxes">
            <div className="box">
              <h2>423 ta</h2>
              <p>Foydalanuvchi</p>
            </div>
            <div className="box">
              <h2>978 ta</h2>
              <p>Buyurtma</p>
            </div>
            <div className="box">
              <h2>342 ta</h2>
              <p>SMS jo'natildi</p>
            </div>
            <div className="box">
              <h2>4 xil</h2>
              <p>Xizmat</p>
            </div>
          </div>
          <div className="info">
            <div className="head">
              <h1>Buyurtmalar:</h1>
              <h2>Oylik</h2>
            </div>
            <div className="bottom">
              <div className="b">
                <h3>Barchasi</h3>
                <h1>423 ta</h1>
              </div>
              <div className="b">
                <h3>Barchasi</h3>
                <h1>423 ta</h1>
              </div>
              <div className="b">
                <h3>Barchasi</h3>
                <h1>423 ta</h1>
              </div>
              <div className="b">
                <h3>Barchasi</h3>
                <h1>423 ta</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
