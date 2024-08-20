import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import cl from "./Page.module.scss";
import { Outlet } from "react-router-dom";
const Page = () => {
  return (
    <div className={cl.wrapper}>
      <Header />
      <div className={cl.main}>
        <div className={cl.main__container}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
