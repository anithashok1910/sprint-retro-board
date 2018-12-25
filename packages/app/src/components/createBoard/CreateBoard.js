import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Dashboard from '@material-ui/icons/Dashboard';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./create-board.css";

class CreateBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            boardType:""
        };
    }

    onBoardTypeSelectChangeHandler = event => {
        event.preventDefault();
         this.setState({ [event.target.name]: event.target.value });
         console.log("aagay ");
    };

    render(){
        return(
            <div className="bg-img">
                <main className="create-board">
                    <Paper className="create-board-paper">
                        <Avatar className="create-board-avatar">
                            <Dashboard />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Create Board
                        </Typography>
                        <form>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Team Name</InputLabel>
                                <Input name="team_name" type="text" id="team_name" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Sprint Name/Number</InputLabel>
                                <Input id="sprint_name" name="sprint_name"/>
                            </FormControl>
                            <FormControl  margin="normal" required fullWidth>
                                <InputLabel htmlFor="board-type">Board-Type</InputLabel>
                                    <Select
                                        value={this.state.boardType}
                                        onChange={this.onBoardTypeSelectChangeHandler}
                                        inputProps={{
                                        name: 'boardType',
                                        id: 'board-type',
                                        }}
                                        autoWidth = {false}
                                    >
                                        <MenuItem value={"Sad_Mad_Glad"}>Sad, Glad and Mad Retro Board</MenuItem>
                                        <MenuItem value={"Start_More_Continue_Less_Stop"}>Start, More, Continue, Less,Stop Retro Board</MenuItem>
                                        <MenuItem value={"4Ls"}>4Ls Retro Board</MenuItem>
                                        <MenuItem value={"Pointing_Poker"}>Pointing Poker Board</MenuItem>
                                        <MenuItem value={"Idea_BrainStorming"}>Idea Brainstorming Board</MenuItem>
                                    </Select>
                            </FormControl>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Start
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
};

export default CreateBoard;