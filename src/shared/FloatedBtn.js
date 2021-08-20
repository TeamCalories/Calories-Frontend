import React from 'react';
import styled from 'styled-components';

// elements & components
import { Text } from '../elements';

// modules

/** 
 * @param {*} props
 * @returns 플롯버튼
 * @역할 pc 버전에서 우측 하단에 띄울 피드백 버튼
 * @담당자 : 박용태
*/

const FloatedBtn = (props) => {

  return (
    <React.Fragment>

      {/* 플롯버튼 */}
      <ButtonContainer>
        <FloatedBody>
          <Text size="13px" lineheight="20px" bold color="#737373" padding="0" margin="0">더 나은 서비스를 위하여</Text>
          <Text size="20px" lineheight="34px" bold color="#2A2A2A" padding="0" margin="0">피드백을 해주세요!</Text>
        </FloatedBody>
        <FloatCircle>
          <svg width="50" height="58" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6621 57.8696C22.1022 57.8696 14.2632 56.0185 8.40517 51.0122C0.928658 44.6233 -0.94327 33.9707 0.402535 24.6511C1.87025 14.4958 6.83481 5.75854 16.8538 2.13979C21.1254 0.596684 25.7162 0 30.2428 0C33.1482 0.00977408 36.0469 0.278176 38.9047 0.802029C41.8851 1.33671 44.4024 2.16012 46.4566 3.27226C48.5109 4.38441 49.537 5.7623 49.5348 7.40592C49.5348 8.04754 49.167 9.03185 48.4312 10.3589C47.5041 12.0256 46.3203 14.451 44.4852 15.2786C42.3166 16.2571 39.4132 14.0499 37.336 13.365C35.7094 12.8303 33.6568 12.563 31.178 12.563C23.9597 12.563 19.0754 17.8194 17.7777 24.6271C16.7479 30.0359 17.436 36.7168 21.0227 41.1135C23.047 43.5934 26.0145 44.92 29.1825 45.1237C33.8343 45.4268 38.2503 43.8966 42.6374 42.5668C44.4018 42.0311 45.4557 42.4465 46.6299 43.8035C47.5641 44.8841 48.3639 46.074 49.0119 47.347C49.6696 48.6302 49.9989 49.6322 50 50.3529C50 51.8554 49.1477 53.09 47.4431 54.0567C45.7386 55.0235 43.6864 55.7928 41.2868 56.3649C39.0121 56.9169 36.7021 57.3119 34.3733 57.5471C32.1639 57.7621 30.5936 57.8696 29.6621 57.8696Z" fill="#F19F13"/>
            <path d="M27.3504 27.8062C27.5444 27.6118 27.6986 27.3813 27.8043 27.1277C27.9104 26.8737 27.965 26.601 27.9647 26.3257C27.9647 25.7713 27.745 25.2395 27.3536 24.8468C27.1604 24.6526 26.931 24.4983 26.6783 24.3928C26.424 24.2873 26.1515 24.2328 25.8762 24.2324C25.6009 24.232 25.3282 24.2865 25.0742 24.3928C24.8209 24.4974 24.5908 24.6511 24.3973 24.8451C24.0059 25.2378 23.7861 25.7697 23.7861 26.3241C23.7867 26.5994 23.8412 26.8718 23.9465 27.1262C24.0512 27.3799 24.2049 27.6105 24.3989 27.8047C24.5924 27.9987 24.8225 28.1524 25.0758 28.257C25.3298 28.3633 25.6025 28.4178 25.8778 28.4174C26.1532 28.4178 26.4258 28.3633 26.6798 28.257C26.9326 28.1515 27.1621 27.9972 27.3552 27.803L27.3504 27.8062Z" fill="#F19F13"/>
            <path d="M37.78 27.8059C37.5873 28.0003 37.3577 28.1542 37.1047 28.2583C36.8506 28.3646 36.578 28.4191 36.3026 28.4187C36.0273 28.4194 35.7545 28.3648 35.5006 28.2583C35.2475 28.1526 35.0176 27.9984 34.8237 27.8044C34.6297 27.6102 34.476 27.3796 34.3713 27.1258C34.2655 26.8717 34.2109 26.5991 34.2109 26.3238C34.2109 25.7694 34.4307 25.2375 34.8221 24.8448C35.016 24.6508 35.2459 24.4966 35.499 24.3909C35.7531 24.285 36.0257 24.2305 36.301 24.2305C36.5764 24.2301 36.849 24.2846 37.1031 24.3909C37.3561 24.495 37.5857 24.6489 37.7784 24.8433C38.1698 25.236 38.3895 25.7677 38.3895 26.3222C38.3898 26.5975 38.3352 26.8701 38.2291 27.1242C38.1234 27.3778 37.9692 27.6083 37.7752 27.8027L37.78 27.8059Z" fill="#F19F13"/>
            <path d="M27.5887 32.0894C27.9062 32.2772 28.1367 32.5827 28.2303 32.9395C28.5928 34.1554 29.8889 34.6912 31.0566 34.6912C32.2244 34.6912 33.5205 34.1538 33.883 32.9395C33.9812 32.5899 34.2112 32.2921 34.5246 32.1086C34.8387 31.9259 35.2123 31.8745 35.564 31.9659C35.9166 32.0553 36.2198 32.28 36.4078 32.5914C36.5955 32.904 36.6531 33.2779 36.5682 33.6325C35.848 36.0691 33.5317 37.4822 31.0502 37.4822C28.6618 37.4822 26.1402 36.0883 25.5307 33.6325C25.4393 33.2751 25.4936 32.896 25.6814 32.5786C25.7748 32.4211 25.898 32.2833 26.044 32.1728C26.1878 32.0641 26.3511 31.984 26.5252 31.937C26.7027 31.8913 26.8876 31.8816 27.069 31.9081C27.2505 31.9335 27.425 31.9952 27.5822 32.0894H27.5887Z" fill="#F19F13"/>
            <path d="M38.4576 35.8271C38.4576 35.8271 34.5726 34.3128 35.3538 30.8545" stroke="#F19F13" strokeWidth="2.56649" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
        </FloatCircle>
      </ButtonContainer>

      {/* 피드백 모달 */}

    </React.Fragment>
  );
}

FloatedBtn.defaultProps = {

}

const ButtonContainer = styled.div`
  position: fixed;
  right: 6%;
  bottom: 30px;
  width: 320px;
  height: 90px;

  @media only screen and (max-width: 1750px) {
    right: 5%;
  }
  @media only screen and (max-width: 1650px) {
    right: 3%;
  }
  @media only screen and (max-width: 1580px) {
    right: 5%;
  } 
  @media only screen and (max-width: 1450px) {
    right: 3%;
  }
  @media only screen and (max-width: 1240px) {
    right: 2%;
  } 
  @media only screen and (max-width: 1100px) {
    right: 0%;
  } 
  @media only screen and (max-width: 1025px) {
    display: none;
  } 
`;

const FloatedBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 56px;
  background: #FFFFFF;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;

  @media only screen and (max-width: 1580px) {
    display: none;
  } 
`;

const FloatCircle = styled.div`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 98px;
  height: 98px;
  border: none;
  border-radius: 50%;
  background: #FFFFFF;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  @media only screen and (max-width: 1100px) {
    width: 8.9vw;
    height: 8.9vw;
  } 
`;


export default FloatedBtn;