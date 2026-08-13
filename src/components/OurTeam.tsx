import { useState } from "react";
import { motion } from "framer-motion";

const therapists = [
  {
    name: "Adarsh",
    role: "PhD Researcher & Academic Instructor",
    domain: "Environmental Criminology, Victimology & Human Behavior",
    experience: "PhD Researcher and academic instructor",
    specialization:
      "Crime Mapping & Spatial Analysis, Victim-Centric Approaches, Trauma-Informed Frameworks, and Behavioral Insights.",
    shortBio:
      "Adarsh is a dedicated PhD researcher specializing in environmental criminology and victimology, supported by a foundational undergraduate background in psychology.",
    fullBio:
      "His work focuses on the complex intersection of human behavior, adverse experiences, and physical environments. Having completed advanced postgraduate training in Victimology in Croatia, he brings a deeply trauma-informed perspective to the clinical setting. Adarsh believes in a holistic approach to support, utilizing his understanding of systemic and environmental factors to help foster safety, resilience, and overall well-being for individuals.",
    images: [
      "/images/adarsh-1.jpg",
      "/images/adarsh-2.jpg",
    ],
  },

  {
    name: "Manav Jyothi",
    role: "Clinical Psychologist & Psychoanalytic Psychotherapist",
    domain: "Clinical Psychology, Psychotherapy & Mental Wellbeing",
    experience: "8+ years of experience",
    specialization:
      "Clinical Psychology, Psychoanalytic Psychotherapy, Individual, Couple & Family Support",
    shortBio:
      "Manav Jyothi is a licensed Clinical Psychologist and Psychoanalytic psychotherapist with extensive experience in mental health care and therapeutic practice.",
    fullBio:
      "He holds an M.Phil. in Clinical Psychology from IMHANS, Kozhikode, and has served as a Clinical Psychologist with the District Mental Health Programme, Kollam, as well as Malabar Medical College, Kozhikode. He then worked with reputed institutes in mental health in Calicut and Kochi before moving to Kollam to establish Happiness Project. Through his work with individuals, couples, and families, he has supported people in navigating a wide range of psychological and emotional challenges. Combining professional expertise with a compassionate and reflective approach, he is deeply committed to promoting mental well-being, fostering self-understanding, and creating meaningful spaces for dialogue on mental health and human relationships. He currently serves as the Clinical Director of Happiness Project.",
    images: [
      "/images/manav-jyothi-1.jpeg",
      "/images/manav-jyothi-2.jpeg",
    ],
  },
];

