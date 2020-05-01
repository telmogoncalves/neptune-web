import classNames from 'classnames';
import React from 'react';
import Types from 'prop-types';
import HelpCircleIcon from '@transferwise/icons/react/help-circle';

import Popover from '../popover';

import './Summary.css';

const Summary = ({ as: Element, className, icon, title, help, content }) => (
  <Element className={classNames('summary', className)}>
    <div className="summary__main">
      <div className="summary__icon m-r-2">{icon}</div>
      <div className="summary__title">
        <strong>{title}</strong>
      </div>
      {help && (
        <div className="summary__help m-l-2">
          <Popover preferredPlacement="bottom-left" title={help.title} content={help.content}>
            <HelpCircleIcon size="sm" />
          </Popover>
        </div>
      )}
    </div>
    {content && <div className="summary__content m-t-1 m-l-5">{content}</div>}
  </Element>
);

Summary.propTypes = {
  as: Types.elementType,
  icon: Types.node.isRequired,
  title: Types.node.isRequired,
  content: Types.node,
  help: Types.shape({
    title: Types.node,
    content: Types.node.isRequired,
  }),
  className: Types.string,
};

Summary.defaultProps = {
  as: 'div',
  content: null,
  help: null,
  className: null,
};

export default Summary;
