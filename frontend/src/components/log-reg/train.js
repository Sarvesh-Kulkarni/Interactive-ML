import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { MiniNavBar } from './navBar';
import { PROXY_URL } from '../misc/proxyURL';
import axios from 'axios';

export class LogRegTrain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testSplit: '0.2',
            penalty: 'l2',
            c: '1',
            result: [],
            uploadStatus: ''
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.testSplit, this.state.penalty, this.state.c);

        axios({
            method: "POST",
            url: PROXY_URL + "/train/logreg",
            data: [this.state.testSplit, this.state.penalty, this.state.c]
        }).then((res) => {
            if(res.status === 200){
                let uploadStatus = 'Success!';
                console.log(uploadStatus)
                this.setState({ uploadStatus });
                console.log(res)
                this.setState({ result: res.data });
            }else{
                let uploadStatus = 'Something Went Wrong!';
                console.log(uploadStatus)
                this.setState({ uploadStatus });
            }
        }).catch((error) => {
            let uploadStatus = error.toString( );
            console.log(uploadStatus)
            this.setState({ uploadStatus });
          });
    }

    onTestSplitChange(event) {
        this.setState({testSplit: event.target.value})
    }

    onPenaltyChange(event) {
        this.setState({penalty: event.target.value})
    }

    onCChange(event) {
        this.setState({c: event.target.value})
    }

    render() {
        return (
            <div>
                <MiniNavBar />
                <br /><br />
                <Header size='huge'>
                    Logistic Regression:
                </Header>
                <br /><br />
                <Grid container spacing={0}>
                <Grid item xs={6} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}>
                    <Header size = 'huge'>
                        Insert Hyperparameters:
                    </Header>
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Button type="submit" value="Submit" style={{ width: '21%' }} variant="contained" color="primary">Train</Button>
                        <br /><br /><br />
                        <Typography variant={"h6"} gutterBottom>
                            <b>{this.state.uploadStatus}</b>
                        </Typography>
                        <br/>
                        <div>
                            <TextField
                                id="testSplit"
                                label="TestSplit (0 > Value > 1)"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={'0.2'}
                                required
                                value={this.state.testSplit}
                                onChange={this.onTestSplitChange.bind(this)}
                            />
                        </div>
                        <br /><br />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Penalty</FormLabel>
                            <RadioGroup aria-label="penalty" required value={this.state.penalty} onChange={this.onPenaltyChange.bind(this)}>
                                <FormControlLabel default value="l1" control={<Radio />} label="L1" />
                                <FormControlLabel value="l2" control={<Radio />} label="L2" />
                            </RadioGroup>
                        </FormControl>
                        <br /><br /><br />
                        <div>
                            <TextField
                                id="c"
                                label="C (0 > Value > 1)"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                defaultValue={1}
                                required
                                value={this.state.c}
                                onChange={this.onCChange.bind(this)}
                            />
                        </div>
                    </form>
                </Grid>
                <Grid item xs={6} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}>
                    <Header size = 'huge'>
                        Result:
                    </Header>
                    <Card
                        style={{
                            width: "95%",
                            margin: '2.5%',
                            transition: "0.3s",
                            boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                            "&:hover": {
                            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                            }
                        }}
                        >
                        <CardContent>
                            <Typography id="classes" variant={"h6"} gutterBottom>
                                <b>Classes: </b>{this.state.result.classes}
                            </Typography>
                            <Typography id="coef" variant={"h6"}>
                                <b>Coef: </b>{this.state.result.coef}
                            </Typography>
                            <Typography id="intercept" variant={"h6"}>
                                <b>Intercept: </b>{this.state.result.intercept}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
        );
    }
};