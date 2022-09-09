export const goToPathnameUrl = (path) => {
  const { history } = window
  history.pushState({}, '', path)
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
}

export const playerFiltered = (arr, player) => {
  return arr.filter(({ posicion }) => posicion === player)
}