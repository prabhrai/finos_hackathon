import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #282c34; 
`

const AppHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  width: 100%;
  padding: 12px;
  background-color: #313640;
`
function App() {
  return (
    <AppWrapper>
      <AppHeader>FINOS UI</AppHeader>
    </AppWrapper>
  );
}

export default App;
