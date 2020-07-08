/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { generateTag } from "./Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function StatisticsComponent() {
  console.log("Rendering Statistics Component");
  let statistics = useSelector((store) => store.statistics);

  return (
    <StatisticsContainer>
      <StatisticsTable>
        <TableHeader />
        {Object.keys(statistics)
          .sort()
          .map((id) => (
            <React.Fragment>
              <span>{generateTag(statistics[id].level)}</span>
              <span>{id}</span>
              <span>{statistics[id].correctAnswers}</span>
              <span>{statistics[id].wrongAnswers}</span>
              <span>
                {(
                  statistics[id].correctAnswers /
                  (statistics[id].correctAnswers + statistics[id].wrongAnswers)
                ).toFixed(1)}
              </span>
            </React.Fragment>
          ))}
      </StatisticsTable>
    </StatisticsContainer>
  );
}

const StatisticsContainer = (props) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 720px) {
          font-size: 0.8rem;
        }
      `}
    >
      <h2>Statistics</h2>
      {props.children}
    </div>
  );
};

const StatisticsTable = styled.div`
  display: grid;
  grid-template-columns: 48px auto 48px 48px 48px;

  row-gap: 1px;
  width: 40vw;
  media(max-width: 720px) {
    width: 95vw;
  }
`;

const TableHeader = () => {
  return (
    <React.Fragment>
      <span>Lvl</span>
      <span>Word</span>
      <span>
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <span>
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
      <span>Score</span>
    </React.Fragment>
  );
};
