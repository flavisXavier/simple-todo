import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ emoji, label }) {
  return (
    <span
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {emoji}
    </span>
  );
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
