import React, {useState} from 'react'
import styled from 'styled-components';
import { openai } from '../components/api/openapi';

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () =>{
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setLoading(false);
    setResult(res.data.data[0].url);
  }

  const download = async () =>{
    try {
      const response = await fetch(`https://api.openai.com/v1/images/${result}/data`);
      const file = await response.blob();
      const url = window.URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${result}.png`;
      a.click();
  } catch (error) {
      console.error(error);
  }
    
  }

  return (
    <Container>
       {loading ? (
        <>
          <h2 className="gradient__text">Generating..Please Wait..</h2>
        <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>          
        </>
      ) :(
        <>
        <h1 className="gradient__text">Generate Image using ai</h1>
         <div className='input-cont'>
       <input
           placeholder='Ai image generator'
            onChange={(e) => setPrompt(e.target.value)}
          />
       </div>
          <button className='but' onClick={generateImage}>Generate an Image</button>
          {result.length > 0 ? (
            <div className='res-con'>
              <div className='img-con'>
               <img className="result-image" src={result} alt="result" />
               <div className='but-cont'>
               <button className='but' onClick={download}>Download</button>
               </div>
               
            </div>
            </div>
            
           
          ) : (
            <></>
          )}
        </>
      )}
      

    </Container>
  )
}

export default GenerateImage

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
.img-con{
  margin:10px;
  width: 400px;
  height: 400px;
  border:4px solid var(--color-footer);
  border-radius:5px;
  img{
    width: 100%;
    height: 100%;
  }
}
.res-con{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:1rem;
  .but-cont{
    padding: 10px;
    position:absolute;
    bottom: 0;
    right: 40%;
    left: 45%;
}
}
`;
