import { Send } from '@mui/icons-material'
import React, { useEffect, useState, useTransition } from 'react'
import styled from 'styled-components'
import {auth} from '../firebase'
import { Avatar } from '@mui/material'
import ai from '../assets/ai.png'
import { openai } from '../components/api/openapi'
import {useSpeechSynthesis} from "react-speech-kit"

const QA = () => {
    const picUrl = auth.currentUser.photoURL
    const [isLoading, setIsLoading] = useState(false);
    const[input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const [show, setShow] = useState(false)
    const {speak} = useSpeechSynthesis()
    const handleSubmit = async () =>{
        setIsLoading(true);
        setShow(true)
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:input,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })
        speak({text:res.data.choices[0].text})
        setResponse(res.data.choices[0].text)
        setInput(" ")
    }
     
  return (
    <Container>
        <h1 className="gradient__text">Answer questions based on existing knowledge.</h1>
         <div className='input-cont'>
         <div className="ai-pro">
            <Avatar src={picUrl}/>
            </div>
       <input
           placeholder='eg  What is human life expectancy in the United States?'
           value={input}
            onChange={(e) => setInput(e.target.value)}
          />
           <div className='but' onClick={handleSubmit}>
        <Send className='button'/>
        </div> 
       </div>
       {show ? 
         <div className='bot-response'>
         {isLoading ? (
            <div className='loading'>
                 <p>Typing...</p>
            </div>
          
         ):( <div className='result-cont'>
           <div className='ai-pro' style={{cursor:"pointer"}}>
                <Avatar src={ai}/>
            </div>
            <div className='gradient__text p-tag'>
             <p>{response}</p>
            </div>
            </div>
         )}

     </div>
     : null
       }
     
    </Container>
  )
  }     
 export default QA

  const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  justify-content:center;
  padding:2rem;
  .input-cont{
    width:70%;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: row;
  }
  input{
    flex: 2;
    width: 100%;
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
.but{
  display:flex;
  align-items:center;
  justify-content:center;
}
.p-tag{
 font-size:20px;
}
`;
