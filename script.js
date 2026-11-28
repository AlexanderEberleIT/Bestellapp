const MENU_LIST = document.getElementById("menuList");

function renderMenu() {
    let menuHtml = "";

    for (const CATEGORY of CATEGORIES) {
        const DISHES_HTML = getDishesHtml(CATEGORY.id);
        menuHtml += getCategoryTemplate(CATEGORY, DISHES_HTML);
    }

    MENU_LIST.innerHTML = menuHtml;
}

function getDishesHtml(categoryId) {
    let dishesHtml = "";

    for (let dishIndex = 0; dishIndex < DISHES.length; dishIndex++) {
        const DISH = DISHES[dishIndex];

        if (DISH.category === categoryId) {
            dishesHtml += getDishTemplate(DISH);
        }
    }

    return dishesHtml;
}

renderMenu();
