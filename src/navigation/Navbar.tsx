import React, { useCallback, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { IAppConfig } from '../utils/Content';

interface INavbarProps {
  config: IAppConfig;
}

interface ILink {
  name: string;
  url: string;
}

function GroupPageLink({
  show,
  onToggle,
  name,
  urls,
}: {
  show: boolean;
  onToggle: Function;
  name: string;
  urls: Array<ILink>;
}) {
  const [visible, setVisible] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(visible);

  useEffect(() => {
    setVisible(show);
    console.log(name, show);
  }, [show]);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (visibleRef.current) {
        if (
          event.target &&
          dropdownMenuRef.current &&
          !dropdownMenuRef.current.contains(event.target as Node)
        ) {
          onToggle();
        }
      }
    },
    [dropdownMenuRef]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col" ref={dropdownMenuRef}>
      <div>
        <p
          onClick={() => onToggle()}
          className="text-gray-600 md:text-white w-full inline hover:underline hover:cursor-pointer select-none"
        >
          {name}
        </p>
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          fill="none"
          className="fill-current md:text-white text-gray-600 icon icon-chevron-down h-[7px] w-[7px] inline ml-1"
          viewBox="0 0 9 9"
        >
          <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z"></path>
        </svg>
      </div>
      <ul
        className={`${
          visible ? 'dropdown-shown ' : 'dropdown-hidden '
        } md:absolute md:translate-y-[26px] md:z-10 md:border-[1px] md:border-gray-300 md:bg-white px-2 font-sans text-sm font-normal text-blue-gray-500 md:shadow-lg md:shadow-blue-gray-500/10 focus:outline-none`}
      >
        {urls.map((u) => (
          <li
            key={u.name}
            className="md:text-start text-center block w-full overflow-hidden cursor-pointer select-none px-4 leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
          >
            <a href={u.url} className="no-underline text-gray-700">
              {u.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Navbar = (props: INavbarProps) => {
  const [menuDropdownId, setMenuDropdownId] = useState('');
  const menuDropdownIdRef = useRef(menuDropdownId);

  useEffect(() => {
    console.log('menuDropdownId', menuDropdownId);
    menuDropdownIdRef.current = menuDropdownId;
  }, [menuDropdownId]);

  const onToggleMenuDropdown = (id: string) => {
    console.log('onToggleMenuDropdown', id, menuDropdownId);
    if (menuDropdownIdRef.current !== id) setMenuDropdownId(id);
    else setMenuDropdownId('');
  };

  return (
    <header className="fixed top-0 top-nav shadow-lg flex flex-row items-center justify-center w-full z-30 transition duration-300 ease-in-out bg-blue-600 py-4 md:py-6">
      <div className="h-10 shrink-0 ml-8 md:absolute md:left-4 md:top-1/2 md:-translate-y-2/4 flex items-center">
        <Link className="block" aria-label="Cruip" href="/">
          <a>
            <img
              src="/logo_light.png"
              className="md:h-8 h-10"
              alt="TN7 Solutions"
            />
          </a>
        </Link>
      </div>
      <input id="menu-toggle" className="hidden" type="checkbox" />
      <label
        className="absolute menu-button-container absolute right-2 top-1/2 -translate-y-2/4 cursor-pointer block md:hidden md:h-full w-10 h-10 flex flex-column justify-center items-center"
        htmlFor="menu-toggle"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 menu-button"
          id="menu-button"
        ></div>
      </label>

      <ul className="menu list-none md:mx-80 w-full text-center shadow-lg md:shadow-none">
        {/* {props.config.navbar.links.map(({ name, url }) => (
        <li
          key={name}
          className="mx-2 whitespace-nowrap md:inline-block overflow-hidden md:text-xs font-bold text-base"
        >
          <a href={url} className="text-gray-600 md:text-white w-full">
            {name}
          </a>
        </li>
      ))} */}
        <li className="mx-2 whitespace-nowrap md:inline-block overflow-hidden md:text-xs font-bold text-base">
          <Link href="/">
            <a className="text-gray-600 md:text-white w-full">Trang chủ</a>
          </Link>
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block flex flex-col overflow-hidden md:text-xs font-bold text-base">
          <GroupPageLink
            show={menuDropdownId === 'du-hoc'}
            onToggle={() => onToggleMenuDropdown('du-hoc')}
            name={'Du học'}
            urls={[
              { name: 'Canada', url: '/blogs/category/du-hoc-canada' },
              { name: 'Mỹ', url: '/blogs/category/du-hoc-my' },
              // { name: 'Úc', url: '/blogs/category/du-hoc-uc' },
            ]}
          />
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block flex flex-col overflow-hidden md:text-xs font-bold text-base">
          <GroupPageLink
            show={menuDropdownId === 'lao-dong'}
            onToggle={() => onToggleMenuDropdown('lao-dong')}
            name={'Lao động'}
            urls={[
              { name: 'Canada', url: '/blogs/category/lao-dong-canada' },
              { name: 'Mỹ', url: '/blogs/category/lao-dong-my' },
              // { name: 'Úc', url: '/blogs/category/lao-dong-uc' },
            ]}
          />
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block flex flex-col overflow-hidden md:text-xs font-bold text-base">
          <GroupPageLink
            show={menuDropdownId === 'dinh-cu'}
            onToggle={() => onToggleMenuDropdown('dinh-cu')}
            name={'Định cư & Đầu tư'}
            urls={[
              { name: 'Canada', url: '/blogs/category/dinh-cu-dau-tu-canada' },
              { name: 'Mỹ', url: '/blogs/category/dinh-cu-dau-tu-my' },
              // { name: 'Úc', url: '/blogs/category/dinh-cu-dau-tu-uc' },
            ]}
          />
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block overflow-hidden md:text-xs font-bold text-base">
          <Link href="/hoi-dap">
            <a className="text-gray-600 md:text-white w-full">Hỏi đáp</a>
          </Link>
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block flex flex-col overflow-hidden md:text-xs font-bold text-base">
          <GroupPageLink
            show={menuDropdownId === 'tin-tuc'}
            onToggle={() => onToggleMenuDropdown('tin-tuc')}
            name={'Tin tức'}
            urls={[
              { name: 'Canada', url: '/blogs/category/tin-tuc-canada' },
              { name: 'Mỹ', url: '/blogs/category/tin-tuc-my' },
              // { name: 'Úc', url: '/blogs/category/tin-tuc-uc' },
            ]}
          />
        </li>
        <li className="mx-2 whitespace-nowrap md:inline-block overflow-hidden md:text-xs font-bold text-base">
          <Link href="/hop-tac">
            <a className="text-gray-600 md:text-white w-full">Hợp tác</a>
          </Link>
        </li>
      </ul>
      <div className="z-10 w0-hidden md:absolute md:right-4 md:top-1/2 md:-translate-y-2/4 text-xs font-bold md:flex flex-row">
        <a
          href="tel:0763771191"
          className="hover:no-underline text-white bg-blue-600 border-l border-t border-b border-white p-2 flex flex-row items-center gap-2 rounded-tl-full rounded-bl-full pl-4"
        >
          <svg
            className="w-3 h-3"
            fill="rgba(255,255,255,1)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <p>Gọi tư vấn</p>
        </a>
        <a
          href={`${props.config.seo.url}/#booking`}
          className="hover:cursor-pointer text-white bg-red-400 p-2 flex flex-row items-center gap-2 rounded-tr-full rounded-br-full pr-5 border-red-400"
        >
          <p>Đặt lịch hẹn</p>
          <svg
            className="w-3 h-3"
            fill="rgba(255,255,255,1)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export { Navbar };
