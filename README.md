# React Floating Labels
**By: Nickolai Vassiliev (Gilae)**

![Node.js Package](https://github.com/gilae/React-Floating-Labels/workflows/Node.js%20Package/badge.svg?branch=master)

## Preface
This library provides easy Inputs with Floating Labels.

It's maintained only by myself, however any help is appreciated.

I am aware there is already an existing library that does the same thing, but I'm hoping that this one will be more extensive.

Additionally, this also provides an auto-extending textarea.

## Setup
**NPM**
```
npm install react-floating-labels
```

or

**Yarn**
```
yarn add react-floating-labels
```

## Usage
```
import { FloatingInput } from 'react-floating-labels';

const TestComp = (props) => {
    <div>
        <FloatingInput
            type=`TYPE_HERE`
            onChange={onChangeFunction}
            label=`Label Text`
            className=`Class of container`
            inputClass=`Class of input node`
            labelClass=`Class of label node`
            value={value}>
                <ExampleChild>
        </FloatingInput>
    </div>
}
```

## Contributing

I'm aware this component is still kind of rough, feel free to fork this repository and make a pull request. I'll be sure to take a look at and respond to any issues and pull requests on this repo.