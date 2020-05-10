
import { Reducer } from 'redux'
import { CharactersState, CharacterTypes } from './types'
import { INITIAL_CHARACTERS_STATE } from './initial'

const reducer: Reducer<CharactersState> = (state = INITIAL_CHARACTERS_STATE, { type, payload }) => {
    switch (type) {
    case CharacterTypes.LOAD_REQUEST:
        return { ...state, loading: true, term: payload.term }
    case CharacterTypes.LOAD_SUCCESS:
        return {
            ...state, loading: false, error: false, ...payload.data.data,
        }
    case CharacterTypes.LOAD_FAILURE:
        return {
            ...state, loading: false, error: true, data: [], term: '',
        }
    case CharacterTypes.LOAD_UPDATED:
        return {
            ...state,
            results: state.results.map((item) => (
                item.id === payload.character.id ? payload.character : item
            )),
        }
    default:
        return state
    }
}

export default reducer
