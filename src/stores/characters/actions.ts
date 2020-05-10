import { action } from 'typesafe-actions'
import { CharacterTypes, Character } from './types'

export const loadCharacterRequest = ({ term }: {term ?: string}) => (
    action(CharacterTypes.LOAD_REQUEST, { term })
)
export const loadCharacterSuccess = (data: Character[]) => (
    action(CharacterTypes.LOAD_SUCCESS, { data })
)
export const loadCharacterFailure = () => action(CharacterTypes.LOAD_FAILURE)
export const updateCharacter = ({ character }: {character: Character}) => (
    action(CharacterTypes.LOAD_UPDATED, { character })
)
