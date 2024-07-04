// MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Brand property for unique identification
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Brand property for unique identification
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage (assuming you have MajorCredits and MinorCredits objects)
const major1: MajorCredits = { credits: 12, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 15, brand: "MajorCredits" };

const totalMajorCredits = sumMajorCredits(major1, major2);
console.log(totalMajorCredits);  // Output: { credits: 27, brand: "MajorCredits" }

const minor1: MinorCredits = { credits: 6, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 3, brand: "MinorCredits" };

const totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log(totalMinorCredits);
