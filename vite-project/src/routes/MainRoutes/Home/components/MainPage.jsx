import TestimonialCard from "./TestimonialCard";
import WhyChooseUs from "./WhyChooseUs";
import WorkingHours from "./WorkingHours";
import OpportunityMessage from "./OpportunityMessage";
import testimonial1 from '../../../../assets/home/testimonial/testimonial1.png'
import testimonial2 from '../../../../assets/home/testimonial/testimonial2.png'
import { Container } from "../../../../components/Layout";


const MainPage = () => {
  return (
    <Container>
    <div className="mx-auto py-6 px-4 lg:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">

      
      {/* Left Column: Alumni Testimonials */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Students Testimonials</h2>
        {/* <h3 className="text-lg font-semibold">STUDENTS TESTIMONIALS</h3> */}
        <TestimonialCard
          name="Akhil Singh"
          // title="SCIENTIST"
          text="Teachers are very nice, teaching style is very friendly"
          imgSrc={testimonial1}
          tag="SAID"
        />
        <TestimonialCard
          name="Deepak Kumar"
          // title="PEDIATRIST"
          text="Nice to study while also taking part in different sports and activities"
          imgSrc={testimonial2}
          tag="SAID"
        />
      </div>

      {/* Middle Column: Why Choose Us */}
      <WhyChooseUs />

      {/* Right Column: Working Hours + Message */}
      <div className="space-y-6">
        <WorkingHours />
        <OpportunityMessage />
      </div>
    </div>
    </Container>
  );
};

export default MainPage;
