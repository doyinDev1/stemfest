import {Button} from 'react-bootstrap'

const CustomButton = ({onClick, disabled, type, customButtonStyling, titleStyles, title}) => {
  return (
    <Button 
        onClick={onClick}
        disabled={disabled}
        type={type}
        style={customButtonStyling}
    >
        <span style={titleStyles}>{title}</span>
    </Button>
  )
}

export default CustomButton