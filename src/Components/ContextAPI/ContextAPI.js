import React from 'react';
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ContextAPI(props) {
  return (
    <div>
       <UserContext.Provider value={"fitrianinasir"}>
          <ChannelContext.Provider value={'Universitas Hasanuddin'}>
            <ComponentC/>
          </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default ContextAPI;