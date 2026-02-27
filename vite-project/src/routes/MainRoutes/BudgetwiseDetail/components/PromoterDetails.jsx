const PromoterDetails = ({ project, refProp }) => {
    const details = project?.promoterDetails;
    return (
        <div ref={refProp} className="mt-8" id="pdPromoterDetails">
            <h2 className="text-2xl font-bold">Promoter Details</h2>
            <h2 className="text-xl font-semibold mb-4">{project.name}</h2>

            <h3 className="text-lg font-semibold">Developed By</h3>
            <p className="mb-4">{details.name}</p>




            <h3 className="text-xl font-semibold mb-2">Investment Opportunity</h3>
            <p className="text-gray-700 mb-4">{details.investmentNote}</p>

            {/* <h3 className="text-xl font-semibold mb-2">Promoter Details</h3>
            <ul className="text-gray-700">
                <li><strong>Name:</strong> {details.name}</li>
                <li><strong>Registration No:</strong> {details.registrationNo}</li>
                <li><strong>Contact:</strong> {details.contact}</li>
            </ul> */}
        </div>
    );
};

export default PromoterDetails;
