import React, { Component } from 'react';
import Emails from '../../../data/draft.json';
class Inbox extends Component{

    render(){
        return(
          <ul className="list-group">{Emails.map(email=>{
              return(
                 <React.Fragment>
                     <div className="p1">{email.from}
                     <br/>
                     {email.Subject}
                     <br/>
                     
                     <li className="list-item">{email.msg}</li>
                     </div>
                    
                  </React.Fragment>
              )
          })}   
          </ul>
        )
    }
}

export default Inbox;