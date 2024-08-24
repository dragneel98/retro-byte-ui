import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'«'}
      nextLabel={'»'}
      breakLabel={'...'}
      breakClassName={styles.breakMe}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      forcePage={currentPage - 1}
    />
  );
};
