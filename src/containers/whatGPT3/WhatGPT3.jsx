import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import {Fade} from 'react-reveal'

const WhatGPT3 = () => (
  <Fade left>
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title={"What is Gpt-3"} text="GPT-3 is a powerful new language model developed by OpenAI. It is the largest and most advanced language model ever created, with over 175 billion parameters." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <a href='https://beta.openai.com/overview'>
      <p>Explore the Library</p>
      </a>
   
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  </Fade>
);

export default WhatGPT3;
