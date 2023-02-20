import { Input } from '../Input'
import { FiSearch } from 'react-icons/fi'
import { Container, Brand, Search, Profile } from "./styles";

export function Header() {
	return(
		<Container>

			<Brand>
				<h1>RocketFlix</h1>
			</Brand>

			<Search>
				<Input placeholder="Search by title" icon={FiSearch} />
			</Search>

			<Profile to="/profile">
				<div>
					<strong>Lucas Holanda</strong>
					<span>logout</span>
				</div>
				<img src="https://github.com/Luhc011.png" alt="github user img" />
			</Profile>
			
		</Container>
	)
}