import logo from "../images/logo.png";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <header class="sidebar">
      <div className="title">
        <img src={logo} alt="" className="sidebarLogo" />
        <h1>記憶ゲーム</h1>
      </div>

      <div className="scores">
        <div className="score">
          <h3>スコア</h3>
          <p>10</p>
        </div>

        <div className="score">
          <h3>ベスト</h3>
          <p>16</p>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
