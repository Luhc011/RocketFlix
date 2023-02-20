import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	padding: 0 123px;
	max-height: 65vh;
`;

export const Content = styled.div`
	max-height: 65vh;
	overflow-y: auto;

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background: ${({ theme }) => theme.COLORS.PINK};
		box-shadow: 0 0 1px rgba(255, 255, 255, .5);
	}
`;

export const Button = styled(Link)`
	width: fit-content;
	background: ${({ theme }) => theme.COLORS.PINK};
	color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	font-size: 16px;
	border-radius: 8px;
	border: none;
	padding: 12px 32px;
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: right;

	> svg {
		width: 16px;
		height: 16px;
	}
`;

export const Title = styled.div`
	display: flex;
	padding: 50px 0 40px;
	justify-content: space-between;
	align-items: center;

	> h1 {
		font-size: 32px;
		font-weight: 400;
	}
`;