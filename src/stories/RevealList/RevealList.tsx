import * as React from 'react';

import {
  SemanticElement,
  RevealSection,
} from '@/stories/RevealList/RevealList.style';
import {
  defaultRevealListContent,
  RevealListContent,
  RevealListItem,
} from '@/stories/RevealList/RevealList.utils';

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

  const handleReveal: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    handleHeadingChange(entry.target.getAttribute('data-value') ?? 'webdev');
  };

  const intersectionObserverOptions = {
    root: revealListRef.current,
    rootMargin: '-10px 0px -10px 0px',
    threshold: 1,
  };

  React.useEffect(() => {
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
      if (revealListSectionRefs.current) {
        revealListContent.forEach((_revealListItem, index) =>
          //@ts-ignore
          observer.unobserve(revealListSectionRefs.current[index].current),
        );
      }
    };
  }, []);

  return (
    <SemanticElement data-testid="reveal-list" ref={revealListRef}>
      {revealListContent.map(
        (
          { heading, headingContent, underlayContent }: RevealListItem,
          index: number,
        ) => {
          const isActive = heading === activeHeading;
          return (
            <RevealSection
              key={heading}
              // isActive={isActive || activatedHeadings.includes(heading)}
              isActive={isActive}
              //@ts-expect-error - typing of ref
              ref={revealListSectionRefs.current[index]}
              data-value={heading}
            >
              <div className="overlay">
                {isActive || activatedHeadings.includes(heading) ? (
                  headingContent
                ) : (
                  <h1>{heading}</h1>
                )}
              </div>
              <div className="underlay">{underlayContent}</div>
            </RevealSection>
          );
        },
      )}
    </SemanticElement>
  );
};

export { RevealList };
