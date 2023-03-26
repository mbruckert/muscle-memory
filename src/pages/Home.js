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
  IonIcon,
  IonButton,
} from "@ionic/react";
import "./Home.css";

function Home() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.01:5000/getmessages", {
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
    fetch("http://127.0.01:5000/sendmessage", {
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
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle> Muscle Memory </IonTitle>
          <IonButton
            slot="end"
            onClick={(data = window.localStorage.getItem("token")) => {
              console.log(data);
              window.localStorage.removeItem("token", data);
              window.location.href = "/Login";
            }}
          >
            Logout
          </IonButton>
        </IonToolbar>

        <div className="chat">
          <div className="messageBox">
            {messages.map((message, index) => {
              return (
                <div key={index} className="message">
                  {message}
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="input-box">
            <IonInput
              name="messageInput"
              placeholder="Muscle Memory"
              className="input"
            />
            <IonButton type="submit" className="submit-button" shape="round">
              Send
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Home;

