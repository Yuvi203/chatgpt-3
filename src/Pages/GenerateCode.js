import { Check, CopyAllOutlined, Copyright, CopyrightTwoTone, RampRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { openai } from '../components/api/openapi'

const GenerateCode = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput ] = useState("")
  const [result, setResult] = useState("")
  const[isCopied, setIsCopied] = useState(false)
  const [show, setShow] = useState(false)

  const handleSubmit = async () =>{
    setIsLoading(true)
    setShow(true)
   const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt:input,
    temperature: 0,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
   })
   setResult(response.data.choices[0].text)
   setIsCopied(false)
   setIsLoading(false)
   setInput("")
  }
  const Copy = () =>{
    setIsCopied(true)
    const textarea = document.createElement("textarea")
    textarea.value = result
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
  }
  return (
    <Container>
            <h1 className="gradient__text">Generate Code using ai</h1>
            <div className='input-cont'>
        <input placeholder='eg: write python code to print even numbers ?' value={input} onChange={(e)=>{
          setInput(e.target.value)
        }}/>
        <button className='but' onClick={handleSubmit}>Submit</button>
        </div>
        {show ? <>
          {isLoading ? (
              <>
              <h2 className="gradient__text">Generating..Please Wait..</h2>
            <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>          
            </>
           ):(
            <div className='result-con'>
            <p className="gradient__text">{result}</p>
            {isCopied ? <Check/> : <CopyAllOutlined onClick={Copy}/>}
           </div>
           )}
        </> : null}
         
    </Container>
  )
}

export default GenerateCode

const Container = styled.div`
   display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  justify-content:center;
  padding:2rem;
  .input-cont{
    width:50%;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: row;
  }
  input{
    flex: 2;
    width: 50%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .result-con{
    width: 50%;
    height: 100%;
    background:black;
    border: 2px solid var(--color-footer);
    border-radius:5px;
    padding: 0 1rem;
    position:relative;
    margin-top:2rem;

    p{
      font-family: var(--font-family);
      font-weight: 400;
     font-size: 20px;
     color:#fff;
     line-height: 28px;
    }
    svg{
      cursor:pointer;
      color:#fff;
      position:absolute;
      right: 0;
    }
  }
`;
