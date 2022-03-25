import React from 'react'
import axios from "axios";
import { Grid, Paper, Avatar, Typography, TextField, Button, makeStyles, Box } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paperStyle: { marginTop: 115, padding: 20, height: '70vh', width: 280, margin: "20px auto" },
    headerStyle: { margin: 0 },
    avatarStyle: { backgroundColor: '#1bbd7e', marginBottom: "21px" },
    btnstyle: { margin: '8px 0' },
    spanstyle: { color: "red", marginTop: "10px" }
}));
const Register = () => {
    const user = useSelector((state) => state.user.currentUser);
    const admin = useSelector((state) => state.admin.currentAdmin);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    useEffect(() => {
        if (admin) {
            history.push('/admindashboard')
        }
        if (user) {
            history.push('/')
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const result = await axios.post("http://localhost:8000/client/register", {
                name,
                email,
                password,
            });
            if (result.data) {
                alert("User Created Successfully!");
                history.push('/login')
            }
        } catch (err) {
            setError(true);
        }
    };
    return (
        <Grid>
            <Paper elevation={20} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <CreateIcon />
                    </Avatar>
                    <h2 className={classes.headerStyle}>Sign up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField label='Name' placeholder="Enter your name" onChange={(e) => setName(e.target.value)} fullWidth />
                    <TextField label='Email' placeholder="Enter your email" type='email' onChange={(e) => setEmail(e.target.value)} fullWidth required />
                    <TextField label='Password' placeholder="Enter your password" type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required />
                    <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign up</Button>
                </form>
                {error && <Box component="span" className={classes.spanstyle}>Something went wrong! Make sure Password should be atleast 8 characters long.</Box>}
            </Paper>
        </Grid>
    )
}
export default Register;