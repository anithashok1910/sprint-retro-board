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
      }
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
                                <Card>
                                    <CardHeader
                                    title="JOIN"
                                    subheader="Join existing Agile Board"
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <Typography variant="subheading" align="center" key={"line1"}>
                                            {"Join the board from the existing started board invited by your team"}
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
                                <Card>
                                    <CardHeader
                                    title="CREATE"
                                    subheader="Join existing Agile Board"
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <Typography variant="subheading" align="center" key={"line1"}>
                                            {"Join the board from the existing started board invited by your team"}
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