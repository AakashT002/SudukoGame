import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-md';
import { startGame } from './actions/startGame';
import Board from './Board';

var check1, check6, check8;

class TableBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts: [{
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
            }]
        };


        this.handleChanget1 = this.handleChanget1.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStart = this.handleStart.bind(this);

    }

    handleChanget1(i, field, e) {
        const value = e.target.value;

        this.setState(() => {
            const texts = this.state.texts;
            const text = texts[i];
            text[field] = value;
            texts[i] = text;
            return { texts };
        });
    }

    handleStart(e) {
        debugger;
        // check1=Math.floor((1+Math.random()*9))
        // check6=Math.floor((1+Math.random()*9))
        // check8=Math.floor((1+Math.random()*9))

        // console.log(check1+" ==>  "+check6+" ==>  "+check8);

        // if(check1 !== check6 && check1 !== check8 && check6 !== check8) {
        // const texts = this.state.texts;
        // const text = texts[i];
        // this.setState(() =>{
        this.props.dispatch(startGame());
        e.preventDefault();
        // text['t1'] = check1;
        // text['t6'] = check6;
        // text['t8'] = check8;

        // return {text};
        // });
        // }
        // else{
        //     this.handleStart();
        // }
    }

    handleClick(e, i) {
        var sum;
        const texts = this.state.texts;
        const text = texts[i];
        sum = parseInt(text['t1']) + parseInt(text['t2']) + parseInt(text['t3']) + parseInt(text['t4']) + parseInt(text['t5']) +
            parseInt(text['t6']) + parseInt(text['t7']) + parseInt(text['t8']) + parseInt(text['t9']);
        if (sum === 45) {
            alert("Congrats winner");
            e.preventDefault();
        }
        else {
            alert("check you answer");
            e.preventDefault();
        }
    }

    render() {
        const {texts} = this.state;
        const {initialNumbers} = this.props;
        return (
            <div>
                {texts.map((text, i) => (
                    <Board
                        key={i}
                        index={i}
                        text={text}
                        initialNumbers={this.props.initialNumbers[i]}
                        handleChanget1={this.handleChanget1}
                        handleClick={this.handleClick}
                        handleStart={this.handleStart}
                        />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    debugger;
    return { initialNumbers: state.startgame.texts };
}

export default connect(mapStateToProps)(TableBoard);