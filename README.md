# <img src="images/Twizzle-logo.png" alt="twizzle" width="500px"/>


## About 

Twizzle is an open source React UI framework available to build web projects

## Installation

To install a local repo verison of the project you can clone the repo:

```bash
  git clone https://github.com/ahmedwab/Twizzle
```

Install dependencies

```bash
  npm install
  or
  yarn
```

## Theming

Twizzle UI is available with a theme context with a preset list of colors as follows:

```bash
  
  primary: {
    backgroundColor: '#1E90FF',
    color: 'black'
  },
  loader: {
    color: '#1E90FF'
  },
  variants: {
    success: { color: '#339900' },
    info: { color: '#99CC33' },
    warning: { color: '#FFCC00' },
    danger: { color: '#CC3300' }
  }

}
```

To set your own colors, you can invoke the theme context in the index.js/tsx or App.js/tsx of your project.

## Run storybook

```bash
  npm run storybook
  or
  yarn storybook
```

## License 

Twizzle UI is available under the MIT License.

