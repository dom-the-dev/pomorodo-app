import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FC } from 'react';
import Timer from '../components/Timer';
import { IMAGES } from '../core/const/images';

const TomoDoro: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonImg style={{ height: 100 }} src={IMAGES.leaf.src} alt={IMAGES.leaf.alt} />
      </IonHeader>
      <IonContent fullscreen>
        <Timer />
      </IonContent>
    </IonPage>
  );
};

export default TomoDoro;
