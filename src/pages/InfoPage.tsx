import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { FC } from 'react';

const InfoPage: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol>
              <h1>Tomodoro</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList inset={true}>
          <IonItem>
            <IonLabel>By DOMINIKLAS</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Version 1.0</IonLabel>
          </IonItem>
        </IonList>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol>
              <p>
                We're thrilled to have you as part of our community! <br />
                Did you know? Our app is completely free to use! Yes, you read that right - no
                hidden fees, no annoying ads popping up when you least expect them. <br />
                We believe in providing a seamless, enjoyable experience without any interruptions.
                If you love what we do and want to help us continue improving, we'd be incredibly
                grateful for any donations you're able to make. Every little bit truly makes a
                difference and helps us in our mission to provide you with the best possible
                service. Thank you from the bottom of our hearts for being a part of our journey.
                Your support means the world to us! 🚀✨
              </p>
              <p>
                Once we reach 10 donations, we'll proudly display the names of each and every one of
                our amazing donors within the app. It's our way of saying a big, heartfelt thank you
                for helping us thrive and grow.
              </p>

              <a href="https://www.buymeacoffee.com/domthedev">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=domthedev&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                  alt={'help with buy-me-a-coffee'}
                />
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
