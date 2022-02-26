/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';

// Components testing imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Login from './Components/User_management/login/Login';
import AdminView from './Components/Admin_views/AdminView';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import MeetingsPageContainer from './Components/Admin_views/Meetings/MeetingsPageContainer';
import Landing from './Components/User_management/Landing/Landing';
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

  const getAdminRoutes = () => {
    return (
      <>

      </>
    )
  }

  const getUsersRoutes = () => {
    return (
      <>
        
      </>
    )
  }

  /*
  useEffect(() => {
    fetch('http://localhost:5000/users/620628b839bd33ce78e3ed56').then((response) => response.json())
    .then((data) => {
      setCreds(data)
    });
    
  }, [])
  */
  
  /*
  useEffect(() => {
    fetch('http://localhost:5000/admins/620a324365bd8515cf1a7ba3').then((response) => response.json())
    .then((data) => {
      setCreds(data);
    })
    console.log(userCreds)
  }, [])
  */

  // Return main app component 
  return (
    <div className="App">
      <Router>
        <div className='top-bar'>
            {/* Logo + Title + Menu */}
            <Link className='link' to="/"><img src={logo} className='logo'/></Link>
        </div>

        <div className='content'>
          <Switch>
              <Route exact path='/' component={() => {return(<Landing/>)}}/>

              {/* Login pages for each session */}
              <Route exact path='/login_admin'><Login userType='admin' setToken={setToken} setCreds={setCreds}/></Route>
              <Route exact path='/login_patient'><Login userType='patient' setToken={setToken} setCreds={setCreds}/></Route>
              <Route path='/home_admin/:id'><AdminView adminInfo={userCreds}/></Route>

              <Route path='/operating_screen/:id'><PageContainerOperator operatorInfo={userCreds}/></Route>
              <Route path='/patient/:_id'><PageContainer healthStats={testConfigs.healthStats1}
                devicesPerformances={testConfigs.device_checkpoints} currentDevice={"wheelchair"}
                /></Route>


              
              {/* Home pages for each session FIXME: Add private routing, after login successful*/}
              {/*<Route path='/admin_home'></Route>*/}
              {/*<Route path='/patient_home'></Route>*/}

              {/* Admin action pages */}
              {/*
                token === true && type === 'admin' ?
                <>
                {
                  getAdminRoutes()
                } 
                </>             
                :
                null
              }

              {/* User action pages 
              {
                token === true && type === 'user' ?
                <>
                {
                  getUsersRoutes()
                }
                </>
                :
                null
              }*/}

          </Switch>
        </div>
      </Router>
      {/*<AdminView adminInfo={testConfigs.admin1} />
       {/**<PageContainerOperator operatorInfo={operator}/>
          <MeetingsPageContainer adminInfo={userCreds}/>
       {/**<Landing/>*/}
    </div>
  )
}

export default App;
