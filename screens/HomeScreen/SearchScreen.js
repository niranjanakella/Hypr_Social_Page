import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';

//Icon Packs
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

import {TextInput} from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [state, setState] = useState({
    searchCollapse: false,
    query: null,
  });

  const CollapseSearch = () => {};

  return (
    <SafeAreaView>
      <View style={styles.searchBox}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            margin: scale(8),
          }}>
          <Octicons name="search" size={scale(22)} color={'grey'} />
        </View>
        <TextInput
          value={state.query}
          placeholder="Search"
          onChangeText={text => {
            setState({
              ...state,
              query: text,
            });
          }}
          style={{
            flex: 0.98,
            fontSize: scale(14),
          }}></TextInput>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            margin: scale(5),
          }}>
          <Feather
            name="x"
            size={scale(23)}
            color={'grey'}
            onPress={CollapseSearch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  searchBox: {
    flexDirection: 'row',
    borderRadius: '10@s',
    elevation: 5,
    width: '340@s',
    height: '35@s',
    marginTop: '10@s',
    alignSelf: 'center',

    backgroundColor: 'white',
  },
});

export default SearchScreen;
