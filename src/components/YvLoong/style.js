import styled from "styled-components";

const YvLoong = styled.div`
  h1 {
    position:relative;
    left: ${props=>props.left|| "60px"};
    top:${props=> props.top || "-40px"};
    font-size: ${props=> props.top || "60px"};
    color: gray;
    margin:0 auto;
    text-shadow: 3px 3px 2px black, -3px -3px 2px white;
  }
`

export default YvLoong
