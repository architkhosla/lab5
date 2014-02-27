
/*
 * GET home page.
 */
exports.view = function(req, res){
 /*local feed */
  res.render('index', {
    'projects': [
      { 'name': 'Allen',
        'image': 'allen.jpg',
		'profile': 'allen.jpg',
        'recipe': [ { 'item': 'Cheese Burger',
					'restraunt': 'Burger King' },
						{ 'item': 'Cheese Pizza',
					'restraunt': 'Pizza Hut' } ],
		'id': 'project1'
		
      },
      { 'name': 'Linda',
        'image': 'linda.jpg',
		'profile': 'linda.jpg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Burger King' },
						{ 'item': 'Pizza',
					'restraunt': 'Dominoes' } ],
        'id': 'project2'
      },
      { 'name': 'Frank',
        'image': 'frank.jpg',
		'profile': 'frank.jpg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Chicken Strips',
					'restraunt': 'Burger King' } ],
        'id': 'project3'
      },
      { 'name': 'Brenda',
        'image': 'brenda.jpg',
		'profile': 'lorempixel.people.1.jpg',
        'recipe': [ { 'item': 'Chicken Nuggets',
					'restraunt': 'McDonalds' },
						{ 'item': 'Pepperoni Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project4'
      },
      { 'name': 'Sarah',
        'image': 'sarah.jpg',
		'profile': 'sarah.jpg',
        'recipe': [ { 'item': 'Hamburger',
					'restraunt': 'McDonalds' },
						{ 'item': 'Fries',
					'restraunt': 'Santorini' } ],
        'id': 'project5'
      },
      { 'name': 'Zack',
        'image': 'zack.jpg',
		'profile': 'zack.jpg',
        'recipe': [ { 'item': 'Chicken Sandwhich',
					'restraunt': 'Burger King' },
						{ 'item': 'Milk Tea',
					'restraunt': 'Tapioca Express' } ],
        'id': 'project6'
      },
      { 'name': 'Stephanie',
        'image': 'stephanie.jpg',
		'profile': 'stephanie.jpg',
        'recipe': [ { 'item': 'Milkshake',
					'restraunt': 'Burger King' },
						{ 'item': 'Fries',
					'restraunt': 'McDonalds' } ],
        'id': 'project7'
      },

    ]
  });
};