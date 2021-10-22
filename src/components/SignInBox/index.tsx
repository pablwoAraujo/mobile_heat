import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../theme';
import { styles } from './styles';

import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

export function SignInBox(){
  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>

      <Button
        title="Entrar com o github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />

    </View>
  );
}