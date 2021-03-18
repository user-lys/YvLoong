import styled from "styled-components";

const CopyRight = styled.div`
  span {
    position:relative;
    left: ${props=>props.left|| "50%"};
    top:${props=> props.top || "-20px"};
    font-size: ${props=> props.top || "14px"};
    color: gray;
    margin:0 auto;
  }
`

export default CopyRight