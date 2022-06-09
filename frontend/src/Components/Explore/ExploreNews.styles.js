import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-right: 10px;
`;

export const SectionHeader = styled.p`
  font-size: 23px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg4};
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: bold;
  margin-bottom: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const SectionBottom = styled.div`
  font-size: 15px;
  width: 100%;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.bg4};
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 0px;
  /* font-weight: bold; */

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const NewsSection = styled.div`
  font-size: 15px;
  width: 100%;
  color: gray;
  background-color: ${({ theme }) => theme.bg4};
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  /* font-weight: bold; */

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const NewsHeader = styled.div`
  font-size: 14px;
  padding-left: 20px;
  margin-top: 0px;
  margin-bottom: 3px;
`;

export const NewsFooter = styled.div`
  font-size: 14px;
  padding-left: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const NewsContent = styled.p`
  font-size: 15px;
  width: 100%;
  padding-left: 20px;
  /* padding-top: 12px;
  padding-bottom: 12px; */
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.text};
  line-height: 18px;
  font-weight: bold;
`;

export const NewsImage = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 15px;
`;

export const Content = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 100px);
`;

export const ImageSection = styled.div`
  flex: 0 0 auto;
  width: 80px;
  margin: 5px;
`;

export const HeaderNewsSection = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  color: #ffffffff; //
  position: relative;
  height: 290px;
`;

export const HeaderNewsImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  background-color: black;
  mask-image: ${({ theme }) => theme.imgBg};
  -webkit-mask-image: ${({ theme }) => theme.imgBg};
  /* mask-image: linear-gradient(to top, #040404, #000000, #656565);
  -webkit-mask-image: linear-gradient(to top, #040404, #000000, #656565); */
`; //background:linear-gradient(to right, #040404, #000000, #656565);

export const HeaderNewsTextTop = styled.p`
  font-size: 14px;
  position: absolute;
  left: 30px;
  bottom: 60px;
`;

export const HeaderNewsTextMiddle = styled.p`
  font-size: 18px;
  position: absolute;
  left: 30px;
  bottom: 30px;
  font-weight: bold;
`;

export const HeaderNewsTextBottom = styled.p`
  font-size: 14px;
  position: absolute;
  left: 30px;
  bottom: 10px;
`;
