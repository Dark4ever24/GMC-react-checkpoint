import React from "react";
import Profile from "./copmonent/profile/address";
import Profilepic from "./copmonent/profile/profilephoto"
import Fullname from "./copmonent/profile/fullname";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import  {Navbar , NavDropdown , Container , Nav} from 'react-bootstrap'







function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">horsing around </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">about</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div  className = "background"  >

<Profilepic/>
<Profile/>
<Fullname/>

</div>

    </div>
  );
}






export default App;
