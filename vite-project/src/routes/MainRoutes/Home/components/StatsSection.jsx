import { Container } from "../../../../components/Layout";
import { statsData } from "../../../../db";

const StatsSection = () => {
  return (
    <div className={`bg-black/80 text-white`}>
      <Container>
        <section className="py-16 px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {statsData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 animate-fadeIn"
              >
                <div className={`p-4 ${item.bg}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-montserratregular">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default StatsSection;
