import React,{Component} from 'react';
import {Link,Route,Switch,render} from 'react-router-dom';
import '../../App.css';

class Folders extends Component{

    state={
        Actions:[{name:"Inbox",id:0},{name:"Sent",id:1},{name:"Trash",id:2},{name:"Spam",id:3}]
      }
      render() {
        return (
    <div>
       <ul >{this.state.Actions.map(a=>{
        return (
          <div>
          <div className="inner-li">
          <li className="a" key={a.id}><Link  className="a" to={'/'+a.name}>{a.name}</Link></li>
          </div>
         
          </div>
         
          );
      })}
      </ul>
      </div>
        );
      }

}
export default Folders;
