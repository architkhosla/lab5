exports.viewProject = function(req, res) {
	 var name = req.params.name;
  console.log("The project name is: " + name);
  /*fries comparison info*/
  

  res.render('project', {
	'projectName': name,
    'restraunts': [
      { 'name': 'McDonalds',
        'id': 'project1',
		'description': 'Famous for its Golden Arches',
		'price': '1.50'
      },
      { 'name': 'Santorini',
        'id': 'project2',
    'description': 'Famous Greek Grill',
    'price': '2.50'
      },
      { 'name': 'Burger King',
        'id': 'project3',
    'description': 'Where Taste is King',
    'price': '2.00'
      },
      
    ]
  });
};