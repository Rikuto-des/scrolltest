import { css } from "@emotion/css";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div
        className={css`
          height: 200vh; // スクロールが発生するようにウィンドウ縦幅の2倍の高さに設定
          width: 100vw;
          padding-bottom: 200px;
          background: linear-gradient(
            blue,
            pink
          ); // スクロールがわかりやすいように背景をグラデーションにする
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: auto;
        `}
      >
        <h1>Home</h1>
        <Link to={"/next"}>Click to Next page.</Link>
      </div>
    );
  }

  export default Home;