import React, { useState, useEffect, useRef } from 'react';

import { Header, Side, Screen, Events, Content } from '../components'

import { Container, Add, Close } from '../styles/home';

export function Home() {

  return (
    <Container>
      <Content>
        <Side />
        <Screen>
          <Header
            fileButton={false}
            backButton={false}
            nextButton={false}
            title='ocorrências'
          />
          <Events />
        </Screen>
      </Content>
    </Container>
  )
}