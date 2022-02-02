import styled from "styled-components";

const ConfirmationContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 0.75em;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const PreviewImage = styled.img`
  width: 100%; 
  height: auto;
  min-height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 100%;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 47%;
    margin-left: 3%;
  }
`;

export { ConfirmationContent, ImageContainer, PreviewImage, TextContainer };
