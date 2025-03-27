
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
    name: "Dr. Sarah Johnson",
    email: "sjohnson@college.edu",
    cabin: "A-101",
    floor: 1,
    department: "Computer Science"
  },
  {
    id: "t2",
    name: "Prof. Michael Chen",
    email: "mchen@college.edu",
    cabin: "B-205",
    floor: 2,
    department: "Electrical Engineering"
  },
  {
    id: "t3",
    name: "Dr. Emily Rodriguez",
    email: "erodriguez@college.edu",
    cabin: "C-310",
    floor: 3,
    department: "Mechanical Engineering"
  },
  {
    id: "t4",
    name: "Prof. David Smith",
    email: "dsmith@college.edu",
    cabin: "A-105",
    floor: 1,
    department: "Mathematics"
  },
  {
    id: "t5",
    name: "Dr. Jennifer Lee",
    email: "jlee@college.edu",
    cabin: "B-210",
    floor: 2,
    department: "Physics"
  },
  {
    id: "t6",
    name: "Prof. James Wilson",
    email: "jwilson@college.edu",
    cabin: "C-315",
    floor: 3,
    department: "Civil Engineering"
  },
  {
    id: "t7",
    name: "Dr. Robert Brown",
    email: "rbrown@college.edu",
    cabin: "A-110",
    floor: 1,
    department: "Chemistry"
  },
  {
    id: "t8",
    name: "Prof. Maria Garcia",
    email: "mgarcia@college.edu",
    cabin: "B-215",
    floor: 2,
    department: "Computer Science"
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

// Helper function to find a teacher by name (with fuzzy matching)
export const findTeacherByName = (name: string): Teacher | null => {
  const normalizedSearch = name.toLowerCase().trim();
  
  // Try exact match first
  const exactMatch = teachers.find(
    teacher => teacher.name.toLowerCase() === normalizedSearch
  );
  if (exactMatch) return exactMatch;
  
  // Try partial match
  const partialMatch = teachers.find(
    teacher => teacher.name.toLowerCase().includes(normalizedSearch)
  );
  if (partialMatch) return partialMatch;
  
  // Try matching on last name
  const lastNameMatch = teachers.find(
    teacher => {
      const parts = teacher.name.split(' ');
      const lastName = parts[parts.length - 1].toLowerCase();
      return lastName === normalizedSearch || lastName.includes(normalizedSearch);
    }
  );
  if (lastNameMatch) return lastNameMatch;
  
  // Try matching on first name
  const firstNameMatch = teachers.find(
    teacher => {
      const firstName = teacher.name.split(' ')[0].toLowerCase();
      return firstName === normalizedSearch || firstName.includes(normalizedSearch);
    }
  );
  if (firstNameMatch) return firstNameMatch;
  
  // Try partial name (handle spelling mistakes by checking if the search term is at least
  // contained within the full name with some leniency)
  if (normalizedSearch.length > 3) {
    for (const teacher of teachers) {
      // Count matching characters
      let matchCount = 0;
      const teacherName = teacher.name.toLowerCase();
      
      for (let i = 0; i < normalizedSearch.length; i++) {
        if (teacherName.includes(normalizedSearch[i])) {
          matchCount++;
        }
      }
      
      // If more than 70% of characters match, consider it a match
      if (matchCount / normalizedSearch.length > 0.7) {
        return teacher;
      }
    }
  }
  
  return null;
};

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
