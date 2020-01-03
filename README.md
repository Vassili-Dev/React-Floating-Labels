# React Floating Labels
**By: Nickolai Vassiliev (Gilae)**


### Preface
This library provides easy Inputs with Floating Labels.

It's maintained only by myself, however any help is appreciated.

I am aware there is already an existing library that does the same thing, but I'm hoping that this one will be more extensive.

Additionally, this also provides an auto-extending textarea.

### Usage
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
