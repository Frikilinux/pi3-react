import React, { useState } from 'react'
import { SearchContainer, SearchInput } from './SearchArtistStd'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import { useNavigate } from 'react-router-dom'

const SearchArtist = () => {
  const [search, setsearch] = useState('')
  const navigate = useNavigate()
  return (
    <SearchContainer
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
        setsearch('')
      }}
    >
      <SearchInput
        onChange={(e) => setsearch(e.target.value)}
        placeholder='Search albums o artists'
        value={search}
      />
      <ButtonPrimary>Search</ButtonPrimary>
    </SearchContainer>
  )
}

export default SearchArtist
