import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './questionnaire.css';

function Questionnaire() {
  return (

    <IonPage>
 
      <div className="Header">

        <IonHeader>

          <IonToolbar>

            <IonTitle> Muscle Memory </IonTitle>

          </IonToolbar>

        </IonHeader>

      </div>

      <div className = "Flexq">

        <IonContent fullscreen>
          
          <div className = "Title">

              <IonTitle size = "large" style = {
                {
                  fontSize: '30px'
                }
              }> Questionnaire </IonTitle>
          
          </div>

        </IonContent>

      </div>
        
        <div className = "Inputs">
        <ion-list>
          <ion-item>
            
            <ion-label position="stacked">Full Name</ion-label>
            <ion-input placeholder="Enter Full Name"></ion-input>
          
          </ion-item>
          
          <ion-item>

            <ion-label position="stacked">Sex</ion-label>
            <ion-input placeholder="Enter Sex"></ion-input>

          </ion-item>
          
          <ion-item>

            <ion-label position="stacked">Age</ion-label>
            <ion-input placeholder="Enter Age"></ion-input>

          </ion-item>
          
          <ion-item>

            <ion-label position="stacked">Weight</ion-label>
            <ion-input placeholder="Enter Weight (lbs) (e.g., 150)"></ion-input>

          </ion-item>
          
          <ion-item>

            <ion-label position="stacked">Height</ion-label>
            <ion-input placeholder="Enter Height (ft) (e.g., 5'6)"></ion-input>

          </ion-item>

          <ion-item>

            <ion-label position="stacked">Body Fat</ion-label>
            <ion-input placeholder="Enter Body Fat (%) (e.g., 40.5)"></ion-input>

          </ion-item>

        </ion-list>

        </div>

    </IonPage>
  );
};

export default Questionnaire;
