
import { CharactersState, Character } from 'stores/characters/types'

export const INITIAL_CHARACTERS_STATE:CharactersState = {
    offset: 0,
    count: 0,
    total: 0,
    limit: 0,
    results: [],
    error: false,
    loading: false,
    term: '',
}

export const INITIAL_CHARACTER: Character = {
    id: 0,
    name: '',
    description: '',
    modified: '',
    resourceURI: '',
    thumbnail: {
        path: '',
        extension: '',
    },
    series: {
        available: 0,
        collectionURI: '',
        returned: 0,
        items: [],
    },
}
