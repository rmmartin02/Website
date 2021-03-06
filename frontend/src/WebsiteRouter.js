import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from "./App";
import ImageHandler from "./Images/ImageHandler";
import IbtracHandler from "./Ibtracs/IbtracHandler";
import HurdatHandler from "./Hurdat/HurdatHandler";

export default function WebsiteRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={`/`}>
                        <App/>
                    </Route>
                    <Route exact path={'/images'}>
                        <ImageHandler/>
                    </Route>
                    <Route exact path={'/ibtracs'}>
                        <IbtracHandler/>
                    </Route>
                    <Route exact path={'/hurdat'}>
                        <HurdatHandler/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}