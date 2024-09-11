# Usa uma imagem base com Node.js
FROM node:20.11.1

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o projeto (se aplicável)
RUN npm run build

# Expõe a porta que o aplicativo vai usar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]