import React from 'react';

import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import Canada from '../svg/Canada';
import Liberty from '../svg/Liberty';
import { Main } from '../templates/Main';
import { IAppConfig, getDataConfig } from '../utils/Content';
import Booking from '../layout/Booking';


interface IhomeProps {
  config: IAppConfig;
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
      <Content>
        {/* Into */}
        <div className="pt-16 pb-8 relative mt-12 mb-6">
          <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 pointer-events-none -z-1">
            <div className="relative w-1000px">
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
          <h1 className="font-bold text-center text-gray-900">
            
            <span className="text-3xl md:text-5xl font-extrabold">
            {props.config.header.title.split("|")[0]}
            </span>
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent font-extrabold leading-none">
            {props.config.header.title.split("|")[1]}
            </span>
            <br />
            <span className="text-xl md:text-3xl">{props.config.header.title.split("|")[2]}</span>
          </h1>
          <div className="text-xl text-center max-w-lg mx-auto my-10">
            {props.config.header.description}
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
                    Ưu tiên tư vấn chọn ngành cho các học viên bởi hệ thống AI
                    thông minh cua Hoa Kỳ cùng kinh nghiệm của các chuyên gia hàng
                    đầu để cho ra những giải pháp tối ưu về định cư, du học cho
                    học viên và gia đình.
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
          <div className=" procedures-section-bg absolute h-screen w-screen"></div>
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-3xl font-bold">
              TN7 Solutions
              <br />
              giúp bạn định cư hoặc du học
            </h2>
            <p className="text-xl text-gray-600">
              với mức chi phí tiết kiệm và thời gian nhanh chóng nhờ:
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-4 lg:grid-cols-4 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
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
                Giáo viên tư vấn
              </h4>
              <p className="text-gray-600 text-center h-24 text-base">
                Thuộc các trường TOP đầu của Mỹ và Canada
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
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
                Đội ngũ luật sư
              </h4>
              <p className="text-gray-600 text-center h-24 text-base">
                Bạn sẽ được hỗ trợ bởi đội ngũ luận sư di trú đến từ Mỹ và Canada
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
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
                Đào tạo toàn diện
              </h4>
              <p className="text-gray-600 text-center h-24 text-base">
                Trang bị toàn bộ kỹ năng từ bước nộp hồ sơ tới khi phỏng vấn, và
                tư vấn săn những học bổng giá trị
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md border duration-300 ease-in-out hover:shadow-lg">
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
                Định cư tiết kiệm
              </h4>
              <p className="text-gray-600 text-center h-24 text-base">
                Cả gia đình cùng đi, với mức phí thật tiết kiệm
              </p>
            </div>
          </div>
        </div>
        {/* Booking */}
        <div id="booking" className="md:pt-20 my-6">
          <div className="">
            <div className="relative bg-gray-900 py-8 px-8 md:py-28 md:px-12 shadow-2xl overflow-hidden aos-init aos-animate">
              <div className="mx-auto max-w-screen-lg relative flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="text-center lg:text-left lg:w-3/5">
                  <h3 className="h3 text-white text-3xl font-bold mb-2">
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
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-lg border duration-300 ease-in-out">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 3"
                viewBox="0 0 128 128"
                x="0px"
                y="0px"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                fill="rgba(49, 130, 206, 1)"
              >
                <g data-name="Group">
                  <path
                    data-name="Compound Path"
                    d="M104.78223,75.85107V56.95313H96.49365a35.69427,35.69427,0,0,0-3.1792-7.71191l5.87012-5.87061L85.81836,30.00439,79.959,35.94873a34.18584,34.18584,0,0,0-7.71045-3.17334V24.41992H53.35107V32.708a35.69542,35.69542,0,0,0-7.7124,3.17969l-5.87012-5.87061L26.415,43.37061l5.85937,5.85986a34.18533,34.18533,0,0,0-3.18018,7.72266H20.81738V75.85107H29.106a35.69811,35.69811,0,0,0,3.1792,7.7124L26.415,89.43359l13.35352,13.35352,5.85938-5.85938a34.20753,34.20753,0,0,0,7.72314,3.18018v8.27686H72.24854v-8.28857a35.70391,35.70391,0,0,0,7.7124-3.1792l5.87012,5.87012L99.18457,89.43359,93.3252,83.57373a34.17609,34.17609,0,0,0,3.18018-7.72266ZM62.7998,89.61914a23.217,23.217,0,1,1,23.21729-23.2168A23.24323,23.24323,0,0,1,62.7998,89.61914Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M7.45215,85.96631A2.50066,2.50066,0,0,1,5.064,84.20166,60.462,60.462,0,0,1,52.91016,6.80615a2.5,2.5,0,1,1,.8125,4.93359A55.46261,55.46261,0,0,0,9.84229,82.73a2.50162,2.50162,0,0,1-2.39014,3.23633Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M62.7998,126.8042a60.306,60.306,0,0,1-46.2417-21.53955,2.5,2.5,0,0,1,3.82617-3.21875,55.40608,55.40608,0,0,0,84.374.53662,2.4999,2.4999,0,1,1,3.78516,3.2666A60.38355,60.38355,0,0,1,62.7998,126.8042Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M116.88428,89.62256a2.50117,2.50117,0,0,1-2.334-3.395A55.45435,55.45435,0,0,0,72.22461,11.79785a2.49977,2.49977,0,1,1,.84424-4.92773A60.45382,60.45382,0,0,1,119.21924,88.0166,2.50089,2.50089,0,0,1,116.88428,89.62256Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M53.56348,17.3501a2.5,2.5,0,0,1-1.76758-4.26758l3.68555-3.686L51.54883,5.46338A2.49973,2.49973,0,0,1,55.084,1.92822l7.46875,7.46826-7.22168,7.22119A2.49107,2.49107,0,0,1,53.56348,17.3501Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M114.25537,93.95166l-3.83984-9.46289a2.49985,2.49985,0,0,1,4.63281-1.87988l1.96,4.83008,5.1543-2.09131a2.49985,2.49985,0,0,1,1.87988,4.63281Z"
                  ></path>
                  <path
                    data-name="Path"
                    d="M14.27588,109a2.5019,2.5019,0,0,1-2.44678-3.02539l2.21729-10.32715L24.03125,97.791a2.50006,2.50006,0,0,1-1.0498,4.88867l-5.09619-1.09375-1.16748,5.43848A2.501,2.501,0,0,1,14.27588,109Z"
                  ></path>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Xây dựng lộ trình du học Mỹ
              </h4>
              <p className="text-gray-600 text-center h-32 text-base">
                Hướng dẫn từng bước cách chuẩn bị lộ trình săn học bổng du học Mỹ
                hiệu quả và chuẩn xác nhất từ các chuyên gia, cố vấn từ Mỹ.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-lg border duration-300 ease-in-out">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 64 64"
                x="0px"
                y="0px"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                fill="rgba(49, 130, 206, 1)"
              >
                <path d="M19.223,11,9,23.088A30.9,30.9,0,0,0,24.213,49.276L32,53.841l7.787-4.565A30.9,30.9,0,0,0,55,23.066L45.581,11ZM46.25,22.83a5.893,5.893,0,0,1-.882,7.847l-4.361,3.877A3,3,0,0,0,40,36.8V40h2a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H22a1,1,0,0,1-1-1V41a1,1,0,0,1,1-1h2V38.243a5.973,5.973,0,0,0-1.117-3.487l-1.9-2.661A8.018,8.018,0,0,1,19.67,25.77l2.014-9.4A3.015,3.015,0,0,1,24.617,14H26a2.984,2.984,0,0,1,1.116.22A3,3,0,0,1,30,12h6a3,3,0,0,1,2.816,2H41a3,3,0,0,1,3,3v3.945A5.889,5.889,0,0,1,46.25,22.83Z"></path>
                <path d="M16.476,6,4,21.353a37.538,37.538,0,0,0,18.483,31.91L32,58.841l9.515-5.578A37.536,37.536,0,0,0,60,21.332L48.5,6ZM57,22.724A32.9,32.9,0,0,1,40.8,51l-8.293,4.862a1,1,0,0,1-1.012,0L23.2,51A32.9,32.9,0,0,1,7,22.724a1,1,0,0,1,.236-.645L18,9.354A1,1,0,0,1,18.759,9h27.31a1,1,0,0,1,.788.385l9.931,12.724A1,1,0,0,1,57,22.724Z"></path>
                <rect x="23" y="42" width="18" height="2"></rect>
                <path d="M39.7,22.77,37.447,23.9A1,1,0,0,1,37,24H34.2a1.2,1.2,0,0,0-.235,2.373l2.9.579,1.694-.847.894,1.79-2,1a.991.991,0,0,1-.643.085l-1.655-.33-.061.023a3.939,3.939,0,0,0-2.446,3l-1.971-.336a5.931,5.931,0,0,1,1.88-3.395A3.206,3.206,0,0,1,31,25.2a3.168,3.168,0,0,1,.238-1.2H25a1,1,0,0,1-.948-.684l-1-3,1.9-.632L25.721,22H27V17a1,1,0,0,0-1-1H24.617a1,1,0,0,0-.978.79l-2.014,9.4a6.017,6.017,0,0,0,.984,4.745l1.9,2.661A7.957,7.957,0,0,1,26,38.243V40H38V36.8a5,5,0,0,1,1.679-3.737l4.361-3.877A3.906,3.906,0,0,0,39.7,22.77Z"></path>
                <path d="M32,14H30a1,1,0,0,0-1,1v7h3Z"></path>
                <path d="M42,20.386V17a1,1,0,0,0-1-1H39v4.9A5.9,5.9,0,0,1,42,20.386Z"></path>
                <path d="M36.764,22,37,21.882V15a1,1,0,0,0-1-1H34v8.02c.067,0,.13-.02.2-.02Z"></path>
                <polygon points="60 3 58 3 58 5 56 5 56 7 58 7 58 9 60 9 60 7 62 7 62 5 60 5 60 3"></polygon>
                <rect x="58" y="12" width="2" height="2"></rect>
                <polygon points="60 56 58 56 58 58 56 58 56 60 58 60 58 62 60 62 60 60 62 60 62 58 60 58 60 56"></polygon>
                <polygon points="4 51 6 51 6 49 8 49 8 47 6 47 6 45 4 45 4 47 2 47 2 49 4 49 4 51"></polygon>
                <rect x="8" y="55" width="2" height="2"></rect>
                <rect x="18" y="58" width="2" height="2"></rect>
                <rect x="42" y="58" width="2" height="2"></rect>
                <rect x="58" y="46" width="2" height="2"></rect>
                <polygon points="4 14 6 14 6 12 8 12 8 10 6 10 6 8 4 8 4 10 2 10 2 12 4 12 4 14"></polygon>
                <rect x="6" y="2" width="2" height="2"></rect>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Tham gia hoạt động ngoại khoá độc quyền
              </h4>
              <p className="text-gray-600 text-center h-32 text-base">
                Học sinh được tham gia các hoạt động ngoại khoá: tình nguyện, khởi
                nghiệp, lập trình,... giúp tạo ấn tượng tốt cho hồ sơ ứng tuyển
                đại học Mỹ.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-lg border duration-300 ease-in-out">
              <svg
                className="w-14 h-14 p-1 -mt-1 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 756.98201 728.01471"
                version="1.1"
                x="0px"
                y="0px"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                fill="rgba(49, 130, 206, 1)"
              >
                <g transform="translate(-65.460806,-97.171706)">
                  <path d="m 131.52181,97.171706 c -36.493004,0 -66.061004,29.510404 -66.061004,65.940704 l 0,596.2543 c 0,36.244 29.568,65.8197 66.061004,65.8197 l 285.824,0 c 120.772,0 218.792,-98.1472 218.792,-218.6712 l 0,-163.5188 -15.393,-15.3938 c -0.248,0 -0.239,-0.1775 -0.486,-0.3636 l -7.758,7.7577 0,171.5185 -195.155,0 0,195.1552 -285.824,0 c -23.46,0 -42.304004,-18.9716 -42.304004,-42.1828 l 0,-596.2541 c 0,-23.2111 18.844004,-42.425 42.304004,-42.425 l 438.796,0 c 23.212,0 42.183,19.2139 42.183,42.425 l 0,65.3344 23.637,-23.758 0,-41.6975 c 0,-36.4924 -29.574,-65.940704 -65.82,-65.940704 l -438.796,0 z m 607.042,59.152404 c -12.645,-0.032 -25.291,4.7738 -34.91,14.4245 l 69.942,69.9411 c 19.176,-19.3013 19.18,-50.5183 -0.122,-69.8196 -9.62,-9.6507 -22.264,-14.515 -34.91,-14.546 z m -48.242,27.3946 -269.824,269.8232 69.94,69.8198 269.823,-269.8234 -69.939,-69.8196 z m -213.701,1.4548 c -6.067,0 -12.226,2.2851 -16.849,6.9087 l -128.488,128.4879 -45.456,-45.456 c -9.248,-9.2471 -24.33,-9.2471 -33.576,0 -9.247,9.1853 -9.247,24.2707 0,33.4557 l 62.305,62.3039 c 4.654,4.6548 10.644,6.9094 16.727,6.9094 6.02,0 12.073,-2.2546 16.728,-6.9094 l 145.337,-145.3358 c 9.246,-9.185 9.246,-24.2704 0,-33.4557 -4.627,-4.6236 -10.663,-6.9087 -16.728,-6.9087 z m 331.642,80.1225 c -3.631,0 -7.299,1.3288 -10.061,4.1215 l -11.273,11.394 -13.697,-13.6972 -57.457,57.4558 13.699,13.6971 -68.729,68.6074 -9.576,-9.4546 c -3.786,-3.7856 -9.973,-3.7856 -13.697,0 -3.785,3.7859 -3.785,9.9113 0,13.6971 l 29.576,29.5762 13.697,-13.6971 68.729,-68.7285 57.457,-57.3346 11.393,-11.3938 c 5.461,-5.5235 5.523,-14.5983 0,-20.1218 -2.762,-2.7927 -6.431,-4.1215 -10.061,-4.1215 z m -654.074,182.9129 0,44.6071 196.732,0 0,-44.6071 -196.732,0 z m 252.49,19.5154 -25.577,95.396 95.519,-25.5763 -69.942,-69.8197 z m -252.49,56.2437 0,44.4859 196.732,0 0,-44.4859 -196.732,0 z m 0,72.1226 0,44.4859 196.732,0 0,-44.4859 -196.732,0 z"></path>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Tham gia hoạt động ngoại khoá độc quyền
              </h4>
              <p className="text-gray-600 text-center h-32 text-base">
                Học sinh được tham gia các hoạt động ngoại khoá: tình nguyện, khởi
                nghiệp, lập trình,... giúp tạo ấn tượng tốt cho hồ sơ ứng tuyển
                đại học Mỹ.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-lg border duration-300 ease-in-out">
              <svg
                className="w-14 h-14 p-1 -mt-1 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 66 66"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                fill="rgba(49, 130, 206, 1)"
              >
                <path d="M17.72,8.14c0-1.62-1.32-2.94-2.94-2.94s-2.94,1.32-2.94,2.94v3.31h5.88V8.14z"></path>
                <path d="M37.57,20.91c0.2,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29l5.89-5.89c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0  l-5.18,5.18l-1.8-1.8c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41L37.57,20.91z"></path>
                <path d="M30.6,54.92v3.94c0,1.51-0.57,2.89-1.5,3.94h30.56c2.17,0,3.94-1.77,3.94-3.94v-3.94H30.6z"></path>
                <polygon points="31.73,44.14 17.16,39.57 2.6,44.14 17.16,48.7 "></polygon>
                <path d="M25.69,48.13l-8.23,2.58c-0.2,0.06-0.4,0.06-0.6,0l-8.23-2.58v5.32c5.54,1.8,11.52,1.8,17.06,0V48.13z"></path>
                <path d="M5.4,50.69v-3.57l-2-0.63v4.2c-0.59,0.35-1,0.99-1,1.73c0,1.1,0.9,2,2,2c1.11,0,2-0.9,2-2C6.4,51.68,6,51.04,5.4,50.69z"></path>
                <path d="M29.59,52.92h30.63V8.15c0-2.73-2.21-4.94-4.94-4.94h-40.5c2.73,0,4.94,2.21,4.94,4.94v30.14l15.65,4.9  c0.93,0.29,0.93,1.62,0,1.91l-6.98,2.18c-0.41,0.14-0.7,0.52-0.7,0.96v5.93c0,0.44-0.28,0.82-0.69,0.95l-0.69,0.23  c-2.15,0.7-4.36,1.14-6.59,1.34v1.17c0,2.73,2.21,4.93,4.93,4.94c0,0,0,0,0.01,0c2.17,0,3.94-1.77,3.94-3.94v-4.94  C28.6,53.37,29.04,52.92,29.59,52.92L29.59,52.92z M56.09,49.12H43.65c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h12.44  c0.55,0,1,0.45,1,1C57.09,48.67,56.64,49.12,56.09,49.12z M56.09,45.01H39.65c-0.56,0-1-0.45-1-1c0-0.55,0.44-1,1-1h16.44  c0.55,0,1,0.45,1,1C57.09,44.56,56.64,45.01,56.09,45.01z M56.09,38.9c0.55,0,1,0.45,1,1s-0.45,1-1,1H39.65c-0.56,0-1-0.45-1-1  s0.44-1,1-1H56.09z M47.31,28.53l-1.3,4.86l-2.74-4.66c2.38-0.68,4.47-2.1,5.99-3.98l2.94,5.01L47.31,28.53z M39.97,7.32  c5.49,0,9.94,4.45,9.94,9.94c0,5.49-4.45,9.94-9.94,9.94s-9.94-4.45-9.94-9.94C30.03,11.77,34.48,7.32,39.97,7.32z M33.93,33.39  l-1.31-4.86l-4.88,1.23l2.94-5.01c1.52,1.88,3.6,3.29,5.98,3.98L33.93,33.39z"></path>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Luyện thi chứng chỉ quốc tế
              </h4>
              <p className="text-gray-600 text-center h-32 text-base">
                Đào tạo các chứng chỉ quốc tế như: IELTS, TOEFL, SAT, ACT, AP,...
                với đội ngũ giáo viên người bản xứ, tốt nghiệp các trường đại học
                top đầu Mỹ.
              </p>
            </div>
          </div>
        </div>
        {/* Blogs */}
        <div className="relative mx-auto max-w-screen-lg py-12 md:py-20 max-w-6xl my-6">
          <h4 className="text-3xl font-bold leading-snug tracking-tight mb-1 text-center">
            Nội dung nổi bật
          </h4>
          <div className="pt-20 max-w-screen-lg mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['slug-01', 'Blog 01 Title', 'Feb 2, 2024'],
              ['slug-02', 'Blog 02 Title', 'Feb 2, 2024'],
              ['slug-03', 'Blog 03 Title', 'Feb 2, 2024'],
              ['slug-03', 'Blog 03 Title', 'Feb 2, 2024'],
              ['slug-03', 'Blog 03 Title', 'Feb 2, 2024'],
              ['slug-03', 'Blog 03 Title', 'Feb 2, 2024'],
            ].map(([slug, title, date]) => (
              <Link href="/posts/[slug]" as={`/posts/${slug}`} key={slug}>
                <a
                  rel="noopener noreferrer"
                  className="rounded max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-md duration-300 ease-in-out hover:shadow-xl"
                >
                  <img
                    role="presentation"
                    alt="blog"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/480x360?1"
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
                      {title}
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      {format(new Date(date), 'LLL d, yyyy')}
                    </span>
                    <p className="text-base text-gray-700">
                      1Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                      neglegentur, ex has tantas percipit perfecto. At per tempor
                      albucius perfecto, ei probatus consulatu patrioque mea, ei
                      vocent delicata indoctum pri.
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Content>
    </Main>
  );
}

export const getStaticProps: GetStaticProps<IhomeProps> = async () => {
  const config = getDataConfig();
  return {
    props: {
      config,
    },
  };
};

export default Home;
