const {app, BrowserWindow} = require('electron');
const path = require('path');

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 1300,
        height: 800,
        icon: __dirname + '../img/electron.icns',
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
