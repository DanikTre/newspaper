import styled from "styled-components";
import PageImg from "./PageImg";

const PageButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  border: 0px;
  background: none;
`;

const PageImgWrapper = styled.div`
  cursor: pointer;
`;

const SavedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 12px 22px;

  width: 39px;
  height: 12px;

  background: #cbced8;
  opacity: ${({ state }) => (state ? "0.4" : "0")};
  border-radius: 3px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.2px;

  color: #3a4159;
`;

const SaveButton = ({ saveState, handleSave }) => {
  return (
    <PageButtonWrapper>
      <PageImgWrapper onClick={handleSave}>
        <PageImg state={saveState} />
      </PageImgWrapper>
      <SavedIcon state={saveState}>Saved</SavedIcon>
    </PageButtonWrapper>
  );
};
export default SaveButton;
