import React, {useState, useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';
// elements & components
import Card from './Main_Card';

/** 
 * @param {*} props
 * @returns 설명적기
 * @역할 ~~~하는 컴포넌트
 * @필수값 검색 결과 search_list
 * @담당자 : 박용태
*/

const CardList = (props) => {
// dispatch
  const dispatch = useDispatch();
// props
  const search_list = props.search_list;

  return (
    <React.Fragment>
      <CardContainer>
        {search_list.map((result, idx) => {     
          if (idx >= 100) {
            return;
          }
          return <Card key={result.foodId} {...result}/>
            
          })}
      </CardContainer>
    </React.Fragment>
  );
}

CardList.defaultProps = {

}

const CardContainer = styled.div`
  width: 100%;
  /* padding: 0 6%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1.8vh;
`;

export default CardList;