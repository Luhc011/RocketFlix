import styled from "styled-components";

export const Container = styled.section`
	margin: 0 0 28px;

	> h2 {
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

		padding-bottom: 16px;
		margin-bottom: 24px;

		color: ${({ theme }) => theme.COLORS.GRAY_400};
		font-size: 20px;
		font-weight: 400;

	}
`;
