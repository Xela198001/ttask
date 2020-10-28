var cards = document.querySelector(".cards");

for (var i = 0; i < card.cats.length; i++) {
  const item = document.createElement("div");
  item.classList.add("card");
  const card_img = document.createElement("img");
  card_img.classList.add("card__img");
  card_img.src = `../img/${card.cats[i].img}`;
  item.appendChild(card_img);

  if ((card.cats[i].sale !== "") && (card.cats[i].sale !== undefined) && (card.cats[i].sale !== 0)) {
    const sale = document.createElement("div");
    sale.classList.add("card__sale");
    sale.innerText = `- ${card.cats[i].sale}%`;
    item.appendChild(sale);
  }

  const text = document.createElement("div");
  text.classList.add("card__text");
  item.appendChild(text);

  const title = document.createElement("h3");
  title.classList.add("card__title");
  title.innerText = `${card.cats[i].title}`;
  text.appendChild(title);

  const specifications = document.createElement("div");
  specifications.classList.add("card__specifications");
  text.appendChild(specifications);

  const color = document.createElement("div");
  color.classList.add("card__specifications__item");
  color.innerText = `${card.cats[i].specifications[0].color}`;
  specifications.appendChild(color);

  const age = document.createElement("div");
  age.classList.add("card__specifications__item");
  age.innerHTML = `<span class="card__item__age">${card.cats[i].specifications[0].age}</span> Возраст`;
  specifications.appendChild(age);

  const paw = document.createElement("div");
  paw.classList.add("card__specifications__item");
  paw.innerHTML = `<span class='card__item__paw'>${card.cats[i].specifications[0].paw}</span> Кол-во лап`;
  specifications.appendChild(paw);

  const price = document.createElement("p");
  price.classList.add("card__price");
  price.innerText = `${card.cats[i].price.toLocaleString()} ${card.cats[i].currency}.`;
  text.appendChild(price);

  const link = document.createElement("a");
  link.href = card.cats[i].link;
  link.classList.add("card__link");
  var status;
  status = card.cats[i].buy ? "Купить" : "Продан";
  card.cats[i].buy ? link.classList.add("nobuy") : link.classList.add("buy");
  // link.style.backgroundColor = card.cats[i].buy ? " #6EBBD3" : "#1F2021";
  link.innerHTML = status;
  text.appendChild(link);

  cards.appendChild(item);
}
