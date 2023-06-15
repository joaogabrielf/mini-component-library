import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    borderBottom: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
    "--padding": "4px",
  },
  large: {
    borderBottom: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
    "--padding": "8px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderBottom + "px",
          "--fontSize": styles.fontSize / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 5px;
  width: var(--size);
  height: var(--size);
`;

const InputWrapper = styled.div`
  position: relative;
  left: 80px;
  width: var(--width);
  height: var(--height);
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  display: inline-block;
  max-width: 90%;
  color: ${COLORS.gray700};

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const PresentationalInput = styled.input`
  border: none;
  font-size: var(--fontSize);
  font-weight: 700;
  padding: var(--padding);
  color: inherit;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 41px;

  margin: auto;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${InputWrapper}:hover {
    font-weight: 700;
  }
`;

const Label = styled.label`
  color: ${COLORS.black};
  font-size: ${20 / 16}rem;
  font-weight: 500;
  position: relative;
  display: inline-block;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  margin: auto;
`;

export default IconInput;
