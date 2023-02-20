import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
	return(
		<Container>
			<header>
				<Link to="/" >
					<FiArrowLeft />
					<span>To go back</span>
				</Link>
			</header>

			<Form>
				<Avatar>
					<img src="https://github.com/Luhc011.png" alt="user img" />
					<label htmlFor="avatar">
						<FiCamera />
						<input  
							id="avatar"
							type="file"
						/>
					</label>
				</Avatar>

				<Input 
					placeholder="Name"
					type="text"
					icon={FiUser}
				/>

				<Input 
					placeholder="E-mail"
					type="text"
					icon={FiMail}
				/>

				<Input 
					placeholder="Current password"
					type="password"
					icon={FiLock}
				/>

				<Input 
					placeholder="New password"
					type="password"
					icon={FiLock}
				/>

				<Button title="Save" />
			</Form>
		</Container>
	)
}