import React, { Component } from 'react'
import styled from 'styled-components'
import { openai } from '../components/api/openapi'

class CreateNotes extends Component {
  state={
    input:"",
    result:"",
    isloading:false,
    show:false
  }
  handleSubmit = async () =>{
    this.setState({isloading:true})
    this.setState({show:true})
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:this.state.input,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    this.setState({result:response.data.choices[0].text})
    this.setState({isloading:false})
  }
  render() {
    return (
      <Container>
        <h1 className="gradient__text">Create study notes</h1>
          <div className='text-con'>
        <textarea value={this.state.input} rows={"5"} cols="30" onChange={(e)=>{
          this.setState({input:e.target.value})
        }} placeholder="eg: Write 5 key points about Ancient Rome?"
       />
       </div>
       <button className='but' onClick={this.handleSubmit}>{this.state.isloading ? "Generating...": "Do you stuff"}</button>
       {this.state.show ?
      <div className='response'>
       <div className='bot-response'>
       <div className='gradient__text'>
        <p>{this.state.result}</p>
        </div>
       </div>
      </div>
      : null}
      </Container>
    )
  }
}

export default CreateNotes

const Container = styled.div`
 display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:2rem;
  .bot-reponse{
    p{
      margin:1rem;
    }
  }

`