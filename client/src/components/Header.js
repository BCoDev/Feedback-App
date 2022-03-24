import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }

    render() {
        return(
            <Navbar bg="info" variant="dark" style={{color: '#fff'}}>
                <Container>
                    <Navbar.Brand><Link to={this.props.auth ? '/surveys' : '/'}>EMAILY</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/surveys/new">Create Survey</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        {this.renderContent()}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Header)