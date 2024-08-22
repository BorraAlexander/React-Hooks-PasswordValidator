// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #383a4e;
  background-size: cover;
  height: 100vh;
  min-height: 100vh;
`
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  background-color: #475569;
  box-shadow: #434451;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 10px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin: 20px;
  }
`
export const Description = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #f8fafc;
  margin: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin: 10px;
  }
`

export const InputElement = styled.input`
  background-color: #edeeff;
  border-radius: 10px;
  width: 80%;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  line-height: 1.5;
  outline: none;
  cursor: auto;
  margin-top: 30px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 400;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 10px;
    font-weight: 500;
  }
`
