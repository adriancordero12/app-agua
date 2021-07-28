const {app, BrowserWindow} = require('electron');
const path = require('path');
const moment = require('moment');
const now = moment();

moment().format('LLL');

console.log(now.format('LLL'));

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 1300,
        height: 800,
        icon: __dirname + '../img/logo.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    ventanaPrincipal.loadFile('src/index.html');

}

app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function(){
    if(process.platform === 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length === 0){
        crearVentanaPrincipal();

    }
})