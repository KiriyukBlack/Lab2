import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from './data.json';

//Method 1
  // const HomeScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.header}>Todo List (For Loop)</Text>
  //       {(() => {
  //         const items = [];
  //         for (let i = 0; i < data.length; i++) {
  //           const item = data[i];
  //           const date = new Date(item.createdAt);
  //           const formattedDate = date.toLocaleDateString();
  //           const formattedTime = date.toLocaleTimeString();
  //           items.push(
  //           <View style={styles.itemContainer}>
  //             <Text style={styles.title}>{item.title}</Text> 
  //             <Text style={styles.description}>{item.description}</Text>
  //             <Text style={styles.meta}>By: {item.user} - Comments: {item.commentCount}</Text>
  //             <Text style={styles.meta}>{formattedDate} {formattedTime}</Text>
  //           </View>);
  //         }
  //         return items;
  //       })()}
  //     </View>
  //   );
  // };

  //Method 2

  // const HomeScreen = () => {
  //   const todoItems = [];
  //   for (let i = 0; i < data.length; i++) {
  //     const item = data[i];
  //     const date = new Date(item.createdAt);
  //     const formattedDate = date.toLocaleDateString();
  //     const formattedTime = date.toLocaleTimeString();

  //     todoItems.push(
  //       <View style={styles.itemContainer}>
  //         <Text style={styles.title}>{item.title}</Text> 
  //         <Text style={styles.description}>{item.description}</Text>
  //         <Text style={styles.meta}>By: {item.user} - Comments: {item.commentCount}</Text>
  //         <Text style={styles.meta}>{formattedDate} {formattedTime}</Text>
  //       </View>);
  //   }
  
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.header}>Todo List (For Loop)</Text>
  //       {todoItems}
  //     </View>
  //   );
  // };
  
  
  //Method 3

  // const HomeScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.header}>Todo List (Map)</Text>
  //       {data.map((item) => {
  //           const date = new Date(item.createdAt);
  //           const formattedDate = date.toLocaleDateString();
  //           const formattedTime = date.toLocaleTimeString();
  //           return(
  //             <View key={item._id} style={styles.itemContainer}>
  //               <Text style={styles.title}>{item.title}</Text> 
  //               <Text style={styles.description}>{item.description}</Text>
  //               <Text style={styles.meta}>By: {item.user} - Comments: {item.commentCount}</Text>
  //               <Text style={styles.meta}>{formattedDate} {formattedTime}</Text>
  //             </View>);
  //         }
  //       )}
  //     </View>
  //   );
  // };

  //Method 4

  const HomeScreen = () => {
    const renderItem = ({item}) => {
    const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
      return(
        <View key={item._id} style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text> 
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.meta}>By: {item.user} - Comments: {item.commentCount}</Text>
          <Text style={styles.meta}>{formattedDate} {formattedTime}</Text>
        </View>);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Todo List (Map)</Text>
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id} />
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
    },
    itemContainer: {
      padding: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      marginVertical: 5,
    },
    meta: {
      fontSize: 12,
      color: '#666',
    },
  });
  

   export default HomeScreen;
