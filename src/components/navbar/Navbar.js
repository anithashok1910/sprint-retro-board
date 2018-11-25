import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const navBarStyles = theme => ({
    '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
    appBar:{
        position: 'relative',
    },
    toolbarTitle:{
        flex: 1,
    }
});

const Navbar = (props) =>{

    const {classes} = props;
    return(
        <CssBaseline>
        <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
                    <b>SkunkWorkz</b>
                </Typography>
            </Toolbar>
        </AppBar>
        </CssBaseline>
    )
    
}
export default withStyles(navBarStyles)(Navbar);
