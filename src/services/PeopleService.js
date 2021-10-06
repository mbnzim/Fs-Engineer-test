import { BackEndStorageService } from './BackEndStorageService'

/**
 * @typedef Person
 * @property {string} name
 * @property {number} height
 * @property {number} mass
 * @property {string} hair_color
 * @property {string} skin_color
 * @property {string} eye_color
 * @property {string} birth_year
 * @property {string} gender
 * @property {string} homeworld
 * @property {string[]} films
 * @property {string[]} species
 * @property {string[]} vehicles
 * @property {string[]} starships
 * @property {Date} created
 * @property {Date} edited
 * @property {string} url
 */

export const PeopleService = {
  /**
   * Fetch all people
   * @return {Person[]}
   */
  async fetchAllPeople() {
    return BackEndStorageService.getPeople([]).then(response => {
      return response.results;
    });
  },
}
