// Arrays para armazenar os itens e totais
let items = [];
let totals = [];

function addItem() {
  // Obter valores do formulário
  const itemName = document.getElementById('itemName').value;
  const itemQty = parseInt(document.getElementById('itemQty').value);
  const itemValue = parseFloat(document.getElementById('itemValue').value);

  // Adicionar item à lista de itens
  items.push({ name: itemName, qty: itemQty, value: itemValue });

  // Limpar campos do formulário
  document.getElementById('itemName').value = '';
  document.getElementById('itemQty').value = '';
  document.getElementById('itemValue').value = '';

  // Atualizar as listas
  updateItemLists();
}

function updateItemLists() {
  // Limpar listas
  document.getElementById('itemList').innerHTML = '';
  document.getElementById('totalList').innerHTML = '';

  let totalGeral = 0;

  // Adicionar itens às listas
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
      ${item.name} - ${item.qty} - R$ ${item.qty * item.value.toFixed(2)}
      <div class="btn-group">
        <button type="button" class="btn btn-success btn-sm" onclick="increaseQty(${index})">+</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="decreaseQty(${index})">-</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="removeItem(${index})">X</button>
      </div>
    `;
    document.getElementById('itemList').appendChild(listItem);

    // Calcular total por subitem
    const subTotal = item.qty * item.value;
    totalGeral += subTotal;

    const totalItem = document.createElement('li');
    totalItem.className = 'list-group-item';
    totalItem.textContent = `${item.qty} ${item.name} - R$ ${subTotal.toFixed(2)}`;
    document.getElementById('totalList').appendChild(totalItem);
  });

  // Adicionar total geral
  document.getElementById('totalGeral').textContent = totalGeral.toFixed(2);
}

function increaseQty(index) {
  items[index].qty++;
  updateItemLists();
}

function decreaseQty(index) {
  if (items[index].qty > 1) {
    items[index].qty--;
    updateItemLists();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  updateItemLists();
}
