import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tomodoro.app',
  appName: 'TomoDoro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
