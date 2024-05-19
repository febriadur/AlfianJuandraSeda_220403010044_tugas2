import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'SEPATU FUUTSAL',
        price: 200,
        photo:
          'https://tse3.mm.bing.net/th?id=OIP.plHPKD6QpOWIT8G3i1z1WQHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 2,
        name: 'SEPATU FUUTSAL',
        price: 150,
        photo:
          'https://s3.bukalapak.com/img/3896685901/w-1000/Sepatu_Futsal_Specs_Flora_2017.jpg',
      },
      {
        id: 3,
        name: 'SEPATU FUUTSAL',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/38c8e94d58894c9748b4cf7259fcbfbd',
      },
      {
        id: 4,
        name: 'SEPATU FUUTSAL',
        price: 200,
        photo:
          'https://tse3.mm.bing.net/th?id=OIP.tPuq7mYdRNDJSC6cHQRNTgHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 5,
        name: 'SEPATU FUUTSAL',
        price: 100,
        photo:
          'https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/30781/original/sepatu_futsal_specs_2.jpg',
      },
      {
        id: 6,
        name: 'SEPATU FUUTSAL',
        price: 150,
        photo:
          'https://id-test-11.slatic.net/p/5d427e886eb71891672533be99dab9e2.jpg',
      },
      {
        id: 7,
        name: 'SEPATU FUUTSAL',
        price: 150,
        photo:
          'https://s0.bukalapak.com/img/5027923102/w-1000/Sepatu_Futsal_Nike_Mercurial_FG_.jpg',
      },
      {
        id: 8,
        name: 'SEPATU FUUTSAL',
        price: 150,
        photo:
          'https://s3.bukalapak.com/img/8832567725/w-1000/sepatu_futsal_anak_adidas_terbaru.jpg',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Toko Sepatu Futsal
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'aqua',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;