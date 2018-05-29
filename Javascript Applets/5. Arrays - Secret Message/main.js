let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.join(' '))
console.log('--------Changes Below----------')
console.log('Original Length = ' + secretMessage.length)

secretMessage.pop()
console.log('Current Length After Pop = ' + secretMessage.length)

secretMessage.push('to', 'Program');
console.log('Current Length After 2x Push = ' + secretMessage.length)

secretMessage[7] = 'right'

secretMessage.shift()
console.log('Current Length After Shift = ' + secretMessage.length)

secretMessage.unshift('Programming')
console.log('Current Length After Unshift = ' + secretMessage.length)

secretMessage.splice(6, 5, 'know,')
console.log('Current Length After 2x splice + Replace = ' + secretMessage.length)

console.log('____________________________')
console.log(secretMessage.join(' '))