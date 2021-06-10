import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://cic.ubc.ca/" target = "_blank" >
                UBC CIC
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));
const footers = [
    {
        title: 'UBC CIC',
        link: 'https://cic.ubc.ca/'
    },
    {
        title: 'MIT License',
        link: 'https://github.com/UBC-CIC/UBCO-StudentEngagementApp/blob/frontend/LICENSE'
    },
    {
        title: 'Attribution',
        link: 'https://github.com/UBC-CIC/UBCO-StudentEngagementApp/blob/frontend/ATTRIBUTIONS'
    }
];

export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Footer */}
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={4} key={footer.title}>
                            <Typography variant="h7" color="textPrimary" gutterBottom align={'center'}  >
                                <Link href={footer.link} target = "_blank" >
                                    {footer.title}
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}