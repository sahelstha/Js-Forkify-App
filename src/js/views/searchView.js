class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this._clearInput();
    });
  }
}

export default new SearchView();
