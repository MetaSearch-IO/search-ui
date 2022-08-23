/**
 * Set the current page
 *
 * Will trigger new search
 *
 * @param current Integer
 */
export default function setCurrentTab(currentTab: string): void {
  // eslint-disable-next-line no-console
  if (this.debug) console.log("Search UI: Action", "setCurrent", ...arguments);

  this._updateSearchResults({
    currentTab,
    current: 1
  });
}
