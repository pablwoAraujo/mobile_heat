import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { Button } from '../Button';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SendMessageForm(){
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        value={message}
        style={styles.input}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />

      <Button 
        title='Enviar mensagem'
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        onPress={()=>{return setSendingMessage(!sendingMessage)}}
      />
    </View>
  );
}