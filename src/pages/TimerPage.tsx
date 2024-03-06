import {IonButton, IonContent, IonHeader, IonImg, IonPage} from '@ionic/react';
import {FC, useEffect} from 'react';
import Timer from '../components/organisms/Timer';
import {IMAGES} from '../const/images';
import {BackgroundRunner} from '@capacitor/background-runner';

const TimerPage: FC = () => {
  useEffect(() => {
    init()
  }, []);

  const init = async () => {
    console.log('INIT!!')
    try {
      const permissions = await BackgroundRunner.requestPermissions({apis: []});
      console.log('permissions', permissions);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }

  const testSave = async () => {
    const result = await BackgroundRunner.dispatchEvent({
      label: 'com.capacitor.background.check',
      event: 'testSave',
      details: {},
    });
    console.log('save result', result);
  }

const testLoad = async () => {
  const result = await BackgroundRunner.dispatchEvent({
    label: 'com.capacitor.background.check',
    event: 'testLoad',
    details: {},
  });
  console.log('load result', result);
}

return (
  <IonPage>
    <IonHeader className="ion-no-border">
      <IonImg style={{height: 100}} src={IMAGES.leaf.src} alt={IMAGES.leaf.alt}/>
    </IonHeader>
    <IonContent fullscreen>
      <IonButton onClick={testSave}>testSave</IonButton>
      <IonButton onClick={testLoad}>testLoad</IonButton>
      <Timer/>
    </IonContent>
  </IonPage>
);
}
;

export default TimerPage;
