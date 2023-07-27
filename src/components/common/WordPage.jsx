import {connect} from "react-redux";

const wordPage = ({words, add, remove}) => {
    return (<div onClick={() => {
        console.log(words)
        remove("test");
    }}>
        test
    </div>)
}
const mapStateToProps = (state) => {
    return {
        words: state.words,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (word) => dispatch({type: 'ADD', payload: word}),
        remove: (word) => dispatch({type: 'REMOVE', payload: word}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(wordPage);