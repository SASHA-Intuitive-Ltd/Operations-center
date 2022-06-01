/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
// Import main designs
import './App.css';

// React related modules
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

// Routing & HTTP libs import
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import axios from 'axios';

// Components imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Login from './Components/User_management/login/Login';
import AdminView from './Components/Admin_views/AdminView';
import MeetingsPageContainer from './Components/Admin_views/Meetings/MeetingsPageContainer';
import Landing from './Components/User_management/Landing/Landing';
import PatientsList from './Components/Admin_views/patients_management/PatientsList';
import Scenarios from './Components/Admin_views/Scenarios/Scenarios';
import CreateScenario from './Components/Admin_views/Scenarios/Create/CreateScenario';
import ViewBasics from './Components/Admin_views/Scenarios/ViewBasic';
import ViewSpecific from './Components/Admin_views/Scenarios/ViewSpecific';
import AddStep from './Components/Admin_views/Scenarios/Steps/AddStep';
import ViewSteps from './Components/Admin_views/Scenarios/Steps/ViewSteps';
import AppAppBar from './Components/User_management/Landing/AppBar'
import HealthHistory from './Components/Personal_data_monitoring/History/HealthHistory';


// Logo import
const logo = require('./assets/logo.png')

// App container 
export default function App() {

  // FIXME: if user tries getting back to visitor session redirect to home page of his type (const history = useHistory())

  // Test unit data generating import
  // FIXME: If unnecessary, remove.
  const testConfigs = require('./configs/tests.json')

  // Login token: { userInfo }
  const [token, setToken] = useState("")

  // Session type: 'admin' / 'patient'
  const [type, setType] = useState("")

  useEffect(() => {
    console.log("Token: " + token)
    console.log("User: " + type)
  }, [ token, type ])

  // Return main app component 
  return (
    <div className="App">
      <Router>
        <AppAppBar token={token} userType={type}/>

        <div className='content'>
          {/* Switch between possible routes */}
          <Switch>
              {/* Landing route */}
              <Route exact path='/' component={() => {return(<Landing/>)}}/>

              {/* Login pages for each session */}
              <Route exact path='/login_admin'><Login setType={setType} userType='admin' setToken={setToken} token={token}/></Route>
              <Route exact path='/login_patient'><Login userType='patient' setToken={setToken} token={token}/></Route>

              {/* Admin related routes */}
              <Route path='/home_admin/:id'><AdminView/></Route>
              <Route path='/operating_screen/:id'><PageContainerOperator/></Route>
              <Route path='/meetings/:id'><MeetingsPageContainer/></Route>              
              <Route path='/manage/:id'><PatientsList/></Route>
              <Route path='/scenarios/:id'><Scenarios/></Route>

              {/* Scenarios admin screens */}
              <Route path='/scenario_add/:id'><CreateScenario/></Route>
              <Route path='/scenario_basic/:id'><ViewBasics/></Route>
              <Route path='/scenario_specific/:id'><ViewSpecific/></Route>
              <Route path='/step_add/:id'><AddStep/></Route>
              <Route path='/steps_list/:id'><ViewSteps/></Route>

              {/* TODO: Minimize hardcoding in PatientPage */}
              <Route path='/patient/:_id'><PageContainer healthStats={testConfigs.healthStats1} /></Route>
              <Route path='/patient_health_history/:_id'><HealthHistory /></Route>
            
              {/* Patient related routes */}
          </Switch>
        </div>
      </Router>
    </div>
  )
}
