import React from "react";
import {connect} from "react-redux";

function Counter(props) {
    function handleClick() {
        props.incrementCounter(1)
    }

    return <div className="border-2 border-solid bg-gray-300 justify-center items-center">
        <p>{props.count}</p>
        <button className="p-2 bg-yellow-300 rounded border-solid border-2" onClick={handleClick}>Increment</button>
    </div>
}
function incrementCounter(num) {
    return {
        type:'INCREMENT',
        num:num
    }
}
function mapStateToProps(state) {
    return {
        count:state.count
    };
}
const mapDispatchToProps = {
    incrementCounter
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);