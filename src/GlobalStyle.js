import {createGlobalStyle} from  "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
    font-family: 'Montserrat', sans-serif;
}
body{
font-size:1.2rem;
position:relative;
}
body::-webkit-scrollbar{
    width: 7px;
}
body::-webkit-scrollbar-track{
    width: 7px;
    background: #333;
}
body::-webkit-scrollbar-thumb{
    border-radius:10px;
    background: linear-gradient(171.21deg, #554DDE -10.74%, #F44E77 112.82%, #F44E77 112.82%);

}
body::-webkit-scrollbar-thumb:hover{
        border-radius: 10px;
        background: linear-gradient(300.81deg, #554DDE -17.99%, #F44E77 111.32%, #F44E77 111.32%);
    }
a{
    font-weight:500;
    font-family:initial;
    font-size:inherit;
}
p{
    font-weight:500;
    font-size-adjust:1.6rem;
}
.u-pad-lg{
    padding:8rem  18rem;
}
.u-pad-lg-2{
    padding-top:1rem;
    padding-left:18rem;
    padding-right:18rem;
    padding-bottom:6rem;
}
.title-con{
    text-align:center;
    width: 60%;
    margin:0 auto;
    p{
        text-align:center;
        padding-top:2rem;
        padding-bottom:2rem;
    }
}
.arrow{
    margin-left:0.5rem;
    i{
        font-size:.9rem;
        animation:move 2s infinite;
    }
    @keyframes move {
        0%{
            transform:translateX(0);
        }
        50%{
            transform:translateX(10px);
        }
        100%{
            transform:translateX(0);
        }
    }
}
`

export default GlobalStyle