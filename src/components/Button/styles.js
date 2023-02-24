import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	height: 56px;
	margin-top: 16px;
	background: ${({ theme }) => theme.COLORS.ORANGE};
	color: ${({ theme }) => theme.BACKGROUND_800};

	border: 0;
	border-radius: 10px;
	font-weight: 500;
	padding: 0 16px;

	&:disabled {
		opacity: .5;
	}
`;