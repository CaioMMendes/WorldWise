import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`

/*

@layer base {
  * {
    @apply box-border;
  }
  body {
    @apply h-full overflow-x-hidden bg-zinc-950 text-zinc-50 flex-1 flex flex-col max-w-screen-2xl mx-auto w-full justify-center items-center;
  }
  html {
    @apply h-full;
  }
} */

html,
body{
    padding:0;
    margin:0;
    height:100%;
    width:100%;
    background-color:#09090b;
    color:#fafafa;
    font-family: "Roboto", sans-serif;

}




#root{
    height:100%;
    overflow-x:hidden;
    background-color:#09090b;
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
