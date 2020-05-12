 import React from 'react';
 import {UserContext, ChannelContext} from '../ContextAPI/ContextAPI'
 function ComponentF(props) {
   return (
     <div>
       <h3>ComponentF</h3>
       <UserContext.Consumer>
         {
           user => {
             return (
               <ChannelContext.Consumer>
                 {
                   university => {
                     return <div>User context value {user} | channel context {university}</div>
                   }
                 }
               </ChannelContext.Consumer>
             )
           }
         }
       </UserContext.Consumer>
     </div>
   );
 }
 
 export default ComponentF;