while True:
    print(" PROGRAMA PARA CALCULAR O IMC ".center(60,"="))    
# Validação do nome
    while True:
        nome = input("Digite o seu nome aqui: ").strip()
        partes_nome = nome.split()       
        if len(partes_nome) == 0:
            print("Erro: Digite um nome válido.")
        elif any(not parte.isalpha() for parte in partes_nome):
            print("Erro: Use apenas letras (sem números ou símbolos).")
        elif len(nome.replace(" ", "")) < 3:
            print("Erro: O nome deve ter pelo menos 4 letras (sem contar espaços).")
        else:
            break
# Validação da idade
    while True:
        idade = input("Digite a sua idade: ").strip()       
        if not idade.isdigit():
            print("Erro: Digite apenas números inteiros.")
        else:
            idade = int(idade)
            break
# Validação da altura (FLOAT)
    while True:
        try:
            altura = float(input("Digite a sua altura em metros: ").replace(",", "."))
            if altura <= 0:
                print("Erro: A altura deve ser maior que zero.")
            else:
                break
        except:
            print("Erro: Digite um número válido (ex: 1.75).")
# Validação do peso (FLOAT)
    while True:
        try:
            peso = float(input("Digite o seu peso em Kilos: ").replace(",", "."))
            if peso <= 0:
                print("Erro: O peso deve ser maior que zero.")
            else:
                break
        except:
            print("Erro: Digite um número válido (ex: 70.5).")   
    imc = peso / (altura ** 2)
# Resultado
    print()
    print(" RESULTADO ".center(60,"="))
    print("Nome:", nome)
    print("Idade:", idade, "anos")
    print("Altura:", altura, "metros")               
    print("Peso:", peso, "Kilos")
    print(f"IMC: {imc:.2f}")    
    print()
    print(" LAUDO ".center(60,"="))
    print("Olá", nome, "você tem", idade, "anos de idade."
          "\nSua altura é de:", altura, "metros e seu peso é de:", peso, "kilos."
          "\nA sua massa corpórea calculada é de:", round(imc, 2))   
    print()
    print("=" * 60)   
    if imc <= 18.5:
        print("Você está abaixo do peso adequado."
              "\nProcure uma orientação médica.")
    elif imc <= 24.9:
        print("\"PARABÉNS\"\nVocê está no peso adequado.")
    elif imc <= 29.9:
        print("\"CUIDADO\"\nVocê está com sobrepeso.")
    else:
        print("Você está obeso."
              "\nProcure uma orientação médica.")
# Validação da saída
    while True:
        sair = input("Deseja realizar outra análise? (s/n): ").strip().lower()       
        if sair not in ["s", "n"]:
            print("Erro: Digite apenas 's' para sim ou 'n' para não.")
        else:
            break    
    if sair == "n":
        break
    else:
        print("Vamos calcular novamente.\n")
print()
print("=" * 60)
print("Muito Obrigado!")
print("PROGRAMA FINALIZADO")