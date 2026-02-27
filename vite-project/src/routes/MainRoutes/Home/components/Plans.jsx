import { FaArrowAltCircleRight } from 'react-icons/fa';
import { planInfo } from '../../../../db';
import { Container } from '../../../../components/Layout';
import { plansCards } from '../../../../db';
import { H2 } from '../../../../components/Typography';

export default function Plans() {
    return (
        <div className='bg-white'>
            <Container className=''>
                <div className="font-montserratregular flex flex-wrap justify-center gap-6 lg:gap-0 lg:flex-nowrap w-full px-4 lg:px-6">
                    <div className='lg:w-[70%] gap-2 lg:py-20'>
                        <div className="flex justify-center lg:justify-start">
                            <H2 className='inline-block border-b-2 border-primary py-4'>Get Admission</H2>
                        </div>

                        <section className="mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {plansCards.map((card) => (
                                    <div key={card.id} className="w-full">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            loading="lazy"
                                            className="w-full h-auto"
                                        />
                                        <h2 className="text-xl mt-4 font-montserratbold">
                                            {card.title}
                                        </h2>
                                        <p className="mt-4 lg:mt-2 text-sm text-gray-400 font-montserratregular">{card.description}</p>
                                        {/* <p className="mt-4 lg:mt-2 text-red-500 font-montserratlight">
                                            <a href={card.link}>READ MORE</a>
                                        </p> */}
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Special Section */}
                    <div className="mb-4 lg:mb-0 h-fit lg:ml-16 w-full sm:w-[45%] lg:w-[30%] bg-gray-200 p-6 flex flex-col justify-start items-start">
                        {planInfo.map((item) => (
                            <div key={item.id} className="w-full gap-y-6">
                                <p className=" font-montserratregular w-full">
                                    <a href={item.href} className="text-gray-500">
                                        {item.title}
                                        {item.tag && (
                                            <span className="w-2 h-2 ml-2 text-white bg-secondary text-xs p-1 rounded">
                                                {item.tag}
                                            </span>
                                        )}
                                    </a>
                                </p>
                                <hr className="w-full border-gray-300 my-6" />
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </div>
    );
}
