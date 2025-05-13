import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals Where slug=?").get(slug);
}

export function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true });
}
