import { all, takeLatest } from 'redux-saga/effects'
import { CharacterTypes } from './characters/types'
import { load as LoadCharacters } from './characters/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(CharacterTypes.LOAD_REQUEST, LoadCharacters),
    ])
}
