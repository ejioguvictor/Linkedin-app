import React from 'react'
import LeftSide from '../leftSide/LeftSide'
import Main from '../main/Main'
import RightSide from '../rightSide/RightSide'
import { Container, Section, Layout } from './Home.styled'


const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container >
  )
}

export default Home