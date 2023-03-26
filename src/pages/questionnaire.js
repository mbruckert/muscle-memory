import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './questionnaire.css';

function questionnaire() {
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
            <IonTitle size="large" style={
              {
                fontSize: '30px'
              }
            }> questionnaire </IonTitle>
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

            <ion-label position="stacked">Date of Birth</ion-label>
            <ion-input placeholder="Enter DOB MM-DD-YYYY"></ion-input>

            <ion-label position="stacked">Weight</ion-label>
            <ion-input placeholder="Enter Weight (lbs)"></ion-input>

            <ion-label position="stacked">Height</ion-label>
            <ion-input placeholder="Enter Height (ft)"></ion-input>

            <ion-label position="stacked">Workout Rate</ion-label>
            <ion-input placeholder="Enter Workout Rate"></ion-input>

            <ion-label position="stacked">Workout Intensity</ion-label>
            <ion-input placeholder="Enter Workout Intensity"></ion-input>

            <ion-label position="stacked">Diet</ion-label>
            <ion-input placeholder="Enter Diet"></ion-input>

            <ion-label position="stacked">Goal Weight</ion-label>
            <ion-input placeholder="Enter Goal Weight (lbs)"></ion-input>

            <ion-label position="stacked">Goal Deadline</ion-label>
            <ion-input placeholder="Enter Goal Deadline MM-DD-YYYY"></ion-input>
          
          </ion-item>
        </ion-list>
        </div>
        

    </IonPage>
  );
};

export default questionnaire;
