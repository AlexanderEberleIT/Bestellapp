function getDishTemplate(dish) {
    const PRICE = dish.price.toFixed(2).replace(".", ",");

    return `
        <article class="dishCard">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <strong class="dishPrice">${PRICE} €</strong>
            <button
                type="button"
                class="addButton"
                aria-label="${dish.name} zum Warenkorb hinzufügen"
            >+</button>
        </article>
    `;
}

function getCategoryTemplate(category, dishesHtml) {
    return `
        <section class="menuCategory" id="${category.id}">
            <h2>${category.name}</h2>
            ${dishesHtml}
        </section>
    `;
}
