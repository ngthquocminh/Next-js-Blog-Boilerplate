import React, { FormEvent, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { IAppConfig, getDataConfig } from '../utils/Content';

interface IhomeProps {
  config: IAppConfig;
}

interface ISubmitStatus {
  code: number;
  content?: { [key: string]: string };
}

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const HopTac = (props: IhomeProps) => {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<ISubmitStatus>({ code: 0 });

  useEffect(() => {
    setLoading(false);
  }, [submitStatus]);

  const coopRegiterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // setError(null) // Clear previous errors when a new request starts
    try {
      const formData = new FormData(event.currentTarget);
      const formDict: { [id: string]: string } = {};
      formData.forEach((value, key) => {
        formDict[key] = value as string;
      });

      const checkDict: { [id: string]: any } = {};
      if (!formDict.name || formDict.name.length < 3) {
        checkDict.name = 'Tên công ty không hợp lệ (>=3 ký tự)';
      }
      if (!formDict.subject || formDict.subject.length < 5) {
        checkDict.subject = 'Tên chủ đề không hợp lệ (>=5 ký tự)';
      }
      console.log('>>', formDict.email);
      if (!formDict.email || !isValidEmail(formDict.email)) {
        checkDict.email = 'Địa chỉ email không đúng định dạng';
      }

      if (Object.keys(checkDict).length > 0) {
        setSubmitStatus({ code: 0, content: checkDict });
        return;
      }

      const response = await fetch('/api/coop-register', {
        method: 'POST',
        body: JSON.stringify(formDict),
      });
      if (!response.ok) {
        // throw new Error('Failed to submit the data. Please try again.')
        const data = await response.json();
        setSubmitStatus({ code: 0, content: data });
      }
      // Handle response if necessary
      // const data = await response.json()
      setSubmitStatus({ code: 1 });
    } catch (error) {
      setSubmitStatus({ code: -1 });
      // console.error(error)
    }
  };

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
      <div className="mt-10 pt-24 pb-32 intro-has-bg">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 max-w-[650px] border-2 border-gray-200 bg-white shadow-lg">
          <p className="p-2 text-4xl font-bold tracking-wider text-center uppercase">
            HỢP TÁC
          </p>
          <p className="text-base font-base text-center">
            Chúng tôi luôn hoan nghênh và chào đón mọi cơ hội hợp tác từ các đối
            tác để cùng nhau phát triển, khai phá tiềm năng, tạo dựng nên những
            giá trị bền vững và thành công lâu dài.
          </p>
          <div className="mt-4 border-b-[1px] w-[200px] border-gray-400 px-12 mx-auto"></div>
          {submitStatus.code === 0 ? (
            <div className="flex items-center justify-center p-6">
              <div className="mx-auto w-full">
                <p className="text-sm font-base">
                  Xin vui lòng điền các thông tin bên dưới để chúng tôi có thể
                  liên hệ lại quý Công ty trong thời gian sớm nhất nhé!
                </p>
                <form onSubmit={coopRegiterSubmit} className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-base text-gray-700"
                    >
                      Tên Quý Công Ty{' '}
                      {submitStatus.content?.name && (
                        <p className="float-right text-sm text-red-500">
                          {submitStatus.content.name}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-base text-gray-700 outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-base text-gray-700"
                    >
                      Email liên hệ{' '}
                      {submitStatus.content?.email && (
                        <p className="float-right text-sm text-red-500">
                          {submitStatus.content.email}
                        </p>
                      )}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-base text-gray-700 outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-base text-gray-700"
                    >
                      Chủ đề hợp tác{' '}
                      {submitStatus.content?.subject && (
                        <p className="float-right text-sm text-red-500">
                          {submitStatus.content.subject}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-base text-gray-700 outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-base text-gray-700"
                    >
                      Nội dung chi tiết
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full resize-none border border-[#e0e0e0] bg-white py-2 px-4 text-base text-gray-700 outline-none focus:border-blue-600 focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-red-500 text-sm"></p>
                    <button className="hover:shadow-form bg-gray-800 py-3 px-5 text-base font-semibold text-white outline-none mx-auto md:mr-0 flex gap-2 items-center justify-center">
                      {loading ? (
                        <>
                          <div className="h-4 w-4 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                          Đang gửi
                        </>
                      ) : (
                        'Gửi thông tin'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="w-90 mt-8 mx-auto flex flex-col items-center gap-5 mb-8">
              {submitStatus.code === 1 ? (
                <>
                  <p className="text-gray-700 text-lg">
                    Gửi lời mời thành công
                  </p>
                  <svg
                    className="fill-current text-[#00d4a6] h-16 w-16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <blockquote className="max-w-lg text-gray-700 text-base italic font-medium text-center">
                    {'"'}TN7-Solutions chân thành cảm ơn quý Công ty đã gửi lời
                    mời hợp tác đến với chúng tôi. Chúng tôi sẽ xem xét kỹ lưỡng
                    các thông tin này và sẽ sớm phản hồi lại quý vị trong vòng 4
                    ngày làm việc thông qua địa chỉ email quý Công ty cung cấp.
                    {'"'}
                  </blockquote>
                </>
              ) : (
                <>
                  <svg
                    className="fill-current text-red-500 h-12 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
                  <p className="py-3 text-base text-center text-gray-800">
                    Lỗi trong lúc xử lý. Vui lòng thử lại!
                  </p>
                  <div
                    className="py-2 text-sm text-red-800 underline hover:cursor-pointer"
                    onClick={() => setSubmitStatus({ code: 0 })}
                  >
                    Thử lại
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<IhomeProps> = async () => {
  const config = getDataConfig();
  return {
    props: {
      config,
    },
  };
};

export default HopTac;
