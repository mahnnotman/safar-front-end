import React from 'react'
import { Button as SemanticUIButton} from 'semantic-ui-react';

const Button = ({className, children, type = "button", ...remainingProps}) => 
    <SemanticUIButton className={className} type={type} {...remainingProps}>{children}</SemanticUIButton>


export default Button;