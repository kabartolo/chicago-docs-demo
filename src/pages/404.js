import React from 'react';
import { Styled } from 'theme-ui';
import { Link } from 'gatsby';

export default () => (
  <>
    <h1>Page not found</h1>
    <p>Sorry, we can&apos;t find the page you were looking for.</p>
    <Styled.a as={Link} to="/">Return home</Styled.a>
  </>
);
