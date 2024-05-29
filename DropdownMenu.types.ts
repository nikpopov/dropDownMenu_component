import { DropdownMenuItem } from './DropdownMenuItem';

export interface IDropdownMenuItem {
  title: string;
  id: string;
  options?: IDropdownMenuItem[];
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  anchorEl: HTMLElement | null;
  // eslint-disable-next-line no-unused-vars
  setAnchorEl: (value: HTMLElement | null) => void;
  // eslint-disable-next-line no-unused-vars
  selectMenuItem?: (value: IDropdownMenuItem) => void;
  // eslint-disable-next-line no-unused-vars
  onFavouriteClick?: (value: string) => void;
  favouritesEnabled?: boolean;
  favouritesTranslations?: {
    add: string;
    remove: string;
  };
}
