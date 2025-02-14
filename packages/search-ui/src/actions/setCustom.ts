import { Custom } from "../types";

/**
 * maybe some value should saved in store and url, but don't request backend api.
 * isMergeValue default value is true
 * replaceUrl default value is true
 */
export default function setCustom(
  value: Custom,
  isMergeValue = true,
  replaceUrl = true
) {
  // eslint-disable-next-line no-console
  if (this.debug) console.log("Search UI: Action", "setCustom", ...arguments);
  const {
    filters,
    resultsPerPage,
    searchTerm,
    sortDirection,
    sortField,
    sortList,
    custom
  } = this.state;
  const newCustom = isMergeValue
    ? {
        ...custom,
        ...value
      }
    : value;
  this._setState({
    custom: newCustom
  });
  if (this.URLManager && this.URLManager.pushStateToURL) {
    this.URLManager.pushStateToURL(
      {
        current: 1,
        filters,
        resultsPerPage,
        searchTerm,
        sortDirection,
        sortField,
        sortList,
        custom: newCustom
      },
      { replaceUrl, fromSetCustom: true }
    );
  }
}
