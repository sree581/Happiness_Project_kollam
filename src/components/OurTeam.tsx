import { useState } from "react";
import { motion } from "framer-motion";

type Detail = {
  label: string;
  value: string | string[];
  wide?: boolean;
};

type Therapist = {
  name: string;
  role: string;
  details: Detail[];
  shortBio: string;
  fullBio: string[];
  images: string[];
  imagePosition?: string;
  linkedin?: string;
};

const therapists: Therapist[] = [
  {
    name: "Manav Jyothi",
    role: "Clinical Psychologist & Psychoanalytic Psychotherapist",
    details: [
      { label: "Experience", value: "8+ years of experience" },
      {
        label: "Specialization",
        value:
          "Clinical Psychology, Psychoanalytic Psychotherapy, Individual, Couple & Family Support",
      },
      {
        label: "Domain",
        value: "Clinical Psychology, Psychotherapy & Mental Wellbeing",
        wide: true,
      },
    ],
    shortBio:
      "Manav Jyothi is a licensed Clinical Psychologist and Psychoanalytic psychotherapist with extensive experience in mental health care and therapeutic practice.",
    fullBio: [
      "He holds an M.Phil. in Clinical Psychology from IMHANS, Kozhikode, and has served as a Clinical Psychologist with the District Mental Health Programme, Kollam, as well as Malabar Medical College, Kozhikode. He then worked with reputed institutes in mental health in Calicut and Kochi before moving to Kollam to establish Happiness Project. Through his work with individuals, couples, and families, he has supported people in navigating a wide range of psychological and emotional challenges. Combining professional expertise with a compassionate and reflective approach, he is deeply committed to promoting mental well-being, fostering self-understanding, and creating meaningful spaces for dialogue on mental health and human relationships. He currently serves as the Clinical Director of Happiness Project.",
    ],
    images: [
      "/images/manav-jyothi-1.jpeg",
      "/images/manav-jyothi-2.jpeg",
    ],
  },

  {
    name: "Adarsh",
    role: "PhD Researcher & Academic Instructor",
    details: [
      { label: "Experience", value: "PhD Researcher and academic instructor" },
      {
        label: "Specialization",
        value:
          "Crime Mapping & Spatial Analysis, Victim-Centric Approaches, Trauma-Informed Frameworks, and Behavioral Insights.",
      },
      {
        label: "Domain",
        value: "Environmental Criminology, Victimology & Human Behavior",
        wide: true,
      },
    ],
    shortBio:
      "Adarsh is a dedicated PhD researcher specializing in environmental criminology and victimology, supported by a foundational undergraduate background in psychology.",
    fullBio: [
      "His work focuses on the complex intersection of human behavior, adverse experiences, and physical environments. Having completed advanced postgraduate training in Victimology in Croatia, he brings a deeply trauma-informed perspective to the clinical setting. Adarsh believes in a holistic approach to support, utilizing his understanding of systemic and environmental factors to help foster safety, resilience, and overall well-being for individuals.",
    ],
    images: [
      "/images/adarsh-1.jpg",
      "/images/adarsh-2.jpg",
    ],
  },

  {
    name: "Mr. Cemmal S.K",
    role: "Clinical Psychologist",
    details: [
      { label: "Qualification", value: "B.Sc, MA, M.Phil in Clinical Psychology", wide: true },
      {
        label: "Specialization",
        value: [
          "Anxiety",
          "Depression",
          "OCD",
          "Adverse Childhood Experiences",
          "Self-exploration",
          "Relationship issues",
          "Domestic abuse",
          "Non-recent sexual abuse",
          "PTSD",
          "Complex Trauma (C-PTSD)",
          "Developmental trauma",
          "Personality disorders",
        ],
        wide: true,
      },
      {
        label: "Therapy Approaches",
        value: [
          "Polyvagal theory",
          "IFS (Internal Family System)",
          "Cognitive Behavior Therapy (CBT)",
          "Dialectical Behavior Therapy (DBT)",
          "Compassionate Inquiry",
          "EMDR (Eye Movement Desensitization and Reprocessing)",
        ],
        wide: true,
      },
    ],
    shortBio:
      "Cemmal is a RCI licensed Clinical Psychologist. His expertise lies in providing therapy to adolescents and adults with a focus on developmental trauma, attachment style and trauma-focused practices.",
    fullBio: [
      "He graduated in Traumatic Stress studies from Trauma Research Foundation. His approaches are trauma-informed and queer-affirmative. He is an EMDR (Eye Movement Desensitisation Reprocessing) trainee in practice. He believes in non-shaming and non-pathologizing approaches.",
    ],
    images: ["/images/cemmal.jpeg"],
    imagePosition: "50% 25%",
  },

  {
    name: "Mr. Hariharan R",
    role: "RCI-registered Clinical Psychologist",
    details: [
      { label: "Works with", value: "Children and adults" },
      {
        label: "Expertise",
        value:
          "Neurodivergence and trauma-informed care, comprehensive psychological assessments",
      },
      {
        label: "Areas of Support",
        value: [
          "Developmental disorders",
          "Behavioural challenges",
          "Relationship issues",
          "Complex trauma",
        ],
        wide: true,
      },
      {
        label: "Therapy Approaches",
        value: [
          "EMDR (Eye Movement Desensitization and Reprocessing)",
          "IFS (Internal Family Systems)",
          "Narrative Therapy",
          "Behavioural Interventions",
        ],
        wide: true,
      },
    ],
    shortBio:
      "Mr. Hariharan R is an RCI-registered Clinical Psychologist known for his compassionate and client-centric approach to mental health. He is committed to providing ethical, non-shaming therapy that empowers individuals to navigate their distinct life challenges.",
    fullBio: [
      "With specialized expertise in neurodivergence and trauma-informed care, he works with both children and adults. He is skilled in conducting comprehensive psychological assessments and treating a wide spectrum of developmental disorders, behavioural challenges, relationship issues, and complex trauma.",
      "To facilitate deep and lasting healing, he integrates highly effective, evidence-based therapeutic modalities into his practice, including EMDR (Eye Movement Desensitization and Reprocessing), IFS (Internal Family Systems), Narrative Therapy and Behavioural Interventions.",
      "Mr. Hariharan believes in a collaborative therapeutic process, ensuring that every individual feels safe, respected, and supported on their journey toward mental well-being.",
    ],
    images: ["/images/hariharan.jpeg"],
    imagePosition: "50% 22%",
  },

  {
    name: "Akanksha Rohilla",
    role: "RCI-registered Clinical Psychologist",
    details: [
      { label: "Training", value: "2 years of intensive clinical training at CIP, Ranchi" },
      { label: "Experience", value: "3+ years in practice, in-person and online" },
      {
        label: "Areas of Support",
        value: [
          "Mental and behavioural disorders",
          "Schizophrenia",
          "Neurofeedback",
          "Tele-therapy",
        ],
        wide: true,
      },
      {
        label: "Approach",
        value: "Person-centred, grounded in ethics, empathy and professionalism",
        wide: true,
      },
    ],
    shortBio:
      "I'm an RCI registered Clinical Psychologist. In my 2 years of intense training at CIP, Ranchi, and 3 more years in practice, I have dealt with a variety of mental and behavioral disorders in-person and tele platforms, provided mental health care with passion and patience, with ethics and empathy, and even worked closely with schizophrenia patients with modern technology of Neurofeedback.",
    fullBio: [
      "My goal as a therapist is always in the best benefit of the patient, as I have learned to work with ethics and professionalism with a person-centred approach.",
    ],
    images: ["/images/akansha.jpeg"],
    imagePosition: "50% 35%",
    linkedin: "https://www.linkedin.com/in/akanksha-rohilla-050462140",
  },
];

