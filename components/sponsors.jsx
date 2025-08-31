const sponsors = [
  "SPONSOR 1",
  "SPONSOR 2",
  "SPONSOR 3",
  "SPONSOR 4",
  "SPONSOR 5",
  "SPONSOR 6",
  "SPONSOR 7",
];

export default function Sponsors() {
  return (
    <section className="bg-[#111827] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="my-text text-[28px] text-center leading-[33px] text-white mb-12">
          Our Sponsors
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-[#252836] border border-[#252836] px-8 py-4"
            >
              <span className="text-[#9D0C0F] my-text text-[14px]">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
