import { useState } from "react";
import parse from "html-react-parser";

// Category component for reusability
interface CategoryProps {
  categoryId: number;
  categoryTitle: string;
  categoryDescription: string;
  options: {
    label: string;
    value: string;
    id?: string;
    identity: string;
    labelHTML: any;
  }[];
  selectedOption: string | null;
  setSelectedOption: (value: string | null) => void;
  selectedId: string | null;
  setSelectedId: (value: string | null) => void;
  setTotalScore: any;
  spinKey: number;
  setSpinKey: any;
}

const Category = ({
  categoryTitle,
  categoryDescription,
  options,
  selectedOption,
  setSelectedOption,
  setSelectedId,
  selectedId,
  setTotalScore,
  spinKey,
  setSpinKey,
}: CategoryProps) => {
  function handleCheckboxChange(value: string, identity: string) {
    if (selectedId !== identity) {
      if (selectedOption !== null) {
        setTotalScore((prev: any) => prev - Number(selectedOption));
      }
      setSelectedOption(value);
      setSelectedId(identity);
      setTotalScore((prev: any) => prev + Number(value));
    } else {
      setSelectedOption(null);
      setSelectedId(null);
      setTotalScore((prev: any) => prev - Number(value));
    }
    setSpinKey((prevKey: any) => prevKey + 1);
  }

  return (
    <div className="w-full">
      <div className="font-semibold px-5 py-1 w-full bg-red-800 text-white">
        {categoryTitle}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-0">
        <div className="bg-black py-5 pl-5 text-white sm:text-gray-900 sm:bg-transparent">
          {parse(categoryDescription)}
          <div className="text-center sm:text-start"></div>
        </div>
        <div className="flex flex-col p-5 items-center justify-center sm:justify-start">
          {options.map(({ label, value, id, identity, labelHTML }) => (
            <div
              className="flex w-full pl-5 md:pl-10 font-semibold my-2 items-start justify-center gap-1 sm:justify-start sm:items-start"
              key={value}
            >
              <input
                className="mt-2"
                id={id ? id : label}
                type="checkbox"
                value={value}
                onChange={() => handleCheckboxChange(value, identity)}
                checked={selectedId === identity}
              />

              {parse(labelHTML)}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 p-5 bg-slate-100 sm:bg-transparent sm:items-end sm:flex-col sm:justify-start">
          <div className="flex sm:flex-col gap-2 items-center justify-center">
            <h1 className="font-semibold">Points Gained : </h1>
            <span
              key={spinKey} // Triggering the spin animation
              className="w-10 h-10 rounded-full bg-purple-600 text-white flex flex-col items-center justify-center font-semibold flip"
            >
              {Number(selectedOption)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function App2() {
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<string | null>(null);
  const [selectedOption4, setSelectedOption4] = useState<string | null>(null);
  const [selectedOption5, setSelectedOption5] = useState<string | null>(null);
  const [selectedOption6, setSelectedOption6] = useState<string | null>(null);
  const [selectedOption7, setSelectedOption7] = useState<string | null>(null);
  const [selectedOption8, setSelectedOption8] = useState<string | null>(null);
  const [selectedOption9, setSelectedOption9] = useState<string | null>(null);
  const [selectedOption10, setSelectedOption10] = useState<string | null>(null);
  const [selectedOption11, setSelectedOption11] = useState<string | null>(null);

  const [selectedId1, setSelectedId1] = useState<string | null>(null);
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId3, setSelectedId3] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedId5, setSelectedId5] = useState<string | null>(null);
  const [selectedId6, setSelectedId6] = useState<string | null>(null);
  const [selectedId7, setSelectedId7] = useState<string | null>(null);
  const [selectedId8, setSelectedId8] = useState<string | null>(null);
  const [selectedId9, setSelectedId9] = useState<string | null>(null);
  const [selectedId10, setSelectedId10] = useState<string | null>(null);
  const [selectedId11, setSelectedId11] = useState<string | null>(null);

  const [totalScore, setTotalScore] = useState(0);

  // Separate spin keys for each category
  const [spinKey1, setSpinKey1] = useState(0);
  const [spinKey2, setSpinKey2] = useState(0);
  const [spinKey3, setSpinKey3] = useState(0);
  const [spinKey4, setSpinKey4] = useState(0);
  const [spinKey5, setSpinKey5] = useState(0);
  const [spinKey6, setSpinKey6] = useState(0);
  const [spinKey7, setSpinKey7] = useState(0);
  const [spinKey8, setSpinKey8] = useState(0);
  const [spinKey9, setSpinKey9] = useState(0);
  const [spinKey10, setSpinKey10] = useState(0);
  const [spinKey11, setSpinKey11] = useState(0);

  // Array of category data
  const categories = [
    {
      categoryId: 1,
      categoryTitle:
        "1. Previous ACT residence, or time spent in the ACT in the last eight years?",
      categoryDescription: `<div className="text-center sm:text-start">
            <p className="font-bold">
              How long did you previously live in Canberra? Your bank statements
              and International Movement Record from Home Affairs must evidence
              your claimed date of arrival and previous residence in Canberra.
            </p>
            <p className="font-semibold">
              A visit to Canberra is defined as having stayed for at least seven
              consecutive nights.{" "}
            </p>
          </div>`,
      options: [
        {
          label: "More than five years.",
          labelHTML: `<label htmlFor="More than five years.">More than five years.</label>`,
          value: "20",
          identity: "group-1-member-1",
        },
        {
          label: "Three to five years.",
          labelHTML: `<label htmlFor="Three to five years.">Three to five years.</label>`,
          value: "15",
          identity: "group-1-member-2",
        },
        {
          label: "One to three years.",
          labelHTML: `<label htmlFor="One to three years.">One to three years.</label>`,
          value: "10",
          identity: "group-1-member-3",
        },
        {
          label: "Visited Canberra.",
          labelHTML: `<label htmlFor="Visited Canberra.">Visited Canberra.</label>`,
          value: "5",
          identity: "group-1-member-4",
        },
        {
          label: "Not Applicable",
          labelHTML: `<label htmlFor="Not Applicable 1">Not Applicable</label>`,
          value: "0",
          id: "Not Applicable 1",
          identity: "group-1-member-6",
        },
      ],
      selectedOption: selectedOption1,
      setSelectedOption: setSelectedOption1,
      selectedId: selectedId1,
      setSelectedId: setSelectedId1,
      setTotalScore,
      spinKey: spinKey1,
      setSpinKey: setSpinKey1,
    },
    {
      categoryId: 2,
      categoryTitle: "2. Nominated occupation",
      categoryDescription: `
        <div className="font-bold">
            Is your nominated occupation on the ACT Critical Skills List?
          </div>
      `,
      options: [
        {
          label:
            "Your nominated occupation is ON the ACT Critical Skills List.",
          labelHTML: `<label htmlFor="Your nominated occupation is ON the ACT Critical Skills List.">Your nominated occupation is ON the ACT Critical Skills List.</label>`,
          value: "20",
          identity: "group-2-member-1",
        },
        {
          label:
            "Your nominated occupation is NOT on the ACT Critical Skills List.",
          value: "0",
          identity: "group-2-member-2",

          labelHTML: `<label htmlFor="Your nominated occupation is NOT on the ACT Critical Skills List.">Your nominated occupation is NOT on the ACT Critical Skills List.</label>`,
        },
      ],
      selectedOption: selectedOption2,
      setSelectedOption: setSelectedOption2,
      setTotalScore,
      spinKey: spinKey2,
      setSpinKey: setSpinKey2,
      selectedId: selectedId2,
      setSelectedId: setSelectedId2,
    },
    {
      categoryId: 3,
      categoryTitle: "3. English proficiency",
      categoryDescription: `
       <div className="text-center sm:text-start">
            <h1 className="font-bold text-lg">
              What is your English proficiency level as defined by Home Affairs?
            </h1>
            <p className="font-semibold">
              You meet the Home Affairs requirement for the level of English
              claimed. You must have a valid English test result.
            </p>
          </div>
      `,
      options: [
        {
          label: "Superior.",
          labelHTML: `<label htmlFor="Superior.">Superior.</label>`,
          value: "15",
          identity: "group-3-member-1",
        },
        {
          label: "Proficient.",
          value: "10",
          identity: "group-3-member-2",
          labelHTML: `<label htmlFor="Proficient.">Proficient.</label>`,
        },
        {
          labelHTML: `<label htmlFor="Competent 1">Competent</label>`,
          label: "Competent 1",
          value: "0",
          identity: "group-3-member-3",
        },
      ],
      selectedOption: selectedOption3,
      setSelectedOption: setSelectedOption3,
      setTotalScore,
      spinKey: spinKey3,
      setSpinKey: setSpinKey3,
      selectedId: selectedId3,
      setSelectedId: setSelectedId3,
    },
    {
      categoryId: 4,
      categoryTitle: "4. Spouse/Partner English Proficiency",
      categoryDescription: `
      <div className="flex flex-col gap-3 text-center sm:text-start">
            <h1 className="text-lg font-bold">
              What is your spouse/partner's English proficiency as defined by
              Home Affairs?
            </h1>
            <p className="font-semibold">
              They meet the Home Affairs requirement for the level of English
              claimed or hold an Australian passport.
            </p>
            <p className="font-semibold">
              Note: an Australian passport only equates to 'competent' English.
              If you wish to claim point in this category, your spouse/partner
              must meet the Home Affairs requirements for the level of English
              claimed.
            </p>
          </div>
      `,
      options: [
        {
          label: "Superior/proficient",
          labelHTML: `<label htmlFor="Superior/proficient">Superior/proficient</label>`,
          value: "5",
          identity: "group-4-member-1",
        },
        {
          label: "Competent",
          value: "00",
          identity: "group-4-member-2",
          labelHTML: `<label htmlFor="Competent">Competent</label>`,
        },
        {
          labelHTML: `<label htmlFor="Not Applicable 2">Not Applicable</label>`,
          label: "Not Applicable",
          id: "Not Applicable 2",
          value: "0",
          identity: "group-4-member-3",
        },
      ],
      selectedOption: selectedOption4,
      setSelectedOption: setSelectedOption4,
      setTotalScore,
      spinKey: spinKey4,
      setSpinKey: setSpinKey4,
      selectedId: selectedId4,
      setSelectedId: setSelectedId4,
    },
    {
      categoryId: 5,
      categoryTitle: "5. ACT job offer",
      categoryDescription: `
      <div className="text-center sm:text-start px-5 sm:px-0">
            <h1 className="text-lg font-bold">
              Do you have a full-time genuine ACT job offer in your nominated
              occupation? The position must be in Canberra and be available for
              at least six months. The terms of employment must be in accordance
              with Australian legislation. The employer:{" "}
            </h1>
            <ul className="list-disc font-semibold">
              <li>cannot be trading from a home, online or serviced office.</li>
              <li>
                must explain how the position is relevant to the business.
              </li>
              <li>
                must demonstrate that the position has been advertised within
                the last three months and cannot be filled from the local labour
                market.
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label: "Genuine ACT job offer in the nominated occupation.",
          value: "20",
          identity: "group-5-member-1",
          labelHTML: `<label htmlFor="Genuine ACT job offer in the nominated occupation.">Genuine ACT job offer in the nominated occupation.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 3",
          value: "0000",
          labelHTML: `<label htmlFor="Not applicable 3">Not Applicable</label>`,
          identity: "group-5-member-3",
        },
      ],
      selectedOption: selectedOption5,
      setSelectedOption: setSelectedOption5,
      setTotalScore,
      spinKey: spinKey5,
      setSpinKey: setSpinKey5,
      selectedId: selectedId5,
      setSelectedId: setSelectedId5,
    },
    {
      categoryId: 6,
      categoryTitle: "6. Relevant work experience",
      categoryDescription: `
        <div className="text-center sm:text-start px-5 sm:px-0">
            <h1 className="text-lg font-bold">
              How long have you worked in your nominated occupation at date of Matrix submission?
            </h1>
            <ul className="list-disc font-semibold">
              <li>Your work experience must be relevant to the ACT economy.</li>
              <li>
                You must have a valid skills assessment with points advice showing dates of the relevant work experience assessed. The assessment must substantiate the number of years of relevant overseas work experience claimed in this category.
              </li>
              <li>
                Your relevant work experience must be recorded on your SkillSelect EOI.
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label: "Eight to 10 years employment.",
          value: "20",
          identity: "group-6-member-1",
          labelHTML: `<label htmlFor="Eight to 10 years employment.">Eight to 10 years employment.</label>`,
        },
        {
          label: "Five to Eight years employment.",
          value: "15",
          identity: "group-6-member-2",
          labelHTML: `<label htmlFor="Five to Eight years employment.">Five to Eight years employment.</label>`,
        },
        {
          label: "Three to Five years employment.",
          value: "10",
          identity: "group-6-member-3",
          labelHTML: `<label htmlFor="Three to Five years employment.">Three to Five years employment.</label>`,
        },
      ],
      selectedOption: selectedOption6,
      setSelectedOption: setSelectedOption6,
      setTotalScore,
      spinKey: spinKey6,
      setSpinKey: setSpinKey6,
      selectedId: selectedId6,
      setSelectedId: setSelectedId6,
    },
    {
      categoryId: 7,
      categoryTitle: "7. Spouse/Partner employability",
      categoryDescription: `
          <div className="text-center sm:text-start px-5 sm:px-0">
            <h1 className="text-lg font-bold">
              Your spouse/partner must: 
            </h1>
            <ul className="list-disc font-semibold">
              <li>
              have worked fulltime for at least six in the last 12 months; and 
              </li>
              <li>
                meet the Home Affairs requirement for 'competent' English or have an Australian passport.
              </li>
            </ul>
          </div>
      `,
      options: [
        {
          label:
            "They work/have worked in an occupation that is on the ACT Critical Skills List and they hold a valid skill assessment that is relevant to their current occupation.",
          value: "15",
          identity: "group-7-member-1",
          labelHTML: `<label htmlFor="They work/have worked in an occupation that is on the ACT Critical Skills List and they hold a valid skill assessment that is relevant to their current occupation.">They work/have worked in an occupation that is on the ACT Critical Skills List and they hold a valid skill assessment that is relevant to their current occupation.</label>`,
        },
        {
          label:
            "They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a valid skill assessment which is relevant to their current occupation.",
          value: "10",
          identity: "group-7-member-2",
          labelHTML: `<label htmlFor="They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a valid skill assessment which is relevant to their current occupation.">They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a valid skill assessment which is relevant to their current occupation.</label>`,
        },
        {
          label:
            "They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a relevant qualification from an Australian or overseas tertiary institution.",
          value: "5",
          identity: "group-7-member-3",
          labelHTML: `<label htmlFor="They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a relevant qualification from an Australian or overseas tertiary institution.">They work/have worked in an ANZSCO Skill Level 1 to 3 occupation and they have a relevant qualification from an Australian or overseas tertiary institution.</label>`,
        },

        {
          label: "Not Applicable",
          id: "Not applicable 5",
          value: "0",
          identity: "group-7-member-5",
          labelHTML: `<label htmlFor="Not applicable 5">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption7,
      setSelectedOption: setSelectedOption7,
      setTotalScore,
      spinKey: spinKey7,
      setSpinKey: setSpinKey7,
      selectedId: selectedId7,
      setSelectedId: setSelectedId7,
    },
    {
      categoryId: 8,
      categoryTitle: "8. Tertiary qualification",
      categoryDescription: `
        <div className="flex flex-col gap-2 text-center sm:text-start">
            <h1 className="font-bold text-lg">
              What tertiary qualification do you hold from an Australian or
              International educational institution?
            </h1>
            <p className="font-semibold">
              Your selected qualification must be recorded on your Home Affairs
              SkillSelect EOI.
            </p>
            <p className="font-semibold">
              If the skill assessing body has assessed your selected
              qualification and it is not equivalent to the same Australian
              Qualification Framework level, you can only claim the level at
              which it has been assessed.
            </p>
          </div>
      `,
      options: [
        {
          label: "Doctoral degree",
          value: "20",
          identity: "group-8-member-1",
          labelHTML: `<label htmlFor="Doctoral degree">Doctoral degree</label>`,
        },
        {
          label: "Master’s degree",
          value: "15",
          identity: "group-8-member-2",
          labelHTML: `<label htmlFor="Master’s degree">Master’s degree</label>`,
        },
        {
          label:
            "Bachelor’s degree or trade certificate - at least three years full-time continuous study.",
          value: "10",
          identity: "group-8-member-3",
          labelHTML: `<label htmlFor="Bachelor’s degree or trade certificate - at least three years full-time continuous study.">Bachelor’s degree or trade certificate - at least three years full-time continuous study.</label>`,
        },
        {
          label:
            "Diploma qualification - at least two years full-time continuous study.",
          value: "5",
          identity: "group-8-member-4",
          labelHTML: `<label htmlFor="Diploma qualification - at least two years full-time continuous study.">Diploma qualification - at least two years full-time continuous study.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 6",
          value: "0",
          identity: "group-8-member-5",
          labelHTML: `<label htmlFor="Not applicable 6">Not applicable</label>`,
        },
      ],
      selectedOption: selectedOption8,
      setSelectedOption: setSelectedOption8,
      setTotalScore,
      spinKey: spinKey8,
      setSpinKey: setSpinKey8,
      selectedId: selectedId8,
      setSelectedId: setSelectedId8,
    },
    {
      categoryId: 9,
      categoryTitle: "9. Study at an ACT tertiary institution",
      categoryDescription: `
    <div className="text-center sm:text-start px-5 sm:px-0">
            <h1 className="text-lg font-bold">
              In the last eight years, for how many years did you study to complete a CRICOS* registered course at an ACT tertiary institution, and / or undertake a Professional Year (PY) in the ACT? A PY undertaken in the ACT meets the one-year study criteria. 
            </h1>
            <ul className="list-disc font-semibold">
              <li>You must have a letter of course completion from the ACT institution to prove the claimed period of study.</li>
              <li>
                You must have been resident in Canberra during your claimed period of study. Distance education or online attendance is not accepted.
              </li>
              <li>
               Two or more courses, including a PY, may be counted to prove the period of ACT study if the courses are not concurrent. The courses do not have to be continuous.
              </li>
            </ul>
            <h1 className="font-semibold">*CRICOS - Commonwealth Register of Institutions and Courses for Overseas Students.</h1>
          </div>    
      `,
      options: [
        {
          label: "Four academic years or more of study.",
          value: "20",
          identity: "group-9-member-1",
          labelHTML: `<label htmlFor="Four academic years or more of study.">Four academic years or more of study.</label>`,
        },
        {
          label: "Three academic years of study.",
          value: "15",
          identity: "group-9-member-2",
          labelHTML: `<label htmlFor="Three academic years of study.">Three academic years of study.</label>`,
        },
        {
          label: "Two academic years of study.",
          value: "10",
          identity: "group-9-member-3",
          labelHTML: `<label htmlFor="Two academic years of study.">Two academic years of study.</label>`,
        },
        {
          label: "One academic year of study.",
          value: "5",
          identity: "group-9-member-4",
          labelHTML: `<label htmlFor="One academic year of study.">One academic year of study.</label>`,
        },

        {
          label: "Not Applicable",
          id: "Not applicable 7",
          value: "0",
          identity: "group-9-member-5",
          labelHTML: `<label htmlFor="Not applicable 7">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption9,
      setSelectedOption: setSelectedOption9,
      setTotalScore,
      spinKey: spinKey9,
      setSpinKey: setSpinKey9,
      selectedId: selectedId9,
      setSelectedId: setSelectedId9,
    },
    {
      categoryId: 10,
      categoryTitle: "10. Close family ties",
      categoryDescription: `
          <div className="text-center sm:text-start">
            <h1 className="font-bold text-lg">
              Do you have a close family member who has lived in Canberra for the last two years?
            </h1>
            <p className="font-semibold">
              A close family member is defined as a spouse/ partner, child, parent, brother, sister, aunt, uncle or grandparent of the main applicant or their spouse/ partner.
            </p>
          </div>
      `,
      options: [
        {
          label: "Australian citizen/permanent resident.",
          value: "20",
          identity: "group-10-member-1",
          labelHTML: `<label htmlFor="Australian citizen/permanent resident.">Australian citizen/permanent resident.</label>`,
        },
        {
          label: "Temporary resident visa holder.",
          value: "5",
          identity: "group-10-member-2",
          labelHTML: `<label htmlFor="Temporary resident visa holder.">Temporary resident visa holder.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 8",
          value: "0",
          identity: "group-10-member-3",
          labelHTML: `<label htmlFor="Not applicable 8">Not applicable</label>`,
        },
      ],
      selectedOption: selectedOption10,
      setSelectedOption: setSelectedOption10,
      setTotalScore,
      spinKey: spinKey10,
      setSpinKey: setSpinKey10,
      selectedId: selectedId10,
      setSelectedId: setSelectedId10,
    },
    {
      categoryId: 11,
      categoryTitle: "11. Assets in Canberra",
      categoryDescription: `
          <div className="flex flex-col gap-2 text-center sm:text-start">
            <h1 className="font-bold">
          Have you made a personal cash investment in Canberra to purchase a residential or commercial property (purchase of land only does not meet this criteria)? You must have a Certificate of Title or rates notice to evidence ownership.
            </h1>
            <h1 className="font-bold">
        Have you owned a business in Canberra for the last six months? You are the majority owner (at least 51%) and the business is profitable.
            </h1>
          </div>
      `,
      options: [
        {
          label:
            "Minimum $250,000 cash investment in ACT residential or commercial property.",
          value: "10",
          identity: "group-11-member-1",
          labelHTML: `<label htmlFor="Minimum $250,000 cash investment in ACT residential or commercial property.">Minimum $250,000 cash investment in ACT residential or commercial property.</label>`,
        },
        {
          label: "A minimum $100,000 business turnover in the last six months.",
          value: "10",
          identity: "group-11-member-2",
          labelHTML: `<label htmlFor="A minimum $100,000 business turnover in the last six months.">A minimum $100,000 business turnover in the last six months.</label>`,
        },
        {
          label: "Not Applicable",
          id: "Not applicable 9",
          value: "0",
          identity: "group-11-member-3",
          labelHTML: `<label htmlFor="Not applicable 9">Not Applicable</label>`,
        },
      ],
      selectedOption: selectedOption11,
      setSelectedOption: setSelectedOption11,
      setTotalScore,
      spinKey: spinKey11,
      setSpinKey: setSpinKey11,
      selectedId: selectedId11,
      setSelectedId: setSelectedId11,
    },
  ];

  const handleReset = () => {
    setSelectedOption1(null);
    setSelectedOption2(null);
    setSelectedOption3(null);
    setSelectedOption4(null);
    setSelectedOption5(null);
    setSelectedOption6(null);
    setSelectedOption7(null);
    setSelectedOption8(null);
    setSelectedOption9(null);
    setSelectedOption10(null);
    setSelectedOption11(null);

    setTotalScore(0);

    setSelectedId1(null);
    setSelectedId2(null);
    setSelectedId3(null);
    setSelectedId4(null);
    setSelectedId5(null);
    setSelectedId6(null);
    setSelectedId7(null);
    setSelectedId8(null);
    setSelectedId9(null);
    setSelectedId10(null);
    setSelectedId11(null);
    // Reset all spin keys on reset
    setSpinKey1((prevKey) => prevKey + 1);
    setSpinKey2((prevKey) => prevKey + 1);
    setSpinKey3((prevKey) => prevKey + 1);
    setSpinKey4((prevKey) => prevKey + 1);
    setSpinKey5((prevKey) => prevKey + 1);
    setSpinKey6((prevKey) => prevKey + 1);
    setSpinKey7((prevKey) => prevKey + 1);
    setSpinKey8((prevKey) => prevKey + 1);
    setSpinKey9((prevKey) => prevKey + 1);
    setSpinKey10((prevKey) => prevKey + 1);
    setSpinKey11((prevKey) => prevKey + 1);
  };

  return (
    <>
      <section className="max-w-[1000px] mx-auto p-5 overflow-hidden">
        <div className="w-full border-4 border-red-800">
          <div className="w-full hidden sm:grid grid-cols-3 py-7 px-5">
            <span className="font-semibold text-xl">Category</span>
            <span className="font-semibold text-xl pl-8 md:pl-13">Options</span>
            <span className="font-semibold text-xl text-end">
              Points Gained
            </span>
          </div>

          {/* Render categories dynamically */}
          {categories.map((category) => (
            <Category key={category.categoryId} {...category} />
          ))}

          {/* Total Score */}
          <div className="font-bold px-5 flex items-center justify-center py-10 text-4xl w-full bg-red-800 text-white">
            Total Score: {totalScore} / 185
          </div>

          {/* Reset Button */}
          <div className="w-full text-center py-5">
            <button
              className="bg-red-800 cursor-pointer text-white px-6 py-3 rounded-md"
              onClick={handleReset}
            >
              Reset Matrix
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App2;
