export interface Teacher {
  id: string;
  name: string;
  email: string;
  cabin: string;
  floor: number;
  department: string;
}

export interface Classroom {
  id: string;
  name: string;
  building: string;
  floor: number;
  capacity: number;
}

export interface Schedule {
  id: string;
  classroomId: string;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  startTime: string; // 24-hour format: "HH:MM"
  endTime: string; // 24-hour format: "HH:MM"
  subject?: string;
  teacherId?: string;
}

// Mock teacher data
export const teachers: Teacher[] = [
  {
    id: "t1",
    name: "Dr. M Shahina Parveen",
    email: "shahinaparveenm-cse@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t2",
    name: "Ramandeep Kaur",
    email: "Ramandeep-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t3",
    name: "Dr. Santhosh Kumar J",
    email: "santoshkumar-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t4",
    name: "Dr. Sudha D",
    email: "sudha-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t5",
    name: "Chithambarathanu M",
    email: "Chithambaramthanu-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t6",
    name: "Nivetha NRP",
    email: "nivetha-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t7",
    name: "Yashaswini B V",
    email: "yashaswini-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t8",
    name: "Vinayaka V M",
    email: "vinayaka-ct@dsu.edu.in",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  },
  {
    id: "t9",
    name: "Junaid Mundichipparakkal",
    email: "mpjunaid1996@gmail.com",
    cabin: "A-342",
    floor: 3,
    department: "Computer Science Technology"
  }
];

// Mock classroom data
export const classrooms: Classroom[] = [
  { id: "c1", name: "CS-101", building: "Computer Science Building", floor: 1, capacity: 50 },
  { id: "c2", name: "EE-201", building: "Engineering Building", floor: 2, capacity: 40 },
  { id: "c3", name: "ME-301", building: "Engineering Building", floor: 3, capacity: 60 },
  { id: "c4", name: "MATH-102", building: "Science Building", floor: 1, capacity: 100 },
  { id: "c5", name: "PHY-202", building: "Science Building", floor: 2, capacity: 45 },
  { id: "c6", name: "CE-302", building: "Engineering Building", floor: 3, capacity: 35 },
  { id: "c7", name: "CHEM-103", building: "Science Building", floor: 1, capacity: 50 },
  { id: "c8", name: "CS-203", building: "Computer Science Building", floor: 2, capacity: 30 }
];

// Mock schedule data
export const schedules: Schedule[] = [
  // Monday schedules for CS-101
  { id: "s1", classroomId: "c1", dayOfWeek: 1, startTime: "09:00", endTime: "10:30", subject: "Introduction to Programming", teacherId: "t1" },
  { id: "s2", classroomId: "c1", dayOfWeek: 1, startTime: "11:00", endTime: "12:30", subject: "Data Structures", teacherId: "t8" },
  { id: "s3", classroomId: "c1", dayOfWeek: 1, startTime: "14:00", endTime: "15:30", subject: "Algorithms", teacherId: "t1" },
  
  // Monday schedules for EE-201
  { id: "s4", classroomId: "c2", dayOfWeek: 1, startTime: "09:00", endTime: "10:30", subject: "Circuit Analysis", teacherId: "t2" },
  { id: "s5", classroomId: "c2", dayOfWeek: 1, startTime: "13:00", endTime: "14:30", subject: "Digital Systems", teacherId: "t2" },
  
  // Monday schedules for other classrooms
  { id: "s6", classroomId: "c3", dayOfWeek: 1, startTime: "10:00", endTime: "11:30", subject: "Thermodynamics", teacherId: "t3" },
  { id: "s7", classroomId: "c4", dayOfWeek: 1, startTime: "09:00", endTime: "10:30", subject: "Calculus I", teacherId: "t4" },
  
  // Tuesday schedules
  { id: "s8", classroomId: "c1", dayOfWeek: 2, startTime: "09:00", endTime: "10:30", subject: "Web Development", teacherId: "t1" },
  { id: "s9", classroomId: "c2", dayOfWeek: 2, startTime: "11:00", endTime: "12:30", subject: "Control Systems", teacherId: "t2" },
  
  // Wednesday schedules
  { id: "s10", classroomId: "c3", dayOfWeek: 3, startTime: "14:00", endTime: "15:30", subject: "Fluid Mechanics", teacherId: "t3" },
  { id: "s11", classroomId: "c4", dayOfWeek: 3, startTime: "09:00", endTime: "10:30", subject: "Linear Algebra", teacherId: "t4" },
  
  // Thursday schedules
  { id: "s12", classroomId: "c5", dayOfWeek: 4, startTime: "09:00", endTime: "10:30", subject: "Quantum Mechanics", teacherId: "t5" },
  { id: "s13", classroomId: "c6", dayOfWeek: 4, startTime: "11:00", endTime: "12:30", subject: "Structural Analysis", teacherId: "t6" },
  
  // Friday schedules
  { id: "s14", classroomId: "c7", dayOfWeek: 5, startTime: "09:00", endTime: "10:30", subject: "Organic Chemistry", teacherId: "t7" },
  { id: "s15", classroomId: "c8", dayOfWeek: 5, startTime: "13:00", endTime: "14:30", subject: "Database Systems", teacherId: "t8" }
];

