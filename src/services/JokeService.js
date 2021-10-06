import { BackEndStorageService } from './BackEndStorageService'

/**
 * @typedef Category
 * @property {string} name
 */

/**
 * @typedef Joke
 * @property {string[]} categories
 * @property {string} value
 * @property {string} id
 * @property {string} icon_url
 * @property {string} url
 * @property {Date} created_at
 * @property {Date} updated_at
 */

export const JokeService = {
  /**
   * Fetch all joke categories
   * @return {Category[]}
   */
  async fetchAllCategories() {
    return BackEndStorageService.getCategories([]).then(response => {
      return response.map(name => ({ name }));
    });
  },
  /**
   * Fetch random joke by category name
   * @param {String} categoryName
   * @return {Joke}
   */
  async fetchRandomJoke(categoryName) {
    return BackEndStorageService.getRandomJoke(categoryName, []).then(response => {
      return response;
    });
  },
}
