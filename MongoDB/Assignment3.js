Assignment 3.

show databases
MongoPractice  296.00 KiB
Population       2.39 MiB
restaurants      8.00 KiB
admin          332.00 KiB
local            4.41 GiB
use restaurants
'switched to db restaurants'


Q1.
db.addresses.find()
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  address: 
   { building: '1007',
     coord: [ -73.856077, 40.848447 ],
     street: 'Morris Park Ave',
     zipcode: '10462' },
  borough: 'Bronx',
  cuisine: 'Bakery',
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-09-11T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2013-01-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-23T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-03-10T00:00:00.000Z, grade: 'B', score: 14 } ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33ea"),
  address: 
   { building: '469',
     coord: [ -73.961704, 40.662942 ],
     street: 'Flatbush Avenue',
     zipcode: '11225' },
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  grades: 
   [ { date: 2014-12-30T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2014-07-01T00:00:00.000Z, grade: 'B', score: 23 },
     { date: 2013-04-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-05-08T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ _id: ObjectId("62b32c0e34d692cde80e33eb"),
  address: 
   { building: '351',
     coord: [ -73.98513559999999, 40.7676919 ],
     street: 'West   57 Street',
     zipcode: '10019' },
  borough: 'Manhattan',
  cuisine: 'Irish',
  grades: 
   [ { date: 2014-09-06T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-07-22T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-07-31T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-12-29T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ _id: ObjectId("62b32c0e34d692cde80e33ec"),
  address: 
   { building: '2780',
     coord: [ -73.98241999999999, 40.579505 ],
     street: 'Stillwell Avenue',
     zipcode: '11224' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-06-10T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-06-05T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-04-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-10-12T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("62b32c0e34d692cde80e33ed"),
  address: 
   { building: '97-22',
     coord: [ -73.8601152, 40.7311739 ],
     street: '63 Road',
     zipcode: '11374' },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-24T00:00:00.000Z, grade: 'Z', score: 20 },
     { date: 2013-01-17T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-08-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-12-15T00:00:00.000Z, grade: 'B', score: 25 } ],
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ _id: ObjectId("62b32c0e34d692cde80e33ee"),
  address: 
   { building: '8825',
     coord: [ -73.8803827, 40.7643124 ],
     street: 'Astoria Boulevard',
     zipcode: '11369' },
  borough: 'Queens',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-15T00:00:00.000Z, grade: 'Z', score: 38 },
     { date: 2014-05-02T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-03-02T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-02-10T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("62b32c0e34d692cde80e33ef"),
  address: 
   { building: '2206',
     coord: [ -74.1377286, 40.6119572 ],
     street: 'Victory Boulevard',
     zipcode: '10314' },
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-10-06T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2014-05-20T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-04-04T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-01-24T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ _id: ObjectId("62b32c0e34d692cde80e33f0"),
  address: 
   { building: '7114',
     coord: [ -73.9068506, 40.6199034 ],
     street: 'Avenue U',
     zipcode: '11234' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-05-29T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2014-01-14T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-08-03T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-03-09T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-10-14T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ _id: ObjectId("62b32c0e34d692cde80e33f1"),
  address: 
   { building: '6409',
     coord: [ -74.00528899999999, 40.628886 ],
     street: '11 Avenue',
     zipcode: '11219' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-07-18T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-02-13T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-08-16T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2011-08-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("62b32c0e34d692cde80e33f2"),
  address: 
   { building: '1839',
     coord: [ -73.9482609, 40.6408271 ],
     street: 'Nostrand Avenue',
     zipcode: '11226' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-07-14T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-10T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-11T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2012-02-23T00:00:00.000Z, grade: 'A', score: 8 } ],
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  address: 
   { building: '2300',
     coord: [ -73.8786113, 40.8502883 ],
     street: 'Southern Boulevard',
     zipcode: '10460' },
  borough: 'Bronx',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-28T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-06-19T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-06-15T00:00:00.000Z, grade: 'A', score: 3 } ],
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("62b32c0e34d692cde80e33f4"),
  address: 
   { building: '7715',
     coord: [ -73.9973325, 40.61174889999999 ],
     street: '18 Avenue',
     zipcode: '11214' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-04-16T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-04-23T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-04-24T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2011-12-16T00:00:00.000Z, grade: 'A', score: 2 } ],
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ _id: ObjectId("62b32c0e34d692cde80e33f5"),
  address: 
   { building: '1269',
     coord: [ -73.871194, 40.6730975 ],
     street: 'Sutter Avenue',
     zipcode: '11208' },
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  grades: 
   [ { date: 2014-09-16T00:00:00.000Z, grade: 'B', score: 21 },
     { date: 2013-08-28T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2013-04-02T00:00:00.000Z, grade: 'C', score: 56 },
     { date: 2012-08-15T00:00:00.000Z, grade: 'B', score: 27 },
     { date: 2012-03-28T00:00:00.000Z, grade: 'B', score: 27 } ],
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("62b32c0e34d692cde80e33f6"),
  address: 
   { building: '1',
     coord: [ -73.96926909999999, 40.7685235 ],
     street: 'East   66 Street',
     zipcode: '10065' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-07T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-05-03T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-04-30T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2011-12-27T00:00:00.000Z, grade: 'A', score: 0 } ],
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("62b32c0e34d692cde80e33f7"),
  address: 
   { building: '705',
     coord: [ -73.9653967, 40.6064339 ],
     street: 'Kings Highway',
     zipcode: '11223' },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-10T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-10-10T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-10-04T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-05-21T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-12-30T00:00:00.000Z, grade: 'B', score: 19 } ],
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("62b32c0e34d692cde80e33f8"),
  address: 
   { building: '203',
     coord: [ -73.97822040000001, 40.6435254 ],
     street: 'Church Avenue',
     zipcode: '11218' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-02-10T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-01-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-01-09T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2011-11-07T00:00:00.000Z, grade: 'P', score: 12 },
     { date: 2011-07-21T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ _id: ObjectId("62b32c0e34d692cde80e33f9"),
  address: 
   { building: '265-15',
     coord: [ -73.7032601, 40.7386417 ],
     street: 'Hillside Avenue',
     zipcode: '11004' },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-10-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2013-09-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-09-20T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ _id: ObjectId("62b32c0e34d692cde80e33fa"),
  address: 
   { building: '6909',
     coord: [ -74.0259567, 40.6353674 ],
     street: '3 Avenue',
     zipcode: '11209' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-08-21T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2014-03-05T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-01-10T00:00:00.000Z, grade: 'A', score: 10 } ],
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ _id: ObjectId("62b32c0e34d692cde80e33fb"),
  address: 
   { building: '522',
     coord: [ -73.95171, 40.767461 ],
     street: 'East   74 Street',
     zipcode: '10021' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-09-02T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-12-19T00:00:00.000Z, grade: 'B', score: 16 },
     { date: 2013-05-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2012-12-07T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-03-29T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ _id: ObjectId("62b32c0e34d692cde80e33fc"),
  address: 
   { building: '284',
     coord: [ -73.9829239, 40.6580753 ],
     street: 'Prospect Park West',
     zipcode: '11215' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-19T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-11-14T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-12-05T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-05-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more


Q.2.

db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1}})
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33ea"),
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ _id: ObjectId("62b32c0e34d692cde80e33eb"),
  borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ _id: ObjectId("62b32c0e34d692cde80e33ec"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("62b32c0e34d692cde80e33ed"),
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ _id: ObjectId("62b32c0e34d692cde80e33ee"),
  borough: 'Queens',
  cuisine: 'American ',
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("62b32c0e34d692cde80e33ef"),
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ _id: ObjectId("62b32c0e34d692cde80e33f0"),
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ _id: ObjectId("62b32c0e34d692cde80e33f1"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("62b32c0e34d692cde80e33f2"),
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("62b32c0e34d692cde80e33f4"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ _id: ObjectId("62b32c0e34d692cde80e33f5"),
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("62b32c0e34d692cde80e33f6"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("62b32c0e34d692cde80e33f7"),
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("62b32c0e34d692cde80e33f8"),
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ _id: ObjectId("62b32c0e34d692cde80e33f9"),
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ _id: ObjectId("62b32c0e34d692cde80e33fa"),
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ _id: ObjectId("62b32c0e34d692cde80e33fb"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ _id: ObjectId("62b32c0e34d692cde80e33fc"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more


Q.3.

db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}})
{ borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ borough: 'Queens',
  cuisine: 'American ',
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ borough: 'Brooklyn',
  cuisine: 'Chinese',
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more


Q.4.

db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0,"address.zipcode":1}})
{ address: { zipcode: '10462' },
  borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ address: { zipcode: '11225' },
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ address: { zipcode: '10019' },
  borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ address: { zipcode: '11224' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ address: { zipcode: '11374' },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ address: { zipcode: '11369' },
  borough: 'Queens',
  cuisine: 'American ',
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ address: { zipcode: '10314' },
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ address: { zipcode: '11234' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ address: { zipcode: '11219' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ address: { zipcode: '11226' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ address: { zipcode: '10460' },
  borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ address: { zipcode: '11214' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ address: { zipcode: '11208' },
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ address: { zipcode: '10065' },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ address: { zipcode: '11223' },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ address: { zipcode: '11218' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ address: { zipcode: '11004' },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ address: { zipcode: '11209' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ address: { zipcode: '10021' },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ address: { zipcode: '11215' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more


Q.5.

db.addresses.aggregate([{$match:{borough:"Bronx"}},{$limit:5}])
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  address: 
   { building: '1007',
     coord: [ -73.856077, 40.848447 ],
     street: 'Morris Park Ave',
     zipcode: '10462' },
  borough: 'Bronx',
  cuisine: 'Bakery',
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-09-11T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2013-01-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-23T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-03-10T00:00:00.000Z, grade: 'B', score: 14 } ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  address: 
   { building: '2300',
     coord: [ -73.8786113, 40.8502883 ],
     street: 'Southern Boulevard',
     zipcode: '10460' },
  borough: 'Bronx',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-28T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-06-19T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-06-15T00:00:00.000Z, grade: 'A', score: 3 } ],
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("62b32c0e34d692cde80e3408"),
  address: 
   { building: '1006',
     coord: [ -73.84856870000002, 40.8903781 ],
     street: 'East 233 Street',
     zipcode: '10466' },
  borough: 'Bronx',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-04-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-09-05T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-02-21T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2012-07-03T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2011-07-11T00:00:00.000Z, grade: 'A', score: 5 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40363093' }
{ _id: ObjectId("62b32c0e34d692cde80e340c"),
  address: 
   { building: '1236',
     coord: [ -73.8893654, 40.81376179999999 ],
     street: '238 Spofford Ave',
     zipcode: '10474' },
  borough: 'Bronx',
  cuisine: 'Chinese',
  grades: 
   [ { date: 2013-12-30T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2013-01-08T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-06-12T00:00:00.000Z, grade: 'B', score: 15 } ],
  name: 'Happy Garden',
  restaurant_id: '40363289' }
{ _id: ObjectId("62b32c0e34d692cde80e341e"),
  address: 
   { building: '277',
     coord: [ -73.8941893, 40.8634684 ],
     street: 'East Kingsbridge Road',
     zipcode: '10458' },
  borough: 'Bronx',
  cuisine: 'Chinese',
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-09-26T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-03-19T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-08-29T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2011-08-17T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Happy Garden',
  restaurant_id: '40364296' }

Q.5.

db.addresses.aggregate([{$match:{borough:'Bronx'}},{$project:{borough:1,name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  borough: 'Bronx',
  name: 'Morris Park Bake Shop' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  borough: 'Bronx',
  name: 'Wild Asia' }
{ _id: ObjectId("62b32c0e34d692cde80e3408"),
  borough: 'Bronx',
  name: 'Carvel Ice Cream' }
{ _id: ObjectId("62b32c0e34d692cde80e340c"),
  borough: 'Bronx',
  name: 'Happy Garden' }
{ _id: ObjectId("62b32c0e34d692cde80e341e"),
  borough: 'Bronx',
  name: 'Happy Garden' }
{ _id: ObjectId("62b32c0e34d692cde80e3426"),
  borough: 'Bronx',
  name: 'Manhem Club' }
{ _id: ObjectId("62b32c0e34d692cde80e343e"),
  borough: 'Bronx',
  name: 'The New Starling Athletic Club Of The Bronx' }
{ _id: ObjectId("62b32c0e34d692cde80e3456"),
  borough: 'Bronx',
  name: 'Yankee Tavern' }
{ _id: ObjectId("62b32c0e34d692cde80e3469"),
  borough: 'Bronx',
  name: 'Mcdwyers Pub' }
{ _id: ObjectId("62b32c0e34d692cde80e3482"),
  borough: 'Bronx',
  name: 'The Punch Bowl' }
{ _id: ObjectId("62b32c0e34d692cde80e348d"),
  borough: 'Bronx',
  name: 'Munchtime' }
{ _id: ObjectId("62b32c0e34d692cde80e348f"),
  borough: 'Bronx',
  name: 'Ihop' }
{ _id: ObjectId("62b32c0e34d692cde80e3494"),
  borough: 'Bronx',
  name: 'Lulu\'S Coffee Shop' }
{ _id: ObjectId("62b32c0e34d692cde80e349a"),
  borough: 'Bronx',
  name: 'Marina Delray' }
{ _id: ObjectId("62b32c0e34d692cde80e34bf"),
  borough: 'Bronx',
  name: 'The Lark\'S Nest' }
{ _id: ObjectId("62b32c0e34d692cde80e34c0"),
  borough: 'Bronx',
  name: 'Terrace Cafe' }
{ _id: ObjectId("62b32c0e34d692cde80e34c1"),
  borough: 'Bronx',
  name: 'African Terrace' }
{ _id: ObjectId("62b32c0e34d692cde80e34c2"),
  borough: 'Bronx',
  name: 'Cool Zone' }
{ _id: ObjectId("62b32c0e34d692cde80e34c3"),
  borough: 'Bronx',
  name: 'Beaver Pond' }
{ _id: ObjectId("62b32c0e34d692cde80e34c4"),
  borough: 'Bronx',
  name: 'African Market (Baboon Cafe)' }
Type "it" for more


Q.7.

db.addresses.aggregate([{$match:{borough:'Bronx'}},{$skip:5},{$project:{borough:1,name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e3426"),
  borough: 'Bronx',
  name: 'Manhem Club' }
{ _id: ObjectId("62b32c0e34d692cde80e343e"),
  borough: 'Bronx',
  name: 'The New Starling Athletic Club Of The Bronx' }
{ _id: ObjectId("62b32c0e34d692cde80e3456"),
  borough: 'Bronx',
  name: 'Yankee Tavern' }
{ _id: ObjectId("62b32c0e34d692cde80e3469"),
  borough: 'Bronx',
  name: 'Mcdwyers Pub' }
{ _id: ObjectId("62b32c0e34d692cde80e3482"),
  borough: 'Bronx',
  name: 'The Punch Bowl' }
{ _id: ObjectId("62b32c0e34d692cde80e348d"),
  borough: 'Bronx',
  name: 'Munchtime' }
{ _id: ObjectId("62b32c0e34d692cde80e348f"),
  borough: 'Bronx',
  name: 'Ihop' }
{ _id: ObjectId("62b32c0e34d692cde80e3494"),
  borough: 'Bronx',
  name: 'Lulu\'S Coffee Shop' }
{ _id: ObjectId("62b32c0e34d692cde80e349a"),
  borough: 'Bronx',
  name: 'Marina Delray' }
{ _id: ObjectId("62b32c0e34d692cde80e34bf"),
  borough: 'Bronx',
  name: 'The Lark\'S Nest' }
{ _id: ObjectId("62b32c0e34d692cde80e34c0"),
  borough: 'Bronx',
  name: 'Terrace Cafe' }
{ _id: ObjectId("62b32c0e34d692cde80e34c1"),
  borough: 'Bronx',
  name: 'African Terrace' }
{ _id: ObjectId("62b32c0e34d692cde80e34c2"),
  borough: 'Bronx',
  name: 'Cool Zone' }
{ _id: ObjectId("62b32c0e34d692cde80e34c3"),
  borough: 'Bronx',
  name: 'Beaver Pond' }
{ _id: ObjectId("62b32c0e34d692cde80e34c4"),
  borough: 'Bronx',
  name: 'African Market (Baboon Cafe)' }
{ _id: ObjectId("62b32c0e34d692cde80e34e4"),
  borough: 'Bronx',
  name: 'Blue Bay Restaurant' }
{ _id: ObjectId("62b32c0e34d692cde80e34ec"),
  borough: 'Bronx',
  name: 'Seashore Restaurant' }
{ _id: ObjectId("62b32c0e34d692cde80e34f6"),
  borough: 'Bronx',
  name: 'Bronx Grill' }
{ _id: ObjectId("62b32c0e34d692cde80e34f9"),
  borough: 'Bronx',
  name: 'Johnny\'S Reef Restaurant' }
{ _id: ObjectId("62b32c0e34d692cde80e34fb"),
  borough: 'Bronx',
  name: 'White Castle' }
Type "it" for more


Q.8.

db.addresses.aggregate([{$match:{"grades.score":{$gt:90}}},{$project:{name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e3547"),
  name: 'Murals On 54/Randolphs\'S' }
{ _id: ObjectId("62b32c0e34d692cde80e35e8"), name: 'Gandhi' }
{ _id: ObjectId("62b32c0e34d692cde80e374b"),
  name: 'Bella Napoli' }


Q.9.

 db.addresses.aggregate([{$match:{"grades.score":{$gt:80,$lt:100}}},{$project:{name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e3547"),
  name: 'Murals On 54/Randolphs\'S' }
{ _id: ObjectId("62b32c0e34d692cde80e35e8"), name: 'Gandhi' }
{ _id: ObjectId("62b32c0e34d692cde80e374b"),
  name: 'Bella Napoli' }
{ _id: ObjectId("62b32c1034d692cde80e3fb7"),
  name: 'West 79Th Street Boat Basin Cafe' }

Q.10

db.addresses.aggregate([{$match:{"grades.score":{$gt:80,$lt:100}}},{$project:{name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e3547"),
  name: 'Murals On 54/Randolphs\'S' }
{ _id: ObjectId("62b32c0e34d692cde80e35e8"), name: 'Gandhi' }
{ _id: ObjectId("62b32c0e34d692cde80e374b"),
  name: 'Bella Napoli' }
{ _id: ObjectId("62b32c1034d692cde80e3fb7"),
  name: 'West 79Th Street Boat Basin Cafe' }


Q.11

db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])
{ _id: ObjectId("62b32c0e34d692cde80e35e8"),
  address: { coord: [ -73.9864626, 40.7266739 ] },
  cuisine: 'Indian',
  name: 'Gandhi' }
{ _id: ObjectId("62b32c0e34d692cde80e374b"),
  address: { coord: [ -73.984758, 40.7457939 ] },
  cuisine: 'Pizza/Italian',
  name: 'Bella Napoli' }
{ _id: ObjectId("62b32c0e34d692cde80e3756"),
  address: { coord: [ -73.9243061, 40.8276297 ] },
  cuisine: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
  name: 'El Molino Rojo Restaurant' }
{ _id: ObjectId("62b32c1034d692cde80e38a6"),
  address: { coord: [ -73.94610279999999, 40.7137587 ] },
  cuisine: 'Bakery',
  name: 'Fortunato Bros Cafe & Bakery' }
{ _id: ObjectId("62b32c1034d692cde80e3ed0"),
  address: { coord: [ -73.9772294, 40.7527262 ] },
  cuisine: 'Italian',
  name: 'Two Boots Grand Central' }

Q.12.

db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.score":{$gt:70},"address.coord.1":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])


Q.13

db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.grade":'A',borough:{$ne:'Brooklyn'}}},{$project:{name:1,cuisine:1,borough:1,"address.coord":1,_id:0}}])
{ address: { coord: [ -73.856077, 40.848447 ] },
  borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop' }
{ address: { coord: [ -73.98513559999999, 40.7676919 ] },
  borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant' }
{ address: { coord: [ -73.8601152, 40.7311739 ] },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen' }
{ address: { coord: [ -74.1377286, 40.6119572 ] },
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island' }
{ address: { coord: [ -73.7032601, 40.7386417 ] },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream' }
{ address: { coord: [ -73.839297, 40.78147 ] },
  borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Sal\'S Deli' }
{ address: { coord: [ -73.9925306, 40.7309346 ] },
  borough: 'Manhattan',
  cuisine: 'Delicatessen',
  name: 'Bully\'S Deli' }
{ address: { coord: [ -73.94024739999999, 40.7623288 ] },
  borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Steve Chu\'S Deli & Grocery' }
{ address: { coord: [ -73.976112, 40.786714 ] },
  borough: 'Manhattan',
  cuisine: 'Chicken',
  name: 'Harriet\'S Kitchen' }
{ address: { coord: [ -73.8642349, 40.75356 ] },
  borough: 'Queens',
  cuisine: 'Chinese',
  name: 'Ho Mei Restaurant' }
{ address: { coord: [ -74.0085357, 40.70620539999999 ] },
  borough: 'Manhattan',
  cuisine: 'Turkish',
  name: 'The Country Cafe' }
{ address: { coord: [ -73.84856870000002, 40.8903781 ] },
  borough: 'Bronx',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream' }
{ address: { coord: [ -73.9998042, 40.7251256 ] },
  borough: 'Manhattan',
  cuisine: 'Bakery',
  name: 'Olive\'S' }
{ address: { coord: [ -73.8893654, 40.81376179999999 ] },
  borough: 'Bronx',
  cuisine: 'Chinese',
  name: 'Happy Garden' }
{ address: { coord: [ -73.902463, 40.694924 ] },
  borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Tony\'S Deli' }
{ address: { coord: [ -73.97534999999999, 40.7516269 ] },
  borough: 'Manhattan',
  cuisine: 'Sandwiches/Salads/Mixed Buffet',
  name: 'Lexler Deli' }
{ address: { coord: [ -74.1459332, 40.6103714 ] },
  borough: 'Staten Island',
  cuisine: 'Delicatessen',
  name: 'Bagels N Buns' }
{ address: { coord: [ -73.8740217, 40.7135015 ] },
  borough: 'Queens',
  cuisine: 'Bagels/Pretzels',
  name: 'Hot Bagels' }
{ address: { coord: [ -73.95685019999999, 40.7753401 ] },
  borough: 'Manhattan',
  cuisine: 'Continental',
  name: 'Lorenzo & Maria\'S' }
{ address: { coord: [ -73.9791458, 40.744328 ] },
  borough: 'Manhattan',
  cuisine: 'Pizza',
  name: 'Domino\'S Pizza' }
Type "it" for more

Q.14

db.addresses.aggregate([{$match:{name:{$regex:"^Wil"}}},{$project:{name:1,borough:1,cuisine:1,restaurant_id:1,_id:0}}])
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ borough: 'Bronx',
  cuisine: 'Pizza',
  name: 'Wilbel Pizza',
  restaurant_id: '40871979' }


Q.15.

db.addresses.aggregate([{$match:{name:{$regex:"ces$"}}},{$project:{name:1,borough:1,cuisine:1,restaurant_id:1,_id:0}}])
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Pieces',
  restaurant_id: '40399910' }
{ borough: 'Queens',
  cuisine: 'American ',
  name: 'S.M.R Restaurant Services',
  restaurant_id: '40403857' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Good Shepherd Services',
  restaurant_id: '40403989' }
{ borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'The Ice Box-Ralph\'S Famous Italian Ices',
  restaurant_id: '40690899' }
{ borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Alices',
  restaurant_id: '40782042' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Re: Sources',
  restaurant_id: '40876068' }

Q.16


db.addresses.aggregate([{$match:{name: /Reg/}},{$project:{name:1,restaurant_id:1,borough:1,cuisine:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e33f1"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("62b32c0e34d692cde80e34ee"),
  borough: 'Manhattan',
  cuisine: 'Café/Coffee/Tea',
  name: 'Caffe Reggio',
  restaurant_id: '40369418' }
{ _id: ObjectId("62b32c0e34d692cde80e35fd"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Regency Hotel',
  restaurant_id: '40382679' }
{ _id: ObjectId("62b32c1034d692cde80e391a"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Regency Whist Club',
  restaurant_id: '40402377' }
{ _id: ObjectId("62b32c1034d692cde80e39fd"),
  borough: 'Queens',
  cuisine: 'American ',
  name: 'Rego Park Cafe',
  restaurant_id: '40523342' }
{ _id: ObjectId("62b32c1034d692cde80e406b"),
  borough: 'Queens',
  cuisine: 'Pizza',
  name: 'Regina Pizza',
  restaurant_id: '40801325' }
{ _id: ObjectId("62b32c1034d692cde80e4282"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Regal Entertainment Group',
  restaurant_id: '40891782' }

Q.17.

db.addresses.aggregate([{$match:{borough:'Bronx', $or:[{cuisine:'American '},{cuisine:'Chinese'}]}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ borough: 'Bronx',
  cuisine: 'Chinese',
  name: 'Happy Garden',
  restaurant_id: '40363289' }
{ borough: 'Bronx',
  cuisine: 'Chinese',
  name: 'Happy Garden',
  restaurant_id: '40364296' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Manhem Club',
  restaurant_id: '40364363' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'The New Starling Athletic Club Of The Bronx',
  restaurant_id: '40364956' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Yankee Tavern',
  restaurant_id: '40365499' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'The Punch Bowl',
  restaurant_id: '40366497' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Munchtime',
  restaurant_id: '40366748' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Marina Delray',
  restaurant_id: '40367161' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Cool Zone',
  restaurant_id: '40368022' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Beaver Pond',
  restaurant_id: '40368025' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'African Market (Baboon Cafe)',
  restaurant_id: '40368026' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Blue Bay Restaurant',
  restaurant_id: '40369087' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Bronx Grill',
  restaurant_id: '40369601' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'P & K\'S Grill',
  restaurant_id: '40369895' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'John Mulligan\'S Fireside Pub',
  restaurant_id: '40370150' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Quality Cafe & Restaurant',
  restaurant_id: '40374259' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Riverdale Diner',
  restaurant_id: '40380253' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Castlehill Diner',
  restaurant_id: '40382517' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Short Stop Restaurant',
  restaurant_id: '40383819' }
Type "it" for more


Q.18

db.addresses.aggregate([{$match:{borough:{$in:['Queens','Staten Island','Bronx','Brooklyn']}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
{ borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ borough: 'Queens',
  cuisine: 'American ',
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ borough: 'Brooklyn',
  cuisine: 'Chinese',
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
{ borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Sal\'S Deli',
  restaurant_id: '40361618' }
{ borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Steve Chu\'S Deli & Grocery',
  restaurant_id: '40361998' }
{ borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'White Castle',
  restaurant_id: '40362344' }
Type "it" for more


Q.19

db.addresses.aggregate([{$match:{borough:{$nin:['Queens','Staten Island','Bronx','Brooklyn']}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
{ borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ borough: 'Manhattan',
  cuisine: 'Delicatessen',
  name: 'Bully\'S Deli',
  restaurant_id: '40361708' }
{ borough: 'Manhattan',
  cuisine: 'Chicken',
  name: 'Harriet\'S Kitchen',
  restaurant_id: '40362098' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'P & S Deli Grocery',
  restaurant_id: '40362264' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Angelika Film Center',
  restaurant_id: '40362274' }
{ borough: 'Manhattan',
  cuisine: 'Turkish',
  name: 'The Country Cafe',
  restaurant_id: '40362715' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Downtown Deli',
  restaurant_id: '40363021' }
{ borough: 'Manhattan',
  cuisine: 'Bakery',
  name: 'Olive\'S',
  restaurant_id: '40363151' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Cafe Metro',
  restaurant_id: '40363298' }
{ borough: 'Manhattan',
  cuisine: 'Sandwiches/Salads/Mixed Buffet',
  name: 'Lexler Deli',
  restaurant_id: '40363426' }
{ borough: 'Manhattan',
  cuisine: 'Continental',
  name: 'Lorenzo & Maria\'S',
  restaurant_id: '40363630' }
{ borough: 'Manhattan',
  cuisine: 'Pizza',
  name: 'Domino\'S Pizza',
  restaurant_id: '40363644' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Berkely',
  restaurant_id: '40363685' }
{ borough: 'Manhattan',
  cuisine: 'Pizza',
  name: 'Domino\'S Pizza',
  restaurant_id: '40363945' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Spoon Bread Catering',
  restaurant_id: '40364179' }
{ borough: 'Manhattan',
  cuisine: 'Chicken',
  name: 'Texas Rotisserie',
  restaurant_id: '40364304' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Metropolitan Club',
  restaurant_id: '40364347' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Palm Restaurant',
  restaurant_id: '40364355' }
Type "it" for more



Q.20

db.addresses.aggregate([{$match:{"grades.score":{$not:{$lt:10}}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
{ borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ borough: 'Queens',
  cuisine: 'Bagels/Pretzels',
  name: 'Hot Bagels',
  restaurant_id: '40363565' }
{ borough: 'Bronx',
  cuisine: 'Chinese',
  name: 'Happy Garden',
  restaurant_id: '40364296' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '21 Club',
  restaurant_id: '40364362' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '7B Bar',
  restaurant_id: '40364518' }
{ borough: 'Manhattan',
  cuisine: 'Italian',
  name: 'Marchis Restaurant',
  restaurant_id: '40364668' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Melody Lanes',
  restaurant_id: '40364889' }
{ borough: 'Manhattan',
  cuisine: 'French',
  name: 'Le Perigord',
  restaurant_id: '40365414' }
{ borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Moran\'S Chelsea',
  restaurant_id: '40365526' }
{ borough: 'Manhattan',
  cuisine: 'Italian',
  name: 'V & T Restaurant',
  restaurant_id: '40365577' }
{ borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Joyce\'S Tavern',
  restaurant_id: '40365692' }
{ borough: 'Manhattan',
  cuisine: 'Italian',
  name: 'Il Vagabondo Restaurant',
  restaurant_id: '40365709' }
{ borough: 'Queens',
  cuisine: 'Italian',
  name: 'Parkside Restaurant',
  restaurant_id: '40365841' }
{ borough: 'Bronx',
  cuisine: 'Irish',
  name: 'Mcdwyers Pub',
  restaurant_id: '40365893' }
{ borough: 'Manhattan',
  cuisine: 'Chinese',
  name: 'Hop Kee Restaurant',
  restaurant_id: '40365942' }
{ borough: 'Queens',
  cuisine: 'Pizza',
  name: 'Margherita Pizza',
  restaurant_id: '40366002' }
{ borough: 'Manhattan',
  cuisine: 'Italian',
  name: 'Nanni Restaurant',
  restaurant_id: '40366157' }
{ borough: 'Queens',
  cuisine: 'Italian',
  name: 'Don Peppe',
  restaurant_id: '40366230' }
{ borough: 'Queens',
  cuisine: 'Irish',
  name: 'Irish Cottage',
  restaurant_id: '40366549' }
{ borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Li Greci\'S Staaten Restaurant',
  restaurant_id: '40366711' }
Type "it" for more


Q.21

db.addresses.aggregate([{$match:{$or:[{cuisine:{$nin:['American ','Chinese']}},{name:{$regex:"^Wil"}}]}},{$project:{restaurant_id:1,cuisine:1,borough:1,name:1,_id:0}}])
{ borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Sal\'S Deli',
  restaurant_id: '40361618' }
{ borough: 'Manhattan',
  cuisine: 'Delicatessen',
  name: 'Bully\'S Deli',
  restaurant_id: '40361708' }
{ borough: 'Queens',
  cuisine: 'Delicatessen',
  name: 'Steve Chu\'S Deli & Grocery',
  restaurant_id: '40361998' }
{ borough: 'Manhattan',
  cuisine: 'Chicken',
  name: 'Harriet\'S Kitchen',
  restaurant_id: '40362098' }
{ borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'White Castle',
  restaurant_id: '40362344' }
{ borough: 'Manhattan',
  cuisine: 'Turkish',
  name: 'The Country Cafe',
  restaurant_id: '40362715' }
{ borough: 'Brooklyn',
  cuisine: 'Caribbean',
  name: 'Shashemene Int\'L Restaura',
  restaurant_id: '40362869' }
{ borough: 'Bronx',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40363093' }
Type "it" for more

Q.22

db.addresses.aggregate([{$match:{grades: {date: ISODate("2014-08-11T00:00:00Z"), grade:"A", score:11}}},{$project:{restaurant_id:1, name:1, grades:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e3542"),
  grades: 
   [ { date: 2014-08-11T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-12-10T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2013-06-10T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-06-08T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-01-25T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2011-09-13T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Don Filippo Restaurant',
  restaurant_id: '40372417' }

Q.23

db.addresses.aggregate([{$match:{"grades.1": {date: ISODate("2014-08-11T00:00:00Z"), grade:"A", score:9}}},{$project:{restaurant_id:1, name:1, grades:1}}])
{ _id: ObjectId("62b32c1034d692cde80e3a14"),
  grades: 
   [ { date: 2015-01-12T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2014-08-11T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2014-01-14T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2013-02-07T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-04-30T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Club Macanudo (Cigar Bar)',
  restaurant_id: '40526406' }

Q.24.

db.addresses.find( {$and:[{"address.coord.1" : {$lt : 52.0}},{"address.coord.1" : {$gt : 42.0}}]},{"restaurant_id" : 1,"name":1,"address":1,_id:0});
{ address: 
   { building: '47',
     coord: [ -78.877224, 42.89546199999999 ],
     street: 'Broadway @ Trinity Pl',
     zipcode: '10006' },
  name: 'T.G.I. Friday\'S',
  restaurant_id: '40387990' }
{ address: 
   { building: '1',
     coord: [ -0.7119979, 51.6514664 ],
     street: 'Pennplaza E, Penn Sta',
     zipcode: '10001' },
  name: 'T.G.I. Fridays',
  restaurant_id: '40388936' }
{ address: 
   { building: '3000',
     coord: [ -87.86567699999999, 42.61150920000001 ],
     street: '47 Avenue',
     zipcode: '11101' },
  name: 'Di Luvio\'S Deli',
  restaurant_id: '40402284' }
{ address: 
   { building: '21972199',
     coord: [ -78.589606, 42.8912372 ],
     street: 'Broadway',
     zipcode: '10024' },
  name: 'La Caridad 78',
  restaurant_id: '40568285' }
{ address: 
   { building: '7981',
     coord: [ -84.9751215, 45.4713351 ],
     street: 'Hoyt Street',
     zipcode: '11201' },
  name: 'Bijan\'S',
  restaurant_id: '40876618' }
{ address: 
   { building: '0',
     coord: [ -88.0778799, 42.4154769 ],
     street: '& Grand Central',
     zipcode: '10017' },
  name: 'Hyatt, Ny Central/Room Service',
  restaurant_id: '40879243' }
{ address: 
   { building: '60',
     coord: [ -111.9975205, 42.0970258 ],
     street: 'West Side Highway',
     zipcode: '10006' },
  name: 'Sports Center At Chelsea Piers (Sushi Bar)',
  restaurant_id: '40882356' }

Q.25.

db.addresses.aggregate([{$sort:{name:1}},{$project:{restaurant_id:1,cuisine:1,borough:1,name:1,_id:0}}])
{ borough: 'Brooklyn',
  cuisine: 'Italian',
  name: '(Lewis Drug Store) Locanda Vini E Olii',
  restaurant_id: '40804423' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ borough: 'Queens',
  cuisine: 'Delicatessen',
  name: '101 Deli',
  restaurant_id: '40591271' }
{ borough: 'Brooklyn',
  cuisine: 'Italian',
  name: '101 Restaurant And Bar',
  restaurant_id: '40560108' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '1020 Bar',
  restaurant_id: '40401104' }
{ borough: 'Brooklyn',
  cuisine: 'Café/Coffee/Tea',
  name: '104-01 Foster Avenue Coffee Shop(Ups)',
  restaurant_id: '40639261' }
{ borough: 'Manhattan',
  cuisine: 'Pizza',
  name: '10Th Avenue Pizza & Cafe',
  restaurant_id: '40673117' }
{ borough: 'Queens',
  cuisine: 'American ',
  name: '111 Restaurant',
  restaurant_id: '40884354' }
{ borough: 'Manhattan',
  cuisine: 'Japanese',
  name: '15 East Restaurant',
  restaurant_id: '40698892' }
{ borough: 'Brooklyn',
  cuisine: 'American ',
  name: '200 Fifth Avenue Restaurant & Sports Bar',
  restaurant_id: '40385555' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '21 Club',
  restaurant_id: '40364362' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '2A',
  restaurant_id: '40388784' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '3 Deli & Grill',
  restaurant_id: '40592296' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '3 Guys',
  restaurant_id: '40391339' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '3 Guys Resturant',
  restaurant_id: '40640495' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '42Nd Street Pizza Diner',
  restaurant_id: '40605319' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '44 & X Hell\'S Kitchen',
  restaurant_id: '40809948' }
{ borough: 'Manhattan',
  cuisine: 'Italian',
  name: '44 Sw Ristorante & Bar',
  restaurant_id: '40698807' }
{ borough: 'Queens',
  cuisine: 'Mexican',
  name: '5 Burro Cafe',
  restaurant_id: '40390163' }
{ borough: 'Manhattan',
  cuisine: 'American ',
  name: '525 Lex Restaurant & Bar',
  restaurant_id: '40806489' }
Type "it" for more


Q.26.

db.addresses.aggregate([{$sort:{name:-1}},{$project:{name:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e34a8"),
  name: 'Zum Stammtisch' }
{ _id: ObjectId("62b32c1034d692cde80e3fe2"),
  name: 'Zum Schneider' }
{ _id: ObjectId("62b32c1034d692cde80e421c"), name: 'Zorba\'S' }
{ _id: ObjectId("62b32c1034d692cde80e4064"),
  name: 'Zebu Grill' }
{ _id: ObjectId("62b32c1034d692cde80e381f"),
  name: 'Zaro\'S Bread Basket' }
{ _id: ObjectId("62b32c1034d692cde80e399a"),
  name: 'Zaro\'S Bread Basket' }
{ _id: ObjectId("62b32c1034d692cde80e39c4"),
  name: 'Zaro\'S Bread Basket' }
{ _id: ObjectId("62b32c1034d692cde80e3be4"),
  name: 'Zaro\'S Bread Basket' }
{ _id: ObjectId("62b32c1034d692cde80e3f95"),
  name: 'Zaro\'S Bread Basket' }
{ _id: ObjectId("62b32c1034d692cde80e395b"),
  name: 'Zaro\'S Bakery' }
{ _id: ObjectId("62b32c1034d692cde80e3de5"),
  name: 'Zaro\'S Bakery' }
{ _id: ObjectId("62b32c0e34d692cde80e3535"),
  name: 'Zafi\'S Luncheonette' }
{ _id: ObjectId("62b32c1034d692cde80e420f"),
  name: 'Yvonne Yvonne Restaurant' }
{ _id: ObjectId("62b32c1034d692cde80e3d2b"),
  name: 'Yura & Company On Madison' }
{ _id: ObjectId("62b32c1034d692cde80e3fe0"),
  name: 'Yummy Kitchen' }
{ _id: ObjectId("62b32c1034d692cde80e3a22"),
  name: 'Your Bakery' }
{ _id: ObjectId("62b32c1034d692cde80e3a84"),
  name: 'Yonah Shimmels Knishes' }
{ _id: ObjectId("62b32c1034d692cde80e3c2d"),
  name: 'Yolanda Pizzeria Restaurant' }
{ _id: ObjectId("62b32c0e34d692cde80e3690"), name: 'Yip\'S' }
{ _id: ObjectId("62b32c0e34d692cde80e3741"),
  name: 'Yen Yen Restaurant' }
Type "it" for more


Q.27.

db.addresses.aggregate([{$sort:{cusine:1,borough:-1}},{$project:{cuisine:1,borough:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e33ef"),
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher' }
{ _id: ObjectId("62b32c0e34d692cde80e3410"),
  borough: 'Staten Island',
  cuisine: 'Delicatessen' }
{ _id: ObjectId("62b32c0e34d692cde80e3417"),
  borough: 'Staten Island',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices' }
{ _id: ObjectId("62b32c0e34d692cde80e341d"),
  borough: 'Staten Island',
  cuisine: 'Delicatessen' }
{ _id: ObjectId("62b32c0e34d692cde80e341f"),
  borough: 'Staten Island',
  cuisine: 'Delicatessen' }
{ _id: ObjectId("62b32c0e34d692cde80e3434"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3440"),
  borough: 'Staten Island',
  cuisine: 'Italian' }
{ _id: ObjectId("62b32c0e34d692cde80e3441"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3445"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3453"),
  borough: 'Staten Island',
  cuisine: 'Pizza/Italian' }
{ _id: ObjectId("62b32c0e34d692cde80e3460"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3472"),
  borough: 'Staten Island',
  cuisine: 'Pizza/Italian' }
{ _id: ObjectId("62b32c0e34d692cde80e348a"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3492"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e34ab"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e34b0"),
  borough: 'Staten Island',
  cuisine: 'Italian' }
{ _id: ObjectId("62b32c0e34d692cde80e34c5"),
  borough: 'Staten Island',
  cuisine: 'Italian' }
{ _id: ObjectId("62b32c0e34d692cde80e34cb"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e34e8"),
  borough: 'Staten Island',
  cuisine: 'American ' }
{ _id: ObjectId("62b32c0e34d692cde80e3519"),
  borough: 'Staten Island',
  cuisine: 'Hamburgers' }
Type "it" for more

Q.28

db.addresses.find({"address.street":{$exists:true}})
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  address: 
   { building: '1007',
     coord: [ -73.856077, 40.848447 ],
     street: 'Morris Park Ave',
     zipcode: '10462' },
  borough: 'Bronx',
  cuisine: 'Bakery',
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-09-11T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2013-01-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-23T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-03-10T00:00:00.000Z, grade: 'B', score: 14 } ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33ea"),
  address: 
   { building: '469',
     coord: [ -73.961704, 40.662942 ],
     street: 'Flatbush Avenue',
     zipcode: '11225' },
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  grades: 
   [ { date: 2014-12-30T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2014-07-01T00:00:00.000Z, grade: 'B', score: 23 },
     { date: 2013-04-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-05-08T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ _id: ObjectId("62b32c0e34d692cde80e33eb"),
  address: 
   { building: '351',
     coord: [ -73.98513559999999, 40.7676919 ],
     street: 'West   57 Street',
     zipcode: '10019' },
  borough: 'Manhattan',
  cuisine: 'Irish',
  grades: 
   [ { date: 2014-09-06T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-07-22T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-07-31T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-12-29T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ _id: ObjectId("62b32c0e34d692cde80e33ec"),
  address: 
   { building: '2780',
     coord: [ -73.98241999999999, 40.579505 ],
     street: 'Stillwell Avenue',
     zipcode: '11224' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-06-10T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-06-05T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-04-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-10-12T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("62b32c0e34d692cde80e33ed"),
  address: 
   { building: '97-22',
     coord: [ -73.8601152, 40.7311739 ],
     street: '63 Road',
     zipcode: '11374' },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-24T00:00:00.000Z, grade: 'Z', score: 20 },
     { date: 2013-01-17T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-08-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-12-15T00:00:00.000Z, grade: 'B', score: 25 } ],
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ _id: ObjectId("62b32c0e34d692cde80e33ee"),
  address: 
   { building: '8825',
     coord: [ -73.8803827, 40.7643124 ],
     street: 'Astoria Boulevard',
     zipcode: '11369' },
  borough: 'Queens',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-15T00:00:00.000Z, grade: 'Z', score: 38 },
     { date: 2014-05-02T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-03-02T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-02-10T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("62b32c0e34d692cde80e33ef"),
  address: 
   { building: '2206',
     coord: [ -74.1377286, 40.6119572 ],
     street: 'Victory Boulevard',
     zipcode: '10314' },
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-10-06T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2014-05-20T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-04-04T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-01-24T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ _id: ObjectId("62b32c0e34d692cde80e33f0"),
  address: 
   { building: '7114',
     coord: [ -73.9068506, 40.6199034 ],
     street: 'Avenue U',
     zipcode: '11234' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-05-29T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2014-01-14T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-08-03T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-03-09T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-10-14T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ _id: ObjectId("62b32c0e34d692cde80e33f1"),
  address: 
   { building: '6409',
     coord: [ -74.00528899999999, 40.628886 ],
     street: '11 Avenue',
     zipcode: '11219' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-07-18T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-02-13T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-08-16T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2011-08-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("62b32c0e34d692cde80e33f2"),
  address: 
   { building: '1839',
     coord: [ -73.9482609, 40.6408271 ],
     street: 'Nostrand Avenue',
     zipcode: '11226' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-07-14T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-10T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-11T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2012-02-23T00:00:00.000Z, grade: 'A', score: 8 } ],
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  address: 
   { building: '2300',
     coord: [ -73.8786113, 40.8502883 ],
     street: 'Southern Boulevard',
     zipcode: '10460' },
  borough: 'Bronx',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-28T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-06-19T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-06-15T00:00:00.000Z, grade: 'A', score: 3 } ],
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("62b32c0e34d692cde80e33f4"),
  address: 
   { building: '7715',
     coord: [ -73.9973325, 40.61174889999999 ],
     street: '18 Avenue',
     zipcode: '11214' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-04-16T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-04-23T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-04-24T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2011-12-16T00:00:00.000Z, grade: 'A', score: 2 } ],
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ _id: ObjectId("62b32c0e34d692cde80e33f5"),
  address: 
   { building: '1269',
     coord: [ -73.871194, 40.6730975 ],
     street: 'Sutter Avenue',
     zipcode: '11208' },
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  grades: 
   [ { date: 2014-09-16T00:00:00.000Z, grade: 'B', score: 21 },
     { date: 2013-08-28T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2013-04-02T00:00:00.000Z, grade: 'C', score: 56 },
     { date: 2012-08-15T00:00:00.000Z, grade: 'B', score: 27 },
     { date: 2012-03-28T00:00:00.000Z, grade: 'B', score: 27 } ],
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("62b32c0e34d692cde80e33f6"),
  address: 
   { building: '1',
     coord: [ -73.96926909999999, 40.7685235 ],
     street: 'East   66 Street',
     zipcode: '10065' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-07T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-05-03T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-04-30T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2011-12-27T00:00:00.000Z, grade: 'A', score: 0 } ],
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("62b32c0e34d692cde80e33f7"),
  address: 
   { building: '705',
     coord: [ -73.9653967, 40.6064339 ],
     street: 'Kings Highway',
     zipcode: '11223' },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-10T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-10-10T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-10-04T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-05-21T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-12-30T00:00:00.000Z, grade: 'B', score: 19 } ],
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("62b32c0e34d692cde80e33f8"),
  address: 
   { building: '203',
     coord: [ -73.97822040000001, 40.6435254 ],
     street: 'Church Avenue',
     zipcode: '11218' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-02-10T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-01-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-01-09T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2011-11-07T00:00:00.000Z, grade: 'P', score: 12 },
     { date: 2011-07-21T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ _id: ObjectId("62b32c0e34d692cde80e33f9"),
  address: 
   { building: '265-15',
     coord: [ -73.7032601, 40.7386417 ],
     street: 'Hillside Avenue',
     zipcode: '11004' },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-10-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2013-09-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-09-20T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ _id: ObjectId("62b32c0e34d692cde80e33fa"),
  address: 
   { building: '6909',
     coord: [ -74.0259567, 40.6353674 ],
     street: '3 Avenue',
     zipcode: '11209' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-08-21T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2014-03-05T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-01-10T00:00:00.000Z, grade: 'A', score: 10 } ],
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ _id: ObjectId("62b32c0e34d692cde80e33fb"),
  address: 
   { building: '522',
     coord: [ -73.95171, 40.767461 ],
     street: 'East   74 Street',
     zipcode: '10021' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-09-02T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-12-19T00:00:00.000Z, grade: 'B', score: 16 },
     { date: 2013-05-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2012-12-07T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-03-29T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ _id: ObjectId("62b32c0e34d692cde80e33fc"),
  address: 
   { building: '284',
     coord: [ -73.9829239, 40.6580753 ],
     street: 'Prospect Park West',
     zipcode: '11215' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-19T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-11-14T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-12-05T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-05-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more


Q.29

db.addresses.aggregate([{$match:{"address.coord":{$type:"double"}}}])
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  address: 
   { building: '1007',
     coord: [ -73.856077, 40.848447 ],
     street: 'Morris Park Ave',
     zipcode: '10462' },
  borough: 'Bronx',
  cuisine: 'Bakery',
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-09-11T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2013-01-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-23T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-03-10T00:00:00.000Z, grade: 'B', score: 14 } ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33ea"),
  address: 
   { building: '469',
     coord: [ -73.961704, 40.662942 ],
     street: 'Flatbush Avenue',
     zipcode: '11225' },
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  grades: 
   [ { date: 2014-12-30T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2014-07-01T00:00:00.000Z, grade: 'B', score: 23 },
     { date: 2013-04-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-05-08T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ _id: ObjectId("62b32c0e34d692cde80e33eb"),
  address: 
   { building: '351',
     coord: [ -73.98513559999999, 40.7676919 ],
     street: 'West   57 Street',
     zipcode: '10019' },
  borough: 'Manhattan',
  cuisine: 'Irish',
  grades: 
   [ { date: 2014-09-06T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-07-22T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-07-31T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-12-29T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ _id: ObjectId("62b32c0e34d692cde80e33ec"),
  address: 
   { building: '2780',
     coord: [ -73.98241999999999, 40.579505 ],
     street: 'Stillwell Avenue',
     zipcode: '11224' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-06-10T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-06-05T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-04-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-10-12T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("62b32c0e34d692cde80e33ed"),
  address: 
   { building: '97-22',
     coord: [ -73.8601152, 40.7311739 ],
     street: '63 Road',
     zipcode: '11374' },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-24T00:00:00.000Z, grade: 'Z', score: 20 },
     { date: 2013-01-17T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-08-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-12-15T00:00:00.000Z, grade: 'B', score: 25 } ],
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ _id: ObjectId("62b32c0e34d692cde80e33ee"),
  address: 
   { building: '8825',
     coord: [ -73.8803827, 40.7643124 ],
     street: 'Astoria Boulevard',
     zipcode: '11369' },
  borough: 'Queens',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-15T00:00:00.000Z, grade: 'Z', score: 38 },
     { date: 2014-05-02T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-03-02T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-02-10T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("62b32c0e34d692cde80e33ef"),
  address: 
   { building: '2206',
     coord: [ -74.1377286, 40.6119572 ],
     street: 'Victory Boulevard',
     zipcode: '10314' },
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-10-06T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2014-05-20T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-04-04T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-01-24T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ _id: ObjectId("62b32c0e34d692cde80e33f0"),
  address: 
   { building: '7114',
     coord: [ -73.9068506, 40.6199034 ],
     street: 'Avenue U',
     zipcode: '11234' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-05-29T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2014-01-14T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-08-03T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-03-09T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-10-14T00:00:00.000Z, grade: 'A', score: 9 } ],
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ _id: ObjectId("62b32c0e34d692cde80e33f1"),
  address: 
   { building: '6409',
     coord: [ -74.00528899999999, 40.628886 ],
     street: '11 Avenue',
     zipcode: '11219' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-07-18T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-30T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-02-13T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-08-16T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2011-08-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("62b32c0e34d692cde80e33f2"),
  address: 
   { building: '1839',
     coord: [ -73.9482609, 40.6408271 ],
     street: 'Nostrand Avenue',
     zipcode: '11226' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-07-14T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-07-10T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-07-11T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2012-02-23T00:00:00.000Z, grade: 'A', score: 8 } ],
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ _id: ObjectId("62b32c0e34d692cde80e33f3"),
  address: 
   { building: '2300',
     coord: [ -73.8786113, 40.8502883 ],
     street: 'Southern Boulevard',
     zipcode: '10460' },
  borough: 'Bronx',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-28T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-06-19T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-06-15T00:00:00.000Z, grade: 'A', score: 3 } ],
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("62b32c0e34d692cde80e33f4"),
  address: 
   { building: '7715',
     coord: [ -73.9973325, 40.61174889999999 ],
     street: '18 Avenue',
     zipcode: '11214' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-04-16T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-04-23T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-04-24T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2011-12-16T00:00:00.000Z, grade: 'A', score: 2 } ],
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ _id: ObjectId("62b32c0e34d692cde80e33f5"),
  address: 
   { building: '1269',
     coord: [ -73.871194, 40.6730975 ],
     street: 'Sutter Avenue',
     zipcode: '11208' },
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  grades: 
   [ { date: 2014-09-16T00:00:00.000Z, grade: 'B', score: 21 },
     { date: 2013-08-28T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2013-04-02T00:00:00.000Z, grade: 'C', score: 56 },
     { date: 2012-08-15T00:00:00.000Z, grade: 'B', score: 27 },
     { date: 2012-03-28T00:00:00.000Z, grade: 'B', score: 27 } ],
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("62b32c0e34d692cde80e33f6"),
  address: 
   { building: '1',
     coord: [ -73.96926909999999, 40.7685235 ],
     street: 'East   66 Street',
     zipcode: '10065' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-05-07T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-05-03T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-04-30T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2011-12-27T00:00:00.000Z, grade: 'A', score: 0 } ],
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("62b32c0e34d692cde80e33f7"),
  address: 
   { building: '705',
     coord: [ -73.9653967, 40.6064339 ],
     street: 'Kings Highway',
     zipcode: '11223' },
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  grades: 
   [ { date: 2014-11-10T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-10-10T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-10-04T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-05-21T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-12-30T00:00:00.000Z, grade: 'B', score: 19 } ],
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("62b32c0e34d692cde80e33f8"),
  address: 
   { building: '203',
     coord: [ -73.97822040000001, 40.6435254 ],
     street: 'Church Avenue',
     zipcode: '11218' },
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-02-10T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-01-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-01-09T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2011-11-07T00:00:00.000Z, grade: 'P', score: 12 },
     { date: 2011-07-21T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ _id: ObjectId("62b32c0e34d692cde80e33f9"),
  address: 
   { building: '265-15',
     coord: [ -73.7032601, 40.7386417 ],
     street: 'Hillside Avenue',
     zipcode: '11004' },
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  grades: 
   [ { date: 2014-10-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2013-09-18T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-09-20T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ _id: ObjectId("62b32c0e34d692cde80e33fa"),
  address: 
   { building: '6909',
     coord: [ -74.0259567, 40.6353674 ],
     street: '3 Avenue',
     zipcode: '11209' },
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  grades: 
   [ { date: 2014-08-21T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2014-03-05T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-01-10T00:00:00.000Z, grade: 'A', score: 10 } ],
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ _id: ObjectId("62b32c0e34d692cde80e33fb"),
  address: 
   { building: '522',
     coord: [ -73.95171, 40.767461 ],
     street: 'East   74 Street',
     zipcode: '10021' },
  borough: 'Manhattan',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-09-02T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-12-19T00:00:00.000Z, grade: 'B', score: 16 },
     { date: 2013-05-28T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2012-12-07T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-03-29T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ _id: ObjectId("62b32c0e34d692cde80e33fc"),
  address: 
   { building: '284',
     coord: [ -73.9829239, 40.6580753 ],
     street: 'Prospect Park West',
     zipcode: '11215' },
  borough: 'Brooklyn',
  cuisine: 'American ',
  grades: 
   [ { date: 2014-11-19T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-11-14T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2012-12-05T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-05-17T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more

Q.30

db.addresses.aggregate([{$match:{"grades.score":{$mod:[7,0]}}},{$project:{restaurant_id:1, name:1, grades:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e33e9"),
  grades: 
   [ { date: 2014-03-03T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-09-11T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2013-01-24T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-23T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-03-10T00:00:00.000Z, grade: 'B', score: 14 } ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("62b32c0e34d692cde80e33ec"),
  grades: 
   [ { date: 2014-06-10T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-06-05T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-04-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-10-12T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("62b32c0e34d692cde80e33ee"),
  grades: 
   [ { date: 2014-11-15T00:00:00.000Z, grade: 'Z', score: 38 },
     { date: 2014-05-02T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-03-02T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-02-10T00:00:00.000Z, grade: 'A', score: 13 } ],
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("62b32c0e34d692cde80e33f5"),
  grades: 
   [ { date: 2014-09-16T00:00:00.000Z, grade: 'B', score: 21 },
     { date: 2013-08-28T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2013-04-02T00:00:00.000Z, grade: 'C', score: 56 },
     { date: 2012-08-15T00:00:00.000Z, grade: 'B', score: 27 },
     { date: 2012-03-28T00:00:00.000Z, grade: 'B', score: 27 } ],
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("62b32c0e34d692cde80e33f6"),
  grades: 
   [ { date: 2014-05-07T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-05-03T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-04-30T00:00:00.000Z, grade: 'A', score: 6 },
     { date: 2011-12-27T00:00:00.000Z, grade: 'A', score: 0 } ],
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("62b32c0e34d692cde80e33f7"),
  grades: 
   [ { date: 2014-11-10T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-10-10T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-10-04T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-05-21T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2011-12-30T00:00:00.000Z, grade: 'B', score: 19 } ],
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("62b32c0e34d692cde80e33fd"),
  grades: 
   [ { date: 2014-08-16T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-08-27T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2012-09-20T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2011-09-29T00:00:00.000Z, grade: 'A', score: 10 } ],
  name: 'Sal\'S Deli',
  restaurant_id: '40361618' }
{ _id: ObjectId("62b32c0e34d692cde80e33ff"),
  grades: 
   [ { date: 2014-03-19T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-03-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-03-27T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2011-04-05T00:00:00.000Z, grade: 'A', score: 7 } ],
  name: 'Steve Chu\'S Deli & Grocery',
  restaurant_id: '40361998' }
{ _id: ObjectId("62b32c0e34d692cde80e3400"),
  grades: 
   [ { date: 2014-09-15T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2014-03-04T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2013-07-18T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2013-01-09T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-04-10T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-15T00:00:00.000Z, grade: 'A', score: 7 } ],
  name: 'Harriet\'S Kitchen',
  restaurant_id: '40362098' }
{ _id: ObjectId("62b32c0e34d692cde80e3403"),
  grades: 
   [ { date: 2014-03-18T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2013-03-18T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-10-10T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2011-09-22T00:00:00.000Z, grade: 'A', score: 2 } ],
  name: 'White Castle',
  restaurant_id: '40362344' }
{ _id: ObjectId("62b32c0e34d692cde80e3404"),
  grades: 
   [ { date: 2014-04-21T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2013-11-12T00:00:00.000Z, grade: 'A', score: 5 },
     { date: 2013-06-04T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2012-11-14T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2012-10-11T00:00:00.000Z, grade: 'P', score: 0 },
     { date: 2012-05-24T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2011-12-08T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-07-20T00:00:00.000Z, grade: 'A', score: 11 } ],
  name: 'Ho Mei Restaurant',
  restaurant_id: '40362432' }
{ _id: ObjectId("62b32c0e34d692cde80e3406"),
  grades: 
   [ { date: 2014-05-13T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2013-05-08T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-09-22T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2011-06-06T00:00:00.000Z, grade: 'A', score: 12 } ],
  name: 'Shashemene Int\'L Restaura',
  restaurant_id: '40362869' }
{ _id: ObjectId("62b32c0e34d692cde80e340b"),
  grades: 
   [ { date: 2014-10-17T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-09-18T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2013-04-30T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-04-20T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2011-12-19T00:00:00.000Z, grade: 'A', score: 3 } ],
  name: 'Olive\'S',
  restaurant_id: '40363151' }
{ _id: ObjectId("62b32c0e34d692cde80e340f"),
  grades: 
   [ { date: 2014-02-21T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2013-09-13T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2012-08-28T00:00:00.000Z, grade: 'A', score: 0 },
     { date: 2011-09-13T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2011-05-03T00:00:00.000Z, grade: 'A', score: 5 } ],
  name: 'Lexler Deli',
  restaurant_id: '40363426' }
{ _id: ObjectId("62b32c0e34d692cde80e3412"),
  grades: 
   [ { date: 2014-02-25T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2013-08-14T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2012-08-07T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-03-26T00:00:00.000Z, grade: 'A', score: 10 },
     { date: 2011-11-04T00:00:00.000Z, grade: 'A', score: 0 },
     { date: 2011-06-29T00:00:00.000Z, grade: 'A', score: 4 } ],
  name: 'Snack Time Grill',
  restaurant_id: '40363590' }
{ _id: ObjectId("62b32c0e34d692cde80e3413"),
  grades: 
   [ { date: 2014-06-02T00:00:00.000Z, grade: 'A', score: 9 },
     { date: 2013-12-27T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2013-03-18T00:00:00.000Z, grade: 'B', score: 26 },
     { date: 2012-02-01T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2011-07-06T00:00:00.000Z, grade: 'B', score: 25 } ],
  name: 'Lorenzo & Maria\'S',
  restaurant_id: '40363630' }
{ _id: ObjectId("62b32c0e34d692cde80e3414"),
  grades: 
   [ { date: 2014-08-05T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2014-03-06T00:00:00.000Z, grade: 'A', score: 11 },
     { date: 2013-07-09T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-01-30T00:00:00.000Z, grade: 'A', score: 4 },
     { date: 2012-01-05T00:00:00.000Z, grade: 'A', score: 2 },
     { date: 2011-09-26T00:00:00.000Z, grade: 'A', score: 0 } ],
  name: 'Domino\'S Pizza',
  restaurant_id: '40363644' }
{ _id: ObjectId("62b32c0e34d692cde80e3416"),
  grades: 
   [ { date: 2014-02-05T00:00:00.000Z, grade: 'A', score: 0 },
     { date: 2013-01-29T00:00:00.000Z, grade: 'A', score: 3 },
     { date: 2011-12-08T00:00:00.000Z, grade: 'A', score: 10 } ],
  name: 'Sonny\'S Heros',
  restaurant_id: '40363744' }
{ _id: ObjectId("62b32c0e34d692cde80e341d"),
  grades: 
   [ { date: 2014-11-18T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-11-07T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2013-04-24T00:00:00.000Z, grade: 'A', score: 7 },
     { date: 2012-03-20T00:00:00.000Z, grade: 'A', score: 5 } ],
  name: 'Plaza Bagels & Deli',
  restaurant_id: '40364286' }
{ _id: ObjectId("62b32c0e34d692cde80e3420"),
  grades: 
   [ { date: 2015-01-06T00:00:00.000Z, grade: 'A', score: 12 },
     { date: 2014-07-15T00:00:00.000Z, grade: 'C', score: 48 },
     { date: 2013-05-02T00:00:00.000Z, grade: 'A', score: 13 },
     { date: 2012-09-24T00:00:00.000Z, grade: 'A', score: 8 },
     { date: 2012-04-19T00:00:00.000Z, grade: 'A', score: 7 } ],
  name: 'Texas Rotisserie',
  restaurant_id: '40364304' }
Type "it" for more


Q.31

db.addresses.aggregate([{$match:{name: /mon/}},{$project:{name:1, borough:1,"address.coord.0":1,"address.coord.1":1,cuisine:1}}])
{ _id: ObjectId("62b32c0e34d692cde80e347d"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Desmond\'S Tavern' }
{ _id: ObjectId("62b32c0e34d692cde80e3486"),
  address: { coord: [] },
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Shimons Kosher Pizza' }
{ _id: ObjectId("62b32c0e34d692cde80e3492"),
  address: { coord: [] },
  borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Richmond County Country Club' }
{ _id: ObjectId("62b32c0e34d692cde80e34bd"),
  address: { coord: [] },
  borough: 'Brooklyn',
  cuisine: 'Pizza/Italian',
  name: 'Lb Spumoni Gardens' }
{ _id: ObjectId("62b32c0e34d692cde80e350f"),
  address: { coord: [] },
  borough: 'Brooklyn',
  cuisine: 'Italian',
  name: 'Bamonte\'S Restaurant' }
{ _id: ObjectId("62b32c0e34d692cde80e3546"),
  address: { coord: [] },
  borough: 'Queens',
  cuisine: 'Greek',
  name: 'Omonia Cafe' }
{ _id: ObjectId("62b32c0e34d692cde80e35c9"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Delmonico\'S Kitchen' }
{ _id: ObjectId("62b32c0e34d692cde80e376a"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'Delicatessen',
  name: 'Delmonico Gourmet' }
{ _id: ObjectId("62b32c1034d692cde80e37d7"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Delmonico Gourmet' }
{ _id: ObjectId("62b32c1034d692cde80e392e"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Harmonie Club' }
{ _id: ObjectId("62b32c1034d692cde80e39f2"),
  address: { coord: [] },
  borough: 'Queens',
  cuisine: 'Bakery',
  name: 'Ramona\'S Bakery' }
{ _id: ObjectId("62b32c1034d692cde80e3a4b"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Neil Simon Theatre' }
{ _id: ObjectId("62b32c1034d692cde80e3aad"),
  address: { coord: [] },
  borough: 'Brooklyn',
  cuisine: 'Mediterranean',
  name: 'Omonia Cafe' }
{ _id: ObjectId("62b32c1034d692cde80e3c5f"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Simone Bar Cafe' }
{ _id: ObjectId("62b32c1034d692cde80e3e91"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'Italian',
  name: 'Delmonicos' }
{ _id: ObjectId("62b32c1034d692cde80e4007"),
  address: { coord: [] },
  borough: 'Queens',
  cuisine: 'American ',
  name: 'Cinnabon World Famous Cinnamon Rolls' }
{ _id: ObjectId("62b32c1034d692cde80e402b"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Ferris Booth Commons - Alfred Lerner Hall' }
{ _id: ObjectId("62b32c1034d692cde80e4085"),
  address: { coord: [] },
  borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Richmond County Country Club - Pool Snack Bar' }
{ _id: ObjectId("62b32c1034d692cde80e4086"),
  address: { coord: [] },
  borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Richmond County Country Club(10Th Hole)' }
{ _id: ObjectId("62b32c1034d692cde80e4087"),
  address: { coord: [] },
  borough: 'Staten Island',
  cuisine: 'American ',
  name: 'Richmond County Country Club' }
Type "it" for more


Q.32

db.addresses.aggregate([{$match:{name: /^Mad/}},{$project:{name:1, borough:1,"address.coord.0":1,"address.coord.1":1,cuisine:1}}])
{ _id: ObjectId("62b32c1034d692cde80e3925"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Madison Square' }
{ _id: ObjectId("62b32c1034d692cde80e39f3"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'Indian',
  name: 'Madras Mahal' }
{ _id: ObjectId("62b32c1034d692cde80e3ca1"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Madame X' }
{ _id: ObjectId("62b32c1034d692cde80e3d51"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'French',
  name: 'Madison Bistro' }
{ _id: ObjectId("62b32c1034d692cde80e3dda"),
  address: { coord: [] },
  borough: 'Brooklyn',
  cuisine: 'African',
  name: 'Madiba' }
{ _id: ObjectId("62b32c1034d692cde80e40df"),
  address: { coord: [] },
  borough: 'Bronx',
  cuisine: 'Italian',
  name: 'Madison\'S' }
{ _id: ObjectId("62b32c1034d692cde80e415d"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'Hotdogs',
  name: 'Madame Tussaud\'S' }
{ _id: ObjectId("62b32c1034d692cde80e4195"),
  address: { coord: [] },
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Mad River Bar & Grille' }





