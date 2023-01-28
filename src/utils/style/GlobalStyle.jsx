import { createGlobalStyle } from 'styled-components'

const StyledGlobal = createGlobalStyle`


*{
    font-family:'Century Gothic', Times, serif;
    scroll-behavior: smooth;

}
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  margin-top:10px;
 
 
}body {
  margin: 0;
  min-height:100%;
  background-color:rgba(17, 17, 17, 0.99);
  
  
}button{
  
}
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0 /* 2 */
}
h1{
    color:white;
    font-family:'November',sans-serif;
    font-size:80px;
    text-align:center;
    margin-top: 10px;
    margin-bottom: 20px;
    
}
h2{
  color:white;
  font-family:'November',sans-serif;
  margin:0px;
  font-size:90px;
  margin-left:10px;
  @media (max-width: 768px) {
    font-size:50px;
  }
  
}
h3{
  color:white;
  font-family:'November',sans-serif;
  font-size:30px;
  @media (max-width: 768px) {
    font-size:20px;
  }
}h4{
  margin-bottom: 5px;;
}
p{
  color:white;
  font-size: 22px;
  margin: 20px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
}
footer{
}

`

function GlobalStyle() {
  return <StyledGlobal />
}

export default GlobalStyle
