Assignment 2.

Q1.


db.zipcodes.find({city:"ATLANTA",state:"GA"})

{ _id: '30324',
city: 'ATLANTA',
loc: [ -84.354867, 33.820609 ],
pop: 15044,
state: 'GA' }
{ _id: '30327',
city: 'ATLANTA',
loc: [ -84.419966, 33.862723 ],
pop: 18467,
state: 'GA' }
{ _id: '30303',
city: 'ATLANTA',
loc: [ -84.388846, 33.752504 ],
pop: 1845,
state: 'GA' }
{ _id: '30336',
city: 'ATLANTA',
loc: [ -84.510028, 33.78534 ],
pop: 1228,
state: 'GA' }
{ _id: '30305',
city: 'ATLANTA',
loc: [ -84.385145, 33.831963 ],
pop: 19122,
state: 'GA' }
{ _id: '30308',
city: 'ATLANTA',
loc: [ -84.375744, 33.771839 ],
pop: 8549,
state: 'GA' }
{ _id: '30345',
city: 'ATLANTA',
loc: [ -84.286961, 33.851347 ],
pop: 19825,
state: 'GA' }
{ _id: '30311',
city: 'ATLANTA',
loc: [ -84.470219, 33.722957 ],
pop: 34880,
state: 'GA' }
{ _id: '30315',
city: 'ATLANTA',
loc: [ -84.380771, 33.705062 ],
pop: 41061,
state: 'GA' }
{ _id: '30316',
city: 'ATLANTA',
loc: [ -84.333913, 33.721686 ],
pop: 34668,
state: 'GA' }
{ _id: '30318',
city: 'ATLANTA',
loc: [ -84.445432, 33.786454 ],
pop: 53894,
state: 'GA' }
{ _id: '30331',
city: 'ATLANTA',
loc: [ -84.520468, 33.72241 ],
pop: 38185,
state: 'GA' }
{ _id: '30350',
city: 'ATLANTA',
loc: [ -84.341146, 33.979471 ],
pop: 24573,
state: 'GA' }
{ _id: '30307',
city: 'ATLANTA',
loc: [ -84.335957, 33.769138 ],
pop: 16330,
state: 'GA' }
{ _id: '30309',
city: 'ATLANTA',
loc: [ -84.388338, 33.798407 ],
pop: 14766,
state: 'GA' }
{ _id: '30312',
city: 'ATLANTA',
loc: [ -84.378125, 33.746749 ],
pop: 17683,
state: 'GA' }
{ _id: '30317',
city: 'ATLANTA',
loc: [ -84.31685, 33.749788 ],
pop: 16395,
state: 'GA' }
{ _id: '30326',
city: 'ATLANTA',
loc: [ -84.358232, 33.848168 ],
pop: 125,
state: 'GA' }
{ _id: '30339',
city: 'ATLANTA',
loc: [ -84.462879, 33.87125 ],
pop: 11158,
state: 'GA' }
{ _id: '30346',
city: 'ATLANTA',
loc: [ -84.333354, 33.926717 ],
pop: 18,
state: 'GA' }
Type "it" for more
it
{ _id: '30360',
city: 'ATLANTA',
loc: [ -84.271645, 33.937772 ],
pop: 16023,
state: 'GA' }
{ _id: '30306',
city: 'ATLANTA',
loc: [ -84.351418, 33.786027 ],
pop: 20081,
state: 'GA' }
{ _id: '30310',
city: 'ATLANTA',
loc: [ -84.423173, 33.727849 ],
pop: 34017,
state: 'GA' }
{ _id: '30313',
city: 'ATLANTA',
loc: [ -84.39352, 33.76825 ],
pop: 8038,
state: 'GA' }
{ _id: '30314',
city: 'ATLANTA',
loc: [ -84.425546, 33.756103 ],
pop: 26649,
state: 'GA' }
{ _id: '30319',
city: 'ATLANTA',
loc: [ -84.335091, 33.868728 ],
pop: 32138,
state: 'GA' }
{ _id: '30329',
city: 'ATLANTA',
loc: [ -84.321402, 33.823555 ],
pop: 17013,
state: 'GA' }
{ _id: '30330',
city: 'ATLANTA',
loc: [ -84.434735, 33.70645 ],
pop: 643,
state: 'GA' }
{ _id: '30334',
city: 'ATLANTA',
loc: [ -84.388188, 33.74715 ],
pop: 0,
state: 'GA' }
{ _id: '30342',
city: 'ATLANTA',
loc: [ -84.376091, 33.884245 ],
pop: 19057,
state: 'GA' }
{ _id: '30349',
city: 'ATLANTA',
loc: [ -84.481258, 33.605331 ],
pop: 48116,
state: 'GA' }




