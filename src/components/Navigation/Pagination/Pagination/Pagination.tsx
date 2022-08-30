import React, { useContext, useEffect, useMemo, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ThemeContext } from "../../../../context/ThemeContext";
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationPage,
  StyledPaginationPages,
} from "./StyledPagination";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current page.
   * @default 1
   */
  page: number;
  /**
   * The total number of pages.
   */
  totalPages: number;
  /**
   * onNext callback function
   */
  onNext?: () => void;
  /**
   * onPrevious callback function
   */
  onPrevious?: () => void;
  /**
   * onChange callback function
   */
  onChange?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onNext,
  onPrevious,
  onChange,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(page);

  const getPages = useMemo(() => {
    const pages = [];
    if (currentPage > 5) {
      pages.push(currentPage - 4);
      pages.push(currentPage - 3);
      pages.push(currentPage - 2);
      pages.push(currentPage - 1);
      for (let i = currentPage; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return pages.slice(0, 5);
  }, [totalPages]);

  const [displayedPages, setDisplayedPages] = useState(getPages);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const theme = useContext(ThemeContext);
  const color = theme.primary?.backgroundColor || "#1E90FF";

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (currentPage === displayedPages[displayedPages.length - 1]) {
        const pages = [];
        setCurrentPage(currentPage + 1);
        for (
          let i = displayedPages[1];
          i <= displayedPages[displayedPages.length - 1] + 1;
          i++
        ) {
          pages.push(i);
        }
        setDisplayedPages(pages);
      }
    }
    if (onNext) {
      onNext();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage === displayedPages[0]) {
        const pages = [];
        const lastPage = displayedPages[displayedPages.length - 1];
        for (let i = currentPage - 1; i <= lastPage - 1; i++) {
          pages.push(i);
        }
        setDisplayedPages(pages);
      }
    }
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleOnChange = (page: number) => {
    setCurrentPage(page);
    if (onChange) {
      onChange();
    }
  };

  return (
    <StyledPagination {...props}>
      <StyledPaginationButton onClick={() => handlePreviousPage()} role='prev-button'>
        <BsChevronLeft />
      </StyledPaginationButton>
      <StyledPaginationPages>
        {displayedPages.map((page) => {
          return (
              <StyledPaginationPage
                key={`pagination-page-${page}`}
                onClick={() => handleOnChange(page)}
                style={{
                  borderColor: currentPage == page ? color : "transparent",
                  color: currentPage == page ? color : "#afafaf",
                }}
              >
                {page}
              </StyledPaginationPage>
          );
        })}
        {displayedPages[displayedPages.length - 1] != totalPages && (
          <>
            <span style={{ color: "#afafaf" }}> ... </span>
            <StyledPaginationPage
              onClick={() => handleOnChange(totalPages)}
              style={{
                borderColor: currentPage == totalPages ? color : "transparent",
                color: currentPage == totalPages ? color : "#afafaf",
              }}
            >
              {totalPages}
            </StyledPaginationPage>
          </>
        )}
      </StyledPaginationPages>
      <StyledPaginationButton onClick={() => handleNextPage()} role='next-button'>
        <BsChevronRight />
      </StyledPaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
