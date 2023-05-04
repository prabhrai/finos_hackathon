import { useState, useEffect} from "react";
// import data from "./data.json" assert { type: "json" };
import { Channel, DesktopAgent } from "@finos/fdc3";

const FinosConnector=()=>{
  const [channel, setChannel] = useState<Channel>();
    const instrument = {
        type: 'fdc3.instrument',
        id: {
            ticker: 'AAPL'
        }
    };

    const fireInstrumentOnChannel = () => {
        console.log("broadcasting instrument on contactsChannel")
        channel?.broadcast(instrument);  
    }

    const fireContact = () => {
        // console.log("broadcasting fireContact")
        // window.fdc3.raiseIntent("ViewInstrument", instrument); 
    }

    const fireViewIntent = () => {
        //Raise an intent with a specified context
        let context = {type: "fdc3.instrument", name: "Tesla, inc.", id: {ticker: "TSLA"}}; 
        window.fdc3.raiseIntent("ViewChart", context);
    }

    useEffect(()=>{
        window.fdc3.getOrCreateChannel("contactsChannel").then(channel=> setChannel(channel));

        console.log("registered addIntentListener")
        //Handle a raised intent and log the originating app metadata
        const listener = window.fdc3.addIntentListener('StartChat', (contact, metadata) => { 
            console.log(`Received intent StartChat\nContext: ${contact}\nOriginating app: ${metadata?.source}`);
            return;
        });

    },[])

    useEffect(()=>{
        // console.log("broadcasting instrument")
        // channel?.broadcast(instrument);    
    },[])
    return (
    <div>
        <h1>FINOS Contacts Service</h1>
        <p>`received chat request for `</p>
        <button  onClick={fireContact}> Raise Contact</button>
        <button  onClick={fireInstrumentOnChannel}> Raise Intrument on contactsChannel</button>
        {/* <button  onClick={fireInstrument}> Raise Intrument</button>
        <button  onClick={fireInstrument}> Raise Intrument</button> */}

        {/* <text>{text}</text> */}
    </div>
    )
}

export default FinosConnector;