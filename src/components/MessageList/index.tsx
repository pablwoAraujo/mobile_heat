import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';

export function MessageList(){

  const message = {
    id: '1856156156156156',
    text: 'Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥',
    user: {
      name: 'pablwo',
      login: 'pablwoAraujo',
      avatar_url: 'https://github.com/pablwoAraujo.png',
    },
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />
     <Message data={message} />

    </ScrollView>
  );
}