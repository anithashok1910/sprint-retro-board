import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class BoardInterface extends Component{


    render = () => {

        let styles = {
            margin: "10%",
            padding:"10%",
            height:"65%",
            textAlign: 'center',
        };
        return (
            <div style = {{backgroundColor: '#eeeeee'}}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                         <Paper style = {styles}>
                         <TextField
                            id="boardID"
                            label="Board Id"
                            
                            value=""
                            // onChange={this.handleChange('name')}
                            margin="normal"
                            />
                            <Typography variant="headline" component="h3">
                                Join Existing Board
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper style = {styles}>
                            <Typography variant="headline" component="h3">
                                Create new Board
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    } 
}

export default BoardInterface;

//This place will act as a place holder for all the Board works
