import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`
	grid-area: header;

	width: 100%;
	height: 116px;

	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

	display: flex;
	justify-content: space-between;

	padding: 24px 123px;

`;

export const Brand = styled.div`
	padding: 13px 0;
	> h1 {
		font-size: 24px;
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`;

export const Search = styled.div`
	width: 630px;
	padding: 0 10px;
`;

export const Profile = styled(Link)`
	display: flex;

	> img {
		width: 64px;
		height: 64px;
		border-radius: 35px;

		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	> div {
		display: flex;
		flex-direction: column;
		padding: 16px 9px;
		line-height: 18px;

		span {
			font-size: 14px;
			text-align: end;
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.GRAY_200};
		}

		strong {
			font-size: 14px;
			color: ${({ theme }) => theme.COLORS.WHITE};
		}
	}
`;

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	> h1 {
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;
		color: #FF859B;
	}
`;

