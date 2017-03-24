# react-textarea-count

![](https://travis-ci.org/fakiolinho/react-textarea-count.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/fakiolinho/react-textarea-count/badge.svg?branch=master)](https://coveralls.io/github/fakiolinho/react-textarea-count?branch=master)

Simple textarea chars counter for React

![](https://media.giphy.com/media/3og0IQ6oGYaJDzrILS/giphy.gif)

## Installation

```bash
npm i react-textarea-count -S
```

## Usage Example

This is a dead simple plugin to count textareas length with ease. By default a textarea is rendered wrapped inside a `.textarea__wrapper` container. Inside of this resides the textarea itself and a span element with class `.textarea__count ` with the text's length:

```jsx
<Textarea />
```

and output:

```html
<div class="textarea__wrapper">
	<textarea />
	<span class="textarea__count">0</span>
</div>
```

If you want to show a limit then you have to pass a `countLimit` prop so it can become visible:

```jsx
<Textarea countLimit={10} />
```

and output:

```html
<div class="textarea__wrapper">
	<textarea />
	<span class="textarea__count">0/10</span>
</div>
```

Since `countLimit` is passed then everytime the length is bigger than that limit a `textarea__count--error` class is applied to the counter. That way you can style it at while:

```html
<div class="textarea__wrapper">
	<textarea />
	<span class="textarea__count textarea__count--error">11/10</span>
</div>
```

If you want to hide the counter in a specific case you can use prop `countShow` and set it to false:

```jsx
<Textarea countLimit={10} countShow={...somelogic here} />
```

and output:

```html
<div class="textarea__wrapper">
	<textarea />
</div>
```

## API

### Props


Property  	| 	Type		|	Default		|	  Description
:-----------------------|:-----------------------------|:--------------|:--------------------------------
`countLimit` |   `number` | `0` | Chars limit. It is optional and if it is not used then chars limit is not shown
`countShow ` | `bool` | `true` | Just in case you want to hide the counter you can set this to `false`

## License

This project is licensed under the MIT License