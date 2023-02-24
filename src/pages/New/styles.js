import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;



	display: grid;
	grid-template-rows: 105px auto;
	grid-template-areas: 
	"header" 
	"content";

	> main {
		grid-area: content;
		overflow-y: auto;

		::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 8px;
		}
		
		::-webkit-scrollbar-thumb {
			border-radius: 8px;
			background: ${({ theme }) => theme.COLORS.ORANGE};
			box-shadow: 0 0 1px rgba(255, 255, 255, .5);
		}

	}

	.tags {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;

export const Form = styled.form`
	max-width: 550px;
	margin: 38px auto;

	> header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 36px;

		button {
			font-size: 20px;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}
	}
`;