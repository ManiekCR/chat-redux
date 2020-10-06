export const FETCH_MESSAGES = 'FETCH_MESSAGES';

const BASE_URL = 'https://wagon-chat.herokuapp.com/';


export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES, payload: promise
  };
}
