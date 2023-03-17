import * as React from 'react';

import {
  RevealListItemContainer,
  SemanticElement,
} from '@/stories/RevealList/RevealList.style';
import {
  defaultRevealListContent,
  RevealListContent,
  RevealListItem,
} from '@/stories/RevealList/RevealList.utils';
import {
  RevealListContext,
  RevealListContextProvider,
} from './RevealListContent/RevealListContext';

type Props = {
  /** What's in the RevealList? */
  revealListContent?: RevealListContent;
  /** Which heading should be revealed? */
  activeHeading: string | undefined;
  /** List of sections that have already been opened */
  activatedHeadings: string[];
  /** Callback for updating the active heading */
  handleHeadingChange: (activeHeading: string) => void;
};
const RevealList = ({
  activeHeading,
  revealListContent = defaultRevealListContent,
  activatedHeadings,
  handleHeadingChange,
}: Props): React.ReactElement => {
  const revealListRef = React.useRef(null);
  const revealListSectionRefs = React.useRef<React.ReactElement[]>([]);
  revealListSectionRefs.current = revealListContent.map(
    (_revealListItem, index) =>
      revealListSectionRefs.current[index] ?? React.createRef(),
  );

  React.useEffect(() => {
    const handleReveal: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      handleHeadingChange(entry.target.getAttribute('data-value') ?? 'webdev');
    };

    const intersectionObserverOptions = {
      // root: null,
      root: revealListRef.current,
      // rootMargin: '0px 0px -30px 0px',
      threshold: 1,
    };
    // IntersectionObserver callback function
    const observer = new IntersectionObserver(
      handleReveal,
      intersectionObserverOptions,
    );
    if (revealListSectionRefs.current) {
      revealListContent.forEach((_revealListItem, index) =>
        //@ts-ignore
        observer.observe(revealListSectionRefs.current[index].current),
      );
    }
    return () => {
      observer.disconnect();
    };
  }, [revealListContent, activeHeading, handleHeadingChange]);

  return (
    <RevealListContextProvider>
      <SemanticElement data-testid="reveal-list" ref={revealListRef}>
        {revealListContent.map(
          (
            { heading, underlayContent, headingContent }: RevealListItem,
            index: number,
          ) => {
            const isActive = heading === activeHeading;
            return (
              <RevealListItemContainer
                key={`reveal-list-item-${heading}`}
                isActive={activatedHeadings.includes(heading) || isActive}
                //@ts-ignore
                ref={revealListSectionRefs.current[index]}
                data-value={heading}
              >
                <div className="foreground">
                  <h1>{heading}</h1>
                </div>
                <div className="background">
                  <div className="background-left">{headingContent}</div>
                  <div className="background-right">{underlayContent}</div>
                </div>
              </RevealListItemContainer>
            );
          },
        )}
      </SemanticElement>
    </RevealListContextProvider>
  );
};

export { RevealList };
