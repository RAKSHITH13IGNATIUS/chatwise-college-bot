
import { findTeacherByName, getFreeClassrooms, getRandomJoke } from "../data/mockDatabase";

// Check if a string contains words related to free classes
const isFreeClassroomQuery = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  const freeClassPatterns = [
    'free class',
    'available class',
    'empty class',
    'vacant class',
    'where to sit',
    'find a class',
    'place to sit',
    'available room',
    'empty room',
    'which class',
    'classroom free',
    'free classroom'
  ];
  
  return freeClassPatterns.some(pattern => lowerText.includes(pattern));
};

// Check if a string is likely asking about a teacher
const isTeacherQuery = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  
  // Check for specific teacher-related patterns
  const teacherPatterns = [
    'where is',
    'find',
    'looking for',
    'professor',
    'prof',
    'prof.',
    'dr.',
    'dr',
    'teacher',
    'instructor',
    'cabin',
    'office',
    'email',
    'contact',
    'room',
    'where can i find'
  ];
  
  return teacherPatterns.some(pattern => lowerText.includes(pattern));
};

// Extract a potential teacher name from a query
const extractTeacherName = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  // Patterns that might precede a teacher's name
  const teacherPrefixes = [
    'where is',
    'find',
    'looking for',
    'professor',
    'prof',
    'prof.',
    'dr.',
    'dr',
    'teacher',
    'instructor'
  ];
  
  // Find the first matching prefix and extract what follows
  for (const prefix of teacherPrefixes) {
    if (lowerText.includes(prefix)) {
      const parts = lowerText.split(prefix);
      if (parts.length > 1) {
        return parts[1].trim();
      }
    }
  }
  
  // If no prefix found, just return the original text
  return text.trim();
};

// Get the current time in HH:MM format
const getCurrentTime = (): { day: number; time: string } => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  return {
    day,
    time: `${hours}:${minutes}`
  };
};

// Format the free classrooms response
const formatFreeClassroomsResponse = (classrooms: any[]): string => {
  if (classrooms.length === 0) {
    return "Sorry, all classrooms are currently occupied. Maybe try the library or cafeteria? Or just go home, your education is questionable at best anyway. 😉";
  }
  
  let response = "Here are the free classrooms right now:\n\n";
  
  classrooms.forEach((classroom, index) => {
    response += `${index + 1}. ${classroom.name} - ${classroom.building}, Floor ${classroom.floor}\n   (Capacity: ${classroom.capacity})\n\n`;
  });
  
  // Add a sarcastic comment
  const sarcasmComments = [
    "Now you can go hide from your responsibilities. You're welcome.",
    "Perfect places to pretend you're studying while scrolling through TikTok.",
    "Go quickly before someone with actual academic motivation gets there first.",
    "I assume you need a quiet place to nap between your 'rigorous' classes.",
    "Maybe one day you'll actually use these rooms to learn something. Today is probably not that day though.",
    "These rooms won't make you smarter, but at least you'll look like you're trying.",
    "A room to yourself! Now you can fail those practice problems in privacy.",
    "Don't forget to take pictures to prove to your parents you actually go to class."
  ];
  
  const randomSarcasm = sarcasmComments[Math.floor(Math.random() * sarcasmComments.length)];
  response += `\n${randomSarcasm}`;
  
  return response;
};

// Format the teacher information response
const formatTeacherResponse = (teacher: any): string => {
  let response = `I found ${teacher.name} for you! (though I'm not sure why anyone would want to)\n\n`;
  response += `📧 Email: ${teacher.email}\n`;
  response += `🏢 Cabin: ${teacher.cabin}\n`;
  response += `🏗️ Floor: ${teacher.floor}\n`;
  response += `🧪 Department: ${teacher.department}\n\n`;
  
  // Add a sarcastic comment
  const sarcasmComments = [
    "Try to be more impressive than your usual self when you visit.",
    "Please don't tell them I sent you, I have a reputation to maintain.",
    "Good luck trying to get an extension on that assignment you procrastinated on.",
    "Remember to knock before entering. Teachers are people too... barely.",
    "Just a friendly reminder that office hours are not for last-minute assignment help. But we both know that's exactly why you're going.",
    "Maybe prepare some intelligent questions this time? Just a thought.",
    "They've probably already heard every excuse in the book, so be creative.",
    "Don't expect them to remember your name. You're just one of many sleep-deprived zombies they see each semester."
  ];
  
  const randomSarcasm = sarcasmComments[Math.floor(Math.random() * sarcasmComments.length)];
  response += randomSarcasm;
  
  return response;
};

// Enhanced sarcastic responses for unknown queries
const generateGenericResponse = (query: string): string => {
  const responses = [
    "I'm an AI, not a mind reader. Try asking about teachers or free classrooms instead of... whatever that was.",
    "Let me simplify this for you: I help find teachers and free classrooms. That's it. That's my purpose. You're forcing me to say something snarky now.",
    "Are you always this confusing, or is today special? Try asking something I actually know about, like teacher locations or available classrooms.",
    "I'd help you with that, but my programming is limited to things that actually matter - like finding teachers and free rooms. Crazy, right?",
    "Listen, I only do two things well: find teachers and find empty classrooms. Your question fits neither category. Try again, but better this time.",
    "That's beyond my programming. And honestly, probably beyond your comprehension too. Stick to asking about teachers or free classrooms.",
    "I'm going to pretend you asked something relevant, like 'Where can I find a teacher?' or 'Are there any free classrooms?'",
    "Did you accidentally mix up your words, or do you genuinely think I can help with that? Try asking about teachers or available rooms.",
    `I don't have an answer for that, but here's a random fact: ${getRandomJoke()}`,
    "Your question is almost as confusing as an engineering student trying to explain their social life. Try asking about teachers or free classrooms."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

// Process user input and generate a chatbot response
export const generateResponse = (input: string): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      // Check if input is asking about free classrooms
      if (isFreeClassroomQuery(input)) {
        const { day, time } = getCurrentTime();
        const freeClassrooms = getFreeClassrooms(day, time);
        resolve(formatFreeClassroomsResponse(freeClassrooms));
        return;
      }
      
      // Check if input is asking about a teacher
      if (isTeacherQuery(input)) {
        const potentialTeacherName = extractTeacherName(input);
        const teacher = findTeacherByName(potentialTeacherName);
        
        if (teacher && teacher.matchScore && teacher.matchScore >= 0.7) {
          resolve(formatTeacherResponse(teacher));
        } else {
          const responses = [
            `I couldn't find any teacher matching "${potentialTeacherName}". Please provide a more accurate name.`,
            `No teacher found for "${potentialTeacherName}". Try using their full name or be more specific.`,
            `"${potentialTeacherName}" doesn't seem to match any teacher in our database. Check the spelling or try using more of their name.`,
            `I don't know any "${potentialTeacherName}". Double-check the spelling, or try including their full name or title.`,
            `I need a more accurate name than "${potentialTeacherName}" to find the teacher you're looking for.`
          ];
          
          resolve(responses[Math.floor(Math.random() * responses.length)]);
        }
        return;
      }
      
      // General responses for other queries
      resolve(generateGenericResponse(input));
    }, 1000);
  });
};

// Get a random welcome message from storage or generate a default one
export const getWelcomeMessage = (): string => {
  const storedMessage = localStorage.getItem("welcomeMessage");
  
  if (storedMessage) {
    return storedMessage;
  }
  
  // Default welcome if none stored
  return "Welcome to ASK DSU. I'm here to help you find teachers and empty classrooms.";
};
