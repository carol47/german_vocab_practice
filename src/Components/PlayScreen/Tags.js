import React from "react";
import styled from "@emotion/styled";

export function generateTag(tagName) {
  const Tag = styled.span`
    border: 1px solid black;
    border-radius: 3px;
  `;

  switch (tagName) {
    case "A1":
      return <Tag>&nbsp;A1&nbsp;</Tag>;
    case "A2":
      return <Tag>&nbsp;A2&nbsp;</Tag>;
    case "B1":
      return <Tag>&nbsp;B1&nbsp;</Tag>;
    case "subst":
      return <Tag>&nbsp;Noun&nbsp;</Tag>;
    case "verb":
      return <Tag>&nbsp;Verb&nbsp;</Tag>;
    case "other":
      return <Tag>&nbsp;Other&nbsp;</Tag>;
    default:
      return undefined;
  }
}

export function generateBlackTag(tagName) {
  const BlackTag = styled.span`
    height: 100%;
    border: 1px solid black;
    border-radius: 3px;
    color: white;
    background-color: black;
  `;

  switch (tagName) {
    case "A1":
      return <BlackTag>&nbsp;A1&nbsp;</BlackTag>;
    case "A2":
      return <BlackTag>&nbsp;A2&nbsp;</BlackTag>;
    case "B1":
      return <BlackTag>&nbsp;B1&nbsp;</BlackTag>;
    case "subst":
      return <BlackTag>&nbsp;Noun&nbsp;</BlackTag>;
    case "verb":
      return <BlackTag>&nbsp;Verb&nbsp;</BlackTag>;
    case "other":
      return <BlackTag>&nbsp;Other&nbsp;</BlackTag>;
    default:
      return undefined;
  }
}
