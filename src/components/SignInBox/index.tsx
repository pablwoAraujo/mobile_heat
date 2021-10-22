import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../theme';
import { styles } from './styles';

import { Button } from '../Button';

export function SignInBox(){
  return (
    <View style={styles.container}>

      <Button
        title="Entrar com o github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />

    </View>
  );
}