var cuentas = [
    { nombre: "Aldo", saldo: 200, numerocuenta:"54891", password: "123"},
    { nombre: "Axel", saldo: 290, numerocuenta:"54892", password: "1234"},
    { nombre: "Jair", saldo: 67 ,numerocuenta:"54893", password: "12345"},
  ];

function validLogin(num, pass){
    if(num == null || num == "" || num === undefined)
        return false;

    if(pass == null || pass == "" || pass === undefined)
        return false;

    for(let index = 0; index < cuentas.length; index){
        let item = cuentas[index];
        if(item.numerocuenta == num && item.password == pass)
            return true;
    }
    
    return false;
}
