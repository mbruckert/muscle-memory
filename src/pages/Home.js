import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonInput,
  IonTab,
  IonFab,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import "./Home.css";

import { send } from "ionicons/icons";

function Home() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.01:8000/getmessages", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token"),
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessages(data);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.01:8000/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        message: e.target.messageInput.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          "Muscle Memory: " + data,
        ]);
      });
    const messageInput = e.target.elements.messageInput.value;
    if (messageInput) {
      setMessages((prevMessages) => [...prevMessages, messageInput]);
      e.target.elements.messageInput.value = "";
    }
  };

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar
          mode="ios"
          style={{ paddingTop: "20px", paddingBottom: "10px" }}
        >
          <IonTitle slot="secondary" size="large" style={{ fontSize: "25px" }}>
            Chat
          </IonTitle>
          <IonButton
            slot="primary"
            size="small"
            mode="ios"
            onClick={(data = window.localStorage.getItem("token")) => {
              console.log(data);
              window.localStorage.removeItem("token", data);
              window.location.href = "/signin";
            }}
          >
            Sign Out
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {messages.map((message) => (
            <IonItem key={message}>{message}</IonItem>
          ))}
        </IonList>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonInput
              type="text"
              name="messageInput"
              placeholder="Your Message"
              mode="ios"
            />
          </IonItem>
          <IonItem>
            <IonButton
              type="submit"
              mode="ios"
              expand="block"
              size="default"
              style={{ width: "100%", marginBottom: "20px", marginTop: "20px" }}
            >
              <IonIcon slot="start" icon={send}></IonIcon>
              Send Message
            </IonButton>
          </IonItem>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default Home;

