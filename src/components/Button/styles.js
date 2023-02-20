import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	background: ${({ theme }) => theme.COLORS.PINK};
	color: ${({ theme }) => theme.COLORS.GRAY_300};
	
	font-weight: 500;

	height: 56px;
	border: 0;
	padding: 0 16px;
	margin-top: 16px;
	border-radius: 10px;

	&:disabled {
		opacity: .5;
	}
`;