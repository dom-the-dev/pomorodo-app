import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tomodoro.app',
  appName: 'TomoDoro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    scheme: "App",
  },
  plugins: {
    BackgroundRunner: {
      label: 'com.tomodoro.app.check',
      src: 'runner.js',
      event: 'myCustomEvent',
      repeat: true,
      interval: 2,
      autoStart: true,
    },
  },
};

export default config;