// Helper function to check if a classroom is free at a specific time
export const isClassroomFree = (classroomId: string, day: number, time: string): boolean => {
  // Convert time to minutes for easier comparison
  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  
  // Find all schedules for this classroom on this day
  const classroomSchedules = schedules.filter(
    s => s.classroomId === classroomId && s.dayOfWeek === day
  );
  
  // Check if the time falls within any scheduled period
  for (const schedule of classroomSchedules) {
    const [startHours, startMinutes] = schedule.startTime.split(':').map(Number);
    const [endHours, endMinutes] = schedule.endTime.split(':').map(Number);
    
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;
    
    if (timeInMinutes >= startTimeInMinutes && timeInMinutes < endTimeInMinutes) {
      return false; // Classroom is not free
    }
  }
  
  return true; // Classroom is free
};

// Helper function to get all free classrooms at a specific time
export const getFreeClassrooms = (day: number, time: string): Classroom[] => {
  return classrooms.filter(classroom => isClassroomFree(classroom.id, day, time));
};

// Improved teacher name matching with better accuracy
export const findTeacherByName = (name: string): (Teacher & {matchScore?: number}) | null => {
  if (!name || name.trim().length < 3) {
    return null; // Input is too short to be a valid teacher name
  }
  
  const normalizedSearch = name.toLowerCase().trim();
  
  // 1. Try exact match first (100% match)
  const exactMatch = teachers.find(
    teacher => teacher.name.toLowerCase() === normalizedSearch
  );
  if (exactMatch) return {...exactMatch, matchScore: 1.0};
  
  // 2. Try partial match with full name (partial match)
  const partialMatch = teachers.find(
    teacher => teacher.name.toLowerCase().includes(normalizedSearch)
  );
  if (partialMatch) {
    const score = normalizedSearch.length / partialMatch.name.length;
    if (score >= 0.7) return {...partialMatch, matchScore: score};
  }
  
  // 3. Check for matches on individual name parts
  for (const teacher of teachers) {
    const teacherNameLower = teacher.name.toLowerCase();
    const nameParts = teacherNameLower.split(/\s+/);
    const searchParts = normalizedSearch.split(/\s+/);
    
    // Match any individual words in the name
    let wordMatches = 0;
    let totalWords = searchParts.length;
    
    for (const part of searchParts) {
      if (part.length < 3) continue; // Skip very short search terms
      
      for (const namePart of nameParts) {
        if (namePart.includes(part) || part.includes(namePart)) {
          wordMatches++;
          break;
        }
      }
    }
    
    const wordMatchScore = totalWords > 0 ? wordMatches / totalWords : 0;
    if (wordMatchScore >= 0.7) {
      return {...teacher, matchScore: wordMatchScore};
    }
  }
  
  // 4. Advanced fuzzy matching - calculate similarity score
  let bestMatch: (Teacher & {matchScore: number}) | null = null;
  let bestScore = 0;
  
  for (const teacher of teachers) {
    const teacherName = teacher.name.toLowerCase();
    const score = calculateSimilarity(normalizedSearch, teacherName);
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = {...teacher, matchScore: score};
    }
  }
  
  return bestScore >= 0.7 ? bestMatch : null;
};

