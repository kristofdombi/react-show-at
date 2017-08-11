import React from 'react';
import PropTypes from 'prop-types';
import withBreakpoint from 'react-with-breakpoints';

function ShowAt(props) {
  const breakpoint = props.breakpoint;
  const currentBreakpoint = props.currentBreakpoint;

  let shouldRender;

  if (breakpoint.includes('small') && currentBreakpoint === 'small') {
    shouldRender = true;
  } else {
    shouldRender = false;
  }

  if (breakpoint.includes('medium')) {
    if (breakpoint.includes('AndBelow') && currentBreakpoint !== 'large') {
      shouldRender = true;
    } else if (breakpoint.includes('AndAbove') && currentBreakpoint !== 'small') {
      shouldRender = true;
    } else if (breakpoint === 'medium' && currentBreakpoint === 'medium') {
      shouldRender = true;
    }
  }

  if (breakpoint.includes('large')) {
    if (breakpoint.includes('AndBelow')) {
      shouldRender = true;
    } else if (currentBreakpoint !== 'large') {
      shouldRender = false;
    } else {
      shouldRender = true;
    }
  }

  if (shouldRender) {
    return (<div>{ props.children }</div>);
  }
  return null;
}

ShowAt.propTypes = {
  breakpoint: PropTypes.oneOf(['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'largeAndBelow', 'large']).isRequired,
  // eslint-disable-next-line
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  children: PropTypes.node,
};

ShowAt.displayName = 'ShowAt';

ShowAt.defaultProps = {
  breakpoint: '',
  currentBreakpoint: '',
  children: null,
};

const ShowAtWithBreakpoint = withBreakpoint(ShowAt);

export default ShowAtWithBreakpoint;
