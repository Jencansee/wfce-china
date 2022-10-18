import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

const PartnersWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`;

const Partner = styled.li`
	width: 100%;
	height: 6.9rem;
	margin-top: 4rem;
	display: flex;

	span {
		transition: filter ease-in-out .4s;
		filter: grayscale(1);
	}

	:hover {
		span {
			filter: grayscale(0);
		}
	}

	@media(min-width: 768px) {
		width: calc(50% - 1rem);
	}

	@media(min-width: 992px) {
		width: calc(25% - 1.5rem);
	}
`;

type Partner = {
	name: string;
	image: StaticImageData;
}

const Partners = ({ partners }: {
	partners: Partner[]
}) => {
	return (
		<PartnersWrapper>
			{
				partners.map(({name, image}, idx) => (
					<Partner key={`${idx}partner`}>
						<Image 
							src={image}
							alt={name}
							objectFit="contain"
						/>
					</Partner>
				))
			}
		</PartnersWrapper>
	);
};

export default Partners;