import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {Picker} from '@react-native-picker/picker';

const Report = () => {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimentacao', amount: 600},
    {key: '2', description: 'Combustivel', amount: 50},
    {key: '3', description: 'Aluguel', amount: 1000},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 500},
  ];

  const entries = [
    {key: '1', description: 'Padaria Vitoria', amount: 10},
    {key: '2', description: 'Supermarcado Pereira', amount: 200},
    {key: '3', description: 'Posto Ipiranga', amount: 50},
  ];

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <Button title="Salvar" />
      <Button title="Fechar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Report;
