import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonItem, IonLabel, IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {FC} from "react";

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
            <IonLabel>By Dominiklas</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Version 0.1</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
