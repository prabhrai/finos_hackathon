
// import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
import { useState, useEffect, useInstance} from "react";
import data from "./data.json" ;
// import { fdc3Ready } from "@finos/fdc3";


const Connector = () => {
    const instrument = {
      type: 'fdc3.instrument',
      id: {
          ticker: 'AAPL',
          ISIN: 'US0378331005',
          FIGI : 'BBG000B9XRY4'
      }
  }
  

  // const fdc3= useInstance<DesktopAgent>(DesktopAgent);
  // const [channel, setChannel] = useState<Channel>(null);

  useEffect(()=>{
    const result = window.fdc3.raiseIntent('ViewAnalysis', instrument)
    console.log(result)
    // fdc3.getOrCreateChannel("contactsChannel").then(channel=> setChannel(channel));
    
  },[instrument])

  /*
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
  */

return (
  <div>
    <h1>FINOS Contacts Service</h1>
    <p>`received chat request for`</p>
  </div>
)

}

export default Connector;