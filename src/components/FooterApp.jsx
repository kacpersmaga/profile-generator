import { Container } from "react-bootstrap";

function FooterApp() {
  return (
    <footer className="bg-light mt-auto border-top">
      <Container className="py-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">       
          <img src="/logo-uczelnia.png" alt="Logo uczelni" height="28" />
          <span className="text-muted">WSEI</span>
        </div>  
        <small className="text-muted">Autor: kacper.smaga@microsoft.wsei.edu.pl</small>
      </Container>
    </footer>
  );
}

export default FooterApp;
