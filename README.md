# Desacentuador

> Desacentuador para língua portuguesa.

Feito para ser minimalista.

**OBS. 1:** Funciona apenas para acentos da língua portuguesa.

**OBS. 2:** O trema (¨) que foi extindo no [AO90 (Base XIV)](http://www.priberam.pt/docs/AcOrtog90.pdf) é removido.

## Instalação

O pacote está registrado como [`desacentuador`](https://www.npmjs.com/package/desacentuador).

Algumas formas de instalação:

```bash
# Com `npm`
$ npm install desacentuador

# Com `yarn`
$ yarn add desacentuador
```

## Uso

Somente uma função que recebe uma *string* e retorna outra *string*.

Exemplo de uso:

```js
var removeAccents = require('desacentuador')

removeAccents('Olá!')
//=> 'Ola!'
```

## Licença

MIT &copy; Matheus Alves
