import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';

function Login() {
  return (
    <IonPage>

      <div className = "flex">

        <IonContent fullscreen>

          <div className = "Title"> 

            <IonTitle> Muscle Memory </IonTitle>

          </div>

          <div>
          
            

          </div>
          
          <div className = "loginButton">

            <IonButton color = {'ion-color-warning-contrast'}> Login </IonButton>
            
          </div>

        </IonContent>

      </div>

    </IonPage>
  );
};

export default Login;
