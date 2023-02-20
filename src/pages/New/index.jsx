import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Container, Form, Content } from "./styles";
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";


export function New() {
	return(
		<Container>
			<Header />
			<Form>
				<Link to="/" >
					<FiArrowLeft />
					<span>To go back</span>
				</Link>
				<Content>
					<header>
						<h1>New Movie</h1>
					</header>

					<div className='inputs'>
						<span>
							<Input placeholder="Title" />
						</span>

						<span>
							<Input placeholder="Rate it from 0 to 5" />
						</span>
					</div>

					<Textarea placeholder="Comments" />

					<Section title="MarkBooks">
						<div className='tags'>
							<NoteItem value="adventure" />
							<NoteItem isNew placeholder="New marker" />
						</div>
					</Section>

					<div className="actions">
						<span>
							<Button title="Delete movie" style={{background: "#0D0C0F", color: "#FF859B"}} /> 
						</span>
						<span>
							<Button title="Save changes" /> 
						</span>
					</div>

				</Content>
			</Form>
		</Container>
	)
}