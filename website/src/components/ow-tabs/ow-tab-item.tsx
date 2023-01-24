import './ow-tabs.scss';
import React, {FC} from 'react';

interface TabProps {
  tabID: string;
  label: string;
  iconSrc: string;
  className?: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTabItem: FC<TabProps> = props => {
  const {
    tabID,
    label,
    iconSrc,
    className,
    children
  } = props;

  return (
    <section
      className={className}
      id={tabID}
      data-label={label}
      data-icon={iconSrc}
      >
        {children}
    </section>
  );
};

export default OWTabItem;