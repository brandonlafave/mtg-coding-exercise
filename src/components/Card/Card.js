import React from 'react';
import safeDefaults from '../../utilities/safeDefaults';
import {
  SET_LABEL,
  NAME_LABEL,
  ARTIST_LABEL,
  DEFAULT_IMAGE_URL,
  NO_INFO_AVAILABLE,
  ORIGINAL_TYPE_LABEL,
} from './constants';
import './Card.css';

function Card(props) {
  const { imageUrl, name, artist, setName, originalType } = props;

  /*
    TODO: Extract the hard-coded English labels below into
    separate language files that can be swapped out depending
    on the user's selected language.
  */
  const cardNameLabel = `${NAME_LABEL} ${safeDefaults(name, NO_INFO_AVAILABLE)}`,
        cardArtistLabel = `${ARTIST_LABEL} ${safeDefaults(artist, NO_INFO_AVAILABLE)}`,
        cardSetNameLabel = `${SET_LABEL} ${safeDefaults(setName, NO_INFO_AVAILABLE)}`,
        cardOriginalTypeLabel = `${ORIGINAL_TYPE_LABEL} ${safeDefaults(originalType, NO_INFO_AVAILABLE)}`;

  /*
    TODO: Per W3 specifications, any image that contains text needs
    to convey that information using alt text. Need to review the
    information contained in the card images to see if other items
    need to be included (i.e. mana, power, toughness, etc.)
  */
  const altTextLabel = `${cardNameLabel} ${cardArtistLabel}
    ${cardSetNameLabel} ${cardOriginalTypeLabel}`;

  const safeImageUrl = safeDefaults(imageUrl, DEFAULT_IMAGE_URL);

  /**
   * renderCardInfo - Generates the HTML for the card information section
   * @return {JSX} Returns card information sections for the card tiles
   */
  function renderCardInfo() {
    /*
      I've used a table here since it's tabular data and
      and table HTML tags are ADA compliant out-of-the-box.
    */
    return (
      <table>
        <tbody>
          <tr className='card-name'>
            <th>{NAME_LABEL}</th>
            <td>{safeDefaults(name, NO_INFO_AVAILABLE)}</td>
          </tr>
          <tr className='card-artist'>
            <th>{ARTIST_LABEL}</th>
            <td>{safeDefaults(artist, NO_INFO_AVAILABLE)}</td>
          </tr>
          <tr className='card-set'>
            <th>{SET_LABEL}</th>
            <td>{safeDefaults(setName, NO_INFO_AVAILABLE)}</td>
          </tr>
          <tr className='card-type'>
            <th>{ORIGINAL_TYPE_LABEL}</th>
            <td>{safeDefaults(originalType, NO_INFO_AVAILABLE)}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className="card-wrapper">
        <img className="card-image" src={ safeImageUrl } alt={altTextLabel} />
        <div className="card-info-container">
          { renderCardInfo() }
        </div>
    </div>
  );
}

export default Card;
