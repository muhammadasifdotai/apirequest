// Get Method: for getting data.
// Post Method: jub humay kush store krwana hota hay us kay leyee post use krtay hay. jaisay kay form ka data store krwana hota hay.
// Delete Method: delete krnay kay leyee data method use krtay hay.
// put or patch Method: for data update.

// API: call krnay ka bydefault method 'get' hota hay is leyee call krtay huvay likhnay ki zaroorat nhi hoti hay.

/////////////////// Simple API call ////////////////////

// // we cannot connect the app directly with data base for this we use 'API'
// // API call krnay kay leyee sub say phlay humay URL chahiyee hota hay.

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const App = () => {
//   const [data, setData] = useState(undefined);

//   const getAPIData = async () => {
//     // api call
//     // console.warn('Alhamdullilah');
//     // console.log('Alhamdullilah');
//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
//     let result = await fetch(url);
//     result = await result.json(); // here we convert the result in to json format
//     // console.log(result);
//     setData(result);
//   };
//   // we call the api in use effect
//   useEffect(() => {
//     getAPIData();
//   }, []); // empty dependency ka matlab hay k function aik bar call hoga.

//   return (
//     <View>
//       <Text>App</Text>
//       {data ? (
//         <View>
//           <Text>{data.userId}</Text>
//           <Text>{data.id}</Text>
//           <Text>{data.title}</Text>
//           <Text>{data.body}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

/////////////////// Simple API call Test ////////////////////

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const App = () => {
//   const [data, setData] = useState(undefined);

//   const getAPIData = async () => {
//     // console.log('Alhamdullilah');
//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View>
//       <Text>App</Text>
//       {data ? (
//         <View>
//           <Text>{data.userId}</Text>
//           <Text>{data.id}</Text>
//           <Text>{data.title}</Text>
//           <Text>{data.body}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

/////////////////// API call with lots of data in list form using map ////////////////////

// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// jub bhi hum get method use krtay hay to wo promise return krta hay to is leyee hum us ko handle krnay kay leyee await use krtay hay, or async hum is leyee use krtay hay ta kay await use kr sakain ya await ko handle kr sakain

// const App = () => {
//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json(); // phlay jo data ata hay wo readable form may hota hay json may nhi is leyee usay json may convert krtay hay.
//     setData(result);
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);
// item : aik object lay leyee jis may sari ki sari keys hay.
//   return (
//     <ScrollView>
//       <Text>App</Text>
//       {data.length
//         ? data.map(item => {
//             return (
//               <View>
//                 <Text>ID: {item.id}</Text>
//                 <Text>Title: {item.title}</Text>
//                 <Text>Body: {item.body}</Text>
//               </View>
//             );
//           })
//         : null}
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

/////////////////// API call with lots of data in list form using map  'TEST'////////////////////

// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const App = () => {
//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <ScrollView>
//       <Text>App</Text>
//       {data.length
//         ? data.map(item => {
//             return (
//               <View>
//                 <Text>userId: {item.userId}</Text>
//                 <Text>ID: {item.id}</Text>
//                 <Text>Title: {item.title}</Text>
//                 <Text>Body: {item.body}</Text>
//               </View>
//             );
//           })
//         : null}
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

/////////////////// API call with lots of data in list form using FlatList ////////////////////

// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const App = () => {
//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     // console.log('Alhamdullilah');
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View>
//       <Text>App</Text>
//       {data.length ? (
//         <FlatList
//           data={data}
//           renderItem={({item}) => {
//             return (
//               <View>
//                 <Text>{item.id}</Text>
//                 <Text>{item.title}</Text>
//                 <Text>{item.body}</Text>
//               </View>
//             );
//           }}
//         />
//       ) : null}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

/////////////// Dummy Jason ///////////////////

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();
    setData(result.products); // Corrected this line
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App</Text>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
});
