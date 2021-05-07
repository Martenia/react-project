import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
// import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} photoImg={faqData.image} />
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;