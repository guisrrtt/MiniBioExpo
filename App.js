import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const FOTO = 'https://scontent.frec3-1.fna.fbcdn.net/v/t39.30808-6/484899712_3024844144350191_5959979759299013874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGKKrqF9rXPOt0p_HihmDEtAvp975Hp7R0C-n3vkentHffYvB9Eyz_EmpZ598p5QTD8AJZ44j87fnlkMoWwqahf&_nc_ohc=7hTGRlkBPp4Q7kNvwEtF0r2&_nc_oc=AdnNDefPPfAJyoyyZWRuTNSrUzi_RAzSKZ0gNW28gGBIhdjD3xvuat6EvA27V0X2Yuxsm_z8fHql6c2TCagh5Yp3&_nc_zt=23&_nc_ht=scontent.frec3-1.fna&_nc_gid=Kg_2EmwqZzovXoaUarF3Dw&oh=00_AfchEtk10Qy-YzJzkCtPPCdTM3jLODaUhMk5y9-VD76N4g&oe=68EA4E44';

const NOME = 'Guilherme Serretti';
const MINI_BIO = 'Sou um estudante dedicado à tecnologia, cursando Ciência da Computação. Busco sempre aprender novas habilidades e aplicá-las em projetos desafiadores para crescer profissionalmente.';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.name}>{NOME}</Text>

        <Image
          style={styles.profileImage}
          source={{ uri: FOTO }}
        />

        <Text style={styles.bioTitle}>Mini Biografia</Text>
        <Text style={styles.bioText}>{MINI_BIO}</Text>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.1,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#007bff',
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
});