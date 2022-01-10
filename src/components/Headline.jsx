import styled from "styled-components"

function Headline(props) {
    return (
    <Head>{props.title}</Head> 
    )
    }
    export default Headline


    /* styled-components */

const Head = styled.h1`
    color: var(--primary);
    background-color: var(--secondary);
    display: grid;
    justify-content: center;
    margin-top:0;
    `