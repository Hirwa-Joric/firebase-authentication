import React,{useRef} from 'react'
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { Signup } = useAuth
  return (
      <>
          <Card>
              <Card.Body>
                <h1 className='text-center mb-4'>Sigh up</h1>
                  <Form>
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
            <Button type="submit" className="w-100">Sign Up</Button>
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