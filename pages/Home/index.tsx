import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyContext } from '../../Context/MyContext';
import useChecklists from '../../hooks/useChecklists';

export default function Home() {
    const { checklists } = useContext(MyContext);

    const { getChecklists } = useChecklists()

    useEffect( () => {
        getChecklists();
    }, [] );

  return (
    <View>
      <Text>{JSON.stringify(checklists)}</Text>
    </View>
  );
}