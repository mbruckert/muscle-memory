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
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");
  const [bodyFat, setBodyFat] = useState();

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar
          mode="ios"
          style={{ paddingTop: "20px", paddingBottom: "10px" }}
        >
          <IonTitle size="large" style={{ fontSize: "25px" }}>
            Sign Up
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
          <IonItem>
            <IonInput
              type="text"
              placeholder="Full Name"
              mode="ios"
              onIonChange={(e) => setName(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Enter Sex"
              value={sex}
              onIonChange={(e) => {
                setSex(e.target.value);
              }}
              mode="ios"
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="number"
              placeholder="Age"
              mode="ios"
              onIonChange={(e) => setAge(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="number"
              placeholder="Weight"
              mode="ios"
              onIonChange={(e) => setWeight(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Height"
              mode="ios"
              onIonChange={(e) => setHeight(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="number"
              placeholder="Body Fat"
              mode="ios"
              onIonChange={(e) => setBodyFat(e.target.value)}
            />
          </IonItem>
          <IonItem style={{ paddingTop: "20px" }}>
            <IonButton
              mode="ios"
              expand="block"
              size="default"
              style={{ width: "100%", marginBottom: "20px" }}
              onClick={() => {
                fetch("http://127.0.01:8000/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    sex: sex,
                    age: age,
                    weight: weight,
                    height: height,
                    bodyFat: bodyFat,
                  }),
                })
                  .then((response) => response.text())
                  .then((data) => {
                    window.localStorage.setItem("token", data);
                    window.location.href = "/home";
                  });
              }}
            >
              Sign Up
            </IonButton>
          </IonItem>
          <IonItem>
            <Link to="/signin">Already have an account? Sign In</Link>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Signup;

