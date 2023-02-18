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

    type ItemProps = {title: string};

    const Item = ({title}: ItemProps) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

  return (
    <View>
      <FlatList
        data={checklists}
        renderItem={({item}) => {
          return (
            <Item title={item.from.name} />
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});