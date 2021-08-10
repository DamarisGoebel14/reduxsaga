import { connect } from 'react-redux';
import { numberRequestStartAction } from '../../actions';
import { NumberSetterComponent } from './number-setter.component';

const mapDispatchToProps = (dispatch: any) => ({
    onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

export const NumberSetterContainer = connect(
    null,
    mapDispatchToProps
)(NumberSetterComponent);