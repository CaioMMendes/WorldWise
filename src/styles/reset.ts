import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`



html,
body{
    padding:0;
    margin:0;
    height:100%;
    width:100%;
    background-color:${({ theme }) => theme.colors.background};
    color:#fafafa;
    font-family: "Roboto", sans-serif;

}




#root{
    height:100%;
    overflow-x:hidden;
    color:#fafafa;
    display:flex;
    flex-direction:column;
    max-width:1536px;
    margin:0 auto;
    width:100%;
    justify-content:center;
    align-items:center;
}

a{
    color:inherit;
    text-decoration:none
}

ul{
  list-style:none;
}
li{
  list-style:none;
}

*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}


`;

export default ResetStyles;
