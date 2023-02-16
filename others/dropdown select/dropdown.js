//Elements of dropdown
const chevronUp = document.querySelector('.chevron-up');
const chevronDown = document.querySelector('.chevron-down');
const filterSelectedContainer = document.querySelector('.filter-selected');
const filtersNotSelected = document.querySelector('.filters-not-selected');
const filtersContainers = document.querySelectorAll('.filter');

let filtersArray = [];

function createOrReorderFilters(newOrderedArray) {

    if (!newOrderedArray) {
        //Popularity
        const popularity = document.createElement('p');
        popularity.classList.add('filter-p')
        popularity.setAttribute('value', 'popularity');
        popularity.innerText = 'Popularité';
    
        //Date
        const date = document.createElement('p');
        date.classList.add('filter-p')
        date.setAttribute('value', 'date');
        date.innerText = 'Date';
    
        //Titre
        const title = document.createElement('p');
        title.classList.add('filter-p')
        title.setAttribute('value', 'title');
        title.innerText = 'Titre';
    
        filtersArray = [popularity, date, title];
    } else {
        filtersArray = newOrderedArray;
    }

    filtersArray.forEach((filter, idx) => {
        const filterDiv = document.querySelector(`.filter-${idx+1}`);
        filterDiv.innerHTML = '';
        filterDiv.appendChild(filter);
    })
}

function makeFilterFirst(filter) {
    const index = filtersArray.indexOf(filter);
    if (index > 0) {
      filtersArray.splice(index, 1);
      filtersArray.unshift(filter);
    }
    return filtersArray;
  }

function openDropdown() {
    filtersNotSelected.style.display = 'initial'
    chevronDown.style.display = 'none';
    chevronUp.style.display = 'initial';
}

function closeDropdown() {
    filtersNotSelected.style.display = 'none'
    chevronDown.style.display = 'initial';
    chevronUp.style.display = 'none';
}

function onClickChevron() {
    chevronDown.addEventListener('click', openDropdown);
    chevronUp.addEventListener('click', closeDropdown);
}

function onClickFilter() {
    filtersContainers.forEach((filter, idx) => {
        filter.addEventListener('click', function(){
            const clickedTag = this.children[0];
            makeFilterFirst(clickedTag);
            createOrReorderFilters(filtersArray);
            console.log(clickedTag);
        })
    })
}

function init() {
    createOrReorderFilters();
    onClickChevron();
    onClickFilter();
}

window.addEventListener('load', () => {
    init();
});