const name = 'Sergio';
const text = `Mi nombre es ${name}`;
console.log(text);

const names = ['Sergio', 'Claudia'];

const messages = `
El nombre es :
<ul>
  ${
    names.map(name => `<li>${name}</li>`).join('')
  }
<ul>
`;

console.log(messages);