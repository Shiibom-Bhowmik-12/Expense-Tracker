import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div className='card'>
          <Card sx={{width:'40%',height:'50%',borderRadius:'8%'}} elevation={24}>
            <br/>
            <br/>
            <div>
              <Typography variant='h3' sx={{textAlign:'center',color:'##240041',fontWeight:'bold',fontFamily:'times new roman'}}>
                Sign Up
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
            <div className='terms'>
              <input type="checkbox" id="terms" name="terms" value="condition"/>
              <label for="terms">I read and agree to <Link to='/terms'>Terms and Conditions</Link></label>
            </div>
            <br/>
            <br/>
            <div className='btn'>
            <Button variant="contained" sx={{fontFamily:'times new roman'}}>CREATE  ACCOUNT</Button>
            </div>  
            <br/>
            <br/>
            <Typography variant='subtitle2' sx={{textAlign:'center',color:'##240041',fontWeight:'500',fontFamily:'times new roman'}}>
                Already have an account? <Link to='/login'>Sign in</Link>
              </Typography>
              <br/>
              <br/>
          </Card>
    </div>

  );
}