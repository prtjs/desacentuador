# Desacentuador

> Desacentuador para textos na língua portuguesa.

**OBSERVAÇÃO 1:** Isso é só para acentos usados na língua portuguesa.

**OBSERVAÇÃO 2:** O trema (que foi extindo do idioma) também é removido.

Feito para ser simples.

Feito para resolver problemas bem específicos.

## Instalação

Está registrado em [npmjs.org](https://npmjs.org), então instale-o como quiser.

Tente isso:

```bash
npm install desacentudaor
```

## Uso

É só uma função que recebe um *string* e retorna outra *string*.

Veja um exemplo bem simples:

```js
var removeAccents = require('desacentuador')

removeAccents('Olá!')

// Isso vai retornar 'Ola!'
```

Simples, não é?

## Licença

MIT &copy; Matheus Alves