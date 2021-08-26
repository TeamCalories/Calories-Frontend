import React, {useRef} from 'react';
import {Grid, Text, Button} from '../elements';
import styled from 'styled-components';
import theme from '../shared/theme';

// history
import {history} from '../redux/configStore';

/** 
 * @역할 원하는 검색 결과가 없을 때 유저가 직접 입력하여 등록할 수 있도록 하는 추가 페이지
 * @담당자 김나영
*/

const SelfAddFood = (props) => {

  const nameInput = useRef()
  const kcalInput = useRef()
  const carboInput = useRef()
  const sugarsInput = useRef()
  const proteinInput = useRef()
  const fatInput = useRef()
  const fattyAcidInput = useRef()
  const transFattyAcidInput = useRef()
  const unFattyAcidInput = useRef()
  const cholesterolInput = useRef()
  const natriumInput = useRef()

  const addFood = () => {
    const name = nameInput.current.value;
    const kcal = kcalInput.current.value;
    const carbo = carboInput.current.value;
    const sugars = sugarsInput.current.value;
    const protein = proteinInput.current.value;
    const fat = fatInput.current.value;
    const fattyAcid = fattyAcidInput.current.value;
    const transFattyAcid = transFattyAcidInput.current.value;
    const unFattyAcid = unFattyAcidInput.current.value;
    const cholesterol = cholesterolInput.current.value;
    const natrium = natriumInput.current.value;
    
    if (!name || !kcal) {
      window.alert('필수 항목을 모두 입력해주세요!')
    } else {
      console.log({name, kcal, carbo, sugars, protein, fat, fattyAcid, transFattyAcid, unFattyAcid, cholesterol, natrium})
    }
  }

  return (
    <React.Fragment>

      {/* 닫기 버튼 */}
      <CloseBtn onClick={()=>{history.replace('/')}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24"/>
          <path d="M11.5 9.78274L17.9271 3.35566C18.4013 2.88145 19.1701 2.88145 19.6443 3.35566C20.1186 3.82986 20.1186 4.59871 19.6443 5.07291L13.2173 11.5L19.6443 17.9271C20.1186 18.4013 20.1186 19.1701 19.6443 19.6443C19.1701 20.1186 18.4013 20.1186 17.9271 19.6443L11.5 13.2173L5.07291 19.6443C4.59871 20.1186 3.82986 20.1186 3.35566 19.6443C2.88145 19.1701 2.88145 18.4013 3.35566 17.9271L9.78274 11.5L3.35566 5.07291C2.88145 4.59871 2.88145 3.82986 3.35566 3.35566C3.82986 2.88145 4.59871 2.88145 5.07291 3.35566L11.5 9.78274Z" fill="#8C8C8C"/>
        </svg>
      </CloseBtn>

      <Grid margin="0 0 0 6%" m_margin="0 0 0 6%" padding="18% 0 0 0">
        <Text size="28px" bold>직접 식단 추가</Text>
      </Grid>

      {/* body */}
      <Grid margin="8% 6%" m_margin="8% 6%" >

        {/* 음식명 */}
        <Text size="17px" margin="0 0 2% 0" m_size="15px">음식명<span style={{color:"#FD0000"}}>*</span></Text>
        <TextBox placeholder="음식명 입력" ref={nameInput}/>
        <Text size="13px" m_size="9px" lineheight="24px" m_lineheight="24px" color="#6993FF">*필수 입력 사항입니다.</Text>

        {/* 칼로리 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">칼로리<span style={{color:"#FD0000"}}>*</span></Text>
        <TextBox placeholder="칼로리 입력" ref={kcalInput}/>
        <Text size="13px" m_size="9px" lineheight="24px" m_lineheight="24px" color="#6993FF">*필수 입력 사항입니다.</Text>

        {/* 탄수화물 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">탄수화물 함량(선택)</Text>
        <TextBox placeholder="탄수화물 함량 입력" ref={carboInput}/>

        {/* 당 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">당 함량(선택)</Text>
        <TextBox placeholder="당 함량 입력" ref={sugarsInput}/>

        {/* 단백질 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">단백질 함량(선택)</Text>
        <TextBox placeholder="단백질 함량 입력" ref={proteinInput}/>

        {/* 지방 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">지방 함량(선택)</Text>
        <TextBox placeholder="지방 함량 입력" ref={fatInput}/>

        {/* 포화지방 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">포화지방 함량(선택)</Text>
        <TextBox placeholder="포화지방 함량 입력" ref={fattyAcidInput}/>

        {/* 트랜스지방 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">트랜스지방 함량(선택)</Text>
        <TextBox placeholder="트랜스지방 함량 입력" ref={transFattyAcidInput}/>

        {/* 불포화지방 */}
        <Text size="17px" margin="4% 0 2% 0" m_size="15px">불포화지방 함량(선택)</Text>
        <TextBox placeholder="불포화지방 함량 입력" ref={unFattyAcidInput}/>

        {/* 콜레스테롤 */}
        <Text size="17px" margin="6% 0 2% 0" m_size="15px">콜레스테롤 함량(선택)</Text>
        <TextBox placeholder="콜레스테롤 함량 입력" ref={cholesterolInput}/>

        {/* 나트륨 */}
        <Text size="17px" margin="6% 0 2% 0" m_size="15px">나트륨 함량(선택)</Text>
        <TextBox placeholder="나트륨 함량 입력" ref={natriumInput}/>
        
        {/* 작성하기 버튼 */}
        <Button margin="6% 0 0 0" width="90%" height="50px" bg={theme.color.light} border_radius="60px" _onClick={addFood}>
          <Text size="16px" bold cursor="pointer">작성하기</Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
}

const CloseBtn = styled.div`
  float: right;
  margin: 6% 6%;
  cursor: pointer;
`;

const TextBox = styled.input`
  width: 90%;
  padding: 3% 4%;
  border: 1px solid #DADADA;
  border-radius: 6px;
  resize: none;

  ::placeholder {
    color: ${theme.color.gray_4};
    font-size: 16px;

    @media ${theme.device.mobileM} {
      font-size: 13px;
    }
  }
`; 

export default SelfAddFood;