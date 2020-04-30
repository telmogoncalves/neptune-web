import classNames from 'classnames';
import React from 'react';
import Types from 'prop-types';
import HelpCircleIcon from '@transferwise/icons/react/help-circle';

import Popover from '../popover';

import './Summary.css';

const Summary = ({ className, icon, title, help, body }) => (
  <div className={classNames('summary', className)}>
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
    {body && <div className="summary__body m-t-1">{body}</div>}
  </div>
);

Summary.propTypes = {
  icon: Types.node.isRequired,
  title: Types.node.isRequired,
  body: Types.node,
  help: Types.shape({
    title: Types.node,
    content: Types.node.isRequired,
  }),
  className: Types.string,
};

Summary.defaultProps = {
  body: null,
  help: null,
  className: null,
};

export default Summary;
