import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/react';
import { useState } from 'react';
import './login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <IonPage>

      <IonContent fullscreen>

        <IonToolbar>

            <IonTitle> Muscle Memory </IonTitle>
          
        </IonToolbar>

          <div className = "loginBox">

            <IonList>

              <IonItem>

                <label>
                  
                  <input mbsc-input type = "text" data-label = "Email" placeholder = "Enter Email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                  }} />
                
                </label>

              </IonItem>

              <IonItem>

                <label>

                    <input mbsc-input type = "password" data-label = "Password" placeholder = "Enter Password" data-start-icon="lock2" data-password-toggle = "true" value={password} onChange={(e) => {
                      setPassword(e.target.value)
                    }}/>
                
                </label>

              </IonItem>

            </IonList>

          </div>
          
          <div className = "loginButton">

            <IonButton onClick={() => {
              fetch("http://127.0.01:5000/signin", {
                method: "POST",
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              }).then((data) => {
                window.location.href = "/Home";
              });
            }}> Login </IonButton>
            
          </div>

      </IonContent>

    </IonPage>

  );
};

export default Login;
