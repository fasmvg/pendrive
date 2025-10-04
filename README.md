**1. Como acessar pendrive?**

Clone este repositório e acesse o arquivo html via browser. 
Abra-o via linha de comando executando o seu navegador 
seguido do arquivo pendrive.html ou apenas abra-o 
diretamente utilizando seu navegador padrão.

**2. Como utilizar o terminal?**

O terminal é uma das funcionalidades integradas ao arquivo pendrive.html 
para executar comandos Unix. Para ver os comandos disponíveis, 
digite *help* na linha de comando para ter acesso à lista de 
todos os comandos suportados.

**3. Aparência e detalhes do componente**

O pendrive é muito longe do convencional, a placa PCB pare ter sido feita com impressão 3D e sem registro de produção, o que indica ter sido feita de maneira "caseira". Entretanto, parte dos componentes presentes na mainboard do dispositivo podem ser facilmente catalogados facilmente, sendo eles:

- **Wireless module – ESP32-S3-MINI**
  - CPU – Dual-core Xtensa LX7 @ 240 MHz,
  - Wireless – 2.4GHz Wi-Fi and Bluetooth 5 (LE)
  - Memory/Storage – 512 KB SRAM, 8MB on-chip flash,
  - PCB antenna

- **Storage – 128MB flash memory, addressable via SDIO/MMC or SD card interface, in 1-bit or 4-bit mode**
- **USB – USB-C male connector**
- **Misc**
  - WS2812B addressable RGB LED
  - Capacitive touch button (Spring)

Ao explorar mais a fundo a placa PCB e principalmente o módulo ESP32-S3-MINI, percebe-se que sua arquitetura é hostil porém cuidadosa, possuindo diversos serviços de segurança e criptografia habilitados, sendo eles: Secure Boot, Flash Encryption e Assinatura das imagens e OTA seguras. Além dos demais módulos de segurança, eFuses queimados manualmente impedem o controle e acesso a modos de boot e JTAG. Entretanto, esta é apenas uma única camada de segurança visível e que pode ser acessada por analise fisica do dispositivo, sem contar inúmeras camadas de proteção de software e criptografia, as quais protegem partes cruciais do sistema, exibindo apenas o conteúdo misterioso que o pendrive armazena, uma imagem e um poema.

Abaixo segue-se conceitos ilustrativos do dispositivo:

<br>

- (Imagem ilustrativa):
<p align="center">
  <img width="750" height="750" alt="image" src="https://github.com/user-attachments/assets/6af3d871-c074-40f5-be0c-2ea9c3d585a2" />
</p>

<br>

- (Diagrama do dispositivo):
<p align="center">
  <img width="750" height="750" alt="image" src="https://github.com/user-attachments/assets/07cee6c6-670f-4c18-8c50-0bdc71303212" />
</p>
