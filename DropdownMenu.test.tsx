import React from 'react';
import {
  render, fireEvent, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { DropdownMenu } from './DropdownMenu';

describe('DropdownMenu test', () => {
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
      option: [
        {
          description: 'Account Inquiry',
          optionID: 'ACCOUNT',
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
          ],
        },
      ],
    },
  ];

  const recursive = (array: any): any => array.map((item: any) => ({
    options: item.option ? recursive(item.option) : null,
    id: item.optionID,
    title: item.description,
  }));

  const handleClick = jest.fn();
  const setAnchorEl = jest.fn();

  afterEach(cleanup);

  test('render', async () => {
    const { container } = render(
      <DropdownMenu
        anchorEl={null}
        setAnchorEl={setAnchorEl}
        items={recursive(menuItems)}
        selectMenuItem={handleClick}
      />,
    );
    expect(container).toBeDefined();
    expect(container).toBeVisible();
    expect(container).toBeInTheDocument();
  });

  test('events fired', async () => {
    const { container, getByRole, getAllByRole } = render(
      <DropdownMenu
        anchorEl={null}
        setAnchorEl={setAnchorEl}
        items={recursive(menuItems)}
        selectMenuItem={handleClick}
      />,
    );
    fireEvent.click(container);
    waitFor(() => {
      expect(getByRole("menu")).toBeDefined();
      expect(getByRole("menu")).toBeVisible();
      expect(getAllByRole("menu")).toHaveLength(1);
    }, { timeout: 250 });

    waitFor(() => {
      expect(getAllByRole("menuitem")).toBeDefined();
      expect(getAllByRole("menuitem")).toBeVisible();
      expect(getAllByRole("menuitem")).toHaveLength(2);
    }, { timeout: 250 });

    fireEvent.click(document.querySelectorAll(".icon")[0]);
    waitFor(() => expect(setAnchorEl).toBeCalled(), { timeout: 250 });

    fireEvent.click(document.querySelectorAll("li")[0]);
    waitFor(() => {
      expect(handleClick).toBeCalled();
      expect(getByRole("menu")).not.toBeDefined();
      expect(getAllByRole("menuitem")).not.toBeDefined();
    }, { timeout: 250 });
  });
});
