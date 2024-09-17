import "./App.css";
import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const galleryImages = [
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542822223-606661cf0a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542875272-2037d53b5e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543349689-2f7424422e56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div class="px-4 py-12">
      <div class="max-w-full mx-auto bg-white px-4 py-10 relative">
        <div class="relative w-full flex justify-center">
          <img
            src="http://www.gndomin.com/news/photo/202303/346212_335445_3015.jpg"
            alt="leaves"
            class="mt-6 w-full h-auto object-cover lg:block md:hidden hidden"
          />
        </div>
      </div>

      {/* 2 dahi widget */}
      <div class="max-w-full mx-auto bg-gray-200 px-4 py-10 relative">
        <p class="text-3xl font-medium leading-9 text-center text-gray-800 mb-8 lg:text-4xl md:text-3xl">
          하미혜 개인전
        </p>
        <p class="text-3xl font-bold leading-9 text-center text-gray-800 mb-8 lg:text-5xl md:text-4xl">
          현실과 환타지의 경계를 넘다
        </p>
        <p class="text-3xl font-normal leading-9 text-center text-gray-800 mb-8 lg:text-2xl md:text-2xl">
          NOSTALGIA IN THE FANTASIA
        </p>
        <div class="border-t-4 border-gray-500 my-4 w-[50px] mx-auto"></div>
        <p class="text-3xl font-bold leading-9 text-center text-gray-800 mb-8 lg:text-4xl md:text-3xl">
          2025.03.17금 - 04.05수
        </p>
        <p class="text-3xl font-light leading-9 text-center text-gray-800 mb-8 lg:text-4xl md:text-3xl">
          OPEN : 03.17. PM4:00
        </p>
        <p class="text-3xl font-medium leading-9 text-center text-gray-800 mb-8 lg:text-4xl md:text-3xl">
          진주시림이손자미술관
        </p>
      </div>

      {/*Invitation*/}
      <div class="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto my-8 p-6 bg-white ">
        <p class="text-center text-2xl font-semibold mb-4 text-gray-400 ">
          INVITATION
        </p>
        <p class="text-center text-gray-600 mb-4 font-medium text-2xl ">
          서로 다른 빛깔과 향기로 겨울을 이겨낸 봄입니다. 이 좋은 계절에 그간의
          작품들을 모아 전시회를 마련하였습니다. 어린 시절부터 자연스럽게 주어진
          그림 그리는 일이 평생의 업이 된 것도 감사한 일거니와 고향 진주에서
          많은 인연의 뿌리를 내린 것도 감사한 일입니다. 오늘이 있기까지 언제나
          기억해주시고, 사랑하는 마음으로 감싸주신 부모, 스승, 동료 선후배
          작가님들께도 감사한 말씀을 올립니다.
        </p>
        <p class="text-center text-gray-600 font-medium text-2xl">
          어린 시절부터 자연스럽게 주어진 그림 그리는 일이 평생의 업이 된 것도
          감사한 일거니와 고향 진주에서 많은 인연의 뿌리를 내린 것도 감사한
          일입니다. 오늘이 있기까지 언제나 기억해주시고, 사랑하는 마음으로
          감싸주신 부모, 스승, 동료 선후배 작가님들께도 감사한 말씀을 올립니다.
        </p>
      </div>
      {/*Calendar*/}
      <div class="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto bg-gray-200 lg:px-10 md:px-6 px-4 py-10 relative">
        <h1 class="text-center text-2xl font-semibold mb-1 text-gray-400 ">
          CALENDAR
        </h1>
        <div class="grid lg:grid-cols-2">
          <div class="max-w-sm mx-8 my-8 p-6 bg-gray-100">
            <div class="text-center">
              <div class="flex justify-between items-center text-gray-600 mb-4">
                <span class="text-2xl">3 March</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg">
              <div class="grid grid-cols-7 text-center mb-3 text-gray-500 font-semibold">
                <span class="text-red-500">일</span>
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span>토</span>
              </div>

              <div class="grid grid-cols-7 text-center gap-y-3 text-gray-700">
                <span></span> <span></span> <span></span>
                <span>1</span> <span>2</span> <span>3</span> <span>4</span>
                <span class="text-red-500 font-semibold">5</span> <span>6</span>{" "}
                <span>7</span> <span>8</span> <span>9</span> <span>10</span>{" "}
                <span>11</span>
                <span class="text-red-500 font-semibold">12</span>{" "}
                <span>13</span> <span>14</span> <span>15</span> <span>16</span>
                <span class="font-semibold text-white bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  17
                </span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  18
                </span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto  ">
                  19
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  20
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  21
                </span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  22
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  23
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  24
                </span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  25
                </span>
                <span class="font-semibold text-red-500 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  26
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  27
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  28
                </span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  29
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  30
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  31
                </span>
              </div>
            </div>
          </div>
          <div class="max-w-sm mx-8 my-8 p-6 bg-gray-100">
            <div class="text-center">
              <div class="flex justify-between items-center text-gray-600 mb-4">
                <span class="text-2xl">4 April</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <div class="grid grid-cols-7 text-center mb-3 text-gray-500 font-semibold">
                <span class="text-red-500">일</span>
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span>토</span>
              </div>

              <div class="grid grid-cols-7 text-center gap-y-3 text-gray-700">
                <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span>
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  1
                </span>{" "}
                <span class="font-semibold text-red-500 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto  ">
                  2
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  3
                </span>{" "}
                <span class="font-semibold  bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mx-auto ">
                  4
                </span>
                <span class="font-semibold text-white bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  5
                </span>{" "}
                <span>6</span> <span>7</span> <span>8</span>{" "}
                <span class="text-red-500 font-semibold">9</span>{" "}
                <span>10</span> <span>11</span>
                <span>12</span> <span>13</span> <span>14</span> <span>15</span>{" "}
                <span class="text-red-500 font-semibold">16</span>
                <span>17</span>
                <span>18</span>
                <span class="text-gray-500">19</span>{" "}
                <span class="text-gray-500">20</span>{" "}
                <span class="text-gray-500">21</span>
                <span class="text-gray-500">22</span>{" "}
                <span class="text-red-500 font-semibold">23</span>{" "}
                <span class="text-gray-500">24</span>
                <span class="text-gray-500">25</span>
                <span class="text-gray-500">26</span>{" "}
                <span class="text-gray-500">27</span>{" "}
                <span class="text-gray-500">28</span>
                <span class="text-gray-500">29</span>{" "}
                <span class="text-red-500 font-semibold">30</span>{" "}
                <span class="text-gray-500">31</span>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-center flex items-center flex-col ">
          <p class="lg:text-2xl md:text-2xl text-xl font-medium leading-9 text-center text-gray-800 mb-1">
            하미혜 개인전
          </p>
          <p class="text-center lg:text-2xl md:text-2xl text-xl font-medium leading-9 text-gray-800 mb-8">
            21일 남았습니다
          </p>
        </div>
      </div>
      {/*gmail, utas*/}
      <div class="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-10 relative">
        <div class="mb-4">
          <p class="lg:text-3xl md:text-2xl text-3xl font-medium leading-9 text-center text-gray-800 mb-8  flex items-center justify-center space-x-4">
            <span class="mr-4">하미혜작가에게 연락하기</span>
            <div class="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center">
              <MdPhone className="text-white" />
            </div>
            <div class="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center">
              <MdEmail className="text-white" />
            </div>
          </p>
        </div>
        <div class="">
          <p class="lg:text-3xl md:text-2xl text-3xl font-medium leading-9 text-center text-gray-800 mb-8 flex items-center justify-center space-x-4">
            <span class="mr-4">하미혜작가에게 연락하기</span>
            <div class="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center">
              <MdPhone className="text-white" />
            </div>
            <div class="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center">
              <MdEmail className="text-white" />
            </div>
          </p>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-full mx-auto my-8 p-6 bg-white">
        <p className="text-center text-xl font-semibold mb-4 text-gray-400 lg:text-2xl">
          GALLERY
        </p>
        <div className="flex flex-col items-center">
          {/* Main image */}
          <div className="w-full max-w-full mb-6">
            <img
              src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Selected Artwork"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {galleryImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer rounded-lg ${
                    selectedImage === image
                      ? "border-4 border-gray-500"
                      : "border border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>

          {/* Dots for Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  selectedImage === galleryImages[index]
                    ? "bg-gray-800"
                    : "bg-gray-300"
                }`}
                onClick={() => setSelectedImage(galleryImages[index])}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/*Video*/}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto my-8 p-6 bg-white">
        <p className="text-center text-3xl font-semibold mb-6 text-gray-400">
          VIDEO
        </p>
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/VsYllOJTqpA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/*EBook*/}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-full mx-auto bg-gray-200 lg:px-10 md:px-6 px-4 py-10 relative">
        <p className="text-center text-2xl font-semibold mb-6 text-gray-400 lg:text-3xl">
          E-BOOK
        </p>
        <div className="flex justify-center">
          <img
            src="http://www.gndomin.com/news/photo/202303/346212_335445_3015.jpg"
            alt="leaves"
            className="w-full max-w-md h-auto object-cover mt-6"
          />
        </div>
      </div>

      {/**/}
      <div class="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto my-8 p-6 bg-white flex flex-col">
        <p className="text-center text-3xl font-semibold mb-6 text-gray-400">
          마음을 전하는 곳
        </p>
        <div className="mb-4 w-full max-w-md">
          <p className="text-start lg:text-2xl md:text-2xl text-2xl font-medium leading-9 mb-2">
            하미혜작가에게
          </p>
          <p className="text-start lg:text-2xl md:text-2xl text-2xl font-medium leading-9 mb-3 text-gray-500">
            국민은행 (예금주 : 하미혜)
          </p>
          <div class="flex items-center justify-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 rounded-full p-2 w-full font-semibold text-2xl h-14"
            />
            <button className="mt-2 bg-gray-400 text-white font-semibold rounded-full px-4 py-2 w-24 h-14 hover:bg-gray-300 text-xl">
              복사
            </button>
          </div>
        </div>
        <div className="mb-4 w-full max-w-md">
          <p className="text-start lg:text-2xl md:text-2xl text-2xl font-medium leading-9 mb-2">
            하미혜작가에게
          </p>
          <p className="text-start lg:text-2xl md:text-2xl text-2xl font-medium leading-9 mb-3 text-gray-500">
            국민은행 (예금주 : 하미혜)
          </p>
          <div class="flex items-center justify-center space-x-4">
            <input
              type="text"
              className="border border-gray-300 rounded-full p-2 w-full font-semibold text-2xl h-14"
            />
            <button className="mt-2 bg-gray-400 text-white font-semibold text-xl rounded-full px-4 py-2 w-24 h-14 hover:bg-gray-300">
              복사
            </button>
          </div>
        </div>
      </div>

      {/*zurag text hosolson heseg*/}
      <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-full mx-auto bg-gray-200 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="p-4 md:p-10 flex flex-col items-start">
            <p className="text-2xl font-semibold leading-6 text-gray-800 py-2 md:py-4 lg:text-3xl lg:leading-9">
              전시날짜에 맞춰
            </p>
            <p className="text-2xl font-semibold leading-9 text-gray-800 py-2 md:py-4 lg:text-3xl lg:leading-9">
              축하 화환을 전해보세요.
            </p>
            <button className="mt-4 md:mt-6 lg:mt-8 py-2 md:py-3 px-6 md:px-10 flex justify-center items-center border-2 border-gray-500 hover:bg-gray-400 font-medium text-white text-lg md:text-xl lg:text-2xl rounded-full bg-gray-500">
              축하 화환 선물하기
            </button>
          </div>
          <div className="p-4 md:p-10 w-full md:w-auto">
            <img
              src="https://www.ecof.co.kr/thumbnail/2119/570/1b5230e3ea6d7123847ad55a1e06fffd.png"
              alt="화환 이미지"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-full mx-auto bg-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="p-4 md:p-10 flex flex-col items-start">
            <p className="text-2xl font-semibold leading-6 text-gray-800 py-2 md:py-4 lg:text-3xl lg:leading-9">
              특별한 날을 위해
            </p>
            <p className="text-2xl font-semibold leading-9 text-gray-800 py-2 md:py-4 lg:text-3xl lg:leading-9">
              소중한 선물을 제작합니다.
            </p>
            <button className="mt-4 md:mt-6 lg:mt-8 py-2 md:py-3 px-6 md:px-10 flex justify-center items-center border-2 border-gray-500 hover:bg-gray-400 font-medium text-white text-lg md:text-xl lg:text-2xl rounded-full bg-gray-500">
              공로패. 감사패 제작
            </button>
          </div>
          <div className="p-4 md:p-10 w-full md:w-auto">
            <img
              src="https://th.bing.com/th/id/OIP.taaJVFkeDem3FDIk2I229gHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.3"
              alt="선물 이미지"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/*Location*/}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-full mx-auto my-8 p-6 bg-white flex flex-col">
        <p className="text-center text-2xl font-semibold mb-4 text-gray-400 lg:text-3xl">
          LOCATION
        </p>
        <div className="flex flex-col md:flex-row items-start">
          <div className="p-4 md:p-10 flex flex-col items-start md:mr-8">
            <p className="text-xl font-semibold leading-6 text-gray-800 py-2 md:py-3 lg:text-3xl">
              진주시립이성자미술관
            </p>
            <p className="text-xl font-medium leading-5 text-gray-500 py-2 md:py-3 lg:text-3xl">
              경남 진주시 에나로128번길 14
            </p>
            <p className="text-xl font-medium leading-5 text-gray-500 py-2 md:py-3 lg:text-3xl">
              TEL. 055-749-5898
            </p>
          </div>
          <div className="bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center mt-4 md:mt-0">
            <MdPhone className="text-white text-xl md:text-3xl" />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative w-full mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648649256122!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/**/}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-full mx-auto my-8 p-6 bg-white flex flex-col">
        <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-gray-400">
          위의 이미지를 스크롤 하시면 자세히 보실 수 있습니다.
        </p>
        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-white shadow rounded-3xl flex items-center justify-center w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-4">
              <img
                src="https://corpassets.what3words.com/wp-content/uploads/2023/06/TMAP-350x350-1.png"
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36"
                alt="티맵"
              />
            </div>
            <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-gray-400">
              티맵
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white shadow rounded-3xl flex items-center justify-center w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-4">
              <img
                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/408d4e91017800001.png"
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36"
                alt="카카오내비"
              />
            </div>
            <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-gray-400">
              카카오내비
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white shadow rounded-3xl flex items-center justify-center w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-4">
              <img
                src="https://th.bing.com/th/id/OIP.tOJGdc5sMH7tuY6P6jstKwHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36"
                alt="네이버지도"
              />
            </div>
            <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-gray-400">
              네이버지도
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white shadow rounded-3xl flex items-center justify-center w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-4">
              <img
                src="https://th.bing.com/th/id/OIP.XMtEPFXR0YnpDOVqqOT5xAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36"
                alt="카카오맵"
              />
            </div>
            <p className="text-center text-lg md:text-2xl font-semibold mb-4 text-gray-400">
              카카오맵
            </p>
          </div>
        </div>
        <p className="text-start text-lg md:text-2xl font-semibold mb-2 text-gray-400">
          버스안내
        </p>
        <p className="text-start text-lg md:text-2xl font-medium mb-8 text-black">
          160, 145, 217, 345
        </p>
        <p className="text-start text-lg md:text-2xl font-semibold mb-2 text-gray-400">
          이 외 안내
        </p>
        <p className="text-start text-lg md:text-2xl font-medium mb-6 text-black">
          자가용 이용시 어디어디에서 1분
        </p>
      </div>

      {/*saaral hureetei text*/}
      <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto my-8 p-6 bg-gray-100 flex flex-col rounded-2xl">
        <p className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-400">
          도록제작 이벤트 (8P 이상)
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>

        <p className="text-center text-2xl md:text-3xl font-medium mb-4 text-black">
          모바일초대장 무료 제작
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>

        <p className="text-center text-2xl md:text-3xl font-medium mb-4 text-black">
          포스터 10장 무료 제작
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>

        <p className="text-center text-2xl md:text-3xl font-medium mb-4 text-black">
          동영상 무료 제작
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>

        <p className="text-center text-2xl md:text-3xl font-medium mb-4 text-black">
          E-BOOK(이북) 무료 제작
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>

        <p className="text-center text-2xl md:text-3xl font-medium mb-4 text-black">
          명제표 무료 제작
        </p>

        <div className="border-t-2 border-gray-300 my-4 mx-auto w-3/4 md:w-1/2"></div>
      </div>

      {/*socials*/}
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center pb-10 items-center">
            <img
              src="https://img.icons8.com/?size=50&id=xotVgSU9NXpo&format=png"
              alt="Image 1"
              class="w-28 h-28 object-contain"
            />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center pb-10 items-center">
            <img
              src="https://img.icons8.com/?size=50&id=32292&format=png"
              alt="Image 2"
              class="w-24 h-24  object-contain"
            />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center pb-10 items-center">
            <img
              src="https://img.icons8.com/?size=50&id=106163&format=png"
              alt="Image 3"
              class="w-24 h-24 object-contain"
            />
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center pb-10 items-center">
            <img
              src="https://th.bing.com/th/id/OIP.TR2AYNnWUqFbHESIIIf6cwAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.3"
              alt="Image 4"
              class="w-28 h-28  object-contain"
            />
          </div>
        </div>
        <div class="col-span-4 flex justify-center">
          <button class="mt-6 shrink-0 w-full md:w-auto lg:mt-8 py-2 md:py-3 px-10 flex justify-center items-center border-2 hover:bg-gray-300 font-medium text-gray-600 text-2xl rounded-full bg-gray-200">
            초대장주소 복사하기
          </button>
        </div>
        <div>
          <div class="flex items-center justify-between w-full">
            {/*ene garam gd logo n oldsonguee */}
            <img
              src="https://th.bing.com/th/id/OIP.TR2AYNnWUqFbHESIIIf6cwAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.3"
              alt="Image 4"
              class="w-28 h-28 object-contain"
            />

            <p className="text-center text-3xl font-medium mb-4 text-black w-full whitespace-nowrap">
              가람커뮤니케이션 055.757.3373
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
