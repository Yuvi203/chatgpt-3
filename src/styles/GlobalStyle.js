import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar{
  width: 9px;
  background-color: #383838;
}
::-webkit-scrollbar-thumb{
  border-radius:10px;
  background-color: #6b6b6b;
}
::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: #383838;
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
    margin-bottom:8px;
   border-radius: 8px;
   margin-top:1rem;
   }
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
.image-con{
    margin-right:10px;
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
.user-res{
display:flex;
align-items:center;
justify-content:center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity:0;
  }
}
`
export default GlobalStyle