import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/react';
import './login.css';

function Login() {
  return (
    <IonPage>

      <div className = "flex">

        <IonContent fullscreen>
        
          <div className = "Title"> 

        <IonTitle> Muscle Memory </IonTitle>

      </div>

          <div className = "loginBox">
<IonList>
<IonItem>

  <label>
    
    <input mbsc-input type = "text" data-label = "Email" placeholder = "Enter Email" />
  
  </label>

</IonItem>

<IonItem>

  <label>

      <input mbsc-input type = "password" data-label = "Password" placeholder = "Enter Password" data-start-icon="lock2" data-password-toggle = "true"/>
  
  </label>

</IonItem>
</IonList>

</div>
          
          <div className = "loginButton">

            <IonButton> Login </IonButton>
            
          </div>

        </IonContent>

      </div>

    </IonPage>
  );
};

export default Login;
