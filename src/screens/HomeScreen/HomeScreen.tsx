import {FlatList} from 'react-native';
import PostFeed from '../../components/postFeed';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostFeed post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
