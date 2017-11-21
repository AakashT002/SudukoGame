import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {
  DataTable,
  TableBody,
  TableRow,
  TableColumn,
  Button,
} from 'react-md';
import './TableBoard.css';

const Board = ({ index, text, handleChanget1, handleStart, handleClick }) => {

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
    return (
      <div className="TableBoard">
  <DataTable plain>
    <TableBody>
    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' 
          id="t1"
          value={text.t1}
          onChange={(e) => handleChanget1(index, 't1', e)}
          disabled></input></TableColumn>
          
        <TableColumn><input type="text"  className='TableColumn__text' 
          id="t2"
          value={text.t2} 
          onChange={(e) => handleChanget1(index, 't2', e)}
          ></input></TableColumn>
        
          <TableColumn><input type="text" className='TableColumn__text' value={text.t3}
          id="t3"
          onChange={(e) => handleChanget1(index, 't3', e)}
          ></input></TableColumn>
    </TableRow>

    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' id="t4" value={text.t4}
          onChange={(e) => handleChanget1(index, 't4', e)}></input></TableColumn>

          <TableColumn><input type="text"  className='TableColumn__text' id="t5" value={text.t5}
          onChange={(e) => handleChanget1(index, 't5', e)}></input></TableColumn>

          <TableColumn><input type="text" className='TableColumn__text' id="t6" value={text.t6}
          onChange={(e) => handleChanget1(index, 't6', e)} disabled>
          </input></TableColumn>
    </TableRow>

    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' id="t7" value={text.t7}
          onChange={(e) => handleChanget1(index, 't7', e)}></input></TableColumn>

          <TableColumn><input type="text"  className='TableColumn__text' id="t8" value={text.t8} 
          onChange={(e) => handleChanget1(index, 't8', e)} disabled></input></TableColumn>

          <TableColumn><input type="text" className='TableColumn__text' id="t9" value={text.t9} 
          onChange={(e) => handleChanget1(index, 't9', e)}></input></TableColumn>
    </TableRow>

        <TableRow>
        <TableColumn>
        <Button flat primary swapTheming onClick={()=> handleStart(index)}>Start</Button></TableColumn>
        <TableColumn><Button flat primary swapTheming 
        id="click" onClick={(e) => handleClick(e,index)}>
                      Check</Button></TableColumn>
       </TableRow>               
    </TableBody>
  </DataTable>
      </div>
    );
  }

export default Board;