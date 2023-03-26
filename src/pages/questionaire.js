import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './questionaire.css';

function Questionaire() {
  return (

    <IonPage>
      <div className="Header">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Muscle Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      </div>

      <div className="Flexq">
      <IonContent fullscreen>
        <div className="Title">
            <IonTitle size="large" style={{fontSize: '30px'}}> Questionaire </IonTitle>
        </div>

        </IonContent>
        </div>
        
        <div className="Inputs">
        <ion-list>
        <ion-item>
    <ion-label position="stacked">First Name</ion-label>
    <ion-input placeholder="Enter First Name"></ion-input>
        
  <ion-label position="stacked">Last Name</ion-label>
    <ion-input placeholder="Enter Last Name"></ion-input>

    <ion-label position="stacked">Sex</ion-label>
    <ion-input placeholder="Enter Sex"></ion-input>

    <ion-label position="stacked">Pronouns</ion-label>
    <ion-input placeholder="Enter Your Pronouns"></ion-input>

    <ion-label position="stacked">Sex</ion-label>
    <ion-input placeholder="Enter DOB MM-DD-YYYY"></ion-input>
        
        </ion-item>

        </ion-list>
        </div>
        

    </IonPage>
  );
};

export default Questionaire;
