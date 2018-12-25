import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import "./sign-in.css";


class SignIn extends Component{

  constructor(props){
    super(props);
    this.state={
      boardId : this.props.location.state.boardId,
      buttonLabel : this.props.location.state.buttonLabel
    }
  }

  redirectToRespectiveRoute = () =>{
    if(this.state.boardId){
        this.props.history.push('/board');
    }else{
         this.props.history.push('/board/create-board');
    }
  }

  render(){
      return (
        <div className = "bg-img">
          <main className="sign-in">
            <Paper className="sign-in-form-paper">
              <Avatar className="sign-in-avatar">
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign-in
              </Typography>
              <form>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="text">Name</InputLabel>
                  <Input name="name" type="text" id="name"/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick = {()=>{this.redirectToRespectiveRoute()}}
                >
                  {this.state.buttonLabel}
                </Button>
              </form>
            </Paper>
          </main>
        </div>
      );
  }
  
}

export default withRouter(SignIn);