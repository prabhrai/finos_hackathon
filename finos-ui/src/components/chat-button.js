import styled from "styled-components"

const ChatButtonStyles = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;

    button {
        position: flex;
        margin: 0;
        width: 100%;
        height: auto;
        padding: 4px;
        background-color: #B6CC89;
        color: black;
        border: none;
        transition: .3s;
        &:hover {
            background-color: #7D8C5E;
            color: white;
        }
    }
`

function ChatButton({ data, setChatData }) {
    const handleButton = () => {
        console.log(data);
        setChatData(data);
    }
    return (
        <ChatButtonStyles>
            <button onClick={handleButton}>Start Chat</button>
        </ChatButtonStyles>
    )
}

export default ChatButton;