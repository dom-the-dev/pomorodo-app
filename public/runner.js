addEventListener('myCustomEvent', (resolve, reject, args) => {
  try {
    console.log('do something to update the system here');
    resolve('GEIL GEIL GEIL');
  } catch (e) {
    console.error('error on mycustom', e)
    reject(e);
  }
});

addEventListener('testSave', (resolve, reject, args) => {
  try {
    CapacitorKV.set('foo', 'my bar 42');
    resolve();
  } catch (err) {
    console.error(err);
    reject(err);
  }
});

addEventListener('testLoad', async (resolve, reject, args) => {
  try {
    const value = CapacitorKV.get('foo');
    resolve(value);
  } catch (err) {
    console.error(err);
    reject(err);
  }
});


addEventListener('timer', (resolve, reject, args) => {
  try {
  //   todo: implement
  } catch (err) {
    console.error(err);
    reject(err);
  }
});

// addEventListener('remoteNotification', (resolve, reject, args) => {
//   try {
//     console.log('received silent push notification');
//
//     CapacitorNotifications.schedule([
//       {
//         id: 100,
//         title: 'Enterprise Background Runner',
//         body: 'Received silent push notification',
//       },
//     ]);
//
//     resolve();
//   } catch (err) {
//     reject();
//   }
// });
