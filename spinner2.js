process.stdout.write('hello from spinner1.js... \rheyyy\n');
let out = ['|', '/', '-', '\\', '|', '\n']


for (let i = 0; i < out.length; i++) {
  function helper(e){
    setTimeout(function() {
      process.stdout.write(`\r${out[e]}   `);
    }, 500*i)
  }
    helper(i)
  }
  
