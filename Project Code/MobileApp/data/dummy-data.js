import Sensor from '../models/sensors.js';
import Moist from '../models/moist.js';

export const Sensors = [
  new Sensor('c1', 'Moisture 1', '#f54242'),
  new Sensor('c2', 'Moisture 2', '#f54242'),
  new Sensor('c3', 'Moisture 3', '#f54242'),
  new Sensor('c4', 'Moisture 4', '#f54242'),

];

export const Moisture = [
  new Moist(
     'c1',
    'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',    
    '80'
  ),
new Moist(
     'c2',
    'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',    
    '90'
  ),
  new Moist(
     'c3',
    'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',    
    '60'
  ),
 new Moist(
     'c4',
    'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',    
    '80'
  )
];
