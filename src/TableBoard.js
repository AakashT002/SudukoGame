import React, { Component } from 'react';
import { Button } from 'react-md';
import {
  DataTable,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';
import './TableBoard.css';

 var check1,check6,check8;
class TableBoard extends Component {

constructor(props) {
    super(props);
    this.state = {
          t1:'',
          t2:'',
          t3:'',
          t4:'',
          t5:'',
          t6:'',
          t7:'',
          index:0,
      }; 
  }

handleChanget1(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t1:e.target.value
    })
}


handleChanget2(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t2:e.target.value
    })
}

handleChanget3(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t3:e.target.value
    })
}

handleChanget4(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t4:e.target.value
    })
}

handleChanget5(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t5:e.target.value
    })
}

handleChanget6(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t6:e.target.value
    })
}

handleChanget7(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t7:e.target.value
    })
}

handleChanget8(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t8:e.target.value
    })
}

handleChanget9(e){
    //debugger;
    this.setState(prevState => {
       return {index: prevState.index + 1}
    })
  // var a = this.state.texts;
 //  a[this.state.index] = value;
    this.setState({
        t9:e.target.value
    })
}

handleStart() {
    check1=Math.floor((1+Math.random()*9))
    check6=Math.floor((1+Math.random()*9))
    check8=Math.floor((1+Math.random()*9))
    if(check1 !== check6 && check1 !== check8 && check6 !== check8) {
    this.setState({
    t1:check1,
    t6:check6,
    t8:check8,
    })
    }
    else{
        this.handleStart();
    }
}
handleClick(e) { 
   var sum;
   sum = parseInt(this.state.t1)+parseInt(this.state.t2)+parseInt(this.state.t3)+parseInt(this.state.t4)+parseInt(this.state.t5)+parseInt(this.state.t6)+parseInt(this.state.t7)+parseInt(this.state.t8)+parseInt(this.state.t9); 
    if(sum === 45) {
        alert("Congrats winner");
    }
    else{
        alert("check you answer");
        e.preventDefault();
    }
  }
  render() {
    return (
      <div className="TableBoard">
  <DataTable plain>
    <TableBody>
    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' 
          value={this.state.t1}
          onChange={(e)=>{this.handleChanget1(e)}}
          disabled></input></TableColumn>
          
        <TableColumn><input type="text"  className='TableColumn__text' 
          value={this.state.t2} 
          onChange={(e)=>{this.handleChanget2(e)}}
          ></input></TableColumn>
        
          <TableColumn><input type="text" className='TableColumn__text' value={this.state.t3}
          onChange={(e)=>{this.handleChanget3(e)}}
          ></input></TableColumn>
    </TableRow>

    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' value={this.state.t4}
          onChange={(e)=>{this.handleChanget4(e)}}></input></TableColumn>

          <TableColumn><input type="text"  className='TableColumn__text' value={this.state.t5}
          onChange={(e)=>{this.handleChanget5(e)}}></input></TableColumn>

          <TableColumn><input type="text" className='TableColumn__text' value={this.state.t6}
          onChange={(e)=>{this.handleChanget6(e)}} disabled>
          </input></TableColumn>
    </TableRow>

    <TableRow>
          <TableColumn><input type="text" className='TableColumn__text' value={this.state.t7}
          onChange={(e)=>{this.handleChanget7(e)}}></input></TableColumn>

          <TableColumn><input type="text"  className='TableColumn__text' value={this.state.t8} 
          onChange={(e)=>{this.handleChanget8(e)}} disabled></input></TableColumn>

          <TableColumn><input type="text" className='TableColumn__text' value={this.state.t9} 
          onChange={(e)=>{this.handleChanget9(e)}}></input></TableColumn>
    </TableRow>

        <TableRow>
        <TableColumn>
        <Button flat primary swapTheming onClick={()=>{this.handleStart()}}>Start</Button></TableColumn>
        <TableColumn><Button flat primary swapTheming onClick={()=>{this.handleClick()}}>
                      Check</Button></TableColumn>
       </TableRow>               
    </TableBody>
  </DataTable>
      </div>
    );
  }
}

export default TableBoard;