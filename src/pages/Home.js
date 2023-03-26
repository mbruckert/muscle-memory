import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, getAssetPath, IonFooter, IonInput, IonTab, IonFab, IonIcon, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

function Home() {

  const [inputMessage, setInputMessage] = useState("");
  
  return (

    <IonPage>

      <IonContent fullscreen>

        <IonToolbar>

          <IonTitle> Muscle Memory </IonTitle>

            </IonToolbar>

              <div className='chat'>
        
                <div className='messageBox'>
          
                  <ion-item>

                      <ion-input mbsc-input type = "inputMessage" placeholder="Enter Message Here" value = {inputMessage} onChange = {(e) => {
                        setInputMessage(e.target.value)
                      }}></ion-input>
                      
                      <IonButton shape="round">Send</IonButton>

                </ion-item>

                </div>

              </div>

            </IonContent>

          </IonPage>

    );
};

export default Home;