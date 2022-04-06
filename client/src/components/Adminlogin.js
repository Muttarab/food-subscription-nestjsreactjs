import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, makeStyles, Box } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import { useHistory } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../redux/adminRedux";

const useStyles = makeStyles((theme) => ({
    paperStyle: { marginTop: 115, padding: 20, height: '70vh', width: 280, margin: "20px auto", },
    avatarStyle: { backgroundColor: '#1bbd7e' },
    btnstyle: { margin: '8px 0' },
    spanstyle: { color: "red", marginTop: "10px" }
}));
const Adminlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    const dispatch = useDispatch();
    const history= useHistory();
    const { isFetching, error } = useSelector((state) => state.admin);
    const admin = useSelector((state) => state.admin.currentAdmin);
    useEffect(() => {
        if(admin){
            history.push('/admindashboard')
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    };
    const login = async (dispatch, admin) => {
        dispatch(loginStart());
        try {
            const result = await axios.post(`v1/admin/login`, {
                email,
                password,
            });
            dispatch(loginSuccess(result.data));
            localStorage.setItem('currentAdmin',JSON.stringify(result.data))
            history.push('/admindashboard')
        } catch (err) {
            dispatch(loginFailure());
        }
    };
    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}><LoginIcon /></Avatar>
                    <h2>Sign In (Admin)</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' onChange={(e) => setEmail(e.target.value)} fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required />
                <Button  color='primary' onClick={handleSubmit} disabled={isFetching} variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
                {error && <Box component="span" className={classes.spanstyle}>Email or Password is Incorrect!</Box>}
            </Paper>
        </Grid>
    )
}

export default Adminlogin