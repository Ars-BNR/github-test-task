import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./Pagination.module.scss";
import right from "../../../assets/icon/_IconButton_.svg";
import left from "../../../assets/icon/_IconButton_ (1).svg";
interface Props {
  totalItems: number;
  currentPage: number;
  limitItems: number;
  onPageChange: (page: number) => void;
  onLimitItemsChange: (limit: number) => void;
}
const Pagination = ({
  totalItems,
  currentPage,
  limitItems,
  onPageChange,
  onLimitItemsChange,
}: Props) => {
  // кол-во страниц
  const totalPages = Math.ceil(totalItems / limitItems);
  // func для изменения кол-во данны на странице
  const handleChangeRowsPerPage = (
    event: SelectChangeEvent<number | string>
  ) => {
    const newRowsPerPage = Number(event.target.value);
    console.log(newRowsPerPage);
    onLimitItemsChange(newRowsPerPage);
  };
  // страница + 1
  const incrementPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  // страница -1

  const decrementPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <div className={styles.Pagination}>
      <div className={styles.Pagination__block}>
        <span className={styles.Pagination__text}>Rows per page:</span>
        <FormControl sx={{ minWidth: 100, border: "none", display: "block" }}>
          <Select
            className={styles.select}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
            displayEmpty
            value={limitItems}
            label="10"
            onChange={handleChangeRowsPerPage}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.Pagination__block}>
        <div className={styles.pages}>
          {currentPage}-{totalPages} of {totalPages}
        </div>
      </div>
      <div className={styles.Pagination__block} onClick={decrementPage}>
        <img className={styles.Pagination__left} src={left} />
      </div>
      <div className={styles.Pagination__block} onClick={incrementPage}>
        <img className={styles.Pagination__right} src={right} />
      </div>
    </div>
  );
};

export default Pagination;
