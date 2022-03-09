import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Offcanvas } from 'react-bootstrap';

export default function Header() {
    return(
        <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Activity Manager</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu Principal</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Sobre</Nav.Link>
          <Nav.Link href="#action3">Entrar / Criar Conta</Nav.Link>
        </Nav>
        <br></br>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Digite algo para pesquisar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Procurar</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}