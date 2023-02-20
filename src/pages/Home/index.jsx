import { Container, Content, Button, Title } from './styles';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Home() {
	return(
		<>
			<Header />
			<Container>
				<Title>
					<h1>Movies</h1>
					<Button to="/new" >
						<FiPlus />
						<span>Add Movie</span>
					</Button>
				</Title>
				<Content>
					<Section>
						<Note 
							data={{
								title: 'Interestellar',
								rating: 4,
								description: "Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.",
								tags: [
									{id: '1', name: 'Adventure'},
									{id: '2', name: 'Science Fiction'},
									{id: '3', name: 'Comedy'}
								],
							}}
						/>

						<Note 
							data={{
								title: 'Interestellar',
								rating: 5,
								description: "Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.",
								tags: [
									{id: '1', name: 'Adventure'},
									{id: '2', name: 'Science Fiction'},
									{id: '3', name: 'Comedy'}
								],
							}}
						/>

						<Note 
							data={{
								title: 'Interestellar',
								rating: 4,
								description: "Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.",
								tags: [
									{id: '1', name: 'Adventure'},
									{id: '2', name: 'Science Fiction'},
									{id: '3', name: 'Comedy'}
								],
							}}
						/>
						
					</Section>
				</Content>
			</Container>
		</>
	)
}