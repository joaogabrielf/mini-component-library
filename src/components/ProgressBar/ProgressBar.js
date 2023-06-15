/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0px",
    "--width": "370px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
    "--padding": "0px",
    "--width": "370px",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
    "--width": "370px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  value = value > 100 ? 100 : value;
  return (
    <>
      <LabelProgress for="loadinglabel">{value}%</LabelProgress>
      <ProgressBarBase
        id="loadinglabel"
        max="100"
        value={value}
        style={styles}
      ></ProgressBarBase>
    </>
  );
};

const LabelProgress = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  left: 30px;
  top: 30px;
`;

const ProgressBarBase = styled.progress`
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 150px;
  top: 30px;
  margin: auto 0;

  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--border-radius);
    padding: var(--padding);
    overflow: hidden;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.value === 100 ? "4px" : "4px 0px 0px 4px")};
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--border-radius);
    padding: var(--padding);
    overflow: hidden;
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.value === 100 ? "4px" : "4px 0px 0px 4px")};
  }
`;

export default ProgressBar;
