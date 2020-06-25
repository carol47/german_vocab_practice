import React from 'react';

export function generateTag(tagName){

    switch(tagName){
        case "A1":
            return(<span style={{ width: "100%", border: "1px solid black", borderRadius: "3px"}}>&nbsp;A1&nbsp;</span>);
        case "A2":
            return(<span style={{border: "1px solid black", borderRadius: "3px"}}>&nbsp;A2&nbsp;</span>);
        case "B1":
            return(<span style={{border: "1px solid black", borderRadius: "3px"}}>&nbsp;B1&nbsp;</span>);
        case "subst":
            return(<span style={{border: "1px solid black", borderRadius: "3px"}}>&nbsp;Noun&nbsp;</span>);
        case "verb":
            return(<span style={{border: "1px solid black", borderRadius: "3px"}}>&nbsp;Verb&nbsp;</span>);
        case "other":
            return(<span style={{border: "1px solid black", borderRadius: "3px"}}>&nbsp;Other&nbsp;</span>);
        default:
            return undefined;
    }
}

export function generateBlackTag(str){
return(<span style={{border: "1px solid black", borderRadius: "3px", color: "white", backgroundColor: "black"}}>&nbsp;{str}&nbsp;</span>);
}