
import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
} from "styled-components";

export const GlabalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Cairo', sans-serif;
    }

    body {
        /* background-color: #E4E4E4; */
        background-repeat: no-repeat;
        height: 100vh;
        background-color: #d5dbed;
    }
`;

export const H1 = styled.h1`
    width: 100%;

    text-align: center;
`;

export const Form = styled.form`
    width: 50%;
    height: 100vh;
    background-color: #383349;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px;
    box-shadow: 5px 5px 15px 0px #403b4a;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    /* background-color: red;  */
    width: 80%;
`;

export const Span = styled.span`
    /* color: #fff; */
    color: #BBB2CD;
    font-weight: 600;
    font-size: 15px;
`;

export const Input = styled.input`
    border-radius: 2px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #BBB2CD;
    transition: 1s;
    background-color: #E5686800;
    color: #fff;
    outline: none;
    &:focus {
        background-color: #67538C;
        border-bottom: 2px solid #fff;
    }

`;

export const Button = styled.button`

`;

export const Textarea = styled.textarea`
    outline: none;
    resize: none;
    border: 1px solid #fff;
    height: auto;
    border-radius: 2px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #BBB2CD;
    transition: 1s;
    background-color: #E5686800;
    color: #fff;
    outline: none;
`;

export const Section = styled.section`
    background-color: #FACFCF;
    height: 50px;
    width: 50%;
    display: inline-block;
`;

export const InputButton = styled(Input)`
    border: 2px solid #BBB2CD;
    font-size: 15px;
    padding: 8px 16px;
    margin-top: 20px;
    transition: .1s;
    &:focus {
        background-color: #67538C00;
        border-bottom: 2px solid #fff;
    }
    &:active {
        background-color: #67538C;
    }
`;


// Estilos para ver los datos

export const SectionVer = styled.section`
    height: 100vh;
    width: 50%;
    background-color: #fff0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;

    

    article {
        height: 400px;
        width: 90%;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 30px 5px #B0B9D5;
        section {
            font-weight: 600;
            height: 30px;
            width: 100%;
            background-color: blue;
            color: #fff;
            border-radius: 5px 5px 0 0 ;
        }
        .contenedor {
            margin: 0 8px;
            background-color: #fff0;
            display: flex;
            img {
                width: 90px;
            }
            div {
                background-color: #BBC1D600;
                width: 100%;
                h2 {
                    font-weight: 600;
                    font-size: 15px;
                    width: 100%;
                    border-bottom: 3px solid #646E90;
                }
            }
        }

        p {
            height: 250px;
            margin: 0 8px;
            background-color: #BBC1D600;
        }

        .raya {
            height: 3px;
            width: 100%;
            background-color: #646E90;
        }
    }
`;










// export const H1 = styled.h1`
//     height: 50px;
//     width: 50px;
//     background-color: red;
// `;

// export const H2 = styled.h2`
//     height: 50px;
//     width: 50px;
//     background-color: blue;
// `;
