import { css } from "@emotion/css";
import { Link } from "react-router-dom";

function Next() {
    return (
      <div
        className={css`
          height: 200vh;
          width: 100vw;
          padding-bottom: 200px;
          background: linear-gradient(blue, green);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: auto;
        `}
      >
        <h1>Next</h1>
        <Link to={"/"}>Click to Home page.</Link>
      </div>
    );
  }

  export default Next;