import React from 'react';
import styled from 'styled-components/native';

const Base = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: snow;
`;

const Block = styled.View`
  width: 100%;
  align-items: center;
  align-self: flex-end;
`;

const Text = styled.Text`
  color: teal;
  font-size: 18;
  font-weight: 600;
  font-family: arial;
  margin: 8px;
`;

const TextInput = styled.TextInput`
  width: 95%;
  color: teal;
  font-size: 24;
  font-weight: 600;
  font-family: arial;
  background-color: mintcream;
  text-align: center;
  border: 1px solid teal;
  border-radius: 4px;
`;

const Main = () => (
  <Base>
    <Block>
      <Text>Quanto você gastou?</Text>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="R$ 25.89"
      />
    </Block>
    <Block>
      <Text>E foi com o que?</Text>
      <TextInput placeholder="roupas" />
    </Block>
  </Base>
);

export default Main;
