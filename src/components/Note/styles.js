import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	background: ${({ theme}) => theme.COLORS.BACKGROUND_600};

	border: none;
	border-radius: 10px;
	margin: 0 auto 24px;
	padding: 22px;

	> h1 {
		flex: 1;
		text-align: left;
		font-weight: 700;
		font-size: 24px;
		color: ${({ theme}) => theme.COLORS.WHITE};
	}

	> p {
		text-align: left;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
		line-height: 18px;
	}

	> footer {
		width: 100%;
		display: flex;
		margin-top: 24px;
	}
`;