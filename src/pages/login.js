import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';


function Login() {
  return (
    <IonPage>
      <div className="flex">
      <IonContent fullscreen>
        <div className="Title"> 

        <IonTitle size="large" style={{fontSize: '30px'}}>Muscle Memory</IonTitle>

        </div>
        
      <div className = "GoogleButton"><IonButton>Login With Google</IonButton>
        </div>
      </IonContent>
      </div>

    </IonPage>
  );
};

export default Login;
