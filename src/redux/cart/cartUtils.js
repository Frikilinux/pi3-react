export const addAlbumHandler = (cartAlbums, album) => {
  const { id } = album

  const itemExist = cartAlbums.find((album) => album.id === id)

  if (itemExist) {
    return cartAlbums.map((album) =>
      album.id === id ? { ...album, qty: album.qty + 1 } : album,
    )
  } else {
    return [...cartAlbums, { ...album, qty: 1 }]
  }
}

export const removeAlbumHandler = (cartAlbums, albumId) => {
  const itemExist = cartAlbums.find((album) => album.id === albumId)

  if (itemExist.qty > 1) {
    return cartAlbums.map((album) =>
      album.id === albumId ? { ...album, qty: album.qty - 1 } : album,
    )
  } else {
    return cartAlbums
  }
}
