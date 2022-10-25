import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import React from 'react';

// export const Section = ({ title, children }) => {
//   return (
//     <Title>
//       {title}
//       {children}
//     </Title>
//   );
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
// };

const Section = title => {
  return <Title>title</Title>;
};

export default Section;
