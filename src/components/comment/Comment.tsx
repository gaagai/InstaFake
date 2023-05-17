import {Text, TouchableHighlight, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/color';
import styles from './styles';
import {IComment} from '../../types/models';
import {useState} from 'react';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  const [likedState, setLikedState] = useState(false);

  const toggleLikedHeart = () => {
    setLikedState(currentVal => {
      return !currentVal;
    });
  };

  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>
        {comment.comment}
      </Text>
      <TouchableHighlight onPress={toggleLikedHeart}>
        <TouchableHighlight onPress={toggleLikedHeart}>
          <AntDesign
            name={likedState ? 'heart' : 'hearto'}
            size={17}
            style={styles.icon}
            color={likedState ? colors.red : colors.darkGrey}
          />
        </TouchableHighlight>
      </TouchableHighlight>
    </View>
  );
};

export default Comment;
