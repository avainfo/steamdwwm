import {connect} from "react-redux";


const CarScore = ({carScore, text}) => {
    return (
        <h2>{text} {carScore}</h2>
    );
}

const mapStateToProps = (state) => {
    return {
        text: state.text, // Récupère la valeur du compteur depuis le state du store
    };
};
export default connect(mapStateToProps)(CarScore);

