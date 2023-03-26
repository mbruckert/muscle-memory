import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Muscle Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Muscle Memory</IonTitle>
          </IonToolbar>
          </IonHeader>
          <div className='rect'>

    <div className="userInput">
    <ion-list>
    
    <ion-item>
    <ion-input placeholder="MuscleMemory"></ion-input>
  </ion-item>

    </ion-list>
 
    </div>
  
        </div>

        <div className='Send'>

          <ion-button shape="round">Send</ion-button>
        </div>
      </IonContent>
      


    </IonPage>
  );
};

export default Home;
