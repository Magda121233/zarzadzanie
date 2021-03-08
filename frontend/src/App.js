import React from 'react';
import { observer } from 'mobx-react';
import UseStore from './stores/UseStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import QuestionForm from './QuestionForm';
import './App.css';

class App extends React.Component {
  async componentDidMount() {

    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UseStore.loading = false;
        UseStore.isLoggedIn = true;
        UseStore.username = result.username;

      }

      else {
        UseStore.loading = false;
        UseStore.isLoggedIn = false;
      }
    }
    catch (e) {
      UseStore.loading = false;
      UseStore.isLoggedIn = false;

    }
  }

  async doLogout() {

    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UseStore.isLoggedIn = false;
        UseStore.username = '';
        UseStore.username = result.username;

      }
      else {
        UseStore.loading = false;
        UseStore.isLoggedIn = false;
      }

    }
    catch (e) {
      console.log(e)

    }
  }

  render() {

    if (UseStore.loading) {
      return (
        <div className="app">
          <div className="container">
            Loading, please wait..
          </div>
        </div>
      );
    }

    else {

      if (UseStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Cześć {UseStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={() => this.doLogout()}
              />
            </div>
          </div>
        );
      }

      return (
        <div className="app">
          <div className="container">
           <LoginForm />
            
          </div>
        </div>
      );
    }
  }

}
export default observer(App);
