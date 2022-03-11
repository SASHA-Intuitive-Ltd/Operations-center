/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import axios from 'axios';

// Components testing imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Login from './Components/User_management/login/Login';
import AdminView from './Components/Admin_views/AdminView';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import MeetingsPageContainer from './Components/Admin_views/Meetings/MeetingsPageContainer';
import Landing from './Components/User_management/Landing/Landing';
import PatientsList from './Components/Admin_views/patients_management/PatientsList';


const logo = require('./assets/logo.png')


// Modules import
// Components import



function App() {

  // Test unit data generating import
  const testConfigs = require('./configs/tests.json')

  // Login token
  const [token, setToken] = useState()
  const [type, setType] = useState("")

  const [userCreds, setCreds] = useState({})

  // Return main app component 
  return (
    <div className="App">
      <Router>
        <div className='top-bar'>
            {/* Logo + Title + Menu */}
            <Link className='link' to='/'><img src={logo} className='logo'/></Link>
        </div>

        <div className='content'>
          <Switch>
              <Route exact path='/' component={() => {return(<Landing/>)}}/>

              {/* Login pages for each session */}
              <Route exact path='/login_admin' link={'620a324365bd8515cf1a7ba3'}><Login userType='admin' setToken={setToken} setCreds={setCreds}/></Route>
              <Route exact path='/login_patient'><Login userType='patient' setToken={setToken} setCreds={setCreds}/></Route>
              <Route path='/home_admin/:id'><AdminView/></Route>

              <Route path='/operating_screen/:id'><PageContainerOperator/></Route>
              <Route path='/patient/:_id'><PageContainer healthStats={testConfigs.healthStats1}
                devicesPerformances={testConfigs.device_checkpoints} currentDevice={"wheelchair"}
                /></Route>
              
              <Route path='/meetings/:id'><MeetingsPageContainer/></Route>              

              <Route path='/manage/:id'><PatientsList/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
