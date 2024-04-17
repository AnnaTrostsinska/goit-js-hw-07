const categoriesList = document.getElementById('categories');
const categoriesItem = categoriesList.querySelectorAll('li.item')

console.log('Number of categories:', categoriesItem.length)

categoriesItem.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoriesItemCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${categoriesItemCount}`)
});