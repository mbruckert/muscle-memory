import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import './signup.css';

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  return (

    <IonPage>

      <IonContent fullscreen>

        <IonToolbar>

            <IonTitle> Muscle Memory </IonTitle>
          
        </IonToolbar>

          <div className = "signupBox">

          <ion-list>

            <ion-item>

                <ion-label position="stacked">Email</ion-label>
                <ion-input mbsc-input type = "email" placeholder="Enter Email" value = {email} onChange = {(e) => {
                    setEmail(e.target.value)
                  }}></ion-input>

            </ion-item>

            <ion-item>

                <ion-label position="stacked">Password</ion-label>
                <ion-input mbsc-input type = "password" placeholder="Enter Password" value = {password} onChange = {(e) => {
                    setPassword(e.target.value)
                  }}></ion-input>

            </ion-item>

            <ion-item>
              
              <ion-label position="stacked">Full Name</ion-label>
              <ion-input mbsc-input type = "name" placeholder="Enter Name" value = {name} onChange = {(e) => {
                    setName(e.target.value)
                  }}></ion-input>
            
            </ion-item>
            
            <ion-item>

              <ion-label position="stacked">Sex</ion-label>
              <ion-input mbsc-input type = "sex" placeholder="Enter Sex" value = {sex} onChange = {(e) => {
                    setSex(e.target.value)
                  }}></ion-input>

            </ion-item>
            
            <ion-item>

              <ion-label position="stacked">Age</ion-label>
              <ion-input mbsc-input type = "age" placeholder="Enter Age" value = {age} onChange = {(e) => {
                    setAge(e.target.value)
                  }}></ion-input>

            </ion-item>
            
            <ion-item>

              <ion-label position="stacked">Weight</ion-label>
              <ion-input mbsc-input type = "weight" placeholder="Enter Weight (lbs) (e.g., 150)" value = {weight} onChange = {(e) => {
                    setWeight(e.target.value)
                  }}></ion-input>

            </ion-item>
            
            <ion-item>

              <ion-label position="stacked">Height</ion-label>
              <ion-input mbsc-input type = "height" placeholder="Enter Height (ft) (e.g., 5'6)" value = {height} onChange = {(e) => {
                    setHeight(e.target.value)
                  }}></ion-input>

            </ion-item>

            <ion-item>

              <ion-label position="stacked">Body Fat</ion-label>
              <ion-input mbsc-input type = "bodyFat" placeholder="Enter Body Fat (%) (e.g., 40.5)" value = {bodyFat} onChange = {(e) => {
                    setBodyFat(e.target.value)
                  }}></ion-input>

            </ion-item>

        </ion-list>

        </div>
          
          <div className = "signupButton">

            <IonButton onClick = {() => {
              fetch("http://127.0.01:5000/signup", {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password,
                  age: age,
                  weight: weight,
                  height: height,
                  body_fat: bodyFat,
                  sex: sex
                }),
              }).then((data) => {
                console.log(data);
                window.localStorage.setItem("token", data); 
                window.location.href = "/Home"
              });
            }}> Signup </IonButton>
            
          </div>

          <ul>
                <Link to="./Login" className="loginLink">
                    Have an account? Login!
                </Link>
          </ul>

      </IonContent>

    </IonPage>

    );
};

export default Signup;