Q2.

 db.zipcodes.aggregate([{$match: {city: "ATLANTA", state: "GA"}}])

 
{ _id: '30324',
city: 'ATLANTA',
loc: [ -84.354867, 33.820609 ],
pop: 15044,
state: 'GA' }
{ _id: '30327',
city: 'ATLANTA',
loc: [ -84.419966, 33.862723 ],
pop: 18467,
state: 'GA' }
{ _id: '30303',
city: 'ATLANTA',
loc: [ -84.388846, 33.752504 ],
pop: 1845,
state: 'GA' }
{ _id: '30336',
city: 'ATLANTA',
loc: [ -84.510028, 33.78534 ],
pop: 1228,
state: 'GA' }
{ _id: '30305',
city: 'ATLANTA',
loc: [ -84.385145, 33.831963 ],
pop: 19122,
state: 'GA' }
{ _id: '30308',
city: 'ATLANTA',
loc: [ -84.375744, 33.771839 ],
pop: 8549,
state: 'GA' }
{ _id: '30345',
city: 'ATLANTA',
loc: [ -84.286961, 33.851347 ],
pop: 19825,
state: 'GA' }
{ _id: '30311',
city: 'ATLANTA',
loc: [ -84.470219, 33.722957 ],
pop: 34880,
state: 'GA' }
{ _id: '30315',
city: 'ATLANTA',
loc: [ -84.380771, 33.705062 ],
pop: 41061,
state: 'GA' }
{ _id: '30316',
city: 'ATLANTA',
loc: [ -84.333913, 33.721686 ],
pop: 34668,
state: 'GA' }
{ _id: '30318',
city: 'ATLANTA',
loc: [ -84.445432, 33.786454 ],
pop: 53894,
state: 'GA' }
{ _id: '30331',
city: 'ATLANTA',
loc: [ -84.520468, 33.72241 ],
pop: 38185,
state: 'GA' }
{ _id: '30350',
city: 'ATLANTA',
loc: [ -84.341146, 33.979471 ],
pop: 24573,
state: 'GA' }
{ _id: '30307',
city: 'ATLANTA',
loc: [ -84.335957, 33.769138 ],
pop: 16330,
state: 'GA' }
{ _id: '30309',
city: 'ATLANTA',
loc: [ -84.388338, 33.798407 ],
pop: 14766,
state: 'GA' }
{ _id: '30312',
city: 'ATLANTA',
loc: [ -84.378125, 33.746749 ],
pop: 17683,
state: 'GA' }
{ _id: '30317',
city: 'ATLANTA',
loc: [ -84.31685, 33.749788 ],
pop: 16395,
state: 'GA' }
{ _id: '30326',
city: 'ATLANTA',
loc: [ -84.358232, 33.848168 ],
pop: 125,
state: 'GA' }
{ _id: '30339',
city: 'ATLANTA',
loc: [ -84.462879, 33.87125 ],
pop: 11158,
state: 'GA' }
{ _id: '30346',
city: 'ATLANTA',
loc: [ -84.333354, 33.926717 ],
pop: 18,
state: 'GA' }
Type "it" for more
it
{ _id: '30360',
city: 'ATLANTA',
loc: [ -84.271645, 33.937772 ],
pop: 16023,
state: 'GA' }
{ _id: '30306',
city: 'ATLANTA',
loc: [ -84.351418, 33.786027 ],
pop: 20081,
state: 'GA' }
{ _id: '30310',
city: 'ATLANTA',
loc: [ -84.423173, 33.727849 ],
pop: 34017,
state: 'GA' }
{ _id: '30313',
city: 'ATLANTA',
loc: [ -84.39352, 33.76825 ],
pop: 8038,
state: 'GA' }
{ _id: '30314',
city: 'ATLANTA',
loc: [ -84.425546, 33.756103 ],
pop: 26649,
state: 'GA' }
{ _id: '30319',
city: 'ATLANTA',
loc: [ -84.335091, 33.868728 ],
pop: 32138,
state: 'GA' }
{ _id: '30329',
city: 'ATLANTA',
loc: [ -84.321402, 33.823555 ],
pop: 17013,
state: 'GA' }
{ _id: '30330',
city: 'ATLANTA',
loc: [ -84.434735, 33.70645 ],
pop: 643,
state: 'GA' }
{ _id: '30334',
city: 'ATLANTA',
loc: [ -84.388188, 33.74715 ],
pop: 0,
state: 'GA' }
{ _id: '30342',
city: 'ATLANTA',
loc: [ -84.376091, 33.884245 ],
pop: 19057,
state: 'GA' }
{ _id: '30349',
city: 'ATLANTA',
loc: [ -84.481258, 33.605331 ],
pop: 48116,
state: 'GA' }



