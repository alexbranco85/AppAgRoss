import { DetailsModal } from '@/components/DetailsModal';
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';

const veiculos = [
  {
    "id": 1,
    "marca": "Chevrolet",
    "modelo": "Agile LT 1.4 MPFI 8V flex",
    "valor": 21500,
    "unidadesEmEstoque": 5,
    "ano": 2010,
    "categoria": "carro",
    "imagemUrl": "https://img.olx.com.br/images/67/671816000602508.jpg"
  },
  {
    "id": 2,
    "marca": "Dodge",
    "modelo": "Dakota Durango SLT 5.2 4x4 V8",
    "ano": 1998,
    "valor": 28.470,
    "unidadesEmEstoque": 2,
    "categoria": "carro",
    "imagemUrl": "https://i.ytimg.com/vi/NtCOyk1KP5g/maxresdefault.jpg"

  },
  {
    "id": 3,
    "marca": "Fiat",
    "modelo": "Idea Advent./ Adv.LOCKER 1.8 mpi Flex 5p",
    "ano": 2016,
    "valor": 50414,
    "unidadesEmEstoque": 2,
    "categoria": "carro",
    "imagemUrl": "https://http2.mlstatic.com/fiat-idea-advent-advlocker-18-mpi-flex-5p-D_NQ_NP_907181-MLB26413039072_112017-F.jpg"

  },
  {
    "id": 4,
    "marca": "Mitsubishi",
    "modelo": "Eclipse GT 3.8 V6 267cv",
    "ano": 2011,
    "valor": 103469,
    "unidadesEmEstoque": 1,
    "categoria": "carro",
    "imagemUrl": "https://http2.mlstatic.com/mitsubishi-eclipse-gt-v6-2007-2008-D_NQ_NP_922101-MLB20283158988_042015-F.jpg"

  },
  {
    "id": 5,
    "marca": "BMW",
    "modelo": "F 700 GS",
    "ano": 2018,
    "valor": 39480,
    "unidadesEmEstoque": 5,
    "categoria": "moto",
    "imagemUrl": "https://motoadventure.com.br/wp-content/uploads/2017/07/F-700-GS-Premium.jpg"

  },
  {
    "id": 6,
    "marca": "SUZUKI",
    "modelo": "TL 1000 S",
    "ano": 2002,
    "valor": 20479,
    "unidadesEmEstoque": 2,
    "categoria": "moto",
    "imagemUrl": "https://www.mrufer.ch/motorrad/aktuell_1004.jpg"

  },
  {
    "id": 7,
    "marca": "SUNDOWN",
    "modelo": "STX MOTARD 200cc",
    "ano": 2008,
    "valor": 3997,
    "unidadesEmEstoque": 10,
    "categoria": "moto",
    "imagemUrl": "https://http2.mlstatic.com/adesivos-motard-stx-200-sundown-D_NQ_NP_22260-MLB20227081377_012015-F.jpg"

  },
  {
    "id": 8,
    "marca": "DUCATI",
    "modelo": "MONSTER 900cc",
    "ano": 2001,
    "valor": 23714,
    "unidadesEmEstoque": 2,
    "categoria": "moto",
    "imagemUrl": "http://www.motorcyclespecs.co.za/Gallery/ducati%20Monster%20900%2094%20%201.jpg"

  },
  {
    "id": 9,
    "marca": "SCANIA",
    "modelo": "G-360 A 4x2 3-Eixos/A 6x2 2p (dies.)(E5)",
    "ano": 2018,
    "valor": 291334,
    "unidadesEmEstoque": 1,
    "categoria": "caminhao",
    "imagemUrl": "https://img.clasf.com.br/2017/05/20/SCANIA-G-420-A-4X2-3-EIXOSA-6X2-2P-DIESEL-20102011-20170520071146.jpg"

  },
  {
    "id": 10,
    "marca": "HYUNDAI",
    "modelo": "HD80 3.0 16V (diesel)(E5)",
    "ano": 2018,
    "valor": 101375,
    "unidadesEmEstoque": 2,
    "categoria": "caminhao",
    "imagemUrl": "https://imganuncios.mitula.net/hyundai_2013_diesel_hyundai_hd80_3_0_16v_diesel_e5_2013_diesel_branco_3220082521906758909.jpg"

  },
  {
    "id": 11,
    "marca": "VOLKSWAGEN",
    "modelo": "10-160 E Delivery 2p (diesel)(E5)",
    "ano": 2017,
    "valor": 121373,
    "unidadesEmEstoque": 2,
    "categoria": "caminhao",
    "imagemUrl": "https://www.linkmotors.com.br/usuarios/perfil_82123/anuncio_66003/anuncio_82123_1.jpg"

  },
  {
    "id": 12,
    "marca": "VOLVO",
    "modelo": "FH 400 6x2 2p (diesel)",
    "ano": 2011,
    "valor": 139707,
    "unidadesEmEstoque": 3,
    "categoria": "caminhao",
    "imagemUrl": "https://img.clasf.com.br/2016/08/13/Caminhao-volvo-fh-400-6x2-ano-2010-2010-20160813152759.jpg"

  }
]

interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  valor: number;
  unidadesEmEstoque: number;
  ano: number;
  categoria: string;
  imagemUrl: string;
}


const App = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [veiculoDetail, setVeiculoDetail] = useState<Veiculo | undefined>(undefined);

  const handleToogleModal = (item: Veiculo) => {
    if (item) {
      setOpenModal(true);
      setVeiculoDetail(item);
    } else {
      setOpenModal(false);
      setVeiculoDetail(undefined);
    }
  }

  const renderItem = ({ item }: { item: Veiculo }) => (
    <View style={styles.card}>
      {/* <Image source={{ uri: item.imagemUrl }} style={styles.image} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.marcaModelo}>{`${item.marca} ${item.modelo}`}</Text>
        <Text>{`Ano: ${item.ano}`}</Text>
        <TouchableOpacity>
          <Text onPress={() => handleToogleModal(item)} style={styles.button}>+ Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={veiculos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={openModal} animationType='fade'>
        <DetailsModal veiculoDetail={veiculoDetail} handleToogleModal={handleToogleModal} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
  button: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: '#555599',
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 150,
    color: '#fff'
  },
});

export default App;
