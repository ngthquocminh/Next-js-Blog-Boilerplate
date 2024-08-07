import React from 'react';

import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Booking from '../layout/Booking';
import { Meta } from '../layout/Meta';
import Canada from '../svg/Canada';
import Liberty from '../svg/Liberty';
import { Main } from '../templates/Main';
import { imageKitExtract, parseDateString } from '../utils/Common';
import {
  IAppConfig,
  PostItems,
  getDataConfig,
  getPostBySlug,
} from '../utils/Content';

interface IhomeProps {
  config: IAppConfig;
  blogs: PostItems[];
}

const Home = (props: IhomeProps) => {
  return (
    <Main
      config={props.config}
      meta={
        <Meta
          title={props.config.seo.site_title}
          description={props.config.seo.site_description}
          config={props.config}
        />
      }
    >
      {/* Intro */}
      <div className="mt-12 pt-28 pb-24 relative mb-6 intro-has-bg">
        <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 pointer-events-none z-1">
          <div className="relative w-1000px hide-on-phone">
            <div className="absolute left-2 -translate-y-3/5 top-1/2 pointer-events-none">
              <Canada
                className="w-48 h-48 rotate-12"
                fill="rgba(255, 234, 234, 1)"
              ></Canada>
            </div>
            <div className="absolute right-2 -translate-y-3/5 top-1/2 pointer-events-none">
              <Liberty className="w-56 h-56"></Liberty>
            </div>
          </div>
        </div>
        <div className="bg-whitex bg-opacity-90 md:p-6 p-0 mx-auto max-w-[620px]">
          <h1 className="font-bold text-center text-gray-900 px-2">
            <span className="text-3xl md:text-5xl font-extrabold whitespace-nowrap">
              {props.config.header.title.split('|')[0]}
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-[#d94e38] bg-clip-text font-extrabold leading-none whitespace-nowrap">
              {props.config.header.title.split('|')[1]}
            </span>
            <br />
            <span className="text-lg md:text-3xl whitespace-nowrap">
              {props.config.header.title.split('|')[2]}
            </span>
          </h1>
          <div className="text-xl text-gray-900 text-center px-4 py-4 md:px-8 md:py-6 mx-auto my-10 bg-white bg-opacity-40">
            {/* {props.config.header.description.split('|')
            .map(p => <p className='text-xl'>{p}</p>)} */}
            <p>
              Những chuyên gia, luật sư hàng đầu về di trú sẽ đánh giá hồ sơ của
              bạn thật chi tiết và đưa ra những giải pháp{' '}
              <span className="whitespace-nowrap">tốt nhất</span>,{' '}
              <span className="whitespace-nowrap">hiệu quả </span>
              cả về thời gian và tài chính.
            </p>
          </div>
        </div>
      </div>
      {/* Why choose us */}
      <div className="relative mx-auto max-w-screen-lg mx-auto px-4 sm:px-6 my-6">
        <div className="pt-12 md:pt-20">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full hide-on-phone mx-auto md:col-span-4 lg:col-span-5 mb-8 md:mb-0 flex">
              <img
                className="my-auto"
                src="/assets/images/about-us.png"
                alt="TN7 Solutions"
              />
            </div>
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7 aos-init aos-animate md:order-1 pl-4"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-[60px] font-extrabold leading-none">
                  Chúng tôi
                  <br />
                  là ai?
                </h3>
                <p className="text-lg text-gray-600 text-justify">
                  TN7 Solutions cung cấp dịch vụ tư vấn miễn phí và giải quyết
                  các vấn đề liên quan đến du học, lao động, và định cư tại
                  Canada và Hoa Kỳ. Chúng tôi cam kết cung cấp giải pháp nhanh
                  chóng, hiệu quả và tiết kiệm chi phí. Bên cạnh đó, chúng tôi
                  còn cung cấp các dịch vụ bổ sung như luyện thi chứng chỉ ngoại
                  ngữ, săn học bổng, thuê nhà, mua xe, và tìm việc làm để giúp
                  bạn ổn định cuộc sống khi định cư ở nước ngoài. Hãy để TN7
                  giúp bạn vượt qua mọi khó khăn và mang lại sự an tâm cho quyết
                  định của bạn.
                </p>
              </div>
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-3xl font-bold">
                  Lý do chọn chúng tôi
                </h3>
                <p className="text-lg text-gray-600 text-justify">
                  TN7 Solutions chuyên về visa định cư Canada và Mỹ, cung cấp
                  dịch vụ từ đánh giá ban đầu đến chuẩn bị hồ sơ, hỗ trợ phỏng
                  vấn và các thủ tục liên quan. Đội ngũ chuyên gia giàu kinh
                  nghiệm cam kết giải quyết mọi vấn đề với tỷ lệ thành công lên
                  đến 100%, giúp khách hàng đạt được mục tiêu định cư một cách
                  suôn sẻ và thành công.
                </p>
              </div>
              <a
                href={`${props.config.seo.url}/#booking`}
                className="hover:cursor-pointer text-white bg-red-400 p-2 flex flex-row items-center justify-center gap-2 rounded-full pr-5 border-red-400 w-56 text-base"
              >
                <p>Đăng ký tư vấn ngay</p>
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
          </div>
        </div>
      </div>
      {/* Advantages */}
      <div className="relative mx-auto max-w-screen-lg mx-auto px-4 sm:px-6 my-6">
        <div className="pt-12 md:pt-20">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 aos-init aos-animate"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-3xl font-bold">
                  Lợi thế khi sử dụng dịch vụ <br /> TN7 Solutions
                </h3>
                <p className="text-lg text-gray-600">
                  Đội ngũ tư vấn là các chuyên gia hàng đầu, thời gian làm việc
                  nhanh chóng, dịch vụ hỗ trợ đa dạng.
                </p>
              </div>
              <div className="mb-8 md:mb-0">
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Nhanh
                    </div>
                    <div className="text-gray-600 text-base">
                      Hệ thống đánh giá nhanh nhu cầu, khả năng của từng trường
                      hợp
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Hiệu quả
                    </div>
                    <div className="text-gray-600 text-base">
                      Từ kết quả đánh giá, đội ngũ giáo viên và luật sư có kinh
                      nghiệm lâu năm sẽ tư vấn những giải pháp phù hợp nhất
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Tối ưu
                    </div>
                    <div className="text-gray-600 text-base">
                      Luôn ưu tiên việc định cư lâu dài cho học viên và gia
                      đình.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex">
              <img
                className="my-auto"
                src="/assets/images/passport-5288914_640.png"
                alt="TN7 Solutions"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Help */}
      <div className="mx-auto max-w-screen-lg py-12 md:py-20 relative my-6">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold">
            TN7 Solutions
            <br />
            giúp bạn định cư qua du học, đầu tư, tay nghề
          </h2>
          <p className="text-xl text-gray-600">
            {/* với mức chi phí tiết kiệm và thời gian nhanh chóng nhờ: */}
          </p>
        </div>
        <div className="max-w-sm mx-auto grid gap-4 lg:grid-cols-4 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
          <div className="relative flex flex-col h-64 items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
            <svg
              className="w-16 h-16 p-1 -mt-1 mb-2"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <g strokeWidth="2">
                  <path
                    className="stroke-current text-blue-300"
                    d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    d="M20.571 37.714h5.715L36.57 26.286h8"
                  ></path>
                  <path
                    className="stroke-current text-blue-300"
                    strokeLinecap="square"
                    d="M41.143 34.286l3.428 3.428-3.428 3.429"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    strokeLinecap="square"
                    d="M41.143 29.714l3.428-3.428-3.428-3.429"
                  ></path>
                </g>
              </g>
            </svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Đội ngũ luật sư
            </h4>
            <p className="text-gray-600 text-center h-24 text-base">
              Bạn sẽ được hỗ trợ bởi đội ngũ luật sư di trú đến từ Mỹ và Canada
            </p>
          </div>
          <div className="relative flex flex-col h-64 items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
            <svg
              className="w-16 h-16 p-1 -mt-1 mb-2"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <g strokeWidth="2" transform="translate(19.429 20.571)">
                  <circle
                    className="stroke-current text-white"
                    strokeLinecap="square"
                    cx="12.571"
                    cy="12.571"
                    r="1.143"
                  ></circle>
                  <path
                    className="stroke-current text-white"
                    d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                  ></path>
                  <path
                    className="stroke-current text-blue-300"
                    d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                  ></path>
                </g>
              </g>
            </svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Giáo viên tư vấn
            </h4>
            <p className="text-gray-600 text-center h-20 text-base">
              Thuộc các trường học TOP đầu của Mỹ và Canada
            </p>
          </div>
          <div className="relative flex flex-col h-64 items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
            <svg
              className="w-16 h-16 p-1 -mt-1 mb-2"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <g strokeWidth="2">
                  <path
                    className="stroke-current text-blue-300"
                    d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    strokeLinecap="square"
                    d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                  ></path>
                  <path
                    className="stroke-current text-blue-300"
                    d="M36.571 32H40"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    d="M24 32h3.429"
                    strokeLinecap="square"
                  ></path>
                </g>
              </g>
            </svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Tư vấn toàn diện
            </h4>
            <p className="text-gray-600 text-center h-24 text-base">
              Trang bị toàn bộ kỹ năng từ bước nộp hồ sơ tới phỏng vấn.
            </p>
          </div>
          <div className="relative flex flex-col h-64 items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
            <svg
              className="w-16 h-16 p-1 -mt-1 mb-2"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <g strokeWidth="2">
                  <path
                    className="stroke-current text-white"
                    d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                  ></path>
                  <path
                    className="stroke-current text-white"
                    d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                  ></path>
                  <path
                    className="stroke-current text-blue-300"
                    d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                    strokeLinecap="square"
                  ></path>
                </g>
              </g>
            </svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              An tâm định cư
            </h4>
            <p className="text-gray-600 text-center h-30 text-base">
              Hỗ trợ các dịch vụ tìm nhà ở, trường học, thuê xe và các vấn đề
              phát sinh khi khách hàng định cư
            </p>
          </div>
        </div>
      </div>
      {/* Booking */}
      <div id="booking" className="md:pt-20 my-6">
        <div className="">
          <div className="relative bg-gray-900 py-8 px-8 md:py-20 md:px-12 shadow-2xl overflow-hidden aos-init aos-animate">
            <div className="mx-auto max-w-screen-lg relative flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-center lg:text-left lg:w-3/5">
                <img
                  src="/logo_light.png"
                  className="mr-auto h-20 mb-4 mt-4"
                  alt="tn7 solutions logo"
                />
                <h3 className="h3 text-[#ff5603] text-3xl font-bold mb-2">
                  Tư vấn tận tâm và hoàn toàn miễn phí
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Đội ngũ luật sư và chuyên gia di trú luôn sẵn sàng hỗ trợ tư
                  vấn hồ sơ bước đầu giúp bạn tiết kiệm thời gian và chi phí.
                </p>
              </div>
              <Booking></Booking>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="relative mx-auto max-w-screen-lg py-12 md:py-20 max-w-6xl my-6">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            className="hide-on-phone"
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%"></stop>
                <stop stopColor="#EAEAEA" offset="77.402%"></stop>
                <stop stopColor="#DFDFDF" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128"></circle>
              <circle cx="155" cy="443" r="64"></circle>
            </g>
          </svg>
        </div>
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold">Dịch vụ của TN7 Solutions</h2>
        </div>
        <div className="max-w-sm mx-auto grid gap-4 lg:grid-cols-4 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
          <a
            href="https://tn7solutions.com/blogs/lo-trinh-du-hoc-dinh-cu-tai-canada-412024/"
            className="h-80 no-underline group relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl border duration-300 ease-in-out"
          >
            <img
              className="h-20 m-4"
              src="/assets/icons/study.png"
              alt="Lộ trình định cư theo diện tại Canada"
            />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
              Lộ trình định cư diện du học tại Canada
            </h4>
            <p className="text-gray-600 text-center text-base no-underline text-no-underline group-hover:text-no-underline">
              Giải pháp du học và mang theo cả gia đình đi định cư tại Canada.
            </p>
          </a>
          <a
            href="https://tn7solutions.com/blogs/qua-trinh-dinh-cu-theo-dien-tay-nghe-tai-canada-422024/"
            className="h-80 relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl border duration-300 ease-in-out"
          >
            <img
              className="h-20 m-4"
              src="/assets/icons/worker.png"
              alt="icon worker"
            />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
              Quá trình định cư theo diện tay nghề Canada
            </h4>
            <p className="text-gray-600 text-center text-base">
              Giải pháp định cư tay nghề phù hợp cho bạn và gia đình.
            </p>
          </a>
          <a
            href="https://tn7solutions.com/blogs/quy-trinh-dinh-cu-theo-dien-start-up-422024/"
            className="h-80 relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl border duration-300 ease-in-out"
          >
            <img
              className="h-20 m-4"
              src="/assets/icons/startup.png"
              alt="startup"
            />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
              Quy trình định cư theo diện start-up
            </h4>
            <p className="text-gray-600 text-center text-base">
              Định cư cùng gia đình với ý tưởng khởi nghiệp sáng tạo.
            </p>
          </a>
          <a
            href="https://tn7solutions.com/blogs/cac-dich-vu-ho-tro-di-kem-422024/"
            className="h-80 relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl border duration-300 ease-in-out"
          >
            <img
              className="h-20 m-4"
              src="/assets/icons/services.png"
              alt="icon service"
            />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
              Các dịch vụ hỗ trợ đi kèm
            </h4>
            <p className="text-gray-600 text-center text-base">
              Ngoài những dịch vụ chính, TN7 còn có những hỗ trợ khác, cùng bạn
              an tâm định cư.
            </p>
          </a>
        </div>
      </div>
      {/* Blogs */}
      <div className="relative mx-auto max-w-screen-lg py-12 md:py-20 max-w-6xl my-6">
        <h4 className="text-3xl font-bold leading-snug tracking-tight mb-1 text-center">
          Nội dung nổi bật
        </h4>
        <div className="pt-20 max-w-screen-lg mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.blogs.map((blog) => (
            <Link
              href="/blogs/[slug]"
              as={`/blogs/${blog.slug}`}
              key={blog.slug}
            >
              <a
                rel="noopener noreferrer"
                className="rounded max-w-sm mx-auto group hover:text hover:no-underline focus:no-underline shadow-md duration-300 ease-in-out hover:shadow-xl"
              >
                <img
                  role="presentation"
                  alt="blog"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={imageKitExtract(blog.image)?.url ?? ''}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <span className="text-xs dark:text-gray-600">
                    {format(parseDateString(blog.date), 'LLL d, yyyy')}
                  </span>
                  <p className="text-base text-gray-700">{blog.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<IhomeProps> = async () => {
  const config = getDataConfig();
  const posts = config.blogs.slugs
    .map((slug) =>
      getPostBySlug({ slug }, ['slug', 'title', 'description', 'date', 'image'])
    )
    .filter((p) => p !== null);
  return {
    props: {
      config,
      blogs: posts,
    },
  };
};

export default Home;
