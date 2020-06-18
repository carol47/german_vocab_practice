/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import React from 'react';

export default function AnswerButton(props) {

    return (
        <button {...props} css={css`
            width: 100%;
            height: 100%;
            background-color: white;
            border: solid 1px black;
            border-radius: 5px
        `} >{props.children}</button>
    );
}