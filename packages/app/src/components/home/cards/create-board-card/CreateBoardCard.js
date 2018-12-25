import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./create-board-card.css";
import { withRouter } from 'react-router-dom'


const CreateBoardCard = ({props,history}) => {

    const redirectToSign = ()=> {
            history.push({
                pathname: '/signin',
                state: { buttonLabel: "Next" }
            });
        };

    return (
        <Paper elevation={1} className="create-board-card">
            <Typography variant="h5" gutterBottom align="center">
                    <b>{"Start a Board"}</b>
                </Typography>
                <Typography  variant="h6"  align="center">
                    {"Create a new board"}
                </Typography>
                <Typography  variant="h6"  align="center">
                    {"Invite your team members"}
                </Typography>
                    <Button variant="contained" color="primary" className="create-board-button" onClick = {()=>redirectToSign()}>
                        Get Started
                    </Button>
        </Paper>
    )
};

export default withRouter(CreateBoardCard);