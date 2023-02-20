import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Note } from '../../components/Note';

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Container, Content, Profile, Title } from './styles';


export function Details() {
  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft />
          <span className='back' >Go back</span>
        </Link>

        <Content>
          <Section>
            <Title>
              InterEstellar
              <Rating value="3" />
            </Title>

            <Profile to="profile" >
              <img src="https://github.com/Luhc011.png" alt="Github user img" />
              <div>
                <pre>By Tony Stark <FiClock /> 20/02/23 at 5am </pre>
              </div>
            </Profile>

            <Note 
              style={{background: "transparent", padding: "0"}}
              data={{
                tags: [
                  {id: '1', name: 'Adventure'},
                  {id: '2', name: 'Science Fiction'},
                  {id: '3', name: 'Comedy'} 
                ],
              }}
            />
            <p>
              Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.
            </p>

            <p>
              A major theme in Interstellar is that of isolation and loneliness, and how they test our ability to think rationally and operate from an ethical standpoint as opposed to a mere survivalist one. Over the course of the film, some characters, like Dr. Mann, abandon everything they stand for in order to stay alive
            </p>
           
          </Section>
        </Content>
      </Container>
    </>

  ) 
}