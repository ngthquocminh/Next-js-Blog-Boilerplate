import { title } from "process";
import React, { ReactNode } from "react";

type INavbarProps = {
};

const Navbar = (props: INavbarProps) => (
    <header className="relative top-nav border-b flex flex-row items-center justify-center w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white py-4">
      <div className="h-10 shrink-0 ml-8 md:absolute md:left-4 md:top-1/2 md:-translate-y-2/4 flex items-center">
        <a className="block" aria-label="Cruip" href="/">
          <img src="/logo_dark.png" className="md:h-8 h-10"/>
        </a>
      </div>
      <input id="menu-toggle" className="hidden" type="checkbox" />
      <label className='absolute menu-button-container absolute right-2 top-1/2 -translate-y-2/4 cursor-pointer block md:hidden md:h-full w-10 h-10 flex flex-column justify-center items-center' htmlFor="menu-toggle">
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 menu-button' id="menu-button"></div>
      </label>

      <ul className="menu list-none md:max-w-sm w-full text-center">
        {[
            ['Trang chủ', '/'],
            ['Câu chuyện thành công', '/#'],
            ['Du học', '/#'],
            ['Định cư', '/#'],
            ['Hỏi đáp', '/#'],
            ['Tư vấn', '/#'],
            ['Học bổng & Khuyến mãi', '/#'],
            ['Bài viết', '/blogs'],
          ].map(([title, url]) => (
            <li key={title} className="mx-1 whitespace-nowrap md:inline-block overflow-hidden md:text-xs text:sm" >
              <a href={url} className="text-gray-800 w-full">{title}</a>
            </li>
            ))
        }
      </ul>
      <div className="z-10 w0-hidden md:absolute md:right-4 md:top-1/2 md:-translate-y-2/4 text-sm font-bold md:flex flex-row">
        <a href="tel:0763771191" className="hover:no-underline text-white bg-blue-600 p-3 flex flex-row items-center gap-2 rounded-tl-full rounded-bl-full pl-5">
          <svg className="w-4 h-4" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
          <p>Gọi tư vấn</p>
        </a>
        <a href="#booking" className="hover:cursor-pointer text-white bg-red-400 p-3 flex flex-row items-center gap-2 rounded-tr-full rounded-br-full pr-5">
          <p>Đặt lịch hẹn</p>
          <svg className="w-4 h-4" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
        </a>
      </div>

    </header>
);

export { Navbar };
