import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';


function Login() {
  return (
    <IonPage>
      <div className="flex">
      <IonContent fullscreen>
      <IonTitle>Muscle Memory</IonTitle>
      <div className = "GoogleButton"><IonButton>Login With Google</IonButton>
        </div>
      </IonContent>
      </div>
    </IonPage>
  );
};

export default Login;
