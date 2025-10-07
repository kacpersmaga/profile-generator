const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = path.resolve(__dirname, "../src/module-data.js");

const NAMES_FILE = path.resolve(__dirname, "names.txt");

const count = Number(process.argv[2] || 5);

if (fs.existsSync(OUTPUT_FILE)) {
  console.log(`${OUTPUT_FILE} already exists. Skrypt nie zostanie uruchomiony.`);
  process.exit(0);
}

fs.readFile(NAMES_FILE, "utf8", (err, data) => {
  if (err) {
    console.error("Błąd podczas czytania pliku names.txt:", err);
    return;
  }

  const names = data
    .split(/\s+|\n+/)
    .map(n => n.trim())
    .filter(n => n.length > 0);

  const usedNamesCount = {};

  const generateRandomDate = () => {
    const start = new Date(1980, 0, 1);
    const end = new Date(2005, 0, 1);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split("T")[0];
  };

  const generatePhone = () => {
    const prefix = "234";
    const mid = Math.floor(100 + Math.random() * 900);
    const end = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${mid}-${end}`;
  };

  const people = [];

  for (let i = 1; i <= count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    usedNamesCount[randomName] = (usedNamesCount[randomName] || 0) + 1;
    const email = `${randomName.toLowerCase()}${usedNamesCount[randomName]}@wsei.edu.pl`;

    people.push({
      id: i,
      name: randomName,
      birthDate: generateRandomDate(),
      email,
      phone: generatePhone(),
    });
  }

  const content = `export const people = ${JSON.stringify(people, null, 2)};\n`;

  fs.writeFile(OUTPUT_FILE, content, (err) => {
    if (err) {
      console.error("Błąd zapisu pliku:", err);
      return;
    }
    console.log(`${OUTPUT_FILE} został wygenerowany!`);
  });
});