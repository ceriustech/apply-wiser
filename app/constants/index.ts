// app\constants\index.ts
// const RESUME_DATA: Resume[] = [
// 	{
// 		id: '1',
// 		companyName: 'Google',
// 		jobTitle: 'Frontend Developer',
// 		imagePath: '/images/resume_01.png',
// 		resumePath: '/resumes/resume-1.pdf',
// 		feedback: {
// 			overallScore: 85,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// 	{
// 		id: '2',
// 		companyName: 'Microsoft',
// 		jobTitle: 'Cloud Engineer',
// 		imagePath: '/images/resume_02.png',
// 		resumePath: '/resumes/resume-2.pdf',
// 		feedback: {
// 			overallScore: 55,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// 	{
// 		id: '3',
// 		companyName: 'Apple',
// 		jobTitle: 'iOS Developer',
// 		imagePath: '/images/resume_03.png',
// 		resumePath: '/resumes/resume-3.pdf',
// 		feedback: {
// 			overallScore: 75,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// 	{
// 		id: '4',
// 		companyName: 'Google',
// 		jobTitle: 'Frontend Developer',
// 		imagePath: '/images/resume_01.png',
// 		resumePath: '/resumes/resume-1.pdf',
// 		feedback: {
// 			overallScore: 85,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// 	{
// 		id: '5',
// 		companyName: 'Microsoft',
// 		jobTitle: 'Cloud Engineer',
// 		imagePath: '/images/resume_02.png',
// 		resumePath: '/resumes/resume-2.pdf',
// 		feedback: {
// 			overallScore: 55,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// 	{
// 		id: '6',
// 		companyName: 'Apple',
// 		jobTitle: 'iOS Developer',
// 		imagePath: '/images/resume_03.png',
// 		resumePath: '/resumes/resume-3.pdf',
// 		feedback: {
// 			overallScore: 75,
// 			ATS: {
// 				score: 90,
// 				tips: [],
// 			},
// 			toneAndStyle: {
// 				score: 90,
// 				tips: [],
// 			},
// 			content: {
// 				score: 90,
// 				tips: [],
// 			},
// 			structure: {
// 				score: 90,
// 				tips: [],
// 			},
// 			skills: {
// 				score: 90,
// 				tips: [],
// 			},
// 		},
// 	},
// ];

const NAVBAR_DATA: NAVIGATION[] = [
	{
		url: '/',
		name: 'HOME',
	},
	{
		url: '/faq',
		name: 'FAQ',
	},
	{
		url: '/about',
		name: 'ABOUT',
	},
	{
		url: '/auth',
		name: 'LOGIN',
	},
];

const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      scannability: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      bulletPointQuality: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      roleAlignment: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      presentationAndClarity: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

const setInstructions = ({
	jobTitle,
	jobDescription,
}: {
	jobTitle: string;
	jobDescription: string;
}) =>
	`You are a specialized Recruiter who performs 20-second "scannability" audits on resumes. 
  
  EVALUATION CRITERIA:
  1. TAILORING & LOCATION: Check if the resume is specific to "${jobTitle}". If the user is relocating, look for "moving to [Location] by [Date]" at the top.
  
  2. 20-SECOND SCANNABILITY: 
     - Are degrees and key skills at the very top? 
     - Is the formatting clean or is it "technically dense"? 
     - Can a human find the core value in under 20 seconds?

  3. BULLET POINT LOGIC (STRICT):
     - KEYWORDS: Each bullet must have 3–6 keywords.
		 - NEVER HALLUCINATE OR MAKE UP SKILLS! only take into account what's on the resume.
     - REDUNDANCY: Penalize if the same keyword is repeated multiple times within one job entry.
     - NO QUANTIFICATION: Unless the role is Sales or Management, remove or penalize percentages/numbers. They are considered "irrelevant noise" that doesn't demonstrate actual impact here.
     - HAMBURGER VS SPAGHETTI: Focus only on what the job description requires. Impressive but irrelevant achievements should be flagged as "Spaghetti" and removed.

  4. THE 75% RULE: The resume must explicitly state at least 75% of the required qualifications. Assume nothing is implied.

  5. INTERN SPECIFIC: If this is an intern role, look for evidence of coachability, taking direction, and teamwork.

  TASK:
  Analyze the resume against the Job Description: ${jobDescription}. 
  Provide a score and a JSON response following this format:
  ${AIResponseFormat}

  Strictly return ONLY JSON. No conversational filler.`;

export { NAVBAR_DATA, setInstructions };
