import React from 'react';
import { useCallback } from 'react';
import { CLICK_CELL, CHANGE_TURN } from './App';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: CHANGE_TURN });
  }, []);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
