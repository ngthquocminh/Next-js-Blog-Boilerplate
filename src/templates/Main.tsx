import React, { ReactNode } from 'react';

import { Navbar } from '../navigation/Navbar';
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
      <div className="w-full text-gray-700 px-3 md:px-0 pt-20">
        {props.meta}
        <div className="mx-auto">
          <div className="text-xl py-5">{props.children}</div>
        </div>
      </div>

      <div className="w-full text-gray-700 px-3 md:px-0 footer-bg-color pt-6 pb-6">
        <div className="max-w-screen-md mx-auto text-center py-8 text-sm text-right flex flex-col md:flex-row gap-16 md:gap-16">
          <div className="md:w-2/5">
            <img
              src="/logo_dark.png"
              className="ml-auto mr-auto h-12 mb-8 mt-8"
              alt="tn7 solutions logo"
            />
            <p className="text-center">
              Giải pháp định cư Canada & Hoa Kỳ <br /> qua du học hoặc đầu tư
            </p>
          </div>
          <div className="md:w-3/5 text-center md:text-left justify-center flex flex-col">
            <div className="my-6 text-center md:text-left justify-center flex flex-col">
              <p className="text-lg">Liên hệ</p>
              <p className="leading-6">
                <b>
                  <u>Địa chỉ:</u>
                </b>{' '}
                {props.config.contact.address}
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
          <div className="mt-6 text-center md:text-right">
            © Copyright {new Date().getFullYear()} {props.config.seo.site_name}.
          </div>
        </div>
      </div>
    </div>
  );
};
export { Main };
