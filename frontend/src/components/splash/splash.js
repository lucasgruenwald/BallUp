import '../nav/navbar.css'
import React from 'react';
import LoginContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';
import $ from 'jquery';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    signupModal(e) {
        e.preventDefault();
        $('.su-modal-background-closed').addClass('su-modal-background');
        $('.su-modal-background-closed').removeClass('su-modal-background-closed');
        $('.modal-background').addClass('modal-background-closed');
        $('.modal-background').removeClass('modal-background');

        $('.navbar').addClass('navbar-b');
        $('.hero').addClass('hero-b');
        $('.tag').addClass('tag-b');
        $('.sub-tag').addClass('sub-tag-b');
        $('.signup-btn').addClass('signup-btn-b');
    }

    ModalClose(e) {
        e.preventDefault();
        $('.modal-background').addClass('modal-background-closed');
        $('.modal-background').removeClass('modal-background');

        $('.navbar').removeClass('navbar-b');
        $('.hero').removeClass('hero-b');
        $('.tag').removeClass('tag-b');
        $('.sub-tag').removeClass('sub-tag-b');
        $('.signup-btn').removeClass('signup-btn-b');
    }

    signupModalClose(e) {
        e.preventDefault();
        $('.su-modal-background').addClass('su-modal-background-closed');
        $('.su-modal-background').removeClass('su-modal-background');

        $('.navbar').removeClass('navbar-b');
        $('.hero').removeClass('hero-b');
        $('.tag').removeClass('tag-b');
        $('.sub-tag').removeClass('sub-tag-b');
        $('.signup-btn').removeClass('signup-btn-b');
    }

    render(){

        return (
            
            <div className="splash">
            <div className="hero">
            </div>
            <div className="tag-container">
                    <div className="modal-background-closed">
                        <p className="close-modal"
                            onClick={this.ModalClose}
                        >&times;</p>
                        <h1>Login</h1>
                        <LoginContainer />
                    </div>
                    <div className="su-modal-background-closed">
                        <p className="close-su-modal"
                            onClick={this.signupModalClose}
                        >&times;</p>
                        <h1>Signup</h1>
                        <SignupContainer />
                    </div>
                <ul className="tag-list">
                    <li><h1 className="tag">It's time for the blacktop to work for 
                    you</h1></li>
                    
                        <li><p className="sub-tag">Be a part of the #1 meetup sensation 
                        for pickup basketball, and take your hoop game to the next 
                        level.</p></li>
                </ul>
                    <button onClick={this.signupModal} className="signup-btn">Got Next?</button>
            </div>
            </div>
        )
    }

}

export default Splash;