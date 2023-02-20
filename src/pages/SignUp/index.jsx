import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
	return(
		<Container>
			<Form>
				<h1>RocketFlix</h1>
				<p>App to track your favorite movies</p>
				<h2>Create account</h2>

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
					placeholder="Password"
					type="password"
					icon={FiLock}
				/>

				<Button title="Register" />

				<Link to="/" className='turn-back'>
					<FiArrowLeft />
					Back to login
				</Link>
			</Form>
			<Background />
		</Container>
	)
}