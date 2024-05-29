import React from 'react';
import { Menu } from '@material-ui/core';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuProps } from './DropdownMenu.types';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  anchorEl,
  setAnchorEl,
  items,
  selectMenuItem,
  onFavouriteClick,
  favouritesEnabled,
  favouritesTranslations,
}): JSX.Element => {
  const closeMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSelectMenuItem = (item: any): void => {
    if (selectMenuItem) {
      setAnchorEl(null);
      closeMenu();
      selectMenuItem(item);
    }
  };

  return (
    <Menu
      id="dropdown-menu"
      className="dropdown-menu"
      keepMounted
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      {items.map((item) => (
        <DropdownMenuItem
          {...item}
          favouritesTranslations={favouritesTranslations}
          favouritesEnabled={!!favouritesEnabled}
          onSelected={(i) => handleSelectMenuItem(i)}
          onFavouriteClick={(i) => onFavouriteClick && onFavouriteClick(i)}
        >
          {item.title}
        </DropdownMenuItem>
      ))}
    </Menu>
  );
};
