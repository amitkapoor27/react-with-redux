import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from '../store/actions';
const Counter =({counter,increment,decrement})=>{
console.log(counter);
    return (
        <div>
            <h1>
                Counter:{counter.counter}
                
            </h1>
            <button onClick={increment}>Increment</button>
            &nbsp;
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapStateToProps =(state)=>{
    return {
        counter:state.counter
    };
};
const mapDispatchToProps ={
    increment,
    decrement
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);