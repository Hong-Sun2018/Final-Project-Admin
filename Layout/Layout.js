
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import DialogBox from "../Components/DialogBox";
import { memo } from 'react';
 
const Layout = ({children}) => {

  return (
    <>
      <Header />
        { children }
        <DialogBox />
      <Footer />
    </>
  );
}

export default memo(Layout);