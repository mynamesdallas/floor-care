import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import About from './AboutUsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { FLOORS } from '../shared/floors';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floors: FLOORS,
            selectedFloor: null
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const AboutPage = () => {
            return (
                <About />
            )
        }

        const ContactPage = () => {
            return (
                <Contact />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory floors={this.state.floors} /> } />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }

}


export default Main;