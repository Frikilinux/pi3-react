import React, { useState } from 'react'
import { SearchContainer, SearchInput } from './SearchArtistStd'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import { useNavigate } from 'react-router-dom'

const SearchArtist = ({ page, placeholder }) => {
  const [search, setsearch] = useState('')
  const navigate = useNavigate()
  return (
    <SearchContainer
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/${page}/${search}`)
        setsearch('')
      }}
    >
      <SearchInput
        onChange={(e) => setsearch(e.target.value)}
        placeholder={placeholder}
        value={search}
      />
      <ButtonPrimary>Search</ButtonPrimary>
    </SearchContainer>
  )
}

export default SearchArtist
