import { Send } from '@mui/icons-material'
import React, { useEffect, useState, useTransition } from 'react'
import styled from 'styled-components'
import {auth} from '../firebase'
import { Avatar } from '@mui/material'
import ai from '../assets/ai.png'
import { openai } from '../components/api/openapi'


const QA = () => {
    const picUrl = auth.currentUser.photoURL
    const [isLoading, setIsLoading] = useState(false);
    const[input, setInput] = useState("")
    const[submittedTest, setSubmittedText] = useState("")
    const [response, setResponse] = useState([])
    const handleSubmit = async () =>{
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setSubmittedText(input)
        setInput(" ")
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:input,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })
        setResponse(res.data.choices[0].text)
    }
     
  return (
    <Container>
         <h1 className="gradient__text">Ask AI</h1>
        <div className='input-con'>
            <div className="ai-pro">
            <Avatar src={picUrl}/>
            </div>
       <input value={input} onChange={(e)=>{
            setInput(e.target.value)}}
            placeholder="Ask anything ?"
            />
        <div className='but' onClick={handleSubmit}>
        <Send className='button'/>
        </div>
        
        </div>
        
        <div className='response'>
        <div className='user-res'>
            <div className='image-con'>
               <Avatar src={picUrl}/>
            </div>
            <>
           {submittedTest}
           </>
        </div>
        <div>
        
        <div className='bot-response'>
            

                 {isLoading ? (
                    <div className='loading'>
                         <p>Typing...</p>
                    </div>
                  
                 ):( <div className='result-con'>
                   <div className='ai-pro'>
                        <Avatar src={ai}/>
                    </div>
                 <div className='gradient__text'>
                    
              <p>{response}</p>
                    </div>
                    </div>
                 )}
        
        </div>
        </div>
       
          
        </div>
    </Container>
  )
}

export default QA

const Container = styled.div`
    display:flex;
    color:white;
    padding:1rem 4rem;
    align-items:center;
    justify-content:center;
    h1{
        position:absolute;
        left: 0;
        top: 0;
        margin: 10px;
    }
  
   .but-con{
    display:flex;
    align-items:center;
    justify-content:center;
   }
   .button{
    display:flex;
    align-items:center;
    justify-content:center;
   }
`;

