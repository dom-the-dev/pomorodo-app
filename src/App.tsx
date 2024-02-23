import {Route} from 'react-router-dom';
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
import {IonReactRouter} from '@ionic/react-router';
import {settingsOutline,stopwatchOutline} from 'ionicons/icons';
import TomoDoro from './pages/TomoDoro';
import Settings from './pages/Settings';

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
import './theme/variables.css';
import {FC} from "react";
import SettingsContextProvider from "./provider/SettingsContextProvider.provider";

setupIonicReact();

const App: FC = () => (
  <IonApp>
    <SettingsContextProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <TomoDoro/>
            </Route>
            <Route exact path="/settings">
              <Settings/>
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="TomoDoro" href="/">
              <IonIcon aria-hidden="true" icon={stopwatchOutline}/>
              <IonLabel>TomoDoro</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon aria-hidden="true" icon={settingsOutline}/>
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </SettingsContextProvider>
  </IonApp>
);

export default App;
