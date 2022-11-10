import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <p className={css.title}>{title}</p>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
