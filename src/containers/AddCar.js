import { connect } from 'react-redux'
import AddCar from "../components/AddCar"
import {addCar} from "../redux/action"

const mapStateToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(null,mapStateToProps)(AddCar)
