const recipe = {
    title: ' My Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
};

export {recipe};

const toggleVisibility = () =>  {
    const element = document.getElementById('myModal');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

export { toggleVisibility };