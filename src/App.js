import React from "react";
import Index from "pages/index";
import ClientLogin from "pages/clientLogin";
import ClientEncodeImage from "pages/clientEncodeImage";
import CustomerDecodeImage from "pages/customerDecodeImage";
import privacyPolicy from "pages/privacyPolicy";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        	<Route exact path='/AuthGen-Frontend' component={Index}/>
			<Route exact path='/AuthGen-Frontend/home' component={Index}/>
			<Route exact path='/AuthGen-Frontend/client-login' component={ClientLogin}/>
			<Route exact path='/AuthGen-Frontend/client-encode-image' component={ClientEncodeImage}/>
			<Route exact path='/AuthGen-Frontend/customer-decode-image' component={CustomerDecodeImage}/>
            <Route exact path='/AuthGen-Frontend/privacy-policy' component={privacyPolicy}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
