import { IonContent, IonHeader, IonImg, IonPage } from '@ionic/react';
import { FC } from 'react';
import Timer from '../components/organisms/Timer';
import { IMAGES } from '../const/images';

const TimerPage: FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonImg style={{ height: 100 }} src={IMAGES.leaf.src} alt={IMAGES.leaf.alt} />
      </IonHeader>
      <IonContent fullscreen>
        <Timer />
      </IonContent>
    </IonPage>
  );
};

export default TimerPage;
