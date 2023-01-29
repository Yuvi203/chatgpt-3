import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import ai from '../assets/ai.png'
import { Send } from '@mui/icons-material'
import { openai } from '../components/api/openapi'
import { useState } from 'react'
import {auth} from '../firebase'

const GrammerCorrection = () => {
  const picUrl = auth.currentUser.photoURL
    const [isLoading, setIsLoading] = useState(false);
    const[input, setInput] = useState("")
    const[submittedTest, setSubmittedText] = useState("")
    const [response, setResponse] = useState("")
    const handleSubmit = async () =>{
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setSubmittedText(input)
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:input,
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })
        setInput(" ")
        setResponse(res.data.choices[0].text)
    }
  return (
    <Container>
       <h1 className="gradient__text">Correct Grammer</h1>
       <div className='input-con'>
            <div className="ai-pro">
            <Avatar src={picUrl}/>
            </div>
       <input value={input} onChange={(e)=>{
            setInput(e.target.value)}}
            placeholder="Correct grammer"
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

export default GrammerCorrection

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
     margin:10px;
    }
    .input-con{
        width:70%;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: row;
    position:absolute;
    bottom: 0;
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
  .response{
  padding: 16px;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-family: var(--font-family);
 font-weight: 400;
    font-size: 20px;
    color: #fff;

   }
   .bot-response{
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 8px;
 margin-bottom: 8px;
   border-radius: 8px;
   margin-top:1rem;
   }
   /* Typing animation */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;

}

.loading p {
  font-size: 1rem;
  font-weight: bold;
  color: gray;
}

.user-res{
display:flex;
align-items:center;
justify-content:center;
.image-con{
    margin-right:10px;
}
}
.ai-pro{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
}
.result-con{
    display:flex;

}

`;
