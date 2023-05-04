import { useState, useEffect } from "react";
import data from "./data.json";
import { Channel, DesktopAgent } from "@finos/fdc3";

const FinosConnector = () => {
  const [channel, setChannel] = useState<Channel>();
  const [currentIntent, setCurrentIntent] = useState<string>();
  const instrument = {
    type: "fdc3.instrument",
    id: {
      ticker: "AAPL",
    },
  };

  const fetchContacts = (ticker: any) => {
    const contacts = data
      .filter((contact) => contact.ticker === ticker)
      .map((item) => item.contact);
    const contactsResult = {
      type: "finos-hackthon.contacts",
      ticker: ticker,
      contacts: contacts,
    };
    console.log(
      "Found contact for ticker " +
        ticker +
        " -- " +
        JSON.stringify(contactsResult)
    );
    return contactsResult;
  };

  const fireInstrumentOnChannel = () => {
    console.log("broadcasting instrument on contactsChannel");
    channel?.broadcast(instrument);
  };

  const fireContact = () => {
    // console.log("broadcasting fireContact")
    // window.fdc3.raiseIntent("ViewInstrument", instrument);
  };

  const fireViewIntent = () => {
    //Raise an intent with a specified context
    // let context = {type: "fdc3.instrument", name: "Tesla, inc.", id: {ticker: "TSLA"}};
    // window.fdc3.raiseIntent("ViewChart", context);
  };

  useEffect(() => {
    window.fdc3
      .getOrCreateChannel("contactsChannel")
      .then((channel) => setChannel(channel));
    console.log("registered addIntentListener");
    try {
      // listener that logs metadata for the message a specific type
      const contactListener = channel?.addContextListener(
        "fdc3.instrument",
        (instrument, metadata) => {
          console.log(
            `Received context message\nContext: ${JSON.stringify(
              instrument
            )}\nOriginating app: ${JSON.stringify(metadata?.source)}`
          );
          //do something else with the context
          setCurrentIntent(instrument?.name);
          let ticker = instrument?.id?.ticker;
          console.log("received ticker " + ticker);
          var contactResult = fetchContacts(ticker);
          if(!contactResult){
            return;
          }
          
          const contact = {
            type: "fdc3.contact",
            name: contactResult?.contacts[0]?.first_name,
            id: {
              email: contactResult?.contacts[0]?.email,
            },
          };
          window.fdc3.raiseIntent("StartChat", contact);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [channel]);

  return (
    <div>
      <h1>FINOS Contacts Service</h1>
      <p>`received chat request for {currentIntent} `</p>
      <button onClick={fireContact}> Raise Contact</button>
      <button onClick={fireInstrumentOnChannel}>
        {" "}
        Raise Intrument on contactsChannel
      </button>
      {/* <button  onClick={fireInstrument}> Raise Intrument</button>
        <button  onClick={fireInstrument}> Raise Intrument</button> */}

      {/* <text>{text}</text> */}
    </div>
  );
};

export default FinosConnector;
