import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';


//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/page-layout-examples/pricing/Pricing.js
//https://material-ui.com/page-layout-examples/pricing/
const boardInterfaceStyles = theme => ({
    '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
          width: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
      },
      cardHeader: {
        backgroundColor: theme.palette.grey[200],
      },
      cardActions: {
        [theme.breakpoints.up('sm')]: {
          paddingBottom: theme.spacing.unit * 2,
        },
      },
      cardContents: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
      },
});
const BoardInterface = props =>{
    const {classes} = props;
    return (
            <CssBaseline>
                <main className={classes.layout}>
                    {/* Hero unit */}
                        <div className={classes.heroContent}>
                        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                            Agile Boards
                        </Typography>
                        <Typography variant="title" align="center" color="textSecondary" component="p">
                            Quickly build an effective Agile Board for your agile team from a variety of Agile boards options.
                            It&apos;s built for enhancing team work and productivity.
                        </Typography>
                        </div>
                    {/* End hero unit */}
                        <Grid container spacing={40} alignItems="flex-end">
                            <Grid item xs={12} sm={6} md={6}>
                                <Card raised>
                                    <CardHeader
                                    title="JOIN"
                                    subheader="Join existing Agile Board"
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                    />
                                    <CardContent>
                                            <Typography variant="subtitle1" align="center">
                                                {"Join an existing Board using Board ID"}
                                            </Typography>
                                            <Typography variant="subtitle1" align="center">
                                                {"Contribute to the team process"}
                                            </Typography>
                                            <Typography variant="subtitle1" align="center">
                                                {"Work with team effectively"}
                                            </Typography>
                                            <Typography variant="subtitle1" align="center">
                                                {"Papa kehte hai bada naam karega"}
                                            </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardActions}>
                                        <Button  fullWidth variant="contained" color="primary">
                                            Join now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card raised>
                                    <CardHeader
                                    title="CREATE"
                                    subheader="Create a new Agile Board"
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1" align="center">
                                            {"Create a Board from variety of options"}
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                            {"Increase work process"}
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                            {"Generate conclusive reports"}
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                            {"Bring innovation a step closer"}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardActions}>
                                        <Button  fullWidth variant="contained" color="primary">
                                            Get Started
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                    </Grid>
                </main>
            </CssBaseline>
           
        );    
};

export default withStyles(boardInterfaceStyles)(BoardInterface);