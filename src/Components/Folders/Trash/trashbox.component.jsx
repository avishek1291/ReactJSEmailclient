import React, { Component } from 'react';
import TrashEmails from '../../../data/trash.json'
class TrashMails extends Component{

    render(){
        return(
          <ul className="list-group">{TrashEmails.map(email=>{
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

export default TrashMails;