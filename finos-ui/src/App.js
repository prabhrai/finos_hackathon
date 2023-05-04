import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import MOCKDATA from './utils/MOCK_DATA.json';
import StockName from './components/stock-name';
import styled from "styled-components";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ChatButton from './components/chat-button';

const AppWrapper = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100vh;
  padding: 75px 25px 0;
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

const GridWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: calc(100% - 75px);
  overflow: auto;

  .ag-root-wrapper {
    border: none;
  }
`

function App() {
  const [rowData, setRowData] = useState(null);
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    setRowData(MOCKDATA);
  }, []);

  const columnDefs = [
    {field: 'action', flex: 1, cellRenderer: ChatButton, cellRendererParams: {setChatData: setChatData}},
    {field: 'security', flex: 2, cellRenderer: StockName},
    {field: 'ticker', flex: 1},
    {field: 'price', flex: 1},
    {field: 'open_price', flex: 1},
    {field: 'trader', flex: 1},
    {field: 'percent_change', flex: 1},
    {field: 'email', flex: 1},
  ]

  if (!rowData) return <div>...Loading</div>
  console.log(chatData);
  return (
    <AppWrapper>
      <AppHeader>FINOS UI</AppHeader>
      <GridWrapper className="ag-theme-alpine-dark" style={{width: '100%'}}>
        <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </GridWrapper>
    </AppWrapper>
  );
}

export default App;
