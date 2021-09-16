// Key things
const key = `${process.env.REACT_APP_API_KEY}`;
const key_url = `key=${key}`;

// Base URL
// const cors_proxy = "https://warm-crag-08364.herokuapp.com/";
// const api_url = "https://api.rawg.io/api/";
const base_url = "https://warm-crag-08364.herokuapp.com/https://api.rawg.io/api/";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

getCurrentMonth();

// Popular Games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

// Upcoming Games
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

// New Games
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?${key_url}`;

// Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?${key_url}`;

// Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?${key_url}&search=${game_name}&page_size=12`;
