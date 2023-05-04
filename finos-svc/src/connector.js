
// import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
import { useState, useEffect, useInstance} from "react";
import data from "./data.json" ;
import { DesktopAgent} from "@finos/fdc3";


const Connector = () => {
  const fdc3= useInstance<DesktopAgent>(DesktopAgent);
  const [channel, setChannel] = useState<Channel>(null);

  useEffect(()=>{
    fdc3.getOrCreateChannel("contactsChannel").then(channel=> setChannel(channel));
    
  },[fdc3])

  useEffect(()=>{  

    fdc3.addIntentListener("GetContacts", contactsRequest=>{
      if (contactsRequest.type !== "finos-hackthon.get-contacts") {
        contactsResult=fetchContacts(contactsRequest.ticker)
        if(channel){
              channel.broadcast(contactsResult)
        }
    }

  return ()=>listener.unsubscribe();
},[channel])

  const fetchContacts= (ticker)=>{
    const contacts = data
    .filter((contact) => contact.ticker === req.params.ticker)
    .map((item) => item.contact);

    const contactsResult={
        type: 'finos-hackthon.contacts',
        ticker: contactsRequest.ticker,
        contacts: contacts}
      
    }
    return contactsResult;
  }
)

return (
  <div>
    <h1>FINOS Contacts Service</h1>
    <p>`received chat request for ${req.params.ticker}`</p>
  </div>
)

}

export default Connector;