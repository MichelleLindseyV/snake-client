const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server', connect);
  });

  conn.on('connect', () => {
    conn.write('Name: MLV');
    // setInterval(() => {conn.write('Move: up')}, 500);
    // setTimeout(() => {conn.write('Move: up')}, 500);
    // setTimeout(() => {conn.write('Move: down')}, 1000);
    // setTimeout(() => {conn.write('Move: left')}, 1150);
    // setTimeout(() => {conn.write('Move: right')}, 2000);
  });




  

  return conn;

}

module.exports = {connect};