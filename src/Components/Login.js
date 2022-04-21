import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { red } from '@mui/material/colors';


export default function Signup() {
  return (
    <div className='whole'>
    <div className='card'>
          <Card sx={{width:'40%',height:'50%',borderRadius:'8%'}} elevation={24} elevationColor={red}>
            <br/>
            <br/>
            <div>
              <Typography variant='h3' sx={{textAlign:'center',color:'##240041',fontWeight:'bold',fontFamily:'times new roman'}}>
                Login
              </Typography>
            </div>
            <br/>
            <div className='email'>
            <TextField id="standard-basic" label="E-mail" variant="standard" sx={{width:'75%'}}/>
            </div>
            <br/>
            <div className='password'>
            <TextField id="standard-basic" label="Password" variant="standard" sx={{width:'75%'}} />
            </div>
            <br/>
            <br/>
            <div className='btn'>
            <Button variant="contained" sx={{fontFamily:'times new roman'}}>Sign in</Button>
            </div>  
            <br/>
            <br/>
            <Typography variant='subtitle2' sx={{textAlign:'center',color:'##240041',fontWeight:'500',fontFamily:'times new roman'}}>
                Don't have an account? <Link to='/signup'>Sign up</Link>
              </Typography>
              <br/>
              <br/>
          </Card>
        </div>
      </div>
  );
}