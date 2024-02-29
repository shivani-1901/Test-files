import { FunctionComponent } from "react";

const Portfolio: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start gap-[84px] tracking-[normal] mq450:gap-[21px] mq750:gap-[42px]">
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-start min-h-[962px] max-w-full shrink-0 text-left text-83xl text-hotpink font-scto-grotesk-a">
        <div className="self-stretch flex flex-col items-center justify-start pt-8 px-px pb-[290px] box-border relative gap-[74px] max-w-full mq450:gap-[18px] mq750:gap-[37px] mq750:pt-5 mq750:pb-[122px] mq750:box-border mq1100:pt-[21px] mq1100:pb-[188px] mq1100:box-border">
          <img
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1] opacity-0.4"
            alt=""
            src="/image@2x.png"
            style={{ opacity: 0.4 }}
          />
          <img
            className="w-[200.7px] h-[200.7px] absolute my-0 mx-[!important] right-[70.3px] bottom-[57.3px] object-contain z-[2]"
            loading="eager"
            alt=""
            src="/component@2x.png"
          />
          <header className="self-stretch h-[81px] flex flex-col items-center justify-start py-2.5 px-0 box-border gap-[16px] max-w-full z-[2] text-left text-base text-lightgray-200 font-scto-grotesk-a">
            <img
              className="w-[1280px] relative max-h-full max-w-full"
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-[79px] gap-[20px] mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
              <div className="flex flex-col items-start justify-center py-1 px-0 gap-[4px]">
                <div className="relative tracking-[0.04em]">
                  <b>
                    <span className="text-white">Nag</span>
                    <span className="font-helvetica-now-text-">_</span>
                  </b>
                  <span className="font-helvetica-now-text-">
                    <span>UIX</span>
                  </span>
                </div>
                <div className="relative text-[12px] font-helvetica-now-text- text-silver whitespace-nowrap">
                  Product designer
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[40px] text-white font-helvetica-now-text-">
                <div className="h-6 relative tracking-[0.08em] inline-block">
                  Resume
                </div>
                <div className="h-6 relative tracking-[0.08em] inline-block">
                  Email
                </div>
              </div>
            </div>
          </header>
          <div className="w-[1330px] flex flex-row items-start justify-start py-0 px-5 box-border relative max-w-full">
            <img
              className="w-[164.9px] absolute my-0 mx-[!important] top-[-26px] right-[147.1px] h-[184.5px] overflow-hidden shrink-0 object-contain z-[2]"
              loading="eager"
              alt=""
              src="/noundesign2350414-1@2x.png"
            />
            <img
              className="w-[154.9px] absolute my-0 mx-[!important] top-[-24.5px] left-[177px] h-[180.6px] overflow-hidden shrink-0 object-contain z-[2]"
              loading="eager"
              alt=""
              src="/noundesign1619204-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[62px] box-border max-w-full text-89xl mq750:pl-[31px] mq750:box-border">
                <div className="w-[558px] flex flex-row items-start justify-start max-w-full">
                  <h1 className="m-0 h-[134px] flex-1 relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit flex items-center max-w-full z-[2] mq450:text-13xl mq750:text-35xl">
                    INSPIRED
                  </h1>
                  <h1 className="m-0 h-[134px] flex-1 relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit text-white flex items-center max-w-full z-[3] ml-[-550px] mq450:text-13xl mq750:text-35xl">
                    INSPIRED
                  </h1>
                </div>
              </div>
              <div className="self-stretch h-[167px] flex flex-col items-end justify-start gap-[20px] text-mediumslateblue">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="eager"
                  alt=""
                  src="/line.svg"
                />
                <div className="self-stretch h-[130px] relative">
                  <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.04em] uppercase font-bold font-inherit whitespace-pre-wrap z-[2] mq450:text-12xl mq750:text-32xl">
                    Product VISIONARY
                  </h1>
                  <h1 className="m-0 absolute top-[2.5px] left-[4px] text-inherit tracking-[0.04em] uppercase font-bold font-inherit text-white whitespace-pre-wrap z-[3] mq450:text-12xl mq750:text-32xl">
                    Product VISIONARY
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[26px] max-w-full text-mediumspringgreen">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="eager"
                  alt=""
                  src="/line.svg"
                />
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[16px] max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[739px] max-w-full mq1100:min-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                      <img
                        className="h-[141.4px] w-[141.4px] absolute my-0 mx-[!important] top-[-29px] left-[467px] overflow-hidden shrink-0 object-contain z-[2]"
                        loading="eager"
                        alt=""
                        src="/frame-62@2x.png"
                      />
                      <h1 className="m-0 h-[127px] relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit whitespace-pre-wrap inline-block z-[3] mq450:text-12xl mq750:text-32xl">
                        BASED IN INDIA
                      </h1>
                    </div>
                    <h1 className="m-0 h-[127px] relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit text-white whitespace-pre-wrap inline-block z-[4] ml-[-1129px] mq450:text-12xl mq750:text-32xl">
                      BASED IN INDIA
                    </h1>
                  </div>
                  <img
                    className="h-[133.3px] w-[133.3px] relative object-cover z-[2]"
                    loading="eager"
                    alt=""
                    src="/clip-path-group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full mt-[-703px]">
          <div className="h-[394px] flex-1 relative rounded-[36px] flex items-center justify-center">
            <img
              className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[0px] top-[0px] w-full [transform:scale(2.076)]"
              alt=""
              src="/background-vector.svg"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[52px] box-border max-w-full shrink-0 text-left text-29xl text-dimgray font-scto-grotesk-a mq750:pb-[34px] mq750:box-border">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-[83px] pr-5 pl-[25px] box-border bg-[url('/public/about@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-exclusion max-w-full mq750:pt-[54px] mq750:pb-[54px] mq750:box-border">
          <h1 className="m-0 h-[536px] w-[1269px] relative text-inherit leading-[140%] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[40px] mq750:text-[38px] mq750:leading-[54px]">
            <p className="m-0">
              <span className="text-white">{`"In the realm of pixels, I'm Nagesh, a Product Designer on a three-year quest, shaping digital sagas for startups. `}</span>
              <span>
                As an ex-founding member of Dhundhoo and the architect behind
                building the Dolbee tool from scratch, my design journey is a
                blockbuster in the making. Join me, where every click is a plot
                twist, and together, let's craft the next digital masterpiece.
                Lights, camera, design!"
              </span>
            </p>
          </h1>
        </div>
      </section>
      <section className="w-[1320px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[32px] max-w-full shrink-0 text-left text-53xl text-white font-scto-grotesk-a mq750:gap-[16px]">
        <div className="flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-16 w-16 absolute my-0 mx-[!important] top-[-32px] right-[-49px] rounded-sm"
            loading="eager"
            alt=""
            src="/star-1.svg"
          />
          <h1 className="m-0 h-[90px] relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit inline-block [text-shadow:2px_0_0_#ff8744,_0_2px_0_#ff8744,_-2px_0_0_#ff8744,_0_-2px_0_#ff8744] z-[1] mq450:text-24xl mq750:text-39xl">
            Projects
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-xl font-helvetica-now-text- mq750:gap-[20px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full shrink-0 mq1275:flex-wrap">
            <div className="w-[215px] flex flex-row items-start justify-start gap-[40px]">
              <div className="relative tracking-[0.08em] mq450:text-base">
                (1)
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] font-scto-grotesk-a">
                <b className="h-[25px] relative tracking-[0.08em] uppercase inline-block mq450:text-base">
                  Dolbee
                </b>
                <div className="relative text-base font-helvetica-now-text- text-lightgray-100">
                  Design Review Tool
                </div>
              </div>
            </div>
            <div className="w-[848px] flex flex-row items-start justify-start gap-[72px] max-w-full text-base mq450:gap-[18px] mq750:flex-wrap mq1100:gap-[36px]">
              <div className="flex-1 bg-blueviolet overflow-hidden flex flex-row items-end justify-center min-w-[270px] min-h-[416px] max-w-full mq750:min-h-[auto]">
                <div className="flex-1 flex flex-row items-start justify-start pt-[5px] px-[31px] pb-[111px] box-border relative max-w-full">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[-0.5px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0.5px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/shadow@2x.png"
                    />
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0.5px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      alt=""
                      src="/main@2x.png"
                    />
                  </div>
                  <img
                    className="h-[177.1px] w-[237.7px] relative object-cover mix-blend-normal z-[2]"
                    loading="eager"
                    alt=""
                    src="/macbook-air-2022-label@2x.png"
                  />
                </div>
              </div>
              <div className="w-[360px] flex flex-col items-start justify-start gap-[16px] min-w-[360px] max-w-full mq450:min-w-full mq750:flex-1">
                <div className="self-stretch h-[138px] relative leading-[160%] inline-block shrink-0">
                  <p className="m-0">
                    <span className="text-white">{`Dolbee: AI-powered design review for seamless collaboration. `}</span>
                    <span>
                      Streamlining evaluations, providing actionable feedback
                      across websites, images, videos, and GIFs. Elevate your
                      digital products effortlessly.
                    </span>
                  </p>
                </div>
                <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <div className="relative text-base leading-[16px] font-helvetica-now-text- text-gray-5 text-left">
                    Explore Design
                  </div>
                  <img
                    className="h-2 w-5 relative"
                    alt=""
                    src="/arrowbutton-arrow.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <div className="flex flex-row items-start justify-start gap-[72px] max-w-full shrink-0 mq450:gap-[18px] mq750:gap-[36px] mq1275:flex-wrap">
            <div className="w-[360px] flex flex-row items-start justify-start gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
              <div className="relative tracking-[0.08em] mq450:text-base">
                (2)
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] font-scto-grotesk-a">
                <b className="h-[25px] relative tracking-[0.08em] uppercase inline-block mq450:text-base">
                  PlusKlass
                </b>
                <div className="relative text-base font-helvetica-now-text- text-lightgray-100">
                  Ed-Tech Learning Platform
                </div>
              </div>
            </div>
            <div className="h-[416px] bg-mediumorchid overflow-hidden flex flex-row items-end justify-center py-px px-0 box-border max-w-full">
              <div className="w-[416px] flex flex-col items-start justify-end py-0 px-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-center justify-center pt-0 pb-[3px] pr-[51px] pl-[50px] relative mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/shadow-1@2x.png"
                  />
                  <div className="flex-1 flex flex-row items-start justify-end pt-1.5 px-2.5 pb-[74px] bg-[url('/public/main@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                    <img
                      className="h-[275.2px] w-[316.5px] relative object-cover hidden"
                      alt=""
                      src="/main@2x.png"
                    />
                    <img
                      className="h-[195.4px] w-[236.6px] relative object-cover mix-blend-normal z-[2]"
                      loading="eager"
                      alt=""
                      src="/ipad-pro-129inch-space-gray-mockup-label@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[16px] max-w-full text-base text-whitesmoke">
              <div className="self-stretch h-[138px] relative leading-[160%] inline-block shrink-0">
                PlusKlass is an ed-tech platform with interactive courses for
                effective upskilling. As a UX designer, I created an intuitive
                user experience for college students preparing for coding
                interviews.
              </div>
              <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <div className="relative text-base leading-[16px] font-helvetica-now-text- text-gray-5 text-left">
                  Explore Design
                </div>
                <img
                  className="h-2 w-5 relative"
                  alt=""
                  src="/arrowbutton-arrow.svg"
                />
              </button>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[72px] max-w-full shrink-0 mq450:gap-[18px] mq750:gap-[36px] mq1275:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
              <div className="relative tracking-[0.08em] mq450:text-base">
                (3)
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] font-scto-grotesk-a">
                <b className="h-[25px] relative tracking-[0.08em] uppercase inline-block mq450:text-base">
                  Czaar
                </b>
                <div className="relative text-base font-helvetica-now-text- text-lightgray-100">
                  Second-Hand Buying and Selling Cars
                </div>
              </div>
            </div>
            <div className="bg-coral overflow-hidden flex flex-row items-end justify-center pt-[11px] px-0 pb-0 box-border max-w-full">
              <div className="h-[405px] w-[416px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-full mq450:h-auto">
                <div className="self-stretch flex flex-row items-start justify-between pt-1 pb-[86px] pr-12 pl-[39px] relative gap-[20px] shrink-0 mq450:flex-wrap mq450:pt-5 mq450:pr-5 mq450:pb-14 mq450:box-border">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[-0.4px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[-0.1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/shadow-2@2x.png"
                    />
                    <img
                      className="absolute h-full w-full top-[0px] right-[-0.1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      alt=""
                      src="/main-1@2x.png"
                    />
                  </div>
                  <div className="h-[365px] w-[105px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border min-w-[105px] mq450:flex-1 mq450:pt-9 mq450:box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mix-blend-normal z-[2] mq450:self-stretch mq450:w-auto"
                      loading="eager"
                      alt=""
                      src="/screen-1@2x.png"
                    />
                  </div>
                  <img
                    className="h-[295.2px] w-[132.4px] relative object-cover mix-blend-normal z-[2] mq450:flex-1"
                    loading="eager"
                    alt=""
                    src="/screen-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[16px] max-w-full text-base text-whitesmoke">
              <div className="self-stretch h-[114px] relative leading-[160%] inline-block shrink-0">
                Our platform simplifies used car buying and selling in India
                with trustworthy information, fair value, financing, and
                advanced technology for a seamless experience.
              </div>
              <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <div className="relative text-base leading-[16px] font-helvetica-now-text- text-gray-5 text-left">
                  Explore Design
                </div>
                <img
                  className="h-2 w-5 relative"
                  alt=""
                  src="/arrowbutton-arrow.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border min-h-[152px] max-w-full shrink-0 text-left text-17xl text-yellow font-scto-grotesk-a">
        <div className="w-[1681px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[117%] shrink-0">
          <div className="w-[1922px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[43px] pr-[272px] pl-[241px] box-border gap-[53px] bg-[url('/public/skills-horizantal-scroll@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[114%] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[26px] mq750:pl-[60px] mq750:pr-[68px] mq750:box-border mq1275:pl-[120px] mq1275:pr-[136px] mq1275:box-border">
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[11px] max-w-full mq750:flex-wrap">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/layer-1.svg"
              />
              <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-3xl mq750:text-10xl">
                Mobile App Design
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[11px] text-hotpink">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/layer-1-1.svg"
              />
              <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
                Web Design
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[11px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/layer-1.svg"
              />
              <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
                User Interface
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[11px] text-hotpink mq450:flex-wrap">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/layer-1-3.svg"
              />
              <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
                User Experience
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1320px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[42px] min-h-[812px] max-w-full shrink-0 text-left text-53xl text-white font-scto-grotesk-a mq750:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
          <div className="flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1100:flex-wrap">
            <h1 className="m-0 relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit inline-block [text-shadow:2px_0_0_#6a35ff,_0_2px_0_#6a35ff,_-2px_0_0_#6a35ff,_0_-2px_0_#6a35ff] max-w-full z-[1] mq450:text-24xl mq750:text-39xl">
              Ideas Unleashed
            </h1>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[35px]">
              <img
                className="w-16 h-16 relative rounded-sm"
                loading="eager"
                alt=""
                src="/star-1-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full text-xl text-gray-3 font-helvetica-now-text- mq750:gap-[21px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
            <div className="w-[1215px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full shrink-0 mq750:gap-[24px]">
              <div className="relative tracking-[0.08em] mq450:text-base">
                (1)
              </div>
              <h1 className="m-0 h-64 flex-1 relative text-77xl tracking-[0.02em] capitalize font-bold font-scto-grotesk-a inline-block min-w-[742px] max-w-full mq450:text-10xl mq750:text-29xl mq1100:min-w-full">
                Converting Mockups or wireframes to Figma
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[878px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full text-xl text-gray-3 font-helvetica-now-text- mq450:gap-[24px]">
          <div className="relative tracking-[0.08em] mq450:text-base">(2)</div>
          <h1 className="m-0 h-64 flex-1 relative text-77xl tracking-[0.02em] capitalize font-bold font-scto-grotesk-a inline-block min-w-[520px] max-w-full mq450:text-10xl mq750:text-29xl mq750:min-w-full">
            Next Game - IPL Cricket
          </h1>
        </div>
      </section>
      <section className="self-stretch h-[620px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full text-left text-53xl text-white font-scto-grotesk-a">
        <div className="h-[601px] w-[2640px] flex flex-col items-start justify-start gap-[58px] max-w-[183%] shrink-0 mq750:gap-[29px]">
          <div className="w-[1440px] flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
              <div className="flex flex-row items-start justify-start relative max-w-full">
                <h1 className="m-0 h-[93.9px] relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit inline-block [text-shadow:2px_0_0_#ff59c2,_0_2px_0_#ff59c2,_-2px_0_0_#ff59c2,_0_-2px_0_#ff59c2] mq450:text-24xl mq750:text-39xl">
                  Design Gems
                </h1>
                <img
                  className="h-[78.2px] w-[78.2px] absolute my-0 mx-[!important] top-[-42px] right-[-56px] rounded-sm object-contain z-[1]"
                  loading="eager"
                  alt=""
                  src="/star-1-2.svg"
                />
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="eager"
                alt=""
                src="/vector-6-2.svg"
              />
            </div>
          </div>
          <div className="w-[1460px] flex-1 overflow-x-auto flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] max-w-full text-xl text-gray-6">
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-[10px] max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative mq450:text-base">{`QuickBooks `}</b>
                  <div className="relative text-base tracking-[0.04em] capitalize font-helvetica-now-text-">
                    Finance Service Management
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-5 px-5 pb-11 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[29px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36-1@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative mq450:text-base">Online banking app</b>
              </div>
            </div>
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-5 px-5 pb-11 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[29px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36-2@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="h-[25px] relative inline-block mq450:text-base">
                  Boss VE-500 - Rebound Shot
                </b>
              </div>
            </div>
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-5 px-5 pb-11 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[29px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36-3@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative mq450:text-base">Banking App</b>
              </div>
            </div>
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-5 px-5 pb-11 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[29px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36-4@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative mq450:text-base">
                  AI CopyWriting Website
                </b>
              </div>
            </div>
            <div className="self-stretch w-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-5 px-5 pb-11 box-border gap-[20px] bg-[url('/public/service-frames@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[29px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-36-5@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative mq450:text-base">Design Agency</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[71px] px-[39px] pb-[39px] box-border gap-[93px] bg-[url('/public/background@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-83xl text-white font-scto-grotesk-a mq450:gap-[23px] mq750:gap-[46px] mq750:pt-[46px] mq750:pb-[25px] mq750:box-border">
        <img
          className="w-[1440px] h-[697px] relative object-cover hidden max-w-full"
          alt=""
          src="/background@2x.png"
        />
        <div className="w-[1280px] flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="self-stretch h-[166px] flex flex-col items-start justify-start gap-[26px] max-w-full mq1275:h-auto">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full shrink-0 mq1275:flex-wrap">
              <div className="w-[366px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border min-w-[366px] max-w-full mq750:min-w-full mq1275:flex-1">
                <h1 className="m-0 self-stretch h-[102px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit inline-block shrink-0 [text-shadow:3px_0_0_#ff67c7,_0_3px_0_#ff67c7,_-3px_0_0_#ff67c7,_0_-3px_0_#ff67c7] z-[1] mq450:text-12xl mq750:text-32xl">
                  Get in
                </h1>
              </div>
              <div className="w-[810px] flex flex-row items-end justify-start gap-[78px] min-w-[810px] max-w-full text-[24px] mq450:gap-[19px] mq750:flex-wrap mq1100:gap-[39px] mq1100:min-w-full mq1275:flex-1">
                <div className="h-[140px] w-[344px] relative overflow-hidden shrink-0 bg-[url('/public/online-banking-app@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[344px] max-w-full z-[1] mq450:min-w-full mq750:flex-1">
                  <img
                    className="absolute top-[7px] left-[306px] w-[29.4px] h-[27.2px] object-contain"
                    loading="eager"
                    alt=""
                    src="/arrowbutton-arrow-3@2x.png"
                  />
                  <img
                    className="absolute top-[88px] left-[12px] w-10 h-10 object-cover"
                    loading="eager"
                    alt=""
                    src="/wavinghand-1@2x.png"
                  />
                  <h3 className="m-0 absolute top-[93px] left-[68px] text-inherit tracking-[0.04em] uppercase font-bold font-inherit mq450:text-[19px]">
                    Say Hello
                  </h3>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border min-w-[252px] max-w-full text-83xl">
                  <h1 className="m-0 self-stretch h-[102px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit inline-block shrink-0 [text-shadow:3px_0_0_#3bffad,_0_3px_0_#3bffad,_-3px_0_0_#3bffad,_0_-3px_0_#3bffad] z-[1] mq450:text-12xl mq750:text-32xl">
                    Touch
                  </h1>
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-1 relative max-w-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/line-4.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-base text-whitesmoke font-helvetica-now-text- mq1100:flex-wrap">
            <div className="h-[156px] w-[360px] relative leading-[160%] inline-block shrink-0 max-w-full z-[1]">
              <p className="m-0">
                The goal of a designer is to listen, observe, understand,
                sympathize, empathize, synthesize, and glean insights that
                enable him or her to 'make the invisible visible.
              </p>
              <p className="m-0 text-xl">-Hillman Curtis</p>
            </div>
            <div className="w-[388px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch h-[138px] relative leading-[160%] inline-block shrink-0 z-[1]">
                Collaboration fuels innovation, and I'm eager to join forces
                with you to craft something extraordinary. I'm here to provide
                answers and guidance, overcoming any obstacles that come our
                way. Let's bring your ideas to life—ready when you are!
              </div>
              <div className="w-[295px] flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[160%] whitespace-nowrap z-[1]">
                    nsurjagade07@gmail.com
                  </div>
                  <div className="relative leading-[160%] z-[1]">
                    Available for work
                  </div>
                </div>
                <div className="relative leading-[160%] z-[1]">India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1279px] flex flex-row items-start justify-between gap-[20px] max-w-full text-base font-helvetica-now-text- mq750:flex-wrap">
          <div className="w-[180px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-[15px] pl-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative [text-decoration:underline] tracking-[0.08em] z-[1]">
                Linkedin
              </div>
              <div className="relative [text-decoration:underline] tracking-[0.08em] z-[1]">
                Reddit
              </div>
            </div>
          </div>
          <div className="h-[78px] w-[225px] relative leading-[160%] text-whitesmoke text-center inline-block shrink-0 z-[1]">
            Devoted product designer, embracing inspiration from the cosmos. ✨
          </div>
          <div className="w-[179px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative [text-decoration:underline] tracking-[0.08em] z-[1]">
                Behance
              </div>
              <div className="relative [text-decoration:underline] tracking-[0.08em] z-[1]">
                Dribbble
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
