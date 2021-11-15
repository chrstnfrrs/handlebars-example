### Getting Started

`yarn install`: install dependencies

`yarn gen`: use templates to generate files

### Handlebars

`hb.compile()` takes a string template. A function is returned, `T`.

`T` can then be called with an object which will be used to fill in the template. The function will return a string.