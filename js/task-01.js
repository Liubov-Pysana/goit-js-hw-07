const ulCategories = document.querySelector("#categories");
const liItems = ulCategories.querySelectorAll("li.item");

console.log(`Number of categories ${liItems.length}`);
liItems.forEach((liItem) => {
    const title = liItem.querySelector("h2").innerText;
    console.log(`Category: ${title}`);

    const elements = liItem.querySelectorAll("li").length;
    console.log(`Elements: ${elements}`);
});
