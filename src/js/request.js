const endpoint = 'https://conexao-pe-back-end.vercel.app';

export function authentication(data) {
  return fetch(`${endpoint}/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
}