
export function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringEncriptada.includes(matrixCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
      }
    }
    return stringEncriptada
}