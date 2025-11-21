import React, { useState, useRef, useEffect, ReactNode, Children } from "react";
import {
  Container,
  Content,
  Overlay,
  SeeMoreButton,
} from "./ExpandableList.styles";
import { useTranslation } from "react-i18next";

interface ExpandableListProps {
  children: ReactNode;
  maxItemsToShow?: number;
  individualHeight?: number;
}

const ExpandableList: React.FC<ExpandableListProps> = ({
  children,
  maxItemsToShow = 2,
  individualHeight = 500,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const totalItems = Children.count(children);
  const showButton = totalItems > maxItemsToShow;

  const visibleChildren = isExpanded
    ? children
    : Children.toArray(children).slice(0, maxItemsToShow);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      window.location.hash = "";
      window.location.hash = "#formacao";
    }
  };

  return (
    <Container ref={containerRef}>
      <Content
        isExpanded={isExpanded}
        totalItems={totalItems}
        maxItemsToShow={maxItemsToShow}
        individualHeight={individualHeight}
      >
        {visibleChildren}
      </Content>

      {showButton && (
        <>
          {!isExpanded && <Overlay width={containerWidth} />}
          <SeeMoreButton onClick={() => handleExpandClick()}>
            {isExpanded
              ? t("education.section.seeLessText")
              : t("education.section.seeMoreText")}
          </SeeMoreButton>
        </>
      )}
    </Container>
  );
};

export default ExpandableList;
