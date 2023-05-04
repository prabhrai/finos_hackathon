import styled from "styled-components";
import { useState, useEffect } from "react";
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
  const fd3= useInstnce<DesktopAgent>(DesktopAgent);
  const [channel, setChannel] = useState<Channel>(null);
  const [contacts, setContacts] = useState<ContactResult>(null);
  useEffect(()=>{
    fdc3.getOrCreateChannel("contactsChannel").then(channel=> setChannel(channel));
   
 },[fdc3])
 
 useEffect(()=>{  
  if(channel){
    const listener=channel.addContextListener<ConactsResult>((contactsResult)=>{
      setContactsResult(contactsResult.contacts)
  })
  }
  return ()=>listener.unsubscribe();
},[channel])

const sendRequest=(ticker)=>{
  const  contactsReuest ={
    type: 'finos-hackthon.get-contacts',
    ticker: ticker
  }
   
  fdc3.raiseIntent("GetContacts", contactsReuest)
}


  return (
    <AppWrapper>
      <AppHeader>FINOS UI</AppHeader>
      <button conClick={(ticker)=>sendRequest(ticker)}  >Request Chat</button>
    </AppWrapper>
  );
}

export default App;
