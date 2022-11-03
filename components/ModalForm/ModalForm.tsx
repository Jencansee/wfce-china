import styled from "styled-components";
import { SyntheticEvent, useRef, useState } from "react";
import { useLoginFormValidator } from "hooks/useValidation";
import { DefaultButton } from "@components/Buttons/Button";
import InputWithLabel, { Textarea } from "@components/Input/Input";
import ButtonClose from "@components/Modal/ButtonClose/ButtonClose";

interface ModalFormProps {
	submitHandler?: (e: SyntheticEvent) => void;
	toggleModal: () => void;
	isOpen?: boolean;
};

interface ModalFormWrapperProps {
	isLoading?: boolean;
}

//#region Styled Components

const ModalFormWrapper = styled.div<ModalFormWrapperProps>`
	${({ isLoading }) => isLoading && `
		filter: blur(4px);
		`
	}

	@keyframes spinnerRotation {
		0% {
			transform: translateY(-50%) rotate(0);
		}
		100% {
			transform: translateY(-50%) rotate(360deg);
		}
	}
`;

const LoadingPanel = styled.div`
	position: absolute;
	pointer-events: all;
	top: 0;
	left: 0;
	width: 100%; height: 100%;
	background-color: rgba(205, 29, 25, .4);
	z-index: 4;
		
	::after {
		content: '';
		position: absolute;
		z-index: 15;
		left: 45%; top: 50%;
		transform: translate(-45%,-50%);
		width: 45px; height: 45px;
		animation: 1s linear infinite spinnerRotation;
		border-radius: 50%;
		border: 6px solid #FFF;
		border-bottom-color: transparent;
		border-top-color: transparent;
	}
`;

const ModalTitle = styled.h3`
	font-size: 2rem;
	font-weight: 500;
	line-height: 1.2;
	color: #282828;
	margin-bottom: 2rem;
	padding-left: .5rem;
`;

const ModalFormElement = styled.form``;
const ModalInputs = styled.div``

const ModalFormButton = styled(DefaultButton)`
	font-size: 1.6rem;
	margin-top: 1.5rem;
	padding: 1.5rem 6rem;

	:disabled { 
		cursor: not-allowed;
		filter: grayscale(1);
		:hover, :focus { background: #CD1D19; }
	}
`;

const StyledError = styled.p`
	display: block;
	color: red;
	font-size: 1.2rem;
	margin: .6rem 0 .6rem;
	padding: 0 .7rem;
	white-space: pre-line;
`;

//#endregion Styled Components


const ModalForm = ({ toggleModal }: ModalFormProps) => {
	const message = useRef<HTMLTextAreaElement>(null);
	const [ form, setForm ] = useState({ name: '', email: '' });
	const [loading, setLoading] = useState(false);
	const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

	const [success, setSuccess] = useState(false);
	const [serverError, setServerError] = useState({
		statusCode: 400,
		message: ''
	});


	const handleText = (
		target: HTMLInputElement
	) => {

		const nextFormState = {
			...form, 
			[target.name]: target.value
		};

		setForm(nextFormState);

		if (errors[target.name].dirty){
      validateForm({
        form: nextFormState,
        errors,
        field: target.name,
      });
		}
	};

	const submitHandler = async (e: SyntheticEvent) => {
		e.preventDefault();
		
		const { isNotValid } = validateForm({ form, errors });

		if (!isNotValid) {
			setLoading(true);

			//* reset form
			setServerError({ statusCode: 400, message: '' });

			fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ 
					name: form.name,
					email: form.email,
					message: message.current?.value 
				}),
			})
			.then(res => res.json())
			.then(data => {
				setLoading(false);

				if (data.statusCode >= 200 && data.statusCode < 300) setSuccess(true)
				else {
					setServerError({
						message: data.message,
						statusCode: data.statusCode,
					});
				}
			})
			.catch(err => {
				setServerError({
					message: 'Form was not submitted, please try again later.',
					statusCode: err.name
				})
			});
		}
	};


	return (
		<>
		{ loading && <LoadingPanel /> }
		<ModalFormWrapper isLoading={loading}>
			<ButtonClose 
				type="reset" 
				onClick={toggleModal}
				aria-label="Close modal window"
			>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.3 10.0006L19.4872 3.81336C20.1709 3.12973 20.1709 2.0214 19.4872 1.33884L18.6624 0.514003C17.9786 -0.169839 16.8702 -0.169839 16.1877 0.514003L10.0006 6.70105L3.81336 0.512721C3.12973 -0.170907 2.0214 -0.170907 1.33884 0.512721L0.512721 1.33756C-0.170907 2.0214 -0.170907 3.12973 0.512721 3.81229L6.70105 10.0006L0.514003 16.1877C-0.169839 16.8715 -0.169839 17.9798 0.514003 18.6624L1.33884 19.4872C2.02247 20.1709 3.1308 20.1709 3.81336 19.4872L10.0006 13.3L16.1877 19.4872C16.8715 20.1709 17.9798 20.1709 18.6624 19.4872L19.4872 18.6624C20.1709 17.9786 20.1709 16.8702 19.4872 16.1877L13.3 10.0006Z" fill="black"/>
				</svg>
			</ButtonClose>
			<ModalTitle>CONTACT FORM</ModalTitle>
			{
				success 
					? <p>Thank you for form submition</p>
				:
				<ModalFormElement 
					onSubmit={(e: SyntheticEvent) => submitHandler(e)}
				>
					<ModalInputs>
							<InputWithLabel 
								autoFocus
								name="name"
								placeholder="Name" 
								value={form.name}
								error={!!errors.name.message}
								blurHandler={({ target }) => onBlurField(target as HTMLInputElement)}
								changeHandler={({ target }) => handleText(target as HTMLInputElement)}
							/>
							{ !!errors.name.message && <StyledError>{errors.name.message}</StyledError> }
							<InputWithLabel 
								name="email"
								value={form.email} 
								placeholder="Email" type="email"
								error={!!errors.email.message}
								blurHandler={({ target }) => onBlurField(target as HTMLInputElement)}
								changeHandler={({ target }) => handleText(target as HTMLInputElement)}	
							/>
							{ !!errors.email.message && <StyledError>{errors.email.message}</StyledError> }
							<Textarea 
								name="message"
								placeholder="Message" 
								forwardedRef={message}
							/>
					</ModalInputs>
					{ !!serverError.message && <StyledError>{serverError.message}</StyledError> }
					<ModalFormButton 
						type="submit"
						aria-disabled={loading}
						disabled={loading}
					>
						Send
					</ModalFormButton>
				</ModalFormElement>
			}
		</ModalFormWrapper>
	</>
	)
};


export default ModalForm;