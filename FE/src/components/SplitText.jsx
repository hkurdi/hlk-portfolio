import React from 'react'

export function SplitText ( {inputString} ) {

    const chars = [];
    const regex = /[s\S]/gu;

    let match;

    while((match = regex.exec(inputString)) !=null ) {
        chars.push(match[0]);
    }

    return chars;
}

export default SplitText