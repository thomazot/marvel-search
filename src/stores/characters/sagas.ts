import { call, put } from 'redux-saga/effects'
import { Action } from 'redux'
import { loadCharacterSuccess, loadCharacterFailure } from './actions'
import Api from '../../services/api'

interface PropsParams {
    term ?: string
    id ?: string
}

interface Props extends Action {
    payload: PropsParams
}

type Params = {
    nameStartsWith ?: string
}

export function* load(action: Props) {
    try {
        const params: Params = {}
        let url = 'https://gateway.marvel.com/v1/public/characters'

        if (action.payload.term) { params.nameStartsWith = action.payload.term }
        if (action.payload.id) { url += `/${action.payload.id}` }

        const response = yield call(Api.get, url, { params })
        yield put(loadCharacterSuccess(response.data))
    } catch (err) {
        yield put(loadCharacterFailure())
    }
}
