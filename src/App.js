import React, { Component } from 'react';
import {Link,Route,Switch,render} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import SideMenu from './Components/Folders/folders.component';
import Inbox from './Components/Folders/Inbox/inbox.component';
import SentMails from './Components/Folders/Drafts/draft.component';
import TrashMails from './Components/Folders/Trash/trashbox.component';
import SpamMails from './Components/Folders/SendMail/sendbox.component';
class App extends Component {
  state={
    Actions:[{name:"Inbox",id:0},{name:"Sent",id:1},{name:"Trash",id:2},{name:"Spam",id:3}]
  }
  render() {
    return (
<React.Fragment>
<div id="mySidenav" className="sidenav">
<button className="compbutn">Compose</button>
<SideMenu/>
</div>
<div className="MailList">
<Switch>
<Route exact path='/Inbox' component={Inbox}></Route>
<Route exact path='/Sent' component={SentMails}></Route>
<Route exact path='/Trash' component={TrashMails}></Route>
<Route exact path='/Spam' component={SpamMails}></Route>
</Switch>

</div>
</React.Fragment> 
    );
  }
}

export default App;
