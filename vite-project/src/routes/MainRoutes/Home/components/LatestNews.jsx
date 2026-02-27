import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { newsItems } from "../../../../db";


const LatestNews = () => {
    return (
        <div className="w-full md:w-2/3 lg:p-4">
            <h2 className="text-3xl font-montserratbold pb-4">Our Recent Activities</h2>
            {/* <h3 className="font-montserratlight text-secondary text-md py-4">KEEP UPDATED</h3> */}
            <div className="grid md:grid-cols-3 gap-4 font-montserratregular">
                {newsItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
                    >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-40 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="p-3">
                                <div className="text-sm text-gray-500 mb-1">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-500" />
                                    {item.date}
                                </div>
                                <h3 className="text-base font-semibold">{item.title}</h3>
                            </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default LatestNews;
