import score from "../../../assets/icon/Vector.svg";
import { Repository } from "../../../types/type";
import styles from "./InfoModule.module.scss";
interface Props {
  selectedRepo: Repository | null;
}
const InfoModule = ({ selectedRepo }: Props) => {
  return (
    <>
      <div className={styles.Search__information}>
        {selectedRepo === null && (
          <h1 className={styles.Search__ChooseRepo}>Выберите репозиторий</h1>
        )}
        {selectedRepo !== null && (
          <div className={styles.Search__blockInfo}>
            <h1 className={styles.Search__name}>{selectedRepo.name}</h1>
            <div className={styles.Search__firstItem}>
              <span className={styles.Search__nameRepo}>
                {selectedRepo.language}
              </span>
              <div className={styles.Search__score}>
                <img src={score} alt="" />
                <span className={styles.Search__span}>
                  {selectedRepo.stargazers_count}
                </span>
              </div>
            </div>
            <div className={styles.Search__secondItem}>
              <span className={styles.Search__secondItem_child}>
                {selectedRepo.language}
              </span>
              <span className={styles.Search__secondItem_child}>
                {selectedRepo.description
                  ? selectedRepo.description
                  : "Нет описания"}
              </span>
              {selectedRepo.topics && selectedRepo.topics.length > 0 ? (
                selectedRepo.topics.map((topic: string, index: number) => (
                  <span key={index} className={styles.Search__secondItem_child}>
                    {topic}
                  </span>
                ))
              ) : (
                <span className={styles.Search__secondItem_child}>
                  Пустой топик
                </span>
              )}
            </div>
            <span className={styles.Search__thirditem}>
              {selectedRepo.license?.spdx_id || "нет лицензии"}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default InfoModule;
