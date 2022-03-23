import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md'


const goDown = keyframes`
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #013261;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
@media only screen and (max-width: 320px) {
   
  }
  @media only screen and (min-width: 360px) {
   
  }
  @media only screen and (min-width: 411px) {
    
  }
  @media only screen and (min-width: 768px) {
   
  }
  @media only screen and (min-width: 1024px) {
   
  }
  @media only screen and (min-width: 1280px) {
   
  }
`

export const ModalContent = styled.div`
justify-content: center;
margin-top: 45px;
`

export const ModalWrapper = styled.div`
width: 800px;
// height: 100%;
justify-content: center;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #000;
  color: #000;
  display: flex;
  padding: 5px 5px;
  position: fixed;
  z-index: 10;
  border-radius: 10px;
`

export const ModalHeader = styled.h1`
font-size: 18px;
color: #fff;
text-align: center;
`
export const RadioButtonTitle = styled.h1`
font-size: 16px;
color: #fff;
display: flex;
margin: none;
`

export const ModalCloseButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 50px;
right: 100px;
width: 32px;
height: 30px;
padding: 0;
z-index: 10;
color: #ffc100;
`

export const FormGroup = styled.form`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`

export const FormLabel = styled.label`
    margin-top: 0.2em;
    font-size: 10px;
	color: white;
    display: block;
    font-weight: bold;
`

export const FormRadioBlock = styled.div`
	color: white;
    display: block;
    margin: none;
`

export const FormCheckLabel = styled.label`
	color: white;
    display: block;
    font-size: 10px;
    font-weight: bold;
    margin-top: 20px;
 `

export const FormCheckInput = styled.input`
	border: none;
    margin-bottom: 20px;
`

export const FormInput = styled.input`
    padding: 0.2em;
	color: #013261;
	background: white;
	border: none;
    outline: none;
	border-radius: 3px;
	// width: 100%;
    width: 400px;
	margin-top: 0.1em;
   	margin-bottom: 0.3em;
`

export const FormChildInput = styled.input`
    padding: 0.2em;
	color: #013261;
	background: white;
	border: none;
    outline: none;
	border-radius: 3px;
	// width: 100%;
    width: 100px;
	margin-top: 0.1em;
   	margin-bottom: 0.1em;
`

export const FormSelect = styled.select`
  width: 400px;
  height: 35px;
  background: white;
  color: gray;
  display: flex;
  font-size: 14px;
  border: none;
	margin-top: 0.2em;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FormSubmitButton = styled.button`
    padding: 10px 10px 10px 10px;
	color: white; 
    display: flex;
	background: #FFC100;
	border: none;
    width: 150px;
    font-weight: bold;
    justify-content: center;
	border-radius: 3px;
    padding: 10px;
    text-align: center;
	margin: auto;
`

export const ErrorMessage = styled.label`
	margin-bottom: 0.2em;
	color: #F01024;
    font-weight: bold;
    display: block;
    font-size: 10px;
    margin: 5px;
`