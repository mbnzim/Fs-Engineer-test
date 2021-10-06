import axios from 'axios'

export const jokesApiBaseUrl = 'https://api.chucknorris.io/jokes/'
export const swapiApiBaseUrl = 'https://swapi.dev/api/'
export const apiVerion = '1'
export const headers = { 'Content-Type': 'application/json' }

export const BackEndStorageService = {
  /**
   * Get categories from jokes api endpoint
   * @param {*} [fallback] - a fallback value
   * @return {*}
   */
  async getCategories(fallback) {
    let response = await axios.get(`${jokesApiBaseUrl}/categories/`, { headers })
      .then(function (response) {
        return response.data ? response.data : fallback
      })
      .catch(function () {
        return fallback;
      });
    return response;
  },
  /**
 * Get random joke from Category
 * @param {*} [categoryName] - Name of the category to retrieve
 * @param {*} [fallback] - a fallback value
 * @return {*}
 */
  async getRandomJoke(categoryName, fallback) {
    let response = await axios.get(`${jokesApiBaseUrl}/random?category=${categoryName}`, { headers })
      .then(function (response) {
        return response.data ? response.data : fallback
      })
      .catch(function () {
        return fallback;
      });
    return response;
  },
  /**
* Get people from Swapi api endpoint
* @param {*} [fallback] - a fallback value
* @return {*}
*/
  async getPeople(fallback) {
    let response = await axios.get(`${swapiApiBaseUrl}/people/`, { headers })
      .then(function (response) {
        return response.data ? response.data : fallback
      })
      .catch(function () {
        return fallback;
      });
    return response;
  },
}
