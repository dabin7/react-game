import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {/* 반목문일때 리렌더링 될 수 있음. memo사용 */}
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            key={i}
            dispatch={dispatch}
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowData[i]}
          >
            {''}
          </Td>
        ))}
    </tr>
  );
});

export default Tr;
