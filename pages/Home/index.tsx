import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { MyContext } from '../../Context/MyContext';
import useChecklists from '../../hooks/useChecklists';

export default function Home() {
    const { checklists } = useContext(MyContext);

    const { getChecklists } = useChecklists()

    useEffect( () => {
        getChecklists();
    }, [] );

    type CardItemProps = {
      fazendeiro: string,
      fazenda: string,
      cidade: string,
    };

    const CardItem = ({fazendeiro, fazenda, cidade}: CardItemProps) => (
      <View style={styles.item}>
        <View
          testID='columnText'
          style={styles.columnText}
        >
          <Text style={styles.text}>
            <Text> {fazendeiro} </Text>
          </Text>

          <Text style={styles.text}>
            <Text> Fazenda: </Text> {fazenda}
          </Text>

          <Text style={styles.text}>
            <Text> Cidade: </Text> {cidade}
          </Text>

        </View>

        <View
          testID='columnActions'
          style={styles.columnActions}
        >
          <Text testID='info'>info</Text>
          <Text testID='edit'>edit</Text>
        </View>

      </View>
    );

  return (
    <View>
      <FlatList
        data={checklists}
        renderItem={({item}) => {
          return (
            <View>
              <CardItem
                fazenda={item.farmer.name}
                cidade={item.farmer.city}
                fazendeiro={item.from.name}
              />

            </View>
          )
        }}
        keyExtractor={item => `${item['_id']}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff290',
    padding: 20,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 17,
  },
  columnText: {
    width: '90%',
  },
  columnActions: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});