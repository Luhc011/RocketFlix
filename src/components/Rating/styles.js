import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 6px;
	width: 84px;
	margin: 8px auto 15px;

	> svg {
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`;