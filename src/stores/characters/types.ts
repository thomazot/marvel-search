/**
 *  Actions Types
 */
export enum CharacterTypes {
    LOAD_REQUEST = '@characters/LOAD_REQUEST',
    LOAD_SUCCESS = '@characters/LOAD_SUCCESS',
    LOAD_FAILURE = '@characters/LOAD_FAILURE',
    LOAD_UPDATED = '@characters/LOAD_UPDATED'
}

/**
 * Data types
 */
type ThumbnailType = {
    path: string
    extension: string
}

export interface SeriesItem {
    resourceURI: string
    name: string
}

export interface SeriesInterface {
    available: number
    collectionURI: string
    items: SeriesItem[]
    returned: number
}

export interface Character {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: ThumbnailType
    resourceURI: string
    series: SeriesInterface
}

/**
 * State type
 */
export interface CharactersState {
    readonly offset: number
    readonly limit: number
    readonly total: number
    readonly count: number
    readonly results: Character[]
    readonly loading: boolean
    readonly error: boolean
    readonly term: string
}
