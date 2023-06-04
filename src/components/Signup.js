import React,{useRef, useState} from 'react'
import { Form, Button, Card , Alert} from "react-bootstrap"
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { SignUp } = useAuth()
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
      e.preventDefault() 
        
  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("the password must be a match ")
  }
    try {
      setError("")
      setLoading(true)  
      await SignUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Failed to create an account")
    }

    }
  return (
      <>
          <Card>
              <Card.Body>
          <h1 className='text-center mb-4'>Sigh up</h1>
          {error && <Alert variant='danger'>{error}</Alert>}
                  <Form onSubmit={handleSubmit}> 
                    <Form.Group id='Email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id='Password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>                    <Form.Group id='Email'>
                      <Form.Label>Password-confirm</Form.Label>
                      <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account ? Log In
          </div>
    </>
  )
}

export default Signup