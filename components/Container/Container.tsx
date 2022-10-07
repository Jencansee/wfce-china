import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 1366px;
	/* max-width: 1635px; */
	padding: 0 1.5rem;
	margin-right: auto;
	margin-left: auto;
`;

const Container = (props: React.PropsWithChildren) => {
	return (
		<StyledContainer>{props.children}</StyledContainer>
	)
};

export default Container;