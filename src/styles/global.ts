import { createGlobalStyle } from 'styled-components'
const linear = 'background: linear-gradient(180deg, #15B9B9 0%, #3C1DFF 100%)';


export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #1F1F1F;
        --purple:#B550F8;
        
        --white: #FFFFFF;
        --black: #080808;
        --black-secondary: #1B1B1B;
        --grey: #9C9C9C;
        --yellow: #FFA217;
        --green: #2AB090;
        --blue: #000AFF;
        --green-button: #3F8E00;
    }

    *{
        margin:0;
        padding: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Heebo';
    }
    
    button:hover{
        cursor: pointer;
    }

`