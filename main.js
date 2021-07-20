const {app, BrowserWindow} = require('electron');
const path = require('path');

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    ventanaPrincipal.loadFile('index.html');

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






