import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ArrowCOntainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
`

const DownArrow = styled(IoMdArrowDropdown)`
    font-size: 30px;
    color: #FF6274;
`

const UpArrow = styled(IoMdArrowDropup)`
    font-size: 30px;
    color: #A8FFA1;
`


function PercentageDirection({ value }) {
    return (
        <ArrowCOntainer>
            { value === 0 ? <DownArrow /> : <UpArrow />} 
        </ArrowCOntainer>
    )
}

export default PercentageDirection;