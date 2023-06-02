import Signup from "./components/Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{maxWidth:"400px"
        }}><Signup /></div>
      </Container>
    </div>
  );
}

export default App;
