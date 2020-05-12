import React from "react";
import Doc1 from "./Doc1";
import Doc2 from "./Doc2";

function Doc(props) {
  return (
    <div>
      <span>Document1</span> <Doc1 /> <br />
      <span>Document2</span> <Doc2 />
    </div>
  );
}

export default Doc;
