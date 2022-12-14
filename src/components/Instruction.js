import "../styles/Instruction.css";
import image from "../images/modal.png";
import React, { useState } from "react";

export const Instruction = () => {
  const [active, setActive] = useState(true);
  const handleClick = () => setActive(!active);

  const modal = (
    <div className="modal">
      <div className="modalBody">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>名探偵コナン 記憶ゲーム</h3>
          <p>
            キャラクターをクリックしてポイントを獲得して、
            <br />
            同じキャラを2回クリックしたらやり直し！
          </p>
          <button type="button" className="startBtn" onClick={handleClick}>
            スタート
          </button>
        </div>
      </div>
    </div>
  );
  return active ? modal : null;
};
