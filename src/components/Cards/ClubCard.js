import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {ButtonBase, Card, Icon, IconButton, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
function ClubCard (props){
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop:'20px'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
        },
        image: {
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            width: 128,
        },
    }));

    const {title,logo,description, email, website, facebook, twitter} = props

    const classes = useStyles();
    return(
        <div>
            <Card className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img className={classes.img} src={logo}/>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" align={'left'}>
                                            {title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography gutterBottom variant={"body2"} align={'left'}>
                                            {description}
                                        </Typography>
                                    </Grid>



                                    <Grid item alignItems={'left'}>
                                        <IconButton href={`mailto:${email}`} target = "_blank">
                                            <EmailIcon/>
                                        </IconButton>
                                        <IconButton href={facebook} target = "_blank">
                                            <FacebookIcon/>
                                        </IconButton>
                                        <IconButton href={twitter} target = {"_blank"}>
                                            <TwitterIcon/>
                                        </IconButton>
                                        <IconButton href={website} target = "_blank">
                                            <LanguageIcon/>
                                        </IconButton>


                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
            </Card>
        </div>
    )


}
export default ClubCard