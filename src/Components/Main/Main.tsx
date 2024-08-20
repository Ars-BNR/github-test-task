import styles from "./Main.module.scss";
import Pagination from "../ui/Pagination/Pagination";
import InfoModule from "../ui/InfoModule/InfoModule";
import { Repository } from "../../types/type";
import arrow from "../../assets/icon/arrow.svg";
import useTableMain from "../../hooks/useTableMain";

const Main = () => {
  const {
    selectedRepo,
    currentPage,
    limitItems,
    handleClickRepo,
    handlePageChange,
    handlelimitItemsChange,
    handleSortChange,
    displayedRepositories,
    status,
    repositories,
    sortColumn,
    error,
    typeSort,
  } = useTableMain();

  if (status === "loading") {
    return <h1 className={styles.Welcome}>Загрузка...</h1>;
  }

  if (status === "fail") {
    return <h1 className={styles.Welcome}>Ошибка: {error}</h1>;
  }

  if (repositories.length === 0) {
    return <h1 className={styles.Welcome}>Добро пожаловать</h1>;
  }

  // func для  направление стрелки
  const checkArrow = (nameColumn: keyof Repository) => {
    return (
      sortColumn === nameColumn &&
      (typeSort === "asc" ? (
        <img src={arrow} alt="" />
      ) : typeSort === "desc" ? (
        <img className={styles.arrow__reverse} src={arrow} alt="" />
      ) : (
        ""
      ))
    );
  };
  return (
    <div className={styles.Search__block}>
      <div className={styles.Search__result}>
        <div className={styles.Search__data}>
          <h1 className={styles.Search__title}>Результаты поиска</h1>
          <table className={styles.Search__table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Язык</th>
                <th
                  className={styles.sort}
                  onClick={() => handleSortChange("forks_count")}
                >
                  {checkArrow("forks_count")} Число ворков
                </th>
                <th
                  className={styles.sort}
                  onClick={() => handleSortChange("stargazers_count")}
                >
                  {checkArrow("stargazers_count")} Число звезд
                </th>
                <th
                  className={styles.sort}
                  onClick={() => handleSortChange("updated_at")}
                >
                  {checkArrow("updated_at")} Дата обновления
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRepositories.length > 0 &&
                displayedRepositories.map((repo, index) => (
                  <tr key={index}>
                    <td
                      className={styles.name}
                      onClick={() => handleClickRepo(repo)}
                    >
                      {repo?.name}
                    </td>
                    <td>{repo?.language}</td>
                    <td>{repo?.forks_count}</td>
                    <td>{repo?.stargazers_count}</td>
                    <td>{new Date(repo?.updated_at).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={repositories.length}
          currentPage={currentPage}
          limitItems={limitItems}
          onPageChange={handlePageChange}
          onLimitItemsChange={handlelimitItemsChange}
        />
      </div>
      <InfoModule selectedRepo={selectedRepo} />
    </div>
  );
};

export default Main;
