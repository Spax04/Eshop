import { useContext, useEffect, useState } from 'react'
import {
  Helmet,
  CheckoutSteps,
  Row,
  Col,
  Card,
  Store,
  Link,
  ListGroup,
  Button,
  useNavigate,
  useReducer,
  toast,
  getError,
  axios,
  Loading,
  Form
} from '../imports'

function ProfilePage () {
  const {
    state: { userInfo }
  } = useContext(Store)

  const [changePasswordField, setChangePasswordField] = useState(false)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [changeNameField, setChangeNameField] = useState(false)
  const [newName, setNewName] = useState('')

  const [changeEmailField, setChangeEmailField] = useState(false)

  const [newEmail, setNewEmail] = useState('')

  const changePasswordState = () => {
    if (changePasswordField) {
      setChangePasswordField(false)
    } else {
      setChangePasswordField(true)
    }
  }

 
  const changeUserName = () => {
    //TODO UPDATE USER'S PASSWORD

    
    setChangeNameField(false)
  }
  const changeUserEmail = () => {
    //TODO UPDATE USER'S PASSWORD
    setChangeEmailField(false)
  } 
  
  const changeUserPassword = () => {
    //TODO UPDATE USER'S PASSWORD
    setChangePasswordField(false)
  }

  return (
    <div>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className='my-3'>User Profile</h1>
      <Row>
        <Col md={8}>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>Profile details</Card.Title>
              <div>
                <strong>Name: </strong>
                <Card.Text>{userInfo.name}</Card.Text>
                {!changeNameField ? (
                  <Link
                    onClick={
                      changeNameField
                        ? () => setChangeNameField(false)
                        : () => setChangeNameField(true)
                    }
                  >
                    Edit
                  </Link>
                ) : (
                  <Form onSubmit={changeUserName}>
                    <Form.Group className='mb-3' controlId='fullName'>
                      <Form.Label>New name: </Form.Label>
                      <Form.Control
                        value={newName}
                        type='text'
                        onChange={e => setNewName(e.target.value)}
                      />
                    </Form.Group>

                    <div className='mb-3'>
                      <Button variant='primary' type='submit'>
                        Update name
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
              <div>
                <hr />
                <strong>Email: </strong>
                <Card.Text>{userInfo.email}</Card.Text>
                {!changeEmailField ? (
                  <Link
                    onClick={
                      changeNameField
                        ? () => setChangeEmailField(false)
                        : () => setChangeEmailField(true)
                    }
                  >
                    Edit
                  </Link>
                ) : (
                  <Form onSubmit={changeUserEmail}>
                    <Form.Group className='mb-3' controlId='fullName'>
                      <Form.Label>New email: </Form.Label>
                      <Form.Control
                        value={newName}
                        type='email'
                        onChange={e => setNewEmail(e.target.value)}
                      />
                    </Form.Group>

                    <div className='mb-3'>
                      <Button variant='primary' type='submit'>
                        Update email
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
              <hr />
              <div>
                <strong>Password: </strong>
                {!changePasswordField ? (
                  <Link onClick={changePasswordState}>Edit</Link>
                ) : (
                  <Form onSubmit={changeUserPassword}>
                    {/* Full name input area */}
                    <Form.Group className='mb-3' controlId='fullName'>
                      <Form.Label>Current password</Form.Label>
                      <Form.Control
                        value={currentPassword}
                        type='password'
                        onChange={e => setCurrentPassword(e.target.value)}
                      />
                    </Form.Group>

                    {/* Address input area */}
                    <Form.Group className='mb-3' controlId='address'>
                      <Form.Label>New password</Form.Label>
                      <Form.Control
                        value={newPassword}
                        type='password'
                        onChange={e => setNewPassword(e.target.value)}
                      />
                    </Form.Group>

                    <div className='mb-3'>
                      <Button variant='primary' type='submit'>
                        Update password
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default ProfilePage
