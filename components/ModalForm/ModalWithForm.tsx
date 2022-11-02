import styled from "styled-components";
import Modal from "@components/Modal/Modal";
import ModalForm from "@components/ModalForm/ModalForm";

interface ModalWithFormProps {
	isOpen: string;
	toggleModal: () => void;
}

const ModalContent = styled.div`
	overflow: auto;
	position: relative;
	border: 1px solid #282828;
	border-radius: 20px;
	padding: 3rem 2rem;
	background-color: white;
	pointer-events: all;
	width: 100%; height: 100%;
	max-width: 30rem;

	@media (min-width: 768px) {
		height: auto;
	}
`;

const ModalWithForm = ({ toggleModal, isOpen }: ModalWithFormProps) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				toggleModal={toggleModal}
			>
				<ModalContent>
					<ModalForm
						toggleModal={toggleModal}
					/>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ModalWithForm;