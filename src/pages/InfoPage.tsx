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
                  Did you know? Our app is completely free to use! Yes, you read that right - no
                  hidden fees, no annoying ads popping up when you least expect them. <br />
                  We believe in providing a seamless, enjoyable experience without any
                  interruptions. If you love what we do and want to help us continue improving, we'd
                  be incredibly grateful for any donations you're able to make. <br /> Every little
                  bit truly makes a difference and helps us in our mission to provide you with the
                  best possible service. Thank you for being a part of our journey. Your support
                  means the world to us!
                </p>
                <p>🚀✨</p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
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
            </IonCol>
          </IonRow>
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
          <IonRow>
            <IonCol>
              <div style={{ textAlign: 'center' }}>
                <a href="https://www.buymeacoffee.com/domthedev">
                  <img
                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=domthedev&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                    alt={'help with buy-me-a-coffee'}
                  />
                </a>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
