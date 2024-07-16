import React, { ReactNode } from 'react';

import Script from 'next/script';

import { Navbar } from '../navigation/Navbar';
import Messenger from '../svg/Messenger';
import { IAppConfig } from '../utils/Content';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  config: IAppConfig;
};

const Main = (props: IMainProps) => {
  return (
    <div className="antialiased w-full relative">
      <Navbar config={props.config}></Navbar>
      <div className="w-full text-gray-700 px-3 md:px-0">
        {props.meta}
        <div className="mx-auto">
          <div className="text-xl">{props.children}</div>
        </div>
      </div>
      <div className="w-full text-gray-700 px-3 md:px-0 footer-bg-color">
        <div className="max-w-screen-md mx-auto text-center py-8 text-sm text-right flex flex-col md:flex-row gap-16 md:gap-16">
          <div className="md:w-2/6">
            <img
              src="/tn7_logo.png"
              className="ml-auto mr-auto h-12 mb-8 mt-8"
              alt="tn7 solutions logo"
            />
            <p className="text-center">
              Giải pháp định cư Canada & Hoa Kỳ <br /> qua du học hoặc đầu tư
            </p>
          </div>
          <div className="md:w-4/6 text-center md:text-left justify-center flex flex-col">
            <div className="my-6 text-center md:text-left justify-center flex flex-col">
              <p className="text-lg">Liên hệ</p>
              <p className="leading-6">
                <b>
                  <u>Địa chỉ (trụ sở):</u>
                </b>{' '}
                {props.config.contact.address1}
              </p>
              <p className="leading-6">
                <b>
                  <u>Địa chỉ (chi nhánh):</u>
                </b>{' '}
                {props.config.contact.address2}
              </p>
              <p className="leading-6">
                <b>
                  <u>Điện thoại:</u>
                </b>{' '}
                {props.config.contact.phone}
              </p>
              <p className="leading-6">
                <b>
                  <u>E-mail:</u>
                </b>{' '}
                {props.config.contact.email}
              </p>
            </div>
            <div className="my-6 text-center md:text-left justify-center flex flex-col">
              <p className="text-lg">Đường dẫn</p>
              {props.config.footer.links.map(({ name, url }) => (
                <a key={name} className="leading-6" href={url}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-700 px-3 md:px-0 footer-bg-color border-t border-gray-300">
        <div className="max-w-screen-md mx-auto text-center pb-8 pt-4 text-sm text-right">
          <ul className="flex gap-7 items-right justify-center md:justify-end">
            <li className="social-icons__item">
              <a
                className="h-5 flex gap-1"
                href="https://www.facebook.com/groups/dinhcunhanhgon"
                aria-describedby="a11y-external-message"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-facebook h-5 w-5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#444"
                    d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"
                  ></path>
                </svg>
                <p className="text-black hover:decoration-none">Group</p>
              </a>
            </li>
            <li className="social-icons__item">
              <a
                className="h-5 flex gap-1"
                href="https://www.facebook.com/TN7Solutions/"
                aria-describedby="a11y-external-message"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-facebook h-5 w-5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#444"
                    d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"
                  ></path>
                </svg>
                <p className="text-black hover:decoration-none"> Fanpage </p>
              </a>
            </li>
          </ul>
          <div className="mt-6 text-center md:text-right flex gap-5">
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=efbc5d8a-2a2c-4902-b40e-86ddbb56eb15"
              title="DMCA.com Protection Status"
              className="dmca-badge ml-auto"
            >
              {' '}
              <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=efbc5d8a-2a2c-4902-b40e-86ddbb56eb15"
                alt="DMCA.com Protection Status"
              />
            </a>{' '}
            <Script
              id="dmca-script"
              src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
            >
              {' '}
            </Script>
            <p>
              © Copyright {new Date().getFullYear()}{' '}
              {props.config.seo.site_name}.
            </p>
          </div>
        </div>
      </div>
      <a
        className="shadow-lg hover:shadow-xl fixed bottom-6 right-6 w-16 h-16 bg-[#0084ff] rounded-full flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110"
        href="https://m.me/161702587034414"
        target="_blank"
        rel="noreferrer"
      >
        <Messenger className="w-10 h-10 fill-current text-white" />
      </a>
    </div>
  );
};
export { Main };
