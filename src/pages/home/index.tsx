import React, { useEffect, useState } from 'react'
import { ThemeDefault } from 'themes'
import Search from 'components/search'
import { loadCharacterRequest } from 'stores/characters/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CharactersState, Character } from 'stores/characters/types'
import { ApplicationState } from 'stores'

import LoaderImg from 'assets/images/loader.gif'
import styled from 'styled-components'
import { CharacterRequestContext } from 'helps/context'
import { ReactComponent as MarvelSVG } from 'assets/svg/marvel.svg'
import { INITIAL_CHARACTER } from 'stores/characters/initial'
import HomeList from './list'
import HomeDetail from './detail'


const Loader = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const MarvelIcon = styled(MarvelSVG)`
    max-width: 100px;
    height: auto;
    margin: 15px auto;
    display: block;
`

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [term, setTerm] = useState('')
    const [detail, setDetail] = useState(INITIAL_CHARACTER)

    const characters: CharactersState = useSelector(
        (state: ApplicationState) => state.characters,
    )

    function handleChange(value: string) {
        setTerm(value)
    }

    function handleDetail(character: Character) {
        setDetail(character)
        setOpen(false)
        handleClose()
    }

    function handleClose() {
        setOpen(!open)
    }

    useEffect(
        () => {
            if (term) { dispatch(loadCharacterRequest({ term })) }
        },
        [dispatch, term],
    )

    return (
        <ThemeDefault>
            <CharacterRequestContext.Provider value={characters}>
                {characters.loading && <Loader src={LoaderImg} alt="Loading..." />}
                {!characters.loading && (
                    <>
                        <MarvelIcon />
                        <Search onChange={handleChange} isSearch={false} />
                        <HomeList onDetail={handleDetail} results={characters.results} />
                        <HomeDetail detail={detail} open={open} onClose={handleClose} />
                    </>
                )}
            </CharacterRequestContext.Provider>
        </ThemeDefault>
    )
}

export default Home
