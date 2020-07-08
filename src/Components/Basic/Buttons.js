/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const BasicButton = styled.button`
  min-width: 100px;
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
`;

const PrimaryButton = styled(BasicButton)`
  background-color: black;
  color: white;
`;

export { PrimaryButton };
