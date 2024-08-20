import { useState } from "react";
import { Repository } from "../types/type";
import { useAppSelector } from "./redux";

const useTableMain = () => {
  // получаем репозитории
  const repositories: Repository[] = useAppSelector(
    (state) => state.github.repositories
  );
  // статусы для обработки случаев
  const status = useAppSelector((state) => state.github.status);
  const error = useAppSelector((state) => state.github.error);

  // выбранный репо для хранения выбранного репозитория (для информации справа)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  // страница на которой находимся + количество данных на странице
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limitItems, setLimitItems] = useState<number>(5);

  // ключи для сортировки + тип сортировки(asc,desc) + кол-во кликов для данных сброса сортировки
  const [sortColumn, setSortColumn] = useState<keyof Repository | null>(null);
  const [typeSort, setTypeSort] = useState<string>("");
  const [sortClicks, setSortClicks] = useState<number>(0);

  // func для записи выбранного репозитория
  const handleClickRepo = (repo: Repository) => {
    console.log(repo);
    setSelectedRepo(repo);
  };
  // func для установки страницы на которой находимся
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  // установка количество данных на странице
  const handlelimitItemsChange = (newLimit: number) => {
    setLimitItems(newLimit);
    setCurrentPage(1);
  };

  // func для напрвления сортировки
  const handleSortChange = (column: keyof Repository) => {
    setSortClicks((prev) => prev + 1);
    if (sortColumn === column) {
      setTypeSort(typeSort === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setTypeSort("asc");
    }
    if (sortClicks % 3 === 0) {
      setSortColumn(null);
      setTypeSort("");
    }
  };

  // сортировка пузырьком
  const sortedData = [...repositories].sort((a, b) => {
    if (sortColumn === null) return 0;

    if (a[sortColumn]! < b[sortColumn]!) return typeSort === "asc" ? -1 : 1;
    if (a[sortColumn]! > b[sortColumn]!) return typeSort === "asc" ? 1 : -1;

    return 0;
  });

  // начальный индекс и конечный для offset + пагинация на основе startIndex endIndex
  const startIndex = (currentPage - 1) * limitItems;
  const endIndex = startIndex + limitItems;
  const displayedRepositories = sortedData.slice(startIndex, endIndex);

  return {
    selectedRepo,
    currentPage,
    limitItems,
    sortColumn,
    typeSort,
    sortClicks,
    handleClickRepo,
    handlePageChange,
    handlelimitItemsChange,
    handleSortChange,
    sortedData,
    displayedRepositories,
    status,
    error,
    repositories,
  };
};

export default useTableMain;
