import {View, Text} from 'react-native';

import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useRef, useState} from 'react';
import {CommentsResponseDto} from '../../types';
import {UserAvatar} from '../UserAvatar';
import {useSelector} from 'react-redux';
import {selectUsername} from '../../store';
import {formatDistanceToNow} from 'date-fns';
import {StyleSheet} from 'react-native';
import {theme} from '../../styles';
import {DeleteButton, EditButton} from '../buttons';
import {useAppDispatch} from '../../store/store';
import {
  requestDeleteComment,
  requestUpdateComment,
} from '../../store/ducks/comments';
import {Swipeable} from 'react-native-gesture-handler';
import {SwipeableContainer} from '../SwipeableContainer';
import {FormInput} from '../FormInput';

const Comment = ({data}: CommentProps) => {
  const {handleSubmit, control} = useForm({
    defaultValues: {
      body: data.body,
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const swipeableRef = useRef<Swipeable>(null);

  const [isEditingComment, setIsEditingComment] = useState(false);

  const username = useSelector(selectUsername);
  const dispatch = useAppDispatch();

  const rightActions = [
    <DeleteButton onDelete={() => dispatch(requestDeleteComment(data.id))} />,
    <EditButton
      onEdit={() => {
        swipeableRef.current?.close();
        setIsEditingComment(true);
      }}
    />,
  ];

  const updateComment = handleSubmit(({body}) => {
    const updatedComment = {
      ...data,
      body,
    };

    dispatch(requestUpdateComment({id: data.id, data: updatedComment}));

    setIsEditingComment(false);
  });

  return (
    <SwipeableContainer rightActions={rightActions} swipeRef={swipeableRef}>
      <View style={styles.container}>
        <View>
          <UserAvatar username={username} />
        </View>
        <View>
          <View style={styles.commentHeader}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.createdAt}>
              {formatDistanceToNow(new Date(data.created))} ago
            </Text>
          </View>

          {isEditingComment ? (
            <FormInput
              placeholder="new title"
              name="body"
              control={control}
              onSubmitEditing={updateComment}
              textInput
              autoFocus
            />
          ) : (
            <Text style={styles.commentBody}>{data.body}</Text>
          )}
        </View>
      </View>
    </SwipeableContainer>
  );
};

const schema = yup.object().shape({
  body: yup.string().min(1),
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    width: '140%',
    paddingHorizontal: 16,
    paddingVertical: 17,
    borderColor: theme.colors.border,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentBody: {
    fontSize: 17,

    color: theme.colors.text,
  },

  username: {
    fontSize: 17,
    color: theme.colors.text,
  },

  createdAt: {
    fontSize: 13,
    color: '#9C9C9C',
    marginLeft: 5,
  },
});

type CommentProps = {
  data: CommentsResponseDto;
};

export default Comment;
