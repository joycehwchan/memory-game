import logo from "../images/logo.png";
import github from "../images/github.svg";
import "../styles/Sidebar.css";

const Sidebar = (props) => {
  return (
    <header className="sidebar">
      <div className="title">
        <img src={logo} alt="" className="sidebarLogo" />
        <h1>記憶ゲーム</h1>
      </div>

      <div className="scores">
        <div className="score">
          <h3>スコア</h3>
          <p>{props.score}</p>
        </div>

        <div className="score">
          <h3>ベスト</h3>
          <p>{props.best}</p>
        </div>
      </div>

      <div className="github">
        <a
          href="https://github.com/joycehwchan/memory-game"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="source" class="githubIcon" />
        </a>
      </div>
    </header>
  );
};

export default Sidebar;
