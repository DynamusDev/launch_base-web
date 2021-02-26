import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Container
} from '../styles/components/content';

interface Props {
  onFocus?: any,
  children?: any
}

export function Content(props: Props) {
  return (
    <Container onFocus={props.onFocus ? props.onFocus : () => {}}>
      {props.children}
    </Container>
  )
}