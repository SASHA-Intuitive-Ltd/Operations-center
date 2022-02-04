/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components testing imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Register from './Components/User_management/register_patient/Register';
import AdminView from './Components/Admin_views/AdminView';
import Landing from './Components/User_management/Landing/Landing';
const logo = require('./assets/logo.png')

// Modules import

// Components import


function App() {

  // Test unit data generating import
  const testConfigs = require('./configs/tests.json')

  // Return main app component 
  return (
    <div className="App">
        
        {/* Top bar component */}
        <div className='top-bar'>
          {/* Logo + Title + Menu */}
            <img src={logo} className='logo'/>
        </div>

        {/* Router */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/admin" component={() => {return(<AdminView adminInfo={testConfigs.admin1}/>)}} />
              <Route exact path="/patient_view" component={() => {return(<PageContainer 
                    userInfo={testConfigs.user1}
                    healthStats={testConfigs.healthStats1}
                    currentDevice={"wheelchair"} 
                />)}} 
              />
              <Route exact path="/operator_patients_view" component={() => {return(<PageContainerOperator/>)}} />
            </Switch>
          </div>
        </Router>
       
        {/* NOTICE: currentDevice should be written only in lower case format. */}
       {/*<PageContainer 
          userInfo={testConfigs.user1}
          healthStats={testConfigs.healthStats1}
          currentDevice={"wheelchair"} 
       />*/}
       {/* <PageContainerOperator/>*/}
       {/*<AdminView adminInfo={testConfigs.admin1}/>*/}
    </div>
  )
}

export default App;
