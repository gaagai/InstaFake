import {Text, View, StyleSheet, Image, ImageStyle} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from './src/theme/color';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2023/04/27/03/59/shadbay-7953707_960_720.jpg',
          }}
          style={styles.userAvatar as ImageStyle}
        />
        <Text style={styles.userName}>Just me</Text>
        <Entypo name="dots-three-vertical" size={16} style={styles.threeDots} />
      </View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2023/04/27/03/59/shadbay-7953707_960_720.jpg',
        }}
        style={styles.image as ImageStyle}
      />
      <View style={styles.iconsContainer}>
        <AntDesign
          name="heart"
          size={24}
          style={styles.icon}
          color={colors.darkGrey}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.darkGrey}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.darkGrey}
        />
        <Feather
          name="bookmark"
          size={24}
          style={{marginLeft: 'auto'}}
          color={colors.darkGrey}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconsContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default App;
