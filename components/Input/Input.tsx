import { HTMLInputTypeAttribute, SyntheticEvent } from "react";
import styled from "styled-components";

//#region Interfaces

interface InputProps {
	name: string;
	placeholder: string;
	value?: string;
	autoFocus?: boolean;
	type?: HTMLInputTypeAttribute;
	error?: boolean;
	forwardedRef?: any;
	changeHandler?: ({ target }: SyntheticEvent) => void;
	blurHandler?: ({ target }: SyntheticEvent) => void;
}

interface StyledInputProps {
	hasError?: boolean;
}

//#endregion Interfaces


//#region Styled Components
export const StyledInput = styled.input<StyledInputProps>`
	width: 100%;
	font-family: inherit;
	font-size: 1.2rem;
	border-radius: 30px;
	padding: 1.6rem 2rem;
	background-color: #fff;
	border: 1px solid #282828;
	${({ hasError }) => hasError && 'border-color: #d32f2f; box-shadow: 0 0 2px 1px #d32f2f;'}

	transition: outline .2s ease-in-out, box-shadow .2s ease-in-out;

	::placeholder {
		color: #9A9A9A;
	}

	:focus, :focus-visible, :active {
		${({ hasError }) => hasError && 'outline: none; border-color: #d32f2f; box-shadow: 0 0 6px 1.8px #d32f2f;'}
	}
`;

const StyledLabel = styled.label`
	font-size: 0;
	& + & {
		${StyledInput} {
			margin-top: 1rem;
		}
	}
`;

const StyledTextArea = styled(StyledInput)`
	resize: none;
	min-height: 13rem;
`;

//#endregion Styled Components


const InputWithLabel = ({ 
	name, blurHandler,
	placeholder, value, error,
	autoFocus, type, changeHandler
}: InputProps) => (
	<StyledLabel htmlFor={placeholder}>
		<StyledInput
			autoFocus={autoFocus}
			name={name}
			value={value}
			id={placeholder}
			hasError={error}
			type={type || 'text'}
			placeholder={placeholder}
			onBlur={(e) => blurHandler ? blurHandler(e) : null}
			onChange={(e) => changeHandler ? changeHandler(e) : null}
		/>
		{placeholder}
	</StyledLabel>
);

export const Textarea = ({ placeholder, forwardedRef, name }: InputProps) => (
	<StyledLabel htmlFor={placeholder}>
		<StyledTextArea 
			name={name}
			id={placeholder}
			as="textarea" 
			ref={forwardedRef}
			placeholder={placeholder}
		/>
	</StyledLabel>
);

export default InputWithLabel;