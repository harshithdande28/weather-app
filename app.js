import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import geocode from './utils/geocode.js';
import forecast from './utils/forecast.js';

const argv = yargs(process.argv.slice(2)).argv
yargs(hideBin(process.argv))
.command('find','finds a name',(yargs)=>{
    yargs.options('name',{describe:'takes a name',demandOption:true,type:'string'})
},()=>{ 
    if(argv.name !== undefined){
    geocode.fgc(argv.name,(error,data)=>{
        if(error) return console.log(error)
        console.log('Error: ',error)
        console.log('Data: ',data)
    forecast.rgc(data.lat,data.lon,(error,forecastdata)=>{
        if(error) console.log(error)
            console.log('Error: ',error)
            console.log('Data: ',forecastdata)
        })
    })
    }else{
        console.log('Enter required parameters!')
        console.log('lat,lon or name')
    }    
}).parse();

