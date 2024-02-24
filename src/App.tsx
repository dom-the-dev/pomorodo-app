import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { informationCircleOutline, stopwatchOutline } from 'ionicons/icons';
import TomoDoro from './pages/TomoDoro';
import InfoPage from './pages/InfoPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/globals.scss';
import './theme/variables.scss';
import { FC } from 'react';
import SettingsContextProvider from './provider/SettingsContextProvider.provider';
import { Redirect } from 'react-router';

setupIonicReact();

const App: FC = () => (
  <IonApp>
    <SettingsContextProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/timer">
              <TomoDoro />
            </Route>
            <Route exact path="/info">
              <InfoPage />
            </Route>
            <Route exact path="/">
              <Redirect to={'/timer'} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="timer" href="/timer">
              <IonIcon aria-hidden="true" icon={stopwatchOutline} />
              <IonLabel>TomoDoro</IonLabel>
            </IonTabButton>
            <IonTabButton tab="info" href="/info">
              <IonIcon aria-hidden="true" icon={informationCircleOutline} />
              <IonLabel>Info</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </SettingsContextProvider>
  </IonApp>
);

export default App;
