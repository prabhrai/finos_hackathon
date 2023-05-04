import styled from "styled-components";

const StockNameStyle = styled.div`
    font-size: 15px;
    color: #9DADCC;
`

function StockName({ value }) {
    return (
        <StockNameStyle>{ value }</StockNameStyle>
    )
}

export default StockName;