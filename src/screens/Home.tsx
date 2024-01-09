import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PRODUCTS_LIST } from '../data/constants';
import ProductItem from '../components/ProductItem';
import React from 'react'
import { RootStackParamList } from '../App'
import Seperator from '../components/Seperator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={PRODUCTS_LIST}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', { product: item })
            }} >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});