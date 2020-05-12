import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from '../ContextAPI/ContextAPI'

function ComponentE(props) {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h3>This is from ComponentE</h3>
      <p>
        {user} | {channel}
      </p>
      <hr />
      <ComponentF />
    </div>
  );
}

export default ComponentE;
