import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { PROXY_URL } from '../misc/ProxyURL';
import { MiniNavBar } from './NavBar';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from 'axios';

export class SVMTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            uploadStatus: '',
            showResult: false
        };
        this.createResult = this.createResult.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();

        axios.get(PROXY_URL + '/test/svm')
            .then((res) => {
                if(res.status === 200){
                    let uploadStatus = 'Success!';
                    console.log(uploadStatus)
                    this.setState({ uploadStatus });
                    console.log(res)
                    this.setState({ result: res.data });
                }else{
                    let uploadStatus = '😱 Something Went Wrong!';
                    console.log(uploadStatus)
                    this.setState({ uploadStatus });
                }
            }).catch((error) => {
                let uploadStatus = error.toString( );
                uploadStatus = uploadStatus + ' 😱';
                console.log(uploadStatus)
                this.setState({ uploadStatus });
            });
    }

    createResult() {
        this.setState({ showResult: true }) 
    }

    render() {
        return (
            <div>
                <MiniNavBar />
                <br /><br />
                <Header size='huge'>
                    Support Vector Machine:
                </Header>
                <br /><br />
                <Grid container spacing={0}>
                <Grid item xs={6} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}>
                    <Header size = 'huge'>
                        Test:
                    </Header>
                    <br />
                    <form onSubmit={this.handleSubmit.bind(this)} method="GET">
                        <Button type="submit" value="Submit" style={{ width: '21%' }} variant="contained" color="primary">Test</Button>
                    </form>
                    <br />
                    <Typography variant={"h6"} gutterBottom>
                        <b>{this.state.uploadStatus}</b>
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={6} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}>
                    <Header size = 'huge'>
                        Result:
                    </Header>
                    <br />
                    <Button style={{ width: '21%' }} variant="contained" color="primary" onClick={this.createResult}>Result</Button>
                    <br /><br /><br />
                    {this.state.showResult &&   
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                            >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>4:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['4']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['4'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['4'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['4'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&   
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                            >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>5:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['5']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['5'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['5'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['5'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&   
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                            >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>6:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['6']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['6'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['6'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['6'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&   
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                            >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>7:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['7']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['7'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['7'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['7'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&   
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                            >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>8:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['8']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['8'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['8'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['8'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                        >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>Accuracy: </b>{this.state.result.accuracy}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                        >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>Macro Average:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['macro avg']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['macro avg'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['macro avg'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['macro avg'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    <br />
                    {this.state.showResult &&
                        <Card
                            style={{
                                width: "95%",
                                margin: '2.5%',
                                transition: "0.3s",
                                boxShadow: "0 12px 40px -12px rgba(0,0,0,0.3)",
                                "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" }
                            }}
                        >
                            <CardContent>
                                <Typography variant={"h6"} gutterBottom>
                                    <b>Weighted Average:</b>
                                    <br />
                                    <b>F1-Score: </b>{this.state.result['weighted avg']['f1-score']}
                                    <br />
                                    <b>Precision: </b>{this.state.result['weighted avg'].precision}
                                    <br />
                                    <b>Recall: </b>{this.state.result['weighted avg'].recall}
                                    <br />
                                    <b>Support: </b>{this.state.result['weighted avg'].support}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                </Grid>
            </Grid>
        </div>
        );
    }
};