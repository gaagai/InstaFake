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
            uri: 'https://cdn.pixabay.com/photo/2017/01/31/20/53/robot-2027195_640.png',
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
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <AntDesign
            name="hearto"
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

        <Text style={styles.text}>
          Liked by
          <Text style={styles.bold}> ljshv </Text>
          and
          <Text style={styles.bold}> 77 others</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>fddhjy2</Text> Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Officiis magni molestias eveniet esse
          ratione dolorem. Voluptatum magnam ipsum alias nesciunt quis numquam
          iste aliquid? Quia obcaecati ducimus architecto non tempore.
        </Text>
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>sabrahams33</Text> Lorem ipsum dolor, sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name="hearto"
            size={14}
            style={styles.icon}
            color={colors.darkGrey}
          />
        </View>
        <Text>22 July, 2023</Text>
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
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  text: {
    color: colors.darkGrey,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  comment: {
    color: colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
  },
});

export default App;
