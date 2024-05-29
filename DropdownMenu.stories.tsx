import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  Title, Description, Primary, Props,
} from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { DropdownMenu } from './DropdownMenu';
import { IDropdownMenuItem } from './DropdownMenu.types';
import { Icon, icons, SIZES } from '../Icon/Icon';
import '../theme/styles/theme.scss';
import './DropdownMenu.stories.scss';

storiesOf('Components / DropdownMenu', module).add(
  'DropdownMenu',
  () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuItems = [
      {
        description: 'Some option',
        optionID: 'F:RECEIVABLE_1',
        type: 'F',
        font: '0xe81b',
        option: null,
      },
      {
        description: 'A/R',
        optionID: 'M:RECEIVABLE',
        type: 'M',
        font: '0xe81b',
        isFavourite: true,
        option: [
          {
            description: 'Account Inquiry',
            optionID: 'ACCOUNT',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Print Statements',
            optionID: 'STMNT',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Receive Payments',
            optionID: 'PAYMENT',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Receive Or Modify Payments - Single Invoice',
            optionID: 'ALTPMT',
            type: 'F',
            font: null,
            option: null,
            isFavourite: true,
          },
          {
            description: 'Import Funder Payments',
            optionID: 'PAYMENT09',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Review Payment History',
            optionID: 'PAYMENTH',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Document Funding Status',
            optionID: 'FUNDING_STATUS02',
            type: 'F',
            font: null,
            option: null,
          },
          {
            description: 'Finance Charge Options',
            optionID: 'M:00069',
            type: 'M',
            font: null,
            option: [
              {
                description: 'Generate Finance Charges',
                optionID: 'GENFIN',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Review Finance Charges',
                optionID: 'REVFIN',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Post Finance Charges',
                optionID: 'POSTFIN',
                type: 'F',
                font: null,
                option: null,
              },
            ],
          },
          {
            description: 'Export Options',
            optionID: 'M:00073',
            type: 'M',
            font: null,
            option: [
              {
                description: 'Export Accounts Receivable',
                optionID: 'ACCTEXP',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Daily Close 1: Reconcile Payments',
                optionID: 'PAYEXPJ',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Daily Close 2: Export Cash Transactions',
                optionID: 'NAV_EXP_CASH',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Daily Close 3: Export Sales Transactions',
                optionID: 'NAV_EXP_SALES',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Navision Export Status (Sys Parm)',
                optionID: 'NAVISION01',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Cash In Store Register',
                optionID: 'CIS_REG01',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Export Patients',
                optionID: 'PATEXP1',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Export Invoices',
                optionID: 'INVEXP1',
                type: 'F',
                font: null,
                option: null,
                isFavourite: true,
              },
              {
                description: 'Export Payments & Deposits To SAP (Audionova)',
                optionID: 'C111601',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Export Invoices To SAP (Audionova)',
                optionID: 'C111602',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Outstanding SAP Invoice Inquiry (Audionova)',
                optionID: 'C111606',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Navision Exports',
                optionID: 'M:00085',
                type: 'M',
                font: null,
                option: [
                  {
                    description: "Export Purchase Orders To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_001',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Export Sales Invoices To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_002',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Export Claim Reversals To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_010',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Export Patient Details To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_003',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Export Stock Adjustments To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_004',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Export Order Receivings To NAV (Widex Int'l)",
                    optionID: 'C1010_NAVINT_004D',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                ],
              },
              {
                description: 'Navision Imports',
                optionID: 'M:00092',
                type: 'M',
                font: null,
                option: [
                  {
                    description: "Update Quantity Shipped On Order (Widex Int'l)",
                    optionID: 'C1010_NAVINT_006',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Update Retail Item Cost (Widex Int'l)",
                    optionID: 'C1010_NAVINT_007',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Apply Stock Adjustment (Widex Int'l)",
                    optionID: 'C1010_NAVINT_008',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Update Vendor Information (Widex Int'l)",
                    optionID: 'C1010_NAVINT_009',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Category/Inventory Import (Widex Int'l)",
                    optionID: 'C1010-01',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                  {
                    description: "Receiving Import (Widex Int'l)",
                    optionID: 'C1010-02',
                    type: 'F',
                    font: null,
                    option: null,
                  },
                ],
              },
            ],
          },
          {
            description: 'Payment Plans',
            optionID: 'M:00099',
            type: 'M',
            font: null,
            option: [
              {
                description: 'Export Payments (Bay Audiology Australia)',
                optionID: 'C1001PPI05',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Import Payments (Bay Audiology Australia)',
                optionID: 'C1001PPI07',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Payment Plan Inquiry (Bay Audiology Australia)',
                optionID: 'C1001PPI06',
                type: 'F',
                font: null,
                option: null,
              },
              {
                description: 'Customer Payment Plan Maintenance (Bay Audiology Australia)',
                optionID: 'C1001PPI08',
                type: 'F',
                font: null,
                option: null,
              },
            ],
          },
        ],
      },
    ];

    const recursive = (array: any): any => array.map((item: any) => ({
      options: item.option ? recursive(item.option) : null,
      id: item.optionID,
      title: item.description,
      isFavourite: item.isFavourite,
      isFavouriteEnabled: item.isFavouriteEnabled,
    }));

    const openMenu = (event: any): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClick = (item: IDropdownMenuItem): void => {
      action('Menu option = ')(item);
    };

    return (
      <>
        <div className="stories__dropdown-menu">
          <div className="list-item" role="presentation" onClick={openMenu}>
            <Icon iconName={icons.analytics} size={SIZES.MD} />
          </div>
        </div>
        <DropdownMenu
          favouritesEnabled={boolean('favouritesEnabled', true)}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          items={recursive(menuItems)}
          selectMenuItem={handleClick}
          onFavouriteClick={(e) => console.warn('fav click', e)}
          favouritesTranslations={{
            add: 'Add to Favorites',
            remove: 'Remove from Favorites',
          }}
        />
      </>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <Title>DropdownMenu</Title>
          <Description>Dropdown Menu component</Description>
          <Primary name="DropdownMenu" />
          <Props of={DropdownMenu} />
        </>
      ),
    },
  },
);
