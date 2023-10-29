// SelectLangMenu.jsx
import { Menu, MenuHeader, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// eslint-disable-next-line react/prop-types
const SelectLangMenu = ({ selectLang, setSelectLang }) => {
  const clickItemHandler = (e) => {
    console.log(`[MenuItem] ${e.value} clicked`);
    // Stop the `onItemClick` of root menu component from firing
    e.stopPropagation = true;
    // Keep the menu open after this menu item is clicked
    e.keepOpen = false;
    // set Selected Content
    setSelectLang(e.value);
  }
  return (
    <Menu menuButton={<MenuButton>{selectLang}</MenuButton>}>
      <MenuHeader>Select Lang.</MenuHeader>
      <MenuItem value="ja-JP" onClick={(e) => clickItemHandler(e)}>日本語</MenuItem>
      <SubMenu label="English">
        <MenuItem value="en-US" onClick={(e) => clickItemHandler(e)}>United States</MenuItem>
        <MenuItem value="en-GB" onClick={(e) => clickItemHandler(e)}>United Kingdom</MenuItem>
        <MenuItem value="en-CA" onClick={(e) => clickItemHandler(e)}>Canada</MenuItem>
        <MenuItem value="en-AU" onClick={(e) => clickItemHandler(e)}>Australia</MenuItem>
        <MenuItem value="en-IN" onClick={(e) => clickItemHandler(e)}>India</MenuItem>
      </SubMenu>
      <MenuItem value="cmn-Hant-TW" onClick={(e) => clickItemHandler(e)}>中文 (台灣)</MenuItem>
    </Menu>
  );
}

export default SelectLangMenu;