import {View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
import styled from 'styled-components';

const Container = (props: ContainerProps) => {
  return (
    <Root>
      <>{props.children}</>
    </Root>
  );
};

const Root = styled(View)`
  flex: 1;
`;

interface ContainerProps extends PropsWithChildren {}

export default Container;
