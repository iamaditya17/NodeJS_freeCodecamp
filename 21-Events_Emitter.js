const EventEmitter = require('events')

const customEmitter = new EventEmitter() //creating a object of the EventEmitter class

customEmitter.on('response', () => {      //here response is the name of the event and then we pass a callback Method
    console.log('Data Received')
})


customEmitter.on('response', () => {      
    console.log('Some other logic here')
})

customEmitter.emit('response')

//Eventmodule contains 2 function i.e : i) on()   ii) emit()

//First we listen to the event using on() then emit that event using emit()