export function addCookies(nome: string, valor: any): void {
    document.cookie = `${nome}=${valor}; path=/`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

// Exemplo de uso
const nomeCookie = getCookie('nome');
console.log(nomeCookie);  // Vai imprimir "Joao" se o cookie "nome" foi definido.