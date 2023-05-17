import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageStyle,
  TouchableHighlight,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../theme/color';
import styles from './styles';
import IComment from '../comment/Comment';
import {IPost} from '../../types/models';
import {useState} from 'react';

const PostFeed = (props: IPost) => {
  const {post} = props;
  const [isDescriptionExpended, setIsDescriptionExpended] = useState(false);
  const [likedState, setLikedState] = useState(false);

  const toggleDescriptionExpend = () => {
    setIsDescriptionExpended(currentVal => {
      return !currentVal;
    });
  };

  const toggleLikedHeart = () => {
    setLikedState(currentVal => {
      return !currentVal;
    });
  };

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar as ImageStyle}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo name="dots-three-vertical" size={16} style={styles.threeDots} />
      </View>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image as ImageStyle}
      />
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <TouchableHighlight onPress={toggleLikedHeart}>
            <AntDesign
              name={likedState ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={likedState ? colors.red : colors.darkGrey}
            />
          </TouchableHighlight>

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
          <Text style={styles.bold}> {post.nofLikes} others</Text>
        </Text>
        <Text style={styles.text} numberOfLines={isDescriptionExpended ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpend}>
          {isDescriptionExpended ? 'less' : 'more..'}
        </Text>
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <IComment key={comment.id} comment={comment} />
        ))}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default PostFeed;
