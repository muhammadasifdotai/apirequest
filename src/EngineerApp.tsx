// import { StyleSheet, Text, View } from 'react-native';
// import React, { useEffect } from 'react';
// import { myFetchGetRequest, myFetchPostRequest, myFetchPutRequest } from './src/MyFetchApiRequests';

// const App = () => {
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     //const res = await myFetchGetRequest();
//     // const data1 = {
//     //   title: 'fooppppp',
//     //   body: 'bar',
//     //   userId: 1,
//     // };
//     // const data2 = {
//     //   title: 'fooppppp',
//     // };
//     // const res1 = await myFetchPostRequest(data1);
//     // const res = await myFetchPutRequest(1, data2);
//     // console.log('data', res);

//     const delRes = await myFetchPostRequest(2);
//     console.log('data', delRes);
//   }

//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  myFetchGetRequest,
  myFetchPostRequest,
  myFetchPutRequest,
} from './src/MyFetchApiRequests';
import {
  myAxiosGetRequest,
  myAxiosPatchRequest,
  myAxiosPostRequest,
  myAxiosPutRequest,
} from './src/MyAxiosRequest';

const App = () => {
  useEffect(() => {
    getData();
  }, []);

  // get data with the help of axios
  const getData = async () => {
    // await myAxiosGetRequest()
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // await myAxiosPostRequest({ title: 'M Asif', desc: 'React Native', id: 100 })
    //   .then(res => {
    //     //console.log(res.data);
    //     console.log(res.status);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // await myAxiosPutRequest(100, { title: 'M Asif', desc: 'React Native', id: 100 })
    //   .then(res => {
    //     //console.log(res.data);
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // await myAxiosPatchRequest(100, { title: 'Muhammad Asif' })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    await myFetchPutRequest(100, {title: 'Muhammad Asif'})
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
