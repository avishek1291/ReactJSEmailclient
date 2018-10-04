import React, { Component } from 'react';
import SentEmails from '../../../data/sent.json';
class SentMails extends Component{

    render(){
        return(
          <ul className="list-group">{SentEmails.map(email=>{
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

export default SentMails;