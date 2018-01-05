import spotify from './Spotify';
import renderAlbums from './AlbumList';
import search from 'spotify-wrapper-vini/bin/search';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    spotify.search
      .albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumList));
  });
}
