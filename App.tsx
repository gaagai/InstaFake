import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Hello World )</Text>
      <AntDesign name="stepforward" size={25} />
    </View>
  );
};

export default App;
