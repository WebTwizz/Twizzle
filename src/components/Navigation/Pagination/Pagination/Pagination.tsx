import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import "./pagination.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onChange?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onNext,
  onPrevious,
  onChange,
}) => {
  const [currentPage, setCurrentPage] = useState(page);
  const getPages = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
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

  const handleOnChange = (page: number) =>{
    setCurrentPage(page);
    if (onChange) {
        onChange();
    }
    }

  return (
    <div className="twizzle-pagination">
      <button
        className="twizzle-pagination-button"
        onClick={() => handlePreviousPage()}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className="twizzle-pagination-pages">
        {displayedPages.map((page) => {
          return (
            <span
              key={page}
              className={
                currentPage == page
                  ? "twizzle-current-page"
                  : "twizzle-pagination-page"
              }
              onClick={() => handleOnChange(page)}
              style={{
                borderColor: currentPage == page ? color : "transparent",
                color: currentPage == page ? color : "#afafaf",
              }}
            >
              {page}
            </span>
            
          );
          
        })}
      </div>
      <button
        className="twizzle-pagination-button"
        onClick={() => handleNextPage()}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Pagination;
