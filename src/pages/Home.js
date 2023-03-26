import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, getAssetPath, IonFooter, IonInput } from '@ionic/react';
import './home.css';

function Home() {
  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle> Muscle Memory </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">

          <IonToolbar>

            <IonTitle size="large"> Muscle Memory </IonTitle>

          </IonToolbar>

        </IonHeader>

        <div className = 'chat'>

          <div className = 'messageBox'>

            <IonToolbar>

              <IonFooter>

                <ion-item>

                  <ion-label></ion-label>
                  
                  <ion-input placeholder="Muscle Memory Chat"></ion-input>
                  
                  <ion-fab>

                    <ion-fab-button size="small">

                      <ion-icon name="add"></ion-icon>

                    </ion-fab-button>

                  </ion-fab>

                </ion-item>

              </IonFooter>

            </IonToolbar>

          </div>

        </div>

      </IonContent>

    </IonPage>

  );
};

export default Home;