function PhotoGallery({
  therapist,
}: {
  therapist: (typeof therapists)[number];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % therapist.images.length
    );
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + therapist.images.length) %
        therapist.images.length
    );
  };

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#EDE8DF]">
        <motion.img
          key={therapist.images[currentImage]}
          src={therapist.images[currentImage]}
          alt={`${therapist.name} - photo ${currentImage + 1}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="h-full w-full object-cover"
        />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Previous */}
        <button
          type="button"
          onClick={previousImage}
          aria-label={`Previous photo of ${therapist.name}`}
          className="
            absolute left-4 top-1/2
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-white/40
            bg-white/75
            text-[#24332F]
            shadow-lg
            backdrop-blur-md
            transition
            hover:bg-white
            md:opacity-0
            md:group-hover:opacity-100
          "
        >
          ←
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextImage}
          aria-label={`Next photo of ${therapist.name}`}
          className="
            absolute right-4 top-1/2
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-white/40
            bg-white/75
            text-[#24332F]
            shadow-lg
            backdrop-blur-md
            transition
            hover:bg-white
            md:opacity-0
            md:group-hover:opacity-100
          "
        >
          →
        </button>

        {/* Image counter */}
        <div
          className="
            absolute bottom-4 right-4
            rounded-full
            border border-white/40
            bg-black/25
            px-3 py-1
            text-xs
            tracking-wider
            text-white
            backdrop-blur-md
          "
        >
          {currentImage + 1} / {therapist.images.length}
        </div>

        {/* Tinder-style progress bars */}
        <div className="absolute left-5 right-5 top-4 flex gap-1.5">
          {therapist.images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`View photo ${index + 1}`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/40"
            >
              <span
                className={`block h-full rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "w-full bg-white"
                    : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3">
        {therapist.images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setCurrentImage(index)}
            className={`
              h-16 w-16
              overflow-hidden
              rounded-xl
              border-2
              transition
              ${
                index === currentImage
                  ? "border-[#24332F] opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }
            `}
          >
            <img
              src={image}
              alt={`${therapist.name} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function TherapistCard({
  therapist,
  index,
}: {
  therapist: (typeof therapists)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="
        overflow-hidden
        rounded-[38px]
        border border-[#DDD6CC]
        bg-white/65
        p-5
        shadow-[0_25px_70px_rgba(36,51,47,0.08)]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_90px_rgba(36,51,47,0.12)]
        sm:p-7
      "
    >
      {/* Gallery */}
      <PhotoGallery therapist={therapist} />

      {/* Content */}
      <div className="px-1 pb-3 pt-8 sm:px-2 sm:pt-9">

        {/* Name */}
        <div className="mb-7">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#91897F]">
            {therapist.role}
          </p>

          <h3 className="text-4xl leading-[0.95] text-[#24332F] sm:text-5xl">
            {therapist.name}
          </h3>
        </div>

        {/* Experience + Specialization */}
        <div className="grid gap-3 sm:grid-cols-2">

          <div
            className="
              min-h-[115px]
              rounded-[22px]
              border border-[#E1DAD0]
              bg-[#F8F6F1]/70
              p-5
            "
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9187]">
              Experience
            </p>

            <p className="text-base leading-7 text-[#4E514E]">
              {therapist.experience}
            </p>
          </div>

          <div
            className="
              min-h-[115px]
              rounded-[22px]
              border border-[#E1DAD0]
              bg-[#F8F6F1]/70
              p-5
            "
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9187]">
              Specialization
            </p>

            <p className="text-base leading-7 text-[#4E514E]">
              {therapist.specialization}
            </p>
          </div>

        </div>

        {/* Domain */}
        <div className="mt-3 rounded-[22px] border border-[#E1DAD0] bg-[#F8F6F1]/70 p-5">
          <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9187]">
            Domain
          </p>

          <p className="text-base leading-7 text-[#4E514E]">
            {therapist.domain}
          </p>
        </div>

        {/* Short introduction */}
        <p className="mt-7 text-[17px] leading-8 text-[#666864]">
          {therapist.shortBio}
        </p>

        {/* Read more */}
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            border-b
            border-[#24332F]/40
            pb-1
            text-sm
            font-medium
            text-[#24332F]
            transition
            hover:border-[#24332F]
          "
        >
          {expanded ? "Read less" : "Read more"}

          <span
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>

        {/* Expanded bio */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
            marginTop: expanded ? 24 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <div className="border-t border-[#DDD6CC] pt-6">
            <p className="text-[16px] leading-8 text-[#666864]">
              {therapist.fullBio}
            </p>
          </div>
        </motion.div>

      </div>
    </motion.article>
  );
}

export default function OurTeam() {
  return (
    <section
      id="our-team"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F1]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.55em] text-[#8B847A]">
            OUR PEOPLE
          </p>

          <h2
            className="
              text-5xl
              leading-[0.9]
              text-[#24332F]
              sm:text-6xl
              lg:text-[82px]
            "
          >
            People behind
            <br />
            the <span className="italic">care.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#666864] sm:text-xl">
            Meet the people who bring professional expertise,
            curiosity, compassion, and a deeply human perspective
            to Happiness Project.
          </p>
        </motion.div>

        {/* Two people side by side */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {therapists.map((therapist, index) => (
            <TherapistCard
              key={therapist.name}
              therapist={therapist}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}