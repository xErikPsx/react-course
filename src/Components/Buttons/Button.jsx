import React from 'react'
import './Button.css'

const Button = (props) => {

	const {
		className, 
		onClick, 
		text, 
		type = 'button'} = props;

		return(
			<button 
				className={className}  
				onClick={onClick} 
				type={type}>
					{text}
			</button>
		)
}

export default Button;