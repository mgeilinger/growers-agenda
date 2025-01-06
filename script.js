// localStorage.clear();

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('.about-link');
    const aboutBox = document.getElementById('aboutBox');

    // Toggle the about box visibility when clicking on the about link
    aboutLink.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        aboutBox.classList.toggle('show');
    });

    // Hide the about box when clicking anywhere outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideAboutBox = aboutBox.contains(event.target);
        const isClickInsideAboutLink = aboutLink.contains(event.target);
        
        // If the click is not inside the about box and not on the about link, hide the about box
        if (!isClickInsideAboutBox && !isClickInsideAboutLink) {
            aboutBox.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const myGardenLink = document.querySelector('.my-garden-link');
    const sideBar = document.getElementById('sideBar');

    myGardenLink.addEventListener('click', function() {
        sideBar.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        const isClickedInsideSidebar = sideBar.contains(event.target);
        const isClickedOnMyGardenLink = myGardenLink.contains(event.target);

        if (!isClickedInsideSidebar && !isClickedOnMyGardenLink) {
            sideBar.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const floweringTimeLink = document.querySelector('.flowering-time-link');
    const topBar = document.getElementById('topBar');

    floweringTimeLink.addEventListener('click', function() {
        topBar.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        const isClickedInsideTopBar = topBar.contains(event.target);
        const isClickedOnFloweringTimeLink = floweringTimeLink.contains(event.target);

        if (!isClickedInsideTopBar && !isClickedOnFloweringTimeLink) {
            topBar.classList.remove('show');
        }
    });
});

console.log(localStorage);

const flowerList = document.getElementById('flowerList');
const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

const flowers = ['Wisteria', 'Butterfly bush', 'Agapanthus', 'Lavender', 'Rosemary', 'Climbing hydrangea', 'Fig tree', 'Bamboo'];

// Load flowers from local storage
const storedFlowers = JSON.parse(localStorage.getItem('flowers')) || [];

// Filter out stored flowers from dropdown
const filteredFlowers = flowers.filter(flower => !storedFlowers.includes(flower.toLowerCase()));

// Event listener for search input
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    dropdown.innerHTML = ''; // Clear the current dropdown options

    if (searchTerm.length === 0) {
        dropdown.style.display = 'none';
        return;
    }

    // Filter flowers based on search term and add them to the dropdown
    filteredFlowers.forEach(flower => {
        if (flower.toLowerCase().includes(searchTerm)) {
            const option = document.createElement('li');
            option.textContent = flower;
            option.onclick = function () {
                addFlowerToList(flower);
                dropdown.style.display = 'none';
                searchInput.value = ''; // Clear the search input after selecting a flower
                storedFlowers.push(flower.toLowerCase());
                localStorage.setItem('flowers', JSON.stringify(storedFlowers));
                filteredFlowers.splice(filteredFlowers.indexOf(flower), 1); // Remove from dropdown options
            };
            dropdown.appendChild(option);
        }
    });

    if (dropdown.children.length > 0) {
        dropdown.style.display = 'block';
        dropdown.style.width = searchInput.offsetWidth + 'px'; // Set dropdown width to match input width
    } else {
        dropdown.style.display = 'none';
    }
});

// Populate flower list with stored flowers
storedFlowers.forEach(flower => addFlowerToList(flower));

// Define a function to add a flower to the list
function addFlowerToList(flowerName) {
    // Capitalize the first letter of the flower name
    const capitalizedFlowerName = flowerName.charAt(0).toUpperCase() + flowerName.slice(1);

    const flowerBox = document.createElement('li');
    flowerBox.className = 'flower-box';
    
    const flowerHeading = document.createElement('h2');
    flowerHeading.textContent = capitalizedFlowerName; // Use capitalized flower name
    flowerBox.appendChild(flowerHeading);
    
    const removeButton = document.createElement('span');
    removeButton.textContent = '✕';
    removeButton.className = 'remove';
    flowerBox.appendChild(removeButton);
    
    flowerList.appendChild(flowerBox);

    // Display corresponding text-box if available
    const textBox = document.querySelector(`.text-box.${toCamelCase(flowerName)}`);
    if (textBox) {
        textBox.style.display = 'block';
    }
}
    
// Define a function to remove a flower from the list
function removeFlower(flowerBox, flowerName) {
    flowerList.removeChild(flowerBox);
    const index = storedFlowers.indexOf(flowerName.toLowerCase());
    if (index !== -1) {
        storedFlowers.splice(index, 1);
        localStorage.setItem('flowers', JSON.stringify(storedFlowers));
    }
    // Add the removed flower back to the filteredFlowers array
    filteredFlowers.push(flowerName);
}
    
// Event listener for clicking on the remove button
flowerList.addEventListener('click', function(event) {
    const removeButton = event.target.closest('.remove');
    if (removeButton) {
        event.stopPropagation();
        const flowerBox = removeButton.parentElement;
        const flowerName = flowerBox.querySelector('h2').textContent;
        removeFlower(flowerBox, flowerName);
    }
});

// Event listener to hide dropdown when clicked outside
document.addEventListener('click', function (event) {
    if (!event.target.matches('#searchInput')) {
        dropdown.style.display = 'none';
    }
});

// Prevent closing dropdown when clicking on it
dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Prevent closing dropdown when clicking on the search input
searchInput.addEventListener('click', function (event) {
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the stored flowers from local storage
    const storedFlowers = JSON.parse(localStorage.getItem('flowers')) || [];
    
    // Get all text-box elements
    const textBoxes = document.querySelectorAll('.text-box');

    // Iterate over each text-box
    textBoxes.forEach((textBox) => {
        // Check if the text-box is visible (not hidden)
        if (getComputedStyle(textBox).display !== 'none') {
            // Get the previous visible sibling text-box
            const prevTextBox = getPreviousVisibleSibling(textBox);

            // Assign alignment based on the position of the previous visible text-box
            if (prevTextBox && prevTextBox.classList.contains('text-left')) {
                textBox.classList.remove('text-left');
                textBox.classList.add('text-right');
            } else {
                textBox.classList.remove('text-right');
                textBox.classList.add('text-left');
            }
        }
    });
});

// Function to get the previous visible sibling text-box
function getPreviousVisibleSibling(element) {
    let prevSibling = element.previousElementSibling;
    while (prevSibling) {
        if (getComputedStyle(prevSibling).display !== 'none') {
            return prevSibling;
        }
        prevSibling = prevSibling.previousElementSibling;
    }
    return null;
}

// Removes spaces from strings and capitalises the word following the string
function toCamelCase(str) {
    return str
        .toLowerCase() // Convert the string to lowercase
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        ) // Capitalize letters following spaces
        .replace(/\s+/g, ''); // Remove spaces
}

// Reverses the above process
function fromCamelCase(str) {
    return str
        .replace(/([A-Z])/g, ' $1') // Add a space before each uppercase letter
        .toLowerCase() // Convert the entire string to lowercase
        .trim(); // Remove leading or trailing spaces
}


var hello = toCamelCase("butterfly bush")
var goodbye = fromCamelCase(hello);
console.log(hello);
console.log(goodbye)