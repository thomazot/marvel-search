import { createContext } from 'react'
import { Character, CharactersState } from 'stores/characters/types'
import { INITIAL_CHARACTER, INITIAL_CHARACTERS_STATE } from 'stores/characters/initial'


type CharacterContextType = {
    character: Character
    setUpdated ?: (character: Character) => void
}

export const CharacterContext = createContext <CharacterContextType>({
    character: INITIAL_CHARACTER,
})

type CharacterRequestType = CharactersState

export const CharacterRequestContext = createContext<CharacterRequestType>(INITIAL_CHARACTERS_STATE)