Q3.

db.zipcodes.aggregate([{$group:{_id:"$state"}},{$count:"Number_of_states"}])
{ Number_of_states: 51 }


Q4.

db.zipcodes.aggregate([{$match:{city:"ATLANTA"}},{$group:{_id:'$city',totalpop:{$sum:"$pop"}}}])
{ _id: 'ATLANTA', totalpop: 630046 }


Population By State

Q1.

db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:"$pop"}}}])
{ _id: 'NH', totalpop: 1109252 }
{ _id: 'FL', totalpop: 12686644 }
{ _id: 'AZ', totalpop: 3665228 }
{ _id: 'NV', totalpop: 1201833 }
{ _id: 'OK', totalpop: 3145585 }
{ _id: 'WY', totalpop: 453528 }
{ _id: 'CO', totalpop: 3293755 }
{ _id: 'SD', totalpop: 695397 }
{ _id: 'MO', totalpop: 5110648 }
{ _id: 'UT', totalpop: 1722850 }
{ _id: 'MA', totalpop: 6016425 }
{ _id: 'TN', totalpop: 4876457 }
{ _id: 'DE', totalpop: 666168 }
{ _id: 'MD', totalpop: 4781379 }
{ _id: 'WV', totalpop: 1793146 }
{ _id: 'WI', totalpop: 4891769 }
{ _id: 'MI', totalpop: 9295297 }
{ _id: 'TX', totalpop: 16984601 }
{ _id: 'SC', totalpop: 3486703 }
{ _id: 'OH', totalpop: 10846517 }
Type "it" for more
it
{ _id: 'ID', totalpop: 1006749 }
{ _id: 'DC', totalpop: 606900 }
{ _id: 'KY', totalpop: 3675484 }
{ _id: 'IL', totalpop: 11427576 }
{ _id: 'AR', totalpop: 2350725 }
{ _id: 'RI', totalpop: 1003218 }
{ _id: 'IA', totalpop: 2776420 }
{ _id: 'NC', totalpop: 6628637 }
{ _id: 'ND', totalpop: 638272 }
{ _id: 'LA', totalpop: 4217595 }
{ _id: 'HI', totalpop: 1108229 }
{ _id: 'WA', totalpop: 4866692 }
{ _id: 'AL', totalpop: 4040587 }
{ _id: 'GA', totalpop: 6478216 }
{ _id: 'NM', totalpop: 1515069 }
{ _id: 'MS', totalpop: 2573216 }
{ _id: 'OR', totalpop: 2842321 }
{ _id: 'VA', totalpop: 6181479 }
{ _id: 'NY', totalpop: 17990402 }
{ _id: 'MT', totalpop: 798948 }
Type "it" for more
it
{ _id: 'ME', totalpop: 1226648 }
{ _id: 'CT', totalpop: 3287116 }
{ _id: 'IN', totalpop: 5544136 }
{ _id: 'KS', totalpop: 2475285 }
{ _id: 'NE', totalpop: 1578139 }
{ _id: 'NJ', totalpop: 7730188 }
{ _id: 'VT', totalpop: 562758 }
{ _id: 'MN', totalpop: 4372982 }
{ _id: 'PA', totalpop: 11881643 }
{ _id: 'AK', totalpop: 544698 }
{ _id: 'CA', totalpop: 29754890 }



Q2.

