
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import HomeScreen from './screens/common/HomeScreen';
import CreateAccountScreen from './screens/customer/CreateAccountScreen';
import LoginScreen from './screens/common/LoginScreen';
import LogoutScreen from './screens/common/LogoutScreen';
import AdminHomeScreen from './screens/admin/AdminHomeScreen';
import SupplierHomeScreen from './screens/supplier/SupplierHomeScreen';



function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={()=> (<Redirect to ='/home' />)}/>
          <Route path="/home" component={HomeScreen}/>
          <Route path="/create-account" component={CreateAccountScreen}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/logout" component={LogoutScreen}/>
          <Route path="/adminhome" component={AdminHomeScreen}/>
          <Route path="/supplierhome" component={SupplierHomeScreen}/>
        </Switch>
      </div>    
    </Router>
    </div>
   
    </div>
  );
}

export default App;
