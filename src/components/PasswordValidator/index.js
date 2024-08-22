// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  Title,
  Description,
  InputElement,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)

  const ErrorText =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <AppContainer>
      <PasswordContainer>
        <Title>Password Validator</Title>
        <Description>Check how strong and secure is your password</Description>
        <InputElement
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <ErrorMessage>{ErrorText}</ErrorMessage>
      </PasswordContainer>
    </AppContainer>
  )
}
export default PasswordValidator