function PhotoGallery({
  therapist,
}: {
  therapist: Therapist;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultiple = therapist.images.length > 1;

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
          style={{ objectPosition: therapist.imagePosition ?? "50% 50%" }}
        />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {hasMultiple && (
        <>
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
        </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
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
      )}
    </div>
  );
}

function TherapistCard({
  therapist,
  index,
}: {
  therapist: Therapist;
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#3e6b58]">
            {therapist.role}
          </p>

          <h3 className="text-3xl leading-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {therapist.name}
          </h3>

          {therapist.linkedin && (
            <a
              href={therapist.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#3e6b58] transition hover:text-[#24332F]"
            >
              LinkedIn profile ↗
            </a>
          )}
        </div>

        {/* Details */}
        <div className="grid gap-3 sm:grid-cols-2">
          {therapist.details.map((detail) => (
            <div
              key={detail.label}
              className={`
                rounded-[22px]
                border border-[#E1DAD0]
                bg-[#F8F6F1]/70
                p-5
                ${detail.wide ? "sm:col-span-2" : "min-h-[115px]"}
              `}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#3e6b58]">
                {detail.label}
              </p>

              {Array.isArray(detail.value) ? (
                <ul className="flex flex-wrap gap-2">
                  {detail.value.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#D6DDD2] bg-white/80 px-3 py-1.5 text-sm text-[#3E5A4E]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base leading-7 text-[#4E514E]">
                  {detail.value}
                </p>
              )}
            </div>
          ))}
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
          <div className="space-y-4 border-t border-[#DDD6CC] pt-6">
            {therapist.fullBio.map((paragraph) => (
              <p key={paragraph} className="text-[16px] leading-8 text-[#666864]">
                {paragraph}
              </p>
            ))}
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
      <div className="relative w-full">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="eyebrow">Our people</p>

          <h2 className="section-title">
            People behind the <span className="italic">care.</span>
          </h2>

          <p className="lead mt-6 max-w-2xl">
            Meet the people who bring professional expertise,
            curiosity, compassion, and a deeply human perspective
            to Happiness Project.
          </p>
        </motion.div>

        {/* Team grid */}
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