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
        <IonGrid className="ion-padding" fixed>
          <IonRow>
            <IonCol>
              <div style={{ textAlign: 'center' }}>
                <p>
                  We're thrilled to have you as part of our community! <br />
                  Did you know? Our app is completely free to use! No hidden fees, no annoying ads.{' '}
                </p>
                <p>🚀✨</p>
                <p>
                  Your feedback is valuable to us. Please feel free to share any thoughts and
                  suggestions by emailing us at{' '}
                  <a href="mailto:tomodoro@domthedev.com">tomodoro@domthedev.com</a>. <br />
                  We appreciate your input and strive to continuously improve our services based on
                  your feedback. Thank you for taking the time to reach out!
                </p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div style={{ textAlign: 'center' }}>
                <a href="https://www.buymeacoffee.com/domthedev" target="_blank">
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    // style={{ height: 60, width: 217 }}
                  />
                </a>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList inset={true}>
          <IonItem>
            <IonLabel>
              <h3>Tomodoro</h3>
              <p>Name</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>domthedev</h3>
              <p>Developer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Nipkai</h3>
              <p>Developer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonLabel>
                <h3>0.1</h3>
                <p>Version</p>
              </IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonLabel>
                <a
                  href="https://domthedev.com/tomodoro/privacy"
                  rel={'noopener noreferrer'}
                  target={'_blank'}>
                  <h3>Link</h3>
                </a>
                <p>Privacy Policy</p>
              </IonLabel>
            </IonLabel>
          </IonItem>
        </IonList>
        {/*<IonRow>*/}
        {/*  <IonCol>*/}
        {/*    <div style={{ textAlign: 'center' }}>*/}
        {/*      <form action="https://www.paypal.com/donate" method="post" target="_top">*/}
        {/*        <input type="hidden" name="hosted_button_id" value="C9WSX8C9EVR4Q" />*/}
        {/*        <input*/}
        {/*          type="image"*/}
        {/*          src="https://pics.paypal.com/00/s/NzhhNzZlMjctYWQ5NC00NzMxLTg4ZmMtZGNiM2NmZmM2Yzg2/file.PNG"*/}
        {/*          // @ts-ignore*/}
        {/*          border="0"*/}
        {/*          name="submit"*/}
        {/*          title="PayPal - The safer, easier way to pay online!"*/}
        {/*          alt="Donate with PayPal button"*/}
        {/*        />*/}
        {/*        <img*/}
        {/*          alt=""*/}
        {/*          // @ts-ignore*/}
        {/*          border="0"*/}
        {/*          src="https://www.paypal.com/en_DE/i/scr/pixel.gif"*/}
        {/*          width="1"*/}
        {/*          height="1"*/}
        {/*        />*/}
        {/*      </form>*/}
        {/*    </div>*/}
        {/*  </IonCol>*/}
        {/*</IonRow>*/}
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
