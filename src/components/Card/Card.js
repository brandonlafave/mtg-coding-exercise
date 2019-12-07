import React, { Component } from 'react';
import './Card.css';

function Card(props) {
  const { image, name, artist, setName, type } = props;

  /*
    TODO: Extract the hard-coded English labels below into
    separate language files that can be swapped out depending
    on the user's selected language.
  */
  const cardNameLabel = `Name: ${name}`,
        cardArtistLabel = `Artist: ${artist}`,
        cardSetNameLabel = `Set Name: ${setName}`,
        cardTypeLabel = `Type: ${type}`;

  /*
    TODO: Per W3 specifications, any image that contains text needs
    to convey that information using alt text. Need to review the
    information contained in the card images to see if other items
    need to be included (i.e. mana, power, toughness, etc.)
  */
  const altTextLabel = `${cardNameLabel} ${cardArtistLabel}
    ${cardSetNameLabel} ${cardTypeLabel}`;

  return (
    <div className="card-wrapper">
        <img className="card-image" src={ image } alt={altTextLabel} />
        <p className="card-name">{ cardNameLabel }</p>
        <p className="card-artist">{ cardArtistLabel }</p>
        <p className="card-set">{ cardSetNameLabel }</p>
        <p className="card-type">{ cardTypeLabel }</p>
    </div>
  );
}

export default Card;
