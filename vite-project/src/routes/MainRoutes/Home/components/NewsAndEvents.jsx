import LatestNews from "./LatestNews";
import UpcomingEvents from "./UpcomingEvents";
import { Container } from "../../../../components/Layout";

const NewsAndEvents = () => {
  return (
    <Container>
    <div className="mx-auto py-8 px-4 md:flex gap-6 gap-y-4">
      <LatestNews />
      <UpcomingEvents />
    </div>
    </Container>
  );
};

export default NewsAndEvents;
