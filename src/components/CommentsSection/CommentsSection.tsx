import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as yup from 'yup';
import React from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {theme} from '../../styles';
import {useEffect} from 'react';
import {RootState, useAppDispatch} from '../../store';
import {
  requestAddComment,
  requestGetComments,
} from '../../store/ducks/comments';
import {useSelector} from 'react-redux';
import {
  selectComments,
  selectCommentsById,
} from '../../store/ducks/comments/selectors';
import Comment from '../Comment/Comment';
import {FormInput} from '../FormInput';
import {IconAdd, IconMessage} from '../../assets';
import {CommentsRequestDto} from '../../types';

const CommentsSection = ({prayerId}: CommentsSectionProps) => {
  const dispatch = useAppDispatch();

  const comments = useSelector((state: RootState) =>
    selectCommentsById(state, prayerId),
  );

  const {handleSubmit, control, reset} = useForm<CommentsRequestDto>({
    defaultValues: {
      body: '',
      created: new Date().toString(),
      prayerId,
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(requestGetComments());

    console.log('get comments');
  }, [dispatch]);

  const addComment = handleSubmit(data => {
    dispatch(requestAddComment(data));

    reset();
  });

  return (
    <View style={styles.container}>
      <View style={styles.comments}>
        <Text style={styles.title}>Comments</Text>
        {comments.length < 1 ? (
          <Text style={styles.noCommentsText}>No comments yet</Text>
        ) : (
          <FlatList
            renderItem={({item}) => <Comment data={item} />}
            data={comments}
          />
        )}
      </View>

      <SafeAreaView style={styles.inputContainer}>
        <FormInput
          placeholder="Add a comment..."
          name="body"
          control={control}
          onSubmitEditing={() => addComment()}
          textInput
          autoFocus
          icon={<IconMessage />}
        />
      </SafeAreaView>
    </View>
  );
};

const schema = yup.object().shape({
  body: yup.string().min(1),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  comments: {
    paddingBottom: 90,

    marginHorizontal: -16,
  },
  title: {
    fontSize: 13,
    paddingHorizontal: 16,
    color: theme.colors.primary,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  inputContainer: {
    marginTop: 'auto',
  },

  noCommentsText: {
    paddingHorizontal: 16,
    color: '#9c9c9c',
  },
});

type CommentsSectionProps = {
  prayerId: number;
};
export default CommentsSection;
