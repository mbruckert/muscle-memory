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
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle> Muscle Memory </IonTitle>
        </IonToolbar>

        <div className="signupBox">
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <IonInput
                mbsc-input
                type="email"
                placeholder="Enter Email"
                value={email}
                onIonChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Password</ion-label>
              <IonInput
                mbsc-input
                type="password"
                placeholder="Enter Password"
                value={password}
                onIonChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Full Name</ion-label>
              <IonInput
                mbsc-input
                type="name"
                placeholder="Enter Name"
                value={name}
                onIonChange={(e) => {
                  setName(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Sex</ion-label>
              <IonInput
                mbsc-input
                type="sex"
                placeholder="Enter Sex"
                value={sex}
                onIonChange={(e) => {
                  setSex(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Age</ion-label>
              <IonInput
                mbsc-input
                type="age"
                placeholder="Enter Age"
                value={age}
                onIonChange={(e) => {
                  setAge(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Weight</ion-label>
              <IonInput
                mbsc-input
                type="weight"
                placeholder="Enter Weight (lbs) (e.g., 150)"
                value={weight}
                onIonChange={(e) => {
                  setWeight(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Height</ion-label>
              <IonInput
                mbsc-input
                type="height"
                placeholder="Enter Height (ft) (e.g., 5'6)"
                value={height}
                onIonChange={(e) => {
                  setHeight(e.target.value);
                }}
              ></IonInput>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Body Fat</ion-label>
              <IonInput
                mbsc-input
                type="bodyFat"
                placeholder="Enter Body Fat (%) (e.g., 40.5)"
                value={bodyFat}
                onIonChange={(e) => {
                  setBodyFat(e.target.value);
                }}
              ></IonInput>
            </ion-item>
          </ion-list>
        </div>

        <div className="signupButton">
          <IonButton
            onClick={() => {
              fetch("http://127.0.01:5000/signup", {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password,
                  age: parseInt(age),
                  weight: parseFloat(weight),
                  height: height,
                  body_fat: parseFloat(bodyFat),
                  sex: sex,
                }),
              })
                .then((response) => response.text())
                .then((data) => {
                  console.log(data);
                  // window.localStorage.setItem("token", data);
                  // window.location.href = "/Home";
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {" "}
            Signup{" "}
          </IonButton>
        </div>

        <ul>
          <Link to="./Login" className="loginLink">
            Have an account? Login!
          </Link>
        </ul>
      </IonContent>
    </IonPage>
  );
}

export default Signup;

