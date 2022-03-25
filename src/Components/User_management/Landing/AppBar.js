import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import MuiAppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material/';
// import Toolbar from '../components/Toolbar';

const logo = require('../../../assets/logo.png')
const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export default function AppAppBar({ token, userType }) {

    function getHerf() {
        //if (token) {
          //  return '/'
        //}

        /*if (userType === 'patient') {
            return '/patient_home'
        }

        else {
            return '/admin_home'
        }*/
    }

    return (
        <div>
        <MuiAppBar position="block">
            <Box sx={{ flex: 1, paddingTop: 2 }} />
                <Link
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className='link'
                    href={ '/' }
                    sx={{ fontSize: 24, paddingBottom: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img src={logo} style={{ height: 50, width: 50, marginRight: 10 }} className='logo' />
                    <Typography variant='h4'>SASHA</Typography>
                </Link>
        </MuiAppBar>
        </div>
    );
}
