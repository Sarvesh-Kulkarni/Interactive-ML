import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinRegAbout } from './component/linReg/About';
import { LinRegTrain } from './component/linReg/Train';
import { LinRegTest } from './component/linReg/Test';
import { LinRegResult } from './component/linReg/Result';
import { LogRegAbout } from './component/logReg/About';
import { LogRegTrain } from './component/logReg/Train';
import { LogRegTest } from './component/logReg/Test';
import { LogRegResult } from './component/logReg/Result';
import { SVMAbout } from './component/sVM/About';
import { SVMTrain } from './component/sVM/Train';
import { SVMTest } from './component/sVM/Test';
import { SVMResult } from './component/sVM/Result';
import { NBAbout } from './component/nB/About';
import { NBTrain } from './component/nB/Train';
import { NBTest } from './component/nB/Test';
import { NBResult } from './component/nB/Result';
import { KMeansAbout } from './component/kMeans/About';
import { KMeansTrain } from './component/kMeans/Train';
import { KMeansTest } from './component/kMeans/Test';
import { KMeansResult } from './component/kMeans/Result';
import ViewCSV from './component/viewCSV/ViewCSV';
import { NavBar } from './component/navBar/NavBar';
import HomePage from './component/home/HomePage';

import history from './component/history/History';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history} >
                <React.Fragment >
                    <NavBar/>
                    <div className = "main-content" >
                        <Switch>
                            <Route path = "/" exact
                            component = { HomePage }
                            />{" "}
                            <Route path = "/dataset" exact
                            component = { ViewCSV }
                            />{" "}
                            <Route path = "/lin-reg" exact 
                            component = { LinRegAbout }
                            />{" "}
                            <Route path = "/lin-reg/train" exact 
                            component = { LinRegTrain }
                            />{" "}
                            <Route path = "/lin-reg/test" exact 
                            component = { LinRegTest }
                            />{" "}
                            <Route path = "/lin-reg/result" exact
                            component = { LinRegResult }
                            />{" "}
                            <Route path = "/log-reg" exact 
                            component = { LogRegAbout }
                            />{" "}
                            <Route path = "/log-reg/train" exact 
                            component = { LogRegTrain }
                            />{" "}
                            <Route path = "/log-reg/test" exact 
                            component = { LogRegTest }
                            />{" "}
                            <Route path = "/log-reg/result" exact
                            component = { LogRegResult }
                            />{" "}
                            <Route path = "/svm" exact
                            component = { SVMAbout }
                            />{" "}
                            <Route path = "/svm/train" exact 
                            component = { SVMTrain }
                            />{" "}
                            <Route path = "/svm/test" exact 
                            component = { SVMTest }
                            />{" "}
                            <Route path = "/svm/result" exact
                            component = { SVMResult }
                            />{" "}
                            <Route path = "/nb" exact
                            component = { NBAbout }
                            />{" "}
                            <Route path = "/nb/train" exact 
                            component = { NBTrain }
                            />{" "}
                            <Route path = "/nb/test" exact 
                            component = { NBTest }
                            />{" "}
                            <Route path = "/nb/result" exact
                            component = { NBResult }
                            />{" "}
                            <Route path = "/k-means" exact
                            component = { KMeansAbout }
                            />{" "}
                            <Route path = "/k-means/train" exact 
                            component = { KMeansTrain }
                            />{" "}
                            <Route path = "/k-means/test" exact 
                            component = { KMeansTest }
                            />{" "}
                            <Route path = "/k-means/result" exact
                            component = { KMeansResult }
                            />{" "}
                        </Switch>{" "}
                    </div>{" "} 
                </React.Fragment>{" "} 
            </BrowserRouter>
        );
    }
};