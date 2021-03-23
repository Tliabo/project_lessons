let pizzaDropdown = {
  dropdown: document.querySelector('#pizza-list'),

  createListItem ({pizzaId, pizzaName}) {
    const dropdownItem = document.createElement('li');
    dropdownItem.classList.add('dropdown-item');

    let itemContent = `
<input type="checkbox" id="${pizzaId}">
<label for="${pizzaId}">${pizzaName}</label>
`;
    dropdownItem.innerHTML = itemContent;
    this.dropdown.appendChild(dropdownItem);
  }
}

const pizzaList = [
  {pizzaId: 'margherita', pizzaName: 'MARGHERITA'},
  {pizzaId: 'prosciuttoFunghi', pizzaName: 'PROSCIUTTO FUNGHI'},
  {pizzaId: 'hawaiian', pizzaName: 'HAWAIIAN'},
  {pizzaId: 'formaggi', pizzaName: '4 FORMAGGI'},
  {pizzaId: 'diavola', pizzaName: 'DIAVOLA'},
  {pizzaId: 'tuna', pizzaName: 'TUNA'},
  {pizzaId: 'vegetariana', pizzaName: 'VEGETARIANA'},
  {pizzaId: 'vegan', pizzaName: 'VEGAN'},
  {pizzaId: 'raclette', pizzaName: 'RACLETTE'}
]

pizzaList.forEach(pizza => {
  pizzaDropdown.createListItem(pizza);
})