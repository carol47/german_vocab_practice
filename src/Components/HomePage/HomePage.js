/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from 'react';
import booksJpg from '../../assets/books.jpg';

export default function HomePage() {

    return (
        <div css={css`

            margin-top: 64px;
            width: 100vw;
            height: 100%;
            display: flex;
            flex-flow: row wrap;

            justify-content: space-evenly;

            @media (max-width: 480px) {
                margin-top: 32px;           
            }

        `}>
            <div css={css`
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: column;
                
                
                @media (max-width: 480px) {
                    width: 80%;
                }
                
                
                * {
                margin: 10px;
                }
            `}>
                <div css={css`
                    font-family: "Georgia, serif";
                    font-size: 250%;
                    align-self: center;

                    @media (max-width: 480px) {
                        font-size: 150%;   
                    }
                `}>A language-learning experience</div>
                <p>Welcome. German Vocabulary Trainer is an indie tool to help memorize german vocabulary. It's on constant development, so remember to check it out regularly. To start, click on the 'Begin' link on the navigation bar. </p>
                <p>Hint: you can use keys 1-4 to answer the questions.</p>
            </div>
            <div css={css`
                width: 25%;
                margin-top: 32px;

                @media (max-width: 480px) {
                    display: none;
                }
            `}>
                <img src={booksJpg} alt="A pile of books" css={css`max-width: 256px;`}/>
            </div>
        </div>
    );
}