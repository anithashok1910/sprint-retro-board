import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


const navBarStyles = theme => ({
    '@global': {
        body: {
          backgroundColor: 'theme.palette.common.white',
        },
      },
    appBar:{
        position: 'relative',
        backgroundColor:'#1d2d4e'
    },
    toolbarTitle:{
        flex: 1,
        color:'#FFFFFF'
    },
    button:{
        color: 'white',
    }
});

const Navbar = (props) =>{

    const {classes} = props;
    return(
        <CssBaseline>
        <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
                    Golden-Maze
                </Typography>
                <Button className={classes.button}>Features</Button>
                <Button className={classes.button}>About</Button>
                <Button className={classes.button}>Docs</Button>
                <Button className={classes.button}>Support</Button>
            </Toolbar>
        </AppBar>
        </CssBaseline>
    )
    
}
export default withStyles(navBarStyles)(Navbar);
