import { DetailsModal } from '@/components/DetailsModal';
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';

const Info = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text>Desenvolvido por Alex Branco para AgRoss</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  marcaModelo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalhes: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 8
  },
});

export default Info;
