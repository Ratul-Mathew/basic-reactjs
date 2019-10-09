import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HomeNavBar extends Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="/">Client Visit</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/createnew">Create New</Nav.Link>
                        <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                        <Nav.Link href="/createnew">Create New Client Visit</Nav.Link>

                    </Nav>

                    <NavDropdown id="ReportDropDown" title="Reports">
                        <NavDropdown.Item href="/report">Some Report</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HomeNavBar;