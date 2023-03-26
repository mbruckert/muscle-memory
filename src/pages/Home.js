import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, getAssetPath, IonFooter, IonInput, IonTab, IonFab, IonIcon, IonButton } from '@ionic/react';
import './Home.css';

function Home() {
  return (

    <IonPage>
      <IonContent fullscreen>
        <IonToolbar>
          <IonHeader>
          <IonTitle> Muscle Memory </IonTitle>
          </IonHeader>
            </IonToolbar>
              <div className='chat'>
        
                <div className='messageBox'>
          
                    <ion-item>
                  <ion-input placeholder="Muscle Memory"></ion-input>
                  <IonButton shape="round">send</IonButton>
                </ion-item>

                </div>

              </div>
            </IonContent>
          </IonPage>

    );
};

export default Home;