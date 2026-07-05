#funções
#CRIAR UMA CALCULADORA
#função PRINT
print("ola voce")
#função INPUT
nome = input("digite seu nome: ")
#função SORTED
lista = [4,5,3,6,2]
print(sorted(lista))
print("-=-"*20)

#Função sem argumento e retorno TITULO
def titulo():
    print("=-"*20)
    print("SEJA BEM VINDO".center(30))
    print("=-"*20)
    nome = input("Escreva o seu nome: ")
    print("Seja bem vindo ao curso,",nome,"!!!")
    print()
    
titulo()#chama a função
print()
print("=-"*20)
#Função COM argumento
def recepcao(nome,periodo):
    if periodo == "manhã":
        cumprimento = "BOM DIA"
    elif periodo == "tarde":
        cumprimento = "BOA TARDE"
    elif periodo == "noite":
        cumprimento = "BOA NOITE"
    else:
        raise ValueError(f"A parte do dia informada({periodo})não é válida.")
        #raise voce pode usar para editar o retorno do erro
    cumprimento_final = f"{cumprimento},{nome}"
    print(cumprimento_final)
print("=-"*20)
recepcao("julio","manhã")
recepcao("Fábio","tarde")
recepcao("Ana","noite")
#recepcao("julio","manha")
print()
print("=-"*20)
#Função COM argumento e com RETURN
def somar(n1, n2):
    soma = n1 + n2
    return soma #aqui retorna o valor da variável SOMA
r1= somar(3,9)# aqui a variavel r1 vai armazenar o valor da soma na memoria
print(r1)
#print(soma)# gera um erro pois est[a fora do escopo da função
print()
print("=-"*20)
#CALCULADORA
def soma(n1,n2):
    return n1 + n2
def sub(n1,n2):
    return n1 - n2
def mult(n1,n2):
    return n1 * n2
def div(n1,n2):
    return n1 / n2
'''
n2 não pode ser ZERO
'''
def calcula (n1,n2, sinal):#chama uma função dentro de outra
    if sinal == "+":
        return soma(n1,n2)
    elif sinal == "-":
        return sub(n1,n2)
    elif sinal == "*":
        return mult(n1,n2)
    elif sinal == "/":
        return div(n1,n2)
    else:
        return "operação inválida"
print()
print("=-"*20)
resultado = calcula(9,3,"//")
print(f"Resultado da conta: {resultado}")#para obter outro valor troca o sinal em calculagustavog
