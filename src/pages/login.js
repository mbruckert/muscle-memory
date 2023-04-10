import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonInput,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar
          mode="ios"
          style={{ paddingTop: "20px", paddingBottom: "10px" }}
        >
          <IonTitle size="large" style={{ fontSize: "25px" }}>
            Login
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList mode="ios">
          <IonItem mode="ios">
            <IonInput
              type="text"
              placeholder="Email"
              onIonChange={(e) => setEmail(e.target.value)}
              mode="ios"
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="password"
              placeholder="Password"
              mode="ios"
              onIonChange={(e) => setPassword(e.target.value)}
            />
          </IonItem>
          <IonItem style={{ paddingTop: "20px" }}>
            <IonButton
              mode="ios"
              expand="block"
              size="default"
              style={{ width: "100%", marginBottom: "20px" }}
              onClick={() => {
                fetch("http://127.0.0.1:8000/signin", {
                  method: "POST",
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                })
                  .then((response) => response.text())
                  .then((data) => {
                    window.localStorage.setItem("token", data);
                    window.location.href = "/home";
                  });
              }}
            >
              Sign In
            </IonButton>
          </IonItem>
          <IonItem>
            <Link to="/signup">Don't have an account? Sign Up instead</Link>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Login;

