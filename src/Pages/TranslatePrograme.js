import { Check, CopyAllOutlined } from '@mui/icons-material'
import React, { Component } from 'react'
import styled from 'styled-components'
import { openai } from '../components/api/openapi'

class TranslateProgramming extends Component {
  constructor(){
    super()
   this.state={
    input:"",
    result:"",
    isloading:false,
    iscopied:false,
    show:false
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.Copy = this.Copy.bind(this)
}
Copy(){
  this.setState({iscopied:true})
  const textarea = document.createElement("textarea")
  textarea.value = this.state.result
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
}
async handleSubmit(){
  this.setState({isloading:true})
  this.setState({show:true})
  try{
 const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: this.state.input,
  temperature: 0,
  max_tokens: 54,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
 })
 this.setState({result:response.data.choices[0].text})
 this.setState({isloading:false})
 this.setState({input: " "})
}
catch(e){
alert("something went wrong", e)
}
}
  render() {
    return (
      <Container>
          <h1 className="gradient__text">Translate from one Programming language to another language </h1>
          <div className='text-con'>
             <textarea rows={"10"} cols="40" value={this.state.input} onChange={(e)=>{
              this.setState({input:e.target.value})
             }} placeholder="eg  ##### Translate this function  from Python into Haskell
             ### Python
                 
                 def predict_proba(X: Iterable[str]):
                     return np.array([predict_one_probas(tweet) for tweet in X])
                 
             ### Haskell"/>
          </div>
          <button className='but' onClick={this.handleSubmit}>Do you stuff</button>
          {this.state.show ? <>
            {this.state.isloading ? (
              <>
              <h2 className="gradient__text">Generating..Please Wait..</h2>
            <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>          
            </>
           ):(
            <div className='result-con'>
            <p className="gradient__text">{this.state.result}</p>
            {this.state.iscopied ? <Check/> : <CopyAllOutlined onClick={this.Copy}/>}
           </div>
           )}
          </> : null}
        

      </Container>
    )
  }
}

export default TranslateProgramming

const Container = styled.div`
display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  padding:2rem;
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
`