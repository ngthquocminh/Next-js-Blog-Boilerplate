import React, { useEffect } from 'react';

import { GetServerSideProps } from 'next';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { IAppConfig, getDataConfig } from '../utils/Content';

interface IhomeProps {
  config: IAppConfig;
}

function adjustTextSize(
  className: string,
  sizeOffset: number,
  baseFontSize: number
) {
  const listTextxl = window.document.getElementsByClassName(className);
  const fontSizeTextxl = sizeOffset * baseFontSize;
  Array.from(listTextxl).forEach((e) => {
    (e as HTMLElement).style.fontSize = `${fontSizeTextxl}px`;
  });
}

const AboutUs = (props: IhomeProps) => {
  const adjustFontSize = () => {
    const container = window.document.getElementById('container');
    if (container) {
      const containerWidth = container.offsetWidth;
      const baseFontSize = containerWidth / 100;

      // text-base
      adjustTextSize('xtext-base', 1.5, baseFontSize);

      // text-lg
      adjustTextSize('xtext-lg', 1.8, baseFontSize);

      // text-xl
      adjustTextSize('xtext-xl', 2.25, baseFontSize);

      // text-2xl
      adjustTextSize('xtext-2xl', 3, baseFontSize);

      // text-4xl
      adjustTextSize('xtext-4xl', 4, baseFontSize);

      // text-5xl
      adjustTextSize('xtext-5xl', 5, baseFontSize);

      // text-7xl
      adjustTextSize('xtext-7xl', 7, baseFontSize);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', adjustFontSize);
    adjustFontSize(); // Adjust font size on initial load

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);
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
      <div className="mt-0 md:mt-10 md:pt-24 pt-12 pb-6">
        <div
          id="container"
          className="container flex flex-col justify-center p-4 mx-auto md:p-8 max-w-[850px] bg-white"
        >
          <div className="transition duration-300 ease-in-out hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/1.png"
              alt="tn7-business-profile-intro"
            ></img>
            <div className="absolute top-[20%] left-[10%]">
              <p className="xtext-5xl text-black">TN7-SOLUTIONS</p>
              <p className="xtext-7xl font-extrabold text-[#d36631] leading-[1em] mb-[14%]">
                BUSINESS
                <br />
                PROFILE
              </p>
              <span className="xtext-5xl text-black border-t-2 pt-[5%] pr-6 border-gray-800">
                2024
              </span>
            </div>
            <div className="absolute bottom-[4%] left-[4%] w-[35%]">
              <p className="xtext-xl font-bold text-white mb-6">
                THE BEST SOLUTIONS
              </p>
              <p className="xtext-xl text-justify text-white">
                Chúng tôi sẽ cung cấp cho bạn những giải pháp hiệu quả nhất, tối
                ưu nhất và nhanh chóng nhất đối với những khó khăn, vấn đề mà
                bạn đang gặp phải.
              </p>
              <p className="xtext-xl text-justify text-white">
                TN7-Solutions sẽ luôn đồng hành cùng bạn trên chặng đường định
                cư ở một quốc gia mới và có cuộc sống tốt hơn.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative">
            <img
              src="/assets/profile/2.png"
              alt="tn7-business-profile-welcome"
            ></img>
            <div className="absolute top-[40%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-xl text-justify text-white">
                Chào mừng bạn đến với TN7 Solutions và bắt đầu cuộc hành trình
                tìm kiếm con đường đi định cư ở các nước phát triển như Hoa Kỳ,
                Canada. Con đường này sẽ không bao giờ dễ dàng nhưng với sự đồng
                hành của chúng tôi, mọi khó khăn đều có giải pháp và là giải
                pháp tối ưu cho từng khách hàng.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/3.png"
              alt="tn7-business-profile-after-welcome"
            />
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/4.png"
              alt="tn7-business-profile-table-content"
            />
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/5.png"
              alt="tn7-business-profile-about-company"
            />
            <div className="absolute top-[55%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-xl text-justify text-white">
                Công Ty TN7 Solutions được thành lập từ ngày 13/5/2017, lĩnh vực
                chính của chúng tôi là tư vấn, đưa ra giải pháp cho các khách
                hàng có nhu cầu đi du học, định cư hoặc đầu tư tại các quốc gia
                như HOA KỲ, CANADA.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/6.png"
              alt="tn7-business-profile-welcome-message"
            />
            <div className="absolute top-[52%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-xl text-justify text-white pb-[6%]">
                Bạn muốn định cư HOA KỲ, CANADA những quốc gia phát triển hàng
                đầu trên thế giới về kinh tế, giáo dục, y tế nhưng lại không
                biết bắt đầu từ đâu? Đừng lo, chúng tôi với hơn 7 năm kinh
                nghiệm trong việc tư vấn và tim hướng đi tối ưu hóa cho mỗi cá
                nhân sẽ tư vấn cho bạn những giải pháp phù hợp nhất.
              </p>
              <p className="xtext-xl text-justify text-white">
                Chúng tôi thấu hiểu được mỗi một khách hàng đến với TN7 là một
                cá nhân khác biệt với những điều kiện về tài chính, bằng cấp,
                kinh nghiệm và nguyện vọng khác nhau. Vì vậy, chúng tôi sẽ có
                những chuyên gia hàng đầu, xử lý các vấn đề của bạn. Đối với các
                công ty tư vấn khác, họ chỉ cung cấp dịch vụ tư vấn du học hoặc
                đầu tư hoặc lao động. Còn chúng tôi luôn đặc nguyện vọng, nhu
                cầu và điều kiện thực tế của từng khách hàng lên hàng đầu với
                tiêu chí “mang đến những giải pháp tiết kiệm và hiệu quả nhất
                cho khách hàng”.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/7.png"
              alt="tn7-business-profile-our-vision"
            />
            <div className="absolute top-[30%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-2xl text-center text-black pb-10">
                TN7-Solutions định hướng phát triển thành công ty tư vấn và đưa
                ra giải pháp Visa uy tín, chất lượng hàng đầu Việt Nam
              </p>
              <p className="xtext-xl text-justify text-black">
                Giúp khách hàng hiện thực hóa ước mơ định cư và nắm bắt cơ hội
                phát triển tốt tại các quốc gia phát triển như Hoa Kỳ, Canada.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/8.png"
              alt="tn7-business-profile-our-mission"
            />
            <div className="absolute top-[37%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-2xl text-left font-bold text-black pb-10 pr-12">
                Mang đến cuộc sống tốt đẹp hơn cho người Việt ở đất nước mới.
              </p>
              <p className="xtext-xl text-justify text-black pl-20 pb-4">
                Chúng tôi mong muốn mang đến cho những khách hàng lựa chọn TN7
                những giải pháp tiết kiệm và tối ưu nhất. Giúp khách hàng hiện
                thực hóa ước mơ của họ và tiến gần hơn đến với những cuộc sống
                tốt đẹp mà bạn hằng mong ước.
              </p>
              <p className="xtext-xl text-justify text-black pl-20">
                Hiểu được vai trò của việc đến 1 quốc gia khác luôn là một lựa
                chọn mang tính chất rất quan trọng, chúng tôi luôn dành mọi tâm
                huyết của mình vào từng trường hợp của khách hàng. Đây không chỉ
                là sứ mệnh phục vụ, mà còn là lời cam kết tận tâm của chúng tôi
                tới mỗi lời tư vấn dành cho khách hàng, để mỗi cá nhân, mỗi gia
                đình, đều có cuộc sống ổn định, hạnh phúc ở nơi ở mới.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/9.png"
              alt="tn7-business-profile-our-service"
            />
            <div className="absolute top-[40%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <ol className="text-justify xtext-xl">
                <li>
                  <b>1. Tư vấn du học:</b> Hướng dẫn và hỗ trợ trong việc chọn
                  trường học, nộp đơn xin học và xin visa du học.
                </li>
                <li>
                  <b>2. Tư vấn định cư:</b>
                  <ul>
                    <li>
                      • Hướng dẫn và hỗ trợ trong việc chọn trường học, nộp đơn
                      xin học và xin visa du học.
                    </li>
                    <li>
                      • Visa Đầu tư: Tư vấn và hỗ trợ xin visa đầu tư để bắt đầu
                      hoặc mở rộng doanh nghiệp.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>3. Dịch vụ đi kèm</b>
                  <ul>
                    <li>
                      • Luyện thi chứng chỉ ngoại ngữ: Cung cấp hỗ trợ và tài
                      liệu ôn luyện cho các kỳ thi chứng chỉ ngoại ngữ.
                    </li>
                    <li>
                      • Tìm kiếm nhà thuê giá rẻ: Giúp khách hàng tìm kiếm và
                      thuê nhà với giá hợp lý.
                    </li>
                    <li>
                      • Dịch vụ cho thuê xe: Cung cấp các tùy chọn cho thuê xe
                      phù hợp với nhu cầu của khách hàng.
                    </li>
                    <li>
                      • Tìm trường học: Hỗ trợ trong việc chọn lựa trường học
                      phù hợp với nhu cầu học tập.
                    </li>
                    <li>
                      • Săn học bổng: Tư vấn và hỗ trợ tìm kiếm và xin học bổng
                      cho các chương trình học.
                    </li>
                    <li>
                      • Tìm kiếm việc làm: Giúp khách hàng tìm kiếm việc làm
                      full-time hoặc part-time tại các quốc gia mục tiêu.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/10.png"
              alt="tn7-business-profile-our-project"
            />
            <div className="absolute top-[36%] left-[50%] w-[100%] -translate-x-[50%] py-[3%] px-[10%]">
              <p className="xtext-xl text-justify text-white">
                Vì lý do bảo mật thông tin khách hàng nên chúng tôi không thể
                ghi rõ những thông tin cá nhân của từng thành viên trong từng
                gia đình mà chúng tôi đã làm việc. Tuy nhiên, với kinh nghiệm
                hơn 7 năm hoạt động và những hỗ trợ tận tâm, chúng tôi nghĩ rằng
                khách hàng sẽ cảm nhận và thấy rõ được sự chuyên nghiệp từ những
                hành động và kết quả mà TN7Solutions mang lại. Đội ngũ chúng tôi
                vẫn sẵn sàng hỗ trợ, giải đáp mọi thắc mắc liên quan tới cuộc
                sống tại Canada, Mỹ cho khách hàng cũ, dù công việc đã thực hiện
                xong. Đối với TN7 chúng tôi, trải nghiệm của khách hàng cũng
                chính là niềm vui và là sự thành công của chúng tôi.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px] border-b-[1px]">
            <img
              src="/assets/profile/11.png"
              alt="tn7-business-profile-team-p1"
            ></img>
            <div className="absolute top-[35%] left-0 w-[100%] p-[10%]">
              <p className="xtext-4xl font-bold text-black mb-[8%]">
                Nguyễn Thị Phương Trang
              </p>
              <p className="xtext-2xl text-justify text-black">
                Người sáng lập, Giám đốc điều hành
              </p>
              <p className="xtext-2xl text-justify text-black">
                Thạc sĩ Luật học
              </p>
            </div>
            <div className="absolute top-[68%] left-[45%] w-[45%] flex flex-col items-center ">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-[-2%] w-[10%] h-[10%] dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 xtext-lg italic">
                  Không có một công ty nào là tuyệt vời nhất, chỉ có những người
                  thực sự tâm huyết và tận tâm với công việc. Với hơn 10 năm
                  kinh nghiệm trong lĩnh vực này, tôi tự hào mang đến cho bạn sự
                  yên tâm và tin cậy trên con đường định cư của mình. Tôi cam
                  kết không chỉ cung cấp dịch vụ chất lượng mà còn đồng hành
                  cùng bạn với sự chân thành và chuyên nghiệp, giúp bạn vững
                  bước và an tâm hơn trong từng bước đi của hành trình này.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-[10%] h-[10%] dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="hover:shadow-xl relative border-b-[1px]">
            <img
              src="/assets/profile/12.png"
              alt="tn7-business-profile-team-p2"
            />
            <div className="absolute top-[36%] left-[25%] w-[60%] p-[4%]">
              <p className="xtext-2xl font-bold text-[#9f2c0f] mb-[2%]">
                Thục Ái_Chuyên viên tư vấn
              </p>
              <p className="xtext-base text-justify text-black">
                Thục Ái là Trưởng phòng Kinh doanh với nhiều năm kinh nghiệm
                trong lĩnh vực tư vấn và giải quyết các vấn đề di trú. Cô đã hỗ
                trợ nhiều khách hàng vượt qua các thách thức liên quan đến di
                trú một cách hiệu quả và nhanh chóng. Với kỹ năng chuyên môn và
                sự tận tâm, Thục Ái luôn mang đến những giải pháp tối ưu, giúp
                khách hàng an tâm và tin tưởng.
              </p>
            </div>
            <div className="absolute top-[62%] left-[25%] w-[60%] p-[4%]">
              <p className="xtext-2xl font-bold text-[#9f2c0f] mb-[2%]">
                Minh Trung_Nhân viên Marketing
              </p>
              <p className="xtext-base text-justify text-black">
                Minh Trung là nhân viên marketing, chuyên hỗ trợ đưa thông tin
                đến với khách hàng một cách hiệu quả. Anh cung cấp những thông
                tin hữu ích và tối ưu nhất, giúp mọi người dễ dàng tiếp cận và
                hiểu rõ các sản phẩm và dịch vụ. Với sự am hiểu về thị trường và
                kỹ năng giao tiếp, Minh Trung luôn đảm bảo thông tin được truyền
                đạt một cách rõ ràng và hấp dẫn.
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl relative">
            <img
              src="/assets/profile/13.png"
              alt="tn7-business-profile-contact"
            />
            <div className="absolute top-[55%] left-[18%] w-[70%] p-4">
              <ul className="text-[#9f2c0f] flex flex-col gap-[1.78em] xtext-lg font-medium">
                <li className="pb-[3%]">0763771191 (WHATSAPP/ZALO)</li>
                <li className="pb-[3%]">https://tn7solutions.com/</li>
                <li className="pb-[3%]">support@tn7solutions.com</li>
                <li className="pb-[3%]">
                  19 Cao Thang, Ward 2, District 3, Ho Chi Minh City
                </li>
                <li className="pb-[3%]">
                  20 Street No. 43, Binh Thuan Ward, District 7, Ho Chi Minh
                  City
                </li>
              </ul>
            </div>
          </div>
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

export default AboutUs;
