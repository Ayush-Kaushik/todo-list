import React, {useContext} from 'react';
import './App.css';
import ToDoListLayout from "./layout/ToDoListLayout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignInLayout from "./layout/SignInLayout";
import SignUpLayout from "./layout/SignUpLayout";
import PrivateRoute from "./components/PrivateRoute";
import SideBar from "./components/Sidebar";
import ProfileLayout from "./layout/ProfileLayout";
import {FirebaseContext} from "./context/FirebaseContext";

function App() {
    const firebaseContext = useContext(FirebaseContext);

    return (
        <div>
            <Router>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {(firebaseContext.initialUserState) ? <SideBar style={{
                        flexGrow: "2"
                    }}/> : <></>}

                    <div style={{
                        flexGrow: "2",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpLayout}/>
                        <Route exact path={ROUTES.SIGN_IN} component={SignInLayout}/>
                        <PrivateRoute exact path={ROUTES.HOME} component={ToDoListLayout}/>
                        <PrivateRoute exact path={ROUTES.LANDING} component={ToDoListLayout}/>
                        <PrivateRoute exact path={ROUTES.PROFILE} component={ProfileLayout}/>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App;
