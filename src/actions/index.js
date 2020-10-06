import messages from '../../data/messages';

export function setMessages() {
  return {
    type: 'SET_MESSAGES',
    payload: messages // Will be resolved by redux-promise
  };
}