db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}}])
{ _id: 'CA', totalpop: 29754890 }
{ _id: 'NY', totalpop: 17990402 }
{ _id: 'TX', totalpop: 16984601 }
{ _id: 'FL', totalpop: 12686644 }
{ _id: 'PA', totalpop: 11881643 }
{ _id: 'IL', totalpop: 11427576 }
{ _id: 'OH', totalpop: 10846517 }
{ _id: 'MI', totalpop: 9295297 }
{ _id: 'NJ', totalpop: 7730188 }
{ _id: 'NC', totalpop: 6628637 }
{ _id: 'GA', totalpop: 6478216 }
{ _id: 'VA', totalpop: 6181479 }
{ _id: 'MA', totalpop: 6016425 }
{ _id: 'IN', totalpop: 5544136 }
{ _id: 'MO', totalpop: 5110648 }
{ _id: 'WI', totalpop: 4891769 }
{ _id: 'TN', totalpop: 4876457 }
{ _id: 'WA', totalpop: 4866692 }
{ _id: 'MD', totalpop: 4781379 }
{ _id: 'MN', totalpop: 4372982 }
Type "it" for more
it
{ _id: 'LA', totalpop: 4217595 }
{ _id: 'AL', totalpop: 4040587 }
{ _id: 'KY', totalpop: 3675484 }
{ _id: 'AZ', totalpop: 3665228 }
{ _id: 'SC', totalpop: 3486703 }
{ _id: 'CO', totalpop: 3293755 }
{ _id: 'CT', totalpop: 3287116 }
{ _id: 'OK', totalpop: 3145585 }
{ _id: 'OR', totalpop: 2842321 }
{ _id: 'IA', totalpop: 2776420 }
{ _id: 'MS', totalpop: 2573216 }
{ _id: 'KS', totalpop: 2475285 }
{ _id: 'AR', totalpop: 2350725 }
{ _id: 'WV', totalpop: 1793146 }
{ _id: 'UT', totalpop: 1722850 }
{ _id: 'NE', totalpop: 1578139 }
{ _id: 'NM', totalpop: 1515069 }
{ _id: 'ME', totalpop: 1226648 }
{ _id: 'NV', totalpop: 1201833 }
{ _id: 'NH', totalpop: 1109252 }
Type "it" for more
it
{ _id: 'HI', totalpop: 1108229 }
{ _id: 'ID', totalpop: 1006749 }
{ _id: 'RI', totalpop: 1003218 }
{ _id: 'MT', totalpop: 798948 }
{ _id: 'SD', totalpop: 695397 }
{ _id: 'DE', totalpop: 666168 }
{ _id: 'ND', totalpop: 638272 }
{ _id: 'DC', totalpop: 606900 }
{ _id: 'VT', totalpop: 562758 }
{ _id: 'AK', totalpop: 544698 }
{ _id: 'WY', totalpop: 453528 }



Q3.

db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
{ _id: 'CA', totalpop: 29754890 }
{ _id: 'NY', totalpop: 17990402 }
{ _id: 'TX', totalpop: 16984601 }



Population By City

Q1.

db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}}])
{ _id: { city: 'WARE', state: 'MA' }, totalpop: 9808 }
{ _id: { city: 'BATAVIA', state: 'IA' }, totalpop: 1164 }
{ _id: { city: 'WEST ORANGE', state: 'NJ' }, totalpop: 38639 }
{ _id: { city: 'BOWIE', state: 'MD' }, totalpop: 33535 }
{ _id: { city: 'TOWNSEND', state: 'GA' }, totalpop: 2413 }
{ _id: { city: 'KILLINGTON', state: 'VT' }, totalpop: 738 }
{ _id: { city: 'QUEENS VILLAGE', state: 'NY' },
  totalpop: 62108 }
{ _id: { city: 'MILLTOWN', state: 'KY' }, totalpop: 625 }
{ _id: { city: 'SOUTHAM', state: 'ND' }, totalpop: 272 }
{ _id: { city: 'HAZEL RUN', state: 'MN' }, totalpop: 328 }
{ _id: { city: 'SENECA', state: 'SD' }, totalpop: 246 }
{ _id: { city: 'BAYLIS', state: 'IL' }, totalpop: 628 }
{ _id: { city: 'PECK', state: 'KS' }, totalpop: 1023 }
{ _id: { city: 'CROSS PLAINS', state: 'TX' }, totalpop: 1928 }
{ _id: { city: 'POCATELLO', state: 'ID' }, totalpop: 48887 }
{ _id: { city: 'COBDEN', state: 'IL' }, totalpop: 2348 }
{ _id: { city: 'COLTON', state: 'OR' }, totalpop: 4223 }
{ _id: { city: 'HARTSDALE', state: 'NY' }, totalpop: 13995 }
{ _id: { city: 'HIGHLAND MILLS', state: 'NY' }, totalpop: 5629 }
{ _id: { city: 'CUTLER', state: 'IN' }, totalpop: 2495 }
Type "it" for more
it
{ _id: { city: 'WHITESTOWN', state: 'IN' }, totalpop: 1378 }
{ _id: { city: 'STODDARD', state: 'NH' }, totalpop: 622 }
{ _id: { city: 'EAST FAIRFIELD', state: 'VT' }, totalpop: 1076 }
{ _id: { city: 'OCEANA', state: 'WV' }, totalpop: 4243 }
{ _id: { city: 'CAPROCK', state: 'NM' }, totalpop: 19 }
{ _id: { city: 'PALMYRA', state: 'NE' }, totalpop: 1012 }
{ _id: { city: 'LITTLE RIVER', state: 'SC' }, totalpop: 6473 }
{ _id: { city: 'ORINDA', state: 'CA' }, totalpop: 16883 }
{ _id: { city: 'EAST CORINTH', state: 'VT' }, totalpop: 279 }
{ _id: { city: 'NEW LONDON', state: 'MO' }, totalpop: 4801 }
{ _id: { city: 'PERRYSBURG', state: 'OH' }, totalpop: 29621 }
{ _id: { city: 'ARNOLD', state: 'NE' }, totalpop: 1099 }
{ _id: { city: 'PINEVILLE', state: 'AR' }, totalpop: 356 }
{ _id: { city: 'PORTAGEVILLE', state: 'NY' }, totalpop: 980 }
{ _id: { city: 'SMYRNA', state: 'DE' }, totalpop: 14164 }
{ _id: { city: 'GLENCOE', state: 'MD' }, totalpop: 4450 }
{ _id: { city: 'WATERLOO', state: 'IA' }, totalpop: 69389 }
{ _id: { city: 'APALACHIN', state: 'NY' }, totalpop: 8712 }
{ _id: { city: 'SHELBYVILLE', state: 'TX' }, totalpop: 2949 }
{ _id: { city: 'SAUGET', state: 'IL' }, totalpop: 11213 }
Type "it" for more

