import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	background: ${({ theme}) => theme.COLORS.BACKGROUND_700};
	color: ${({ theme}) => theme.COLORS.GRAY_200};

	margin-bottom: 8px;
	border-radius: 10px;

	> input {
		width: 100%;
		height: 56px;
		font-size: 14px;
		
		padding: 12px;
		color: ${({ theme }) => theme.COLORS.WHITE};
		background: transparent;
		border: none;

		&::placeholder {
		color: ${({ theme}) => theme.COLORS.GRAY_200};
		}
	}

	> svg {
		margin-left: 16px;
	}

`;