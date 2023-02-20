import styled from "styled-components";
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const Form = styled.form`
	padding: 0 136px;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	> h1 {
		font-size: 48px;
		color: ${({ theme }) => theme.COLORS.PINK};
	}

	> h2 {
		font-size: 24px;
		margin: 48px 0;
	}

	> p {
		font-size: 14px;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
	}

	.turn-back {
		margin-top: 42px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		color: ${({ theme }) => theme.COLORS.PINK};
		gap: 8px;


		a {
			color: ${({ theme }) => theme.COLORS.PINK};
		}

		svg {
			width: 26px;
			height: 26px;
		}
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${BackgroundImg}) no-repeat center center;
	background-size: cover;
`;