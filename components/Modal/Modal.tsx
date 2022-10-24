import { useState, useEffect, PropsWithChildren } from 'react';
import ClientOnlyPortal from 'util/ClientOnlyPortal';
import styled from 'styled-components';
import Backdrop from './Backdrop';

interface ModalContentProps {
	revealState?: boolean
}

interface ModalProps { 
	isOpen: string | boolean, 
	toggleModal: () => void,
}

//#region modal elements
const ModalHolder = styled.div`
	position: fixed;
	display: flex; pointer-events: none;
	justify-content: center; align-items: center;
	width: 100%; height: 100%;
	top: 0; left: 0;
	z-index: 514;
`;

const ModalContent = styled.div<ModalContentProps>`
	height: 100%;
	opacity: 0; z-index: 9999;
	transition: opacity .25s ease-in-out;
	opacity: ${({ revealState }) => revealState ? 1 : 0}; 

	@media (min-height: 450px) {
		height: auto;
	}
`;

//#endregion modal elements


const Modal = ({ 
	toggleModal,
	children, isOpen
}: PropsWithChildren<ModalProps>) =>{
	const [modal, setModal] = useState(false);
	const [reveal, setReveal] = useState(false);
	const [content, setContent] = useState(false);


	useEffect(() => {
		let timer: NodeJS.Timeout; 
		let contentTimer: NodeJS.Timeout; 

		if (isOpen === 'close') {
			setContent(false);
			contentTimer = setTimeout(() => setReveal(false), 250);
			timer = setTimeout(() => setModal(false), 500);
		}
		if (isOpen === 'open') {
			setModal(true);
			timer = setTimeout(() => setReveal(true), 200);
			contentTimer = setTimeout(() => setContent(true), 350);
		}

		return () => {
			clearTimeout(timer);
			clearTimeout(contentTimer);
		}
	}, [isOpen]);

	return (
		<>
			{modal && (
				<ClientOnlyPortal selector="#modal">
					<Backdrop opacity={.6} handleClick={toggleModal} revealState={reveal} indexZ={300}></Backdrop>
					<ModalHolder>
						<ModalContent revealState={content}>{children}</ModalContent>
					</ModalHolder>
					<style jsx>{`:global(body) { overflow: hidden; }`}</style>
				</ClientOnlyPortal>
			)}
		</>
	)
};

export default Modal;