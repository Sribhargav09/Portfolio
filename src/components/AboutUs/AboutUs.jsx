import PatternImg from "../../assets/images/patternImg.jpg";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import AboutUsBg from "../../assets/images/secBg.jpg";
import { SectionTitle } from "../SectionTitles";
import AboutImg from "../../assets/images/resources/aboutImg.jpg";
import { ReactComponent as Signature } from "../../lib/icons/Signature.svg";
import { GoPrimitiveDot } from "react-icons/go";

const AboutUs = (props) => {
  return (
    <section className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="About"
          titleInner="Me"
          desc="A Senior Software Engineer and Architect, distinguished researcher, and entrepreneur with a strong academic foundation, holding a master's degree in computer science from San Francisco Bay University, USA. My pioneering contributions span blockchain, Internet of Things (IoT), and Artificial Intelligence (AI). Excelling in software architecture and development, my proficiency in AI, ML, and cloud platforms has driven high-performance applications, pushing technological boundaries and inspiring future technologists. I have authored several books, published numerous papers, and hold multiple patents, reflecting my deep commitment to advancing technology and innovation."
        ></SectionTitle>
        <div className="aboutUs relative w-full p-[1.25rem] lg:p-[1.875rem] mt-[5.9375rem]">
          <div
            className="aboutUsBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-gray bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
            style={{height: '75%' }}
          ></div>
          <div className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="aboutImg relative mt-[-5.625rem] ml-0 lg:ml-[-1.875rem]">
                <img
                  className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative z-[1] w-full"
                  src={AboutImg}
                  alt=""
                ></img>
                {/* About Image */}
              </div>
            </div>
            <div>
              <div className="aboutCapWrap w-full">
                <div className="aboutCap relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden z-[1] lg:py-12 xl:pt-[4.6875rem] xl:pb-[4.375rem] p-5 md:p-10 lg:px-[3.5rem] xl:px-20">
                  <div
                    className="aboutCapBg bg-white opacity-90 opc8 absolute rounded-in sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                  ></div>
                  <h3 className="text-accent2 font-light text-[1.5rem] md:text-[1.875rem] leading-tight font-Poppins">
                  {" "}
                  <span className="text-accent font-bold uppercase text-[1.5rem] md:text-[1.875rem]">
                  Mentoring and Guidance
                  </span>
                  </h3>
                  <h4 className="text-accent2 font-light text-[1.325rem] md:text-[1.5rem] leading-normal font-Poppins">
                  Providing support, advice, and resources to nurture the next generation of tech innovators
                  </h4>
                  <ul className="grid grid-cols-1 gap-5 mt-6">
                    {/* <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Phone:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="tel:+1 (510)693-3577"
                          title=""
                        >
                          +1 (510)693-3577
                        </a>
                      </span>
                    </li> */}
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Email:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="mailto:Sribhargav.adusumilli@ieee.org"
                          title=""
                        >
                          Sribhargav.adusumilli@ieee.org
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Address:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        Dania Beach, Florida 33004
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Mentor:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2 uppercase flex items-center">
                        <GoPrimitiveDot
                          size="1.5rem"
                          className="fill-accent"
                        ></GoPrimitiveDot>
                        Available
                      </span>
                    </li>
                    <li>
                    <section style={{"height": '596px', "box-shadow": 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px', "border-radius": '16px', "overflow": 'hidden', "width": '100%', "max-width": '650px'}}><iframe src="https://adplist.org/widgets/booking?src=sri-bhargav-krishna-adusumilli" title="" width="100%" height="100%" loading="lazy" style={{'border': '0px'}}></iframe></section>
                      
                    </li>
                  </ul>
                  {/* <Signature className="fill-accent h-[4.5rem] mt-[2.375rem]"></Signature> */}
                  {/* About Cap */}
                </div>
                {/* About Cap Wrap */}
              </div>
            </div>
          </div>
          {/* About Us */}
        </div>
      </div>
      {/* About Us Wrap */}
    </section>
  );
};

export default AboutUs;