Q2.

db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}}])
{ _id: { city: 'CHICAGO', state: 'IL' }, totalpop: 2452177 }
{ _id: { city: 'BROOKLYN', state: 'NY' }, totalpop: 2300504 }
{ _id: { city: 'LOS ANGELES', state: 'CA' }, totalpop: 2102295 }
{ _id: { city: 'HOUSTON', state: 'TX' }, totalpop: 2095918 }
{ _id: { city: 'PHILADELPHIA', state: 'PA' },
  totalpop: 1610956 }
{ _id: { city: 'NEW YORK', state: 'NY' }, totalpop: 1476790 }
{ _id: { city: 'BRONX', state: 'NY' }, totalpop: 1209548 }
{ _id: { city: 'SAN DIEGO', state: 'CA' }, totalpop: 1049298 }
{ _id: { city: 'DETROIT', state: 'MI' }, totalpop: 963243 }
{ _id: { city: 'DALLAS', state: 'TX' }, totalpop: 940191 }
{ _id: { city: 'PHOENIX', state: 'AZ' }, totalpop: 890853 }
{ _id: { city: 'MIAMI', state: 'FL' }, totalpop: 825232 }
{ _id: { city: 'SAN JOSE', state: 'CA' }, totalpop: 816653 }
{ _id: { city: 'SAN ANTONIO', state: 'TX' }, totalpop: 811792 }
{ _id: { city: 'BALTIMORE', state: 'MD' }, totalpop: 733081 }
{ _id: { city: 'SAN FRANCISCO', state: 'CA' },
  totalpop: 723993 }
{ _id: { city: 'MEMPHIS', state: 'TN' }, totalpop: 632837 }
{ _id: { city: 'SACRAMENTO', state: 'CA' }, totalpop: 628279 }
{ _id: { city: 'JACKSONVILLE', state: 'FL' }, totalpop: 610160 }
{ _id: { city: 'ATLANTA', state: 'GA' }, totalpop: 609591 }
Type "it" for more


Q.3

db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3} ])
{ _id: { city: 'CHICAGO', state: 'IL' }, totalpop: 2452177 }
{ _id: { city: 'BROOKLYN', state: 'NY' }, totalpop: 2300504 }
{ _id: { city: 'LOS ANGELES', state: 'CA' }, totalpop: 2102295 }


Q4.

db.zipcodes.aggregate([{$match:{state:'TX'}},{$group:{_id:'$city',population:{$sum:'$pop'}}},{$sort:{population:-1}},{$limit:3}])
{ _id: 'HOUSTON', population: 2095918 }
{ _id: 'DALLAS', population: 940191 }
{ _id: 'SAN ANTONIO', population: 811792 }


Bonus

Q1.

