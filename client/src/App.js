import React from "react";
import { observer } from 'mobx-react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import UserStore from './stores/UserStore';
import LoginForm from "./LoginForm";
import './App.css';

import SubmitButton from "./SubmitButton";

class App extends React.Component {

    async componentDidMount() {
        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedin = true;
                UserStore.username = result.username;
            } else {
                UserStore.loading = false;
                UserStore.isLoggedin = false;
            }
        }
        catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedin = false;
            console.log('not workingg')

        }
    };

    async doLogout() {
        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {

                UserStore.isLoggedin = false;
                UserStore.username = '';
            }
        }
        catch (e) {
            console.log(e);

        }
    }


    render() {

        if (UserStore.loading) {
            return (
                <div className="app">
                    <div className="container">
                        Loading... please wait...

                    </div>

                </div>
            )
        } else {
            if (UserStore.isLoggedin) {
                return (
                    <div className="app">
                        <div className="container">
                            Welcome {UserStore.username}

                            <SubmitButton
                                text={'Log out'}
                                disabled={false}
                                onClick={() => this.doLogout()}
                            />

                        </div>

                    </div>
                )
            }
        }

        return (
            <div className="app">
                
                <div className="container">
                    <img src="favicon.ico" className="favicon"></img>
                    <div>NO SUITS ALLOWED!</div>
                    
                    <LoginForm

                    />

                </div>
            </div>
        )
    }
}


// function App() {
//     return (
//         <div className="App">
//             <Wrapper>
//                 <Header/>
//                 <Main />
//             </Wrapper>
//         </div>
//     )
// };

export default observer(App);