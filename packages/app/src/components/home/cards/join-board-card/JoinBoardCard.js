import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./join-board-card.css";
import { withRouter } from 'react-router-dom'


const JoinBoardCard = (props) =>{

    const redirectToSign = ()=> {
            props.history.push({
                pathname: '/signin',
                state: { buttonLabel: "Join",boardId:2134235 }
            });
        };

    
    return (
        <Paper elevation={2} className = "join-board-card">
                <Typography variant="h5" gutterBottom align="center">
                    <b>{"Join a Board"}</b>
                </Typography>
                <Typography variant="h6" align="center">
                    {"Did someone send you a board ID ?"}
                </Typography>
                <Typography variant="h6" align="center">
                    {"Please enter it here to join a board"}
                </Typography>
               
                    <Button  fullWidth variant="contained" color="primary" className="join-board-button" onClick = {()=>{redirectToSign()}}>
                        Join Board
                    </Button>
        </Paper>
    )
}

export default withRouter(JoinBoardCard);