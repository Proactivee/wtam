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
  
  font-family:"Arial Black",sans-serif;
  font-size:16px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top:8px;
  padding-bottom:8px;

  border-top-right-radius: 20px;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:5px;
  border-top-left-radius:5px;

  border: none;
  transform: scale(1);
  transition: 300ms,ease-in-out;
  color:rgb(0, 0, 0);
  background: rgb(130,255,76);
  background: linear-gradient(156deg, rgba(130,255,76,1) 0%, rgba(22,187,193,1) 100%);
  cursor: pointer;

  &:hover {
    transform:scale(1.02);
    
    

  }
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
    margin-left:10px;
    
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
  font-size:25px;
}h4{
  
}
p{
  color:white;
}
footer{
}

`

function GlobalStyle() {
  return <StyledGlobal />
}

export default GlobalStyle
