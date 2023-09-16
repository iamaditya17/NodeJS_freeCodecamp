const os = require('os')

//info about the current user
const user = os.userInfo();
console.log(user);
/* O/P: {
  uid: -1,
  gid: -1,
  username: 'ADITYA PATRA',
  homedir: 'C:\\Users\\ADITYA PATRA',
  shell: null
} */

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);  // The System Uptime is 1803083.109 seconds

//Information about the current OS
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);
/*{
  name: 'Windows_NT',
  release: '10.0.22621',
  totalMem: 8410091520,
  freeMem: 1716514816
}*/

//-----Explore more functions about OS module in the documentation----


//Os module is used to interact with the Operating System and with the Server.
//It is a built-in module ; so we don't need to install it.