var data = require("../data1.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	var json1 = { 'item': req.query.item,
				  'price': req.query.price,
				  'res': req.query.res };
	console.log(json1);
	data["cart"].push(json1);
	console.log(data);
	
	res.render('project', {
	'projectName': req.query.item,
    'restraunts': [
      { 'name': 'McDonalds',
        'id': 'project1',
		'description': 'Famous for its Golden Arches',
		'price': '1.50'
      },
      { 'name': 'Santorini',
        'id': 'project1',
    'description': 'Famous Greek Grill',
    'price': '2.50'
      },
      { 'name': 'Burger King',
        'id': 'project1',
    'description': 'Where Taste is King',
    'price': '2.00'
      },
      
    ]
  });
};