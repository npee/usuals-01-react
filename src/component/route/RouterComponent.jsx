import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserListComponent from '../users/UserListComponent';
import UserAddComponent from "../users/UserAddComponent";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={UserListComponent} />
                        <Route path="/all-users" component={UserListComponent} />
                        <Route path="/add-user" component={UserAddComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    margin: '10px'
}

export default AppRouter;
