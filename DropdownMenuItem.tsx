import React, { useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { Icon, icons } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { Button } from '../Button/Button';

export interface DropdownMenuItem {
  id: string;
  title: string;
  options: DropdownMenuItem[] | null;
  isFavourite?: boolean;
  favouritesEnabled?: boolean;
}

export interface DropdownMenuItemProps {
  id: string;
  title: string;
  options: DropdownMenuItem[] | null | undefined;
  // eslint-disable-next-line no-unused-vars
  onSelected: (item: DropdownMenuItemProps) => void;
  // eslint-disable-next-line no-unused-vars
  onFavouriteClick: (value: string) => void;
  isFavourite?: boolean;
  favouritesEnabled?: boolean;
  favouritesTranslations?: {
    add: string;
    remove: string;
  };
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = (optionItem): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: DropdownMenuItemProps,
  ): void => {
    if (optionItem.options?.length) {
      setAnchorEl(event.currentTarget);
    } else {
      event.stopPropagation();
      setAnchorEl(null);
      if (optionItem.onSelected) {
        optionItem.onSelected(item);
      }
    }
  };

  const handleFavouritesClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ): void => {
    e.stopPropagation();
    return optionItem.onFavouriteClick && optionItem.onFavouriteClick(id);
  };

  const getFavouritesState = (): string => {
    if (optionItem?.favouritesEnabled) {
      return optionItem.isFavourite ? 'favourites-icon-selected' : 'favourites-icon-not-selected';
    }
    return '';
  };

  return (
    <>
      <MenuItem onClick={(e) => handleClick(e, optionItem)} className="dropdown-menu-item">
        <span className="text-body2 dropdown-menu-item__title">{optionItem.title}</span>
        {optionItem.favouritesEnabled && (
          <div className={getFavouritesState()}>
            <Button
              withIcon
              color="secondary"
              size="small"
              onClick={(e) => handleFavouritesClick(e, optionItem.id)}
            >
              {optionItem.favouritesEnabled && optionItem.favouritesTranslations ? (
                <Tooltip
                  title={
                    optionItem.isFavourite
                      ? optionItem.favouritesTranslations.remove
                      : optionItem.favouritesTranslations.add
                  }
                >
                  <Icon iconName={icons.star} />
                </Tooltip>
              ) : (
                ''
              )}
            </Button>
          </div>
        )}
        {optionItem.options?.length && <Icon iconName={icons.menuRight} />}
      </MenuItem>
      {optionItem.options?.length && (
        <Menu
          id="dropdown-sub-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {optionItem.options.map((item) => (
            <DropdownMenuItem
              favouritesEnabled={optionItem.favouritesEnabled}
              onFavouriteClick={optionItem.onFavouriteClick}
              {...item}
              onSelected={(i): void => {
                setAnchorEl(null);
                optionItem.onSelected(i);
              }}
            />
          ))}
        </Menu>
      )}
    </>
  );
};
