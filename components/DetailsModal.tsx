import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

export function DetailsModal({ veiculoDetail, handleToogleModal }: { veiculoDetail: Veiculo | undefined, handleToogleModal: (item?: any) => void }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handleToogleModal(null)}>
          <Text style={styles.close}>[X] Fechar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Detalhes do Veículo:</Text>
        <Text style={styles.title}>{`${veiculoDetail?.marca} ${veiculoDetail?.modelo}`}</Text>
        <Text>{`Ano: ${veiculoDetail?.ano}`}</Text>
        <Text>{`Categoria: ${veiculoDetail?.categoria}`}</Text>
        <Text>{`Valor: R$ ${veiculoDetail?.valor}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 24,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  close: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: '#555599',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: '#fff',
  }
});