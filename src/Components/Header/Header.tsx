import { useState } from "react";
import styles from "./Header.module.scss";
import { Button, Input } from "@mui/material";
import { useAppDispatches } from "../../hooks/redux";
const Header = () => {
  // хранение записи написанной в поле инпута
  const [own, setOwn] = useState("");
  const { fetchRepositories } = useAppDispatches();
  // func для отправки запроса на сервер
  const handleSeacrh = () => {
    if (own) {
      fetchRepositories(own);
    }
  };
  return (
    <div className={styles.Header}>
      <div className={styles.Header__block}>
        <Input
          className={styles["MuiInput-root"]}
          placeholder="Введите имя владельца репозиториев"
          value={own}
          onChange={(e) => setOwn(e.target.value)}
        />
        <Button
          variant="contained"
          className={styles["MuiButton-root"]}
          onClick={handleSeacrh}
        >
          Искать
        </Button>
      </div>
    </div>
  );
};

export default Header;
