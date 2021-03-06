import { call, put, takeEvery } from 'redux-saga/effects';
import { generateNewNumber } from '../api';
import { numberRequestCompletedAction } from '../actions';
import { actionIds } from '../common';

export function* watchNewGeneratedNumberRequestStart() {
    yield takeEvery(
        actionIds.GET_NUMBER_REQUEST_START,
        requestNewGeneratedNumber
    );
}

function* requestNewGeneratedNumber() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const generatedNumber = yield call(generateNewNumber);
    yield put(numberRequestCompletedAction(generatedNumber));
}