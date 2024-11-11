import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'; // Ensure this is installed if you want to use FastImage

const AdBanner = () => {
  const ads = [
    { id: 1, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Ad+1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Ad+2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Ad+3' },
    { id: 4, imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Ad+4' },
    { id: 5, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Ad+5' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.adBanner}>
      {ads.map(ad => (
        <View key={ad.id} style={styles.adItem}>
          <FastImage
            style={styles.adImage}
            source={{
              uri: ad.imageUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  adBanner: {
    marginVertical: 10,
  },
  adItem: {
    marginRight: 10,
  },
  adImage: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
});

export default AdBanner;
