import React from "react";
import styled from "styled-components";
import borderImage from "./assets/button.png";
import { createGlobalStyle } from "styled-components";
import Chicago_12 from "./assets/ChicagoFLF.ttf";

const modal = ({
  openModal,
  setOpenModal,
  customText,
  customIcone,
}) => {
  return (
    <>
      <GlobalStyle />

      {openModal ? (
        <StyledBackground>
          <StyledModalWrapper>
            <StyledModalBorder>
              <StyledModalInnerBorder>
                <StyledAlertContent>
                  <StyledTextSection>
                    <StyledIcone>{customIcone}</StyledIcone>
                    <StyledText className="alert-text">{customText}</StyledText>
                  </StyledTextSection>

                  <StyledButtonSection>
                    <StyledBtn
                      aria-label="Close modal"
                      onClick={() => setOpenModal((toggle) => !toggle)}
                    >
                      Cancel
                    </StyledBtn>
                    <StyledBtn
                      onClick={() => setOpenModal((toggle) => !toggle)}
                      className="btn-w"
                    >
                      OK
                    </StyledBtn>
                  </StyledButtonSection>
                </StyledAlertContent>
              </StyledModalInnerBorder>
            </StyledModalBorder>
          </StyledModalWrapper>
        </StyledBackground>
      ) : null}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Chicago_12;
    src: url(${Chicago_12});
  }
    `;

const StyledBackground = styled.div`
  background: rgba(189, 189, 189, 0.3);
  position: fixed;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledModalWrapper = styled.div`
  min-width: 30rem;
  max-width: 31rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 21;
  border-radius: 10px;
  padding: 10px 20px;
`;
const StyledModalBorder = styled.div`
  width: 30rem;
  border: 2px solid;
  padding: 3px;
`;
const StyledModalInnerBorder = styled.div`
  border-color: currentcolor;
  border-style: solid;
  border-width: 3.5px 5px;
`;
const StyledAlertContent = styled.div`
  paddingleft: 30px;
  paddingright: 20px;
  padding: 10px;
`;
const StyledBtn = styled.button`
    font-family: Chicago_12;
    background: #fff;
    border-image: url(${borderImage}) 30 stretch;
    border-style: solid;
    border-width: 5.5px;
    color: #000;
    cursor: pointer;
    font-size: 18px;
    min-height: 20px;
    min-width: 59px;
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
    margin-left: 6px;
    &:active {
      background: #000;
      color: #fff;
    }
  }

  &.btn-w {
    width: 95px;
`;

const StyledText = styled.p`
  padding-left: 10px;
  font-family: Chicago_12;
  font-size: 1.2em;
  margin-top: 10px;
  font-weight: normal;
`;
const StyledIcone = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1.5px solid black;
  padding: 14px;
`;
const StyledTextSection = styled.div`
  font-family: Chicago_12;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1em;
  margin-left: 6px;
  margin-top: 6px;
`;
const StyledButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: Chicago_12;
  font-size: 1em;
  margin-left: 6px;
  margin-top: 6px;
`;

export default modal;
