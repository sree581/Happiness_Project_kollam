const testimonials = [
  {
    quote:
      "I had been feeling anxious and exhausted for months but didn't know who to talk to. The sessions gave me a safe space to open up without judgment. I now handle work stress far better and sleep peacefully again.",
    name: "Anjali S.",
    detail: "Bank Employee",
  },
  {
    quote:
      "We were on the verge of giving up on our marriage. Our counsellor taught us to listen to each other instead of arguing. Today we communicate calmly, and our bond is stronger than before.",
    name: "Rahul & Meera",
    detail: "Business Owner & Teacher",
  },
  {
    quote:
      "My 8-year-old was withdrawn and struggling at school. The therapist used play and gentle activities, and within a few weeks he was smiling and participating in class again. We're so grateful.",
    name: "Divya M.",
    detail: "Mother of a Class 3 Student, Kollam",
  },
  {
    quote:
      "After my father's retirement, tension kept rising at home. The family sessions helped each of us understand the others' feelings. Our home feels peaceful and connected again.",
    name: "Suresh K.",
    detail: "Government Employee",
  },
  {
    quote:
      "Exam pressure and fear of failing were overwhelming me. My counsellor helped me manage stress and rebuild my confidence. I'm more focused and far less anxious now.",
    name: "Aswin R.",
    detail: "Engineering Student",
  },
  {
    quote:
      "After losing my husband, I felt completely lost. The counsellor was patient and compassionate, and helped me take small steps toward healing. I'm slowly finding joy in life again.",
    name: "Latha P.",
    detail: "Retired School Teacher",
  },
];

export default function Voices() {
  return (
    <section id="voices" className="px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
      <div className="w-full text-center rounded-[2rem] bg-[#3e6b58] px-6 py-16 sm:py-24 shadow-[0_25px_70px_rgba(36,51,47,0.15)]">
        <p className="eyebrow !text-[#f8f5ec]/80">In their words</p>
        <h2 className="section-title mb-6">
          Real people. <span className="italic">Real experiences.</span>
        </h2>
        <div className="mx-auto grid max-w-7xl gap-5 text-left sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map(({ quote, name, detail }) => (
            <figure
              key={name}
              className="flex h-full flex-col justify-between rounded-2xl bg-[#f8f5ec]/10 p-6 sm:p-7"
            >
              <blockquote className="italic leading-relaxed text-[#f8f5ec]/90">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-[#f8f5ec]/80">
                <strong className="font-semibold text-[#f8f5ec]">{name}</strong>
                <span>, </span>
                <em>{detail}</em>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}