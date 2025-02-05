const rs = require("fs");
const {Command} = require ('commander');
const program =new Command();

program
  .name('counter')
  .description('For counting the number of lines in a file')
  .version('1.0.0')
  
program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>','file path')
  .action((file) =>{
    rs.readFile(file,"utf-8",(err,contents)=>{
      if(err){
        console.error(err);
        return;
      }
      else{
        console.log(contents.split('\n').length);
      
    }
  });

  });
  program.command('print')
  .description('print content of the path')
  .argument('<file>','file path')
  .action((file) =>{
    rs.readFile(file,"utf-8",(err,contents)=>{
      if(err){
        console.error(err);
        return;
      }
      else{
        console.log(contents);
      
    }
  });

  });
  

program.parse();