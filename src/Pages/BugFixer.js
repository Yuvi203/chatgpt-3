import { Check, CopyAllOutlined } from '@mui/icons-material'
import React, { Component } from 'react'
import styled from 'styled-components'
import { openai } from '../components/api/openapi'

 class BugFixer extends Component {
  state={
    input:"",
    result:"",
    isloading:false,
    iscopied:false,
    show:false
  }
  Copy = () =>{
    this.setState({iscopied:true})
    const textarea = document.createElement("textarea")
    textarea.value = this.state.result
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
  }
  handleSubmit = async () =>{
    this.setState({isloading:true})
    this.setState({show:true})
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: this.state.input,
     temperature: 0,
     max_tokens: 182,
     top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    })
    this.setState({result:response.data.choices[0].text})
    this.setState({input:" "})
    this.setState({isloading:false})
  }
  render() {
    return (
      <Container>
        <h1 className="gradient__text">Find and fix bugs in source code</h1>
        <div className='text-con'>
        <textarea value={this.state.input}  rows={"10"} cols="40"  placeholder="Put your code here  " onChange={(e)=>{
          this.setState({input:e.target.value})
        }}/>
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
     ) }
      </> :<></>}
      
      </Container>
    )
  }
}

export default BugFixer

const Container = styled.div`
 display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  justify-content:center;
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