db.zipcodes.aggregate([{$group:{_id:'$city',average_pop:{$avg:'$pop'}}}])
{ _id: 'TOADLENA', average_pop: 2097 }
{ _id: 'OCTAVIA', average_pop: 401.5 }
{ _id: 'SOUTH BRISTOL', average_pop: 476 }
{ _id: 'WATKINSVILLE', average_pop: 7723 }
{ _id: 'EAU GALLIE', average_pop: 9539 }
{ _id: 'ANDALUSIA', average_pop: 9409.5 }
{ _id: 'ONEKAMA', average_pop: 1089 }
{ _id: 'RICHMOND HEIGHTS', average_pop: 15688.5 }
{ _id: 'MILLERSVIEW', average_pop: 137 }
{ _id: 'BAXTER', average_pop: 2537.75 }
{ _id: 'MONTROSE', average_pop: 4114.538461538462 }
{ _id: 'FINCASTLE', average_pop: 2843 }
{ _id: 'AVON LAKE', average_pop: 15061 }
{ _id: 'HENNIKER', average_pop: 4151 }
{ _id: 'BENTON CITY', average_pop: 2673.5 }
{ _id: 'SOUTH WEST CITY', average_pop: 1201 }
{ _id: 'CLIFTON', average_pop: 7840.615384615385 }
{ _id: 'SOUTH ACWORTH', average_pop: 1008 }
{ _id: 'SANDFORD', average_pop: 11459 }
{ _id: 'TEXAS CITY', average_pop: 20103.5 }
Type "it" for more
it
{ _id: 'GREENHILLS', average_pop: 4680 }
{ _id: 'EUTAWVILLE', average_pop: 4298 }
{ _id: 'ONALASKA', average_pop: 9756 }
{ _id: 'CLEARMONT', average_pop: 437 }
{ _id: 'BARRE', average_pop: 9770 }
{ _id: 'EAST RUTHERFORD', average_pop: 7874 }
{ _id: 'WILCOX', average_pop: 1195 }
{ _id: 'ELMWOOD PLACE', average_pop: 10261 }
{ _id: 'BUMPUS MILLS', average_pop: 411 }
{ _id: 'SHELL ROCK', average_pop: 1834 }
{ _id: 'ANGELICA', average_pop: 1046 }
{ _id: 'CARATUNK', average_pop: 124 }
{ _id: 'LINDENHURST', average_pop: 32745 }
{ _id: 'BREAD LOAF', average_pop: 9990 }
{ _id: 'CASSELBERRY', average_pop: 30933 }
{ _id: 'SOUTH SHORE', average_pop: 487 }
{ _id: 'FARLINGTON', average_pop: 519 }
{ _id: 'MC MURRAY', average_pop: 29555 }
{ _id: 'UNION GAP', average_pop: 10498 }
{ _id: 'MUSCATINE', average_pop: 29779 }
Type "it" for more
it
{ _id: 'ONTARIO', average_pop: 27040.833333333332 }
{ _id: 'MARSTELLER', average_pop: 959 }
{ _id: 'COVERT', average_pop: 2544 }
{ _id: 'LUTHERSBURG', average_pop: 2249 }
{ _id: 'NORCROSS', average_pop: 17203.75 }
{ _id: 'LANESVILLE', average_pop: 2327.5 }
{ _id: 'WEST HAMLIN', average_pop: 1612 }
{ _id: 'CHEBANSE', average_pop: 3580 }
{ _id: 'PAUL SMITHS', average_pop: 245 }
{ _id: 'SIX LAKES', average_pop: 2132 }
{ _id: 'ANDICE', average_pop: 14100 }
{ _id: 'TWIN VALLEY', average_pop: 2108 }
{ _id: 'ROBERTA', average_pop: 2803 }
{ _id: 'DUGGINSVILLE', average_pop: 962 }
{ _id: 'SIMMESPORT', average_pop: 3137 }
{ _id: 'CHOKIO', average_pop: 785 }
{ _id: 'WEST END', average_pop: 5963.5 }
{ _id: 'TWELVE MILE', average_pop: 873 }
{ _id: 'RAMONA', average_pop: 7562.5 }
{ _id: 'THE WOODLANDS', average_pop: 18003.5 }
Type "it" for more


Q.2

db.zipcodes.aggregate([{$group:{_id:'$city',average_pop:{$avg:'$pop'}}},{$sort:{average_pop:-1}},{$limit:3}])
{ _id: 'BELL GARDENS', average_pop: 99568 }
{ _id: 'ARLETA', average_pop: 88114 }
{ _id: 'SOUTH GATE', average_pop: 87026 }
