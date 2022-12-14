import React, { useCallback, memo } from 'react';
import { CLICK_CELL } from './App';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  //   const ref = useRef([]);
  //   useEffect(() => {
  //     console.log(
  //       rowIndex === ref.current[0],
  //       cellIndex === ref.current[1],
  //       dispatch === ref.current[2],
  //       cellData === ref.current[3]
  //     );
  //     ref.current = [rowIndex, cellIndex, dispatch, cellData];
  //   }, [rowIndex, cellIndex, dispatch, cellData]); 이런식으로 무엇땜에 리렌더링 되는지 체크할 수있음 true false

  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
