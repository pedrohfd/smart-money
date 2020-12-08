import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Main = ({navigation}) => {
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
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
