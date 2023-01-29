import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { openai } from '../components/api/openapi'

const ExplainCode = () => {
  const [input, setInput] = useState("")
  const[res, setRes] = useState('')
  const [isLoading, setIsLoading] = useState(false);
 
  const handleSubmit = async () =>{
    setIsLoading(true)
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt:input,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    setRes(response.data.choices[0].text)
    setIsLoading(false)
    setInput("")
  }
 

  return (
    <Container>
       <h1 className="gradient__text">Explain code with a help of ai</h1>
            <div className='text-con'>
        <textarea value={input} rows={"10"} cols="40" onChange={(e)=>{
          setInput(e.target.value)
        }}/>
       </div>
       <button className='but' onClick={handleSubmit}>{isLoading ? "Generating..." :"Do you stuff"}</button>
        <div className='response'>
        <div className='bot-response'>
        <div className='gradient__text'>
        <p>{res}</p>
        </div>
        </div>
      </div>

    </Container>
  )
}

export default ExplainCode

const Container = styled.div`
 display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  justify-content:center;
  padding:2rem;
  .text-con{
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: row;
    textarea{
      font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    outline: none;
    color: #fff;
    }
  }
`
