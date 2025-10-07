import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const FOTO = 'https://photos.app.goo.gl/A12kp87nxiYUdHZV8';

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