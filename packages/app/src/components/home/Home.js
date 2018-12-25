 import React from 'react'
 import Typography from '@material-ui/core/Typography';
 import { withStyles } from '@material-ui/core/styles';
 import "./Home.css";
import CreateBoardCard from "./cards/create-board-card/CreateBoardCard";
import JoinBoardCard from "./cards/join-board-card/JoinBoardCard";

const styles = {
    root: {
      width: '100%',
      maxWidth: 500,
    },
    headName:{
        color:'#ffffff',
    },
    subHeading:{
        color:"#ffffff"
    }
  };


const BoardInterface = (props) =>{

    const { classes } = props;
    return (    
                        <div className = "bg-img">
                        <div className = "grid-container">
                            <main className = "main">
                                <div className="main-header">
                                    <div className="main-header__heading">
                                    <Typography  component="h2" variant="display3"  align="center" className={classes.headName}>
                                        Golden Maze
                                    </Typography>
                                    </div>
                                    <div className="main-header__subtitles">
                                    <Typography component="h2" variant="display1" align="center" className = {classes.subHeading}>
                                        Board maze for every agile meeting
                                    </Typography>
                                    </div>
                                </div>
                            <div className="main-overview">
                                    <CreateBoardCard/>
                                    <JoinBoardCard/>
                            </div>
                            </main>
                    </div>
                </div>

           
        );    
};

export default withStyles(styles)(BoardInterface);

