# <img src="public/images/Twizzle-logo.png" alt="twizzle" width="500px"/>

## About 

Twizzle is an open source React UI framework available to build web projects

![GitHub](https://img.shields.io/github/license/ahmedwab/twizzle) ![GitHub contributors](https://img.shields.io/github/contributors/ahmedwab/twizzle) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ahmedwab/twizzle) ![example workflow](https://github.com/ahmedwab/twizzle/actions/workflows/node.js.yml/badge.svg) 

## Documentation
[Documentation](https://twizzlelibrary.com)

## Installation


Twizzle has numerous components that can all be installed using the following commands

```bash
  npm install @twizzle-library/twizzle-library
  or
  yarn add npm i @twizzle-library/twizzle-library
```

To install a local repo verison of the project you can always clone the repo:

#### Local Installation
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

## Usage

An example of how you would use a Twizzle component would be as follows:

```jsx
  import {Button} from '@twizzle-library/twizzle-library';

  const component = () => {
    return (
      <Button label="Hello World"/>
    )
  }
'
```

## Contributing 
##### 1. Fork the project
If you want to make a contribution to this repo, you will need to fork this repo and creare your own local version.

##### 2. Get the project up running

Once you have the project installed on your device, you can go ahead and install dependencies

```sh
npm install
or
yarn add
```
After that, you will want to get storybook up and running 

```sh
npm run storybook
or 
yarn storybook
```

Now you can visit [http://localhost:6006](http://localhost:6006/) and find storybook running

##### 3. Make your change

After you're finish with making your change, push everything to your forked repo.

On that note, make sure all the tests are passing.

```sh
npm run test
or
yarn test
```

You can then make a pull request with a description that explains your changes against the Twizzle master branch and wait for a review.

Good Luck!



## License ![GitHub](https://img.shields.io/github/license/ahmedwab/twizzle)

Twizzle UI is available under the MIT License. 

