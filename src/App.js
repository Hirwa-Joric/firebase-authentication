import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container className="d-flex align-items-center justify-content-center">
          <div className="w-100" style={{maxWidth:"400px"
          }}><Signup /></div>
          </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
