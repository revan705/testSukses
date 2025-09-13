let panjangPassword = document.getElementById("panjangPassword");
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton')

const generatePassword = (len) => {
    const huruf = "abcdefghijklmnopqrstuvwxyz"
    const hurufUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const angka = "0123456789"
    const simbol = "!#$^*_'.,=-<>?~`"

    const data = huruf + hurufUppercase + angka + simbol
    let generator= "";
    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(panjangPassword.value)
        password.value = newPassword
        setTimeout(() => {
            alert('Password Suksess dibuat!')
        }, 1000)
}

const savePassword = () => {
    document.tittle = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Password saya adalah:' + document.tittle))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('Password berhasil disimpan.')
    }, 1000)
}