// Helper function to calculate string similarity (0-1 score)
function calculateSimilarity(s1: string, s2: string): number {
  // If the strings are identical
  if (s1 === s2) return 1.0;
  
  // If either string contains the other completely
  if (s1.includes(s2)) return 0.9;
  if (s2.includes(s1)) return 0.9;
  
  // Count matching characters (improved Levenshtein-inspired algorithm)
  let matches = 0;
  let transpositions = 0;
  
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');
  
  // Find direct character matches
  for (let i = 0; i < s1Chars.length; i++) {
    if (i < s2Chars.length && s1Chars[i] === s2Chars[i]) {
      matches++;
    }
  }
  
  // Count additional matching characters
  const s1Set = new Set(s1Chars);
  const s2Set = new Set(s2Chars);
  const commonChars = [...s1Set].filter(char => s2Set.has(char)).length;
  
  // Final similarity calculation with normalized weights
  const lengthFactor = 1 - Math.abs(s1.length - s2.length) / Math.max(s1.length, s2.length);
  const directMatchFactor = s1.length > 0 ? matches / s1.length : 0;
  const commonCharFactor = commonChars / Math.max(s1Set.size, s2Set.size);
  
  return (0.4 * lengthFactor + 0.4 * directMatchFactor + 0.2 * commonCharFactor);
}

// List of engineering jokes and taunts
export const engineeringJokes = [
  "Why do engineers always mix up Christmas and Halloween? Because Oct 31 = Dec 25.",
  "Engineering: Because 'I'm good at math' seemed like a good career choice at the time.",
  "Three engineers are arguing about God's profession. The mechanical engineer says, 'God must be a mechanical engineer. Look at the joints in the human body!' The electrical engineer says, 'No, God must be an electrical engineer. Look at the nervous system!' The software engineer says, 'God must be a programmer. Who else would create a bug like the platypus?'",
  "What's the difference between a civil engineer and a mechanical engineer? Mechanical engineers build weapons, civil engineers build targets.",
  "What do engineers use for birth control? Their personalities.",
  "How many engineers does it take to change a light bulb? None. They'll just redefine darkness as the preferred state.",
  "An engineer dies and goes to hell. After a while, he gets bored and starts building things, including air conditioning. The devil gets worried that hell isn't hellish anymore and kicks the engineer out... to heaven. The moral? Heaven is where the police are British, the cooks are French, the mechanics are German, the lovers are Italian, and it's all organized by the Swiss. Hell is where the police are German, the cooks are British, the mechanics are French, the lovers are Swiss, and it's all organized by Italians. But an engineer can make hell comfortable.",
  "Engineering students: putting off sleep, sanity, and social lives since... well, always.",
  "Working hard is important, but caffeine is faster.",
  "Mechanical engineers build weapons, civil engineers build targets.",
  "I asked God for a bike, but God doesn't work that way. So I stole a bike and asked for forgiveness.",
  "Your GPA might be high, but so is your stress level.",
  "90% of engineering is figuring out why the thing you just did didn't work.",
  "Trust me, I'm an engineer. I have the ability to make bad decisions with mathematical precision!",
  "Top 3 lies: 1. I have read and agree to the terms and conditions. 2. I'll be just 5 minutes late. 3. This homework will only take an hour."
];

// Get a random engineering joke
export const getRandomJoke = (): string => {
  const randomIndex = Math.floor(Math.random() * engineeringJokes.length);
  return engineeringJokes[randomIndex];
};
