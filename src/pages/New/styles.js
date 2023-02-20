import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Content = styled.div`
	max-height: 100vh;
	overflow-y: auto;
	padding: 0 16px 16px 0;

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background: ${({ theme }) => theme.COLORS.PINK};
		box-shadow: 0 0 1px rgba(255, 255, 255, .5);
	}

	h1 {
		margin: 24px 0 40px;
	}
`;

export const Form = styled.form`
	padding: 0 123px;
	margin: 38px auto;

	svg {
		color: ${({ theme }) => theme.COLORS.PINK};
		font-size: 16px;
	}

	span {
		color: ${({ theme }) => theme.COLORS.PINK};
		padding: 0 8px;
	}

	> header {
		margin-top: 24px;
		padding: 0 8px;
		
		h1 {
			font-weight: 500;
			font-size: 36px;
		}
	}

	.inputs {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 36px;

		span:nth-child(2) {
			padding-left: 36px;
		}

		span {
			width: 50%;
			padding: 0;
		}
	}

	Section {
		margin-top: 26px;
		
		.tags {
			display: flex;
			flex-wrap: wrap;
			padding: 16px;
			margin-top: -20px;
			gap: 24px;

			background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
			border-radius: 10px;
		}
	}

	.actions {
		display: flex;
		flex-wrap: wrap;

		span {
			width: 50%;
		}
	}
`;