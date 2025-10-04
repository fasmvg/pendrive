const files = [
    { name: "the-night-of-enitharmons-joy.jpg", path: "files/the-night-of-enitharmons-joy.jpg" },
    { name: "poem.txt", path: "files/poem.txt" }
];

const list = document.getElementById("file-list");

files.forEach(file => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = file.path;
    link.textContent = file.name;
    link.target = "_blank";
    item.appendChild(link);
    list.appendChild(item);
});

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

terminalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    const command = terminalInput.value.trim();
    if (command === "") return;
    appendToTerminal(`$ ${command}`);
    simulateCommand(command);
    terminalInput.value = "";
    }
});

function appendToTerminal(text) {
    const line = document.createElement("pre");
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function simulateCommand(command) {
    const responses = {
    "ls -la": `drwxr-xr-x. 1 root root   26 out  3 00:00 .
drwxr-xr-x. 1 root root   1,7K out  3 00:00 ..
-rw-r--r--. 1 root root    382 out  3 00:00 poem.txt
-rw-r--r--. 1 root root 214861 out  3 18:00 the-night-of-enitharmons-joy.jpg`,
    "pwd": "/mnt/pendrive",
    "clear": "clear",
    "help": "Bash commands: ls -la, pwd, help, clear, stat <file>, file <file>, exiftool <file>",
    "stat the-night-of-enitharmons-joy.jpg": `Arquivo: the-night-of-enitharmons-joy.jpg
Tamanho: 214861    	Blocos: 424        bloco de E/S: 4096   arquivo comum
Dispositivo: 0,39	Inode: 5874609     Ligações: 1
Acesso: (0644/-rw-r--r--)  Uid: ( 1000/   root)   Gid: ( 1000/   root)
Contexto: unconfined_u:object_r:user_home_t:s0
Acesso: 2025-10-03 00:00:00.582474442 -0300
Modificação: 2025-10-02 00:00:00.181444682 -0300
Alteração: 2025-10-03 00:00:00.181444682 -0300
Criação: 2025-10-02 00:00:00.180444674 -0300`,
    "stat poem.txt": `Arquivo: poem.txt
Tamanho: 382       	Blocos: 8          bloco de E/S: 4096   arquivo comum
Dispositivo: 0,39	Inode: 5874608     Ligações: 1
Acesso: (0644/-rw-r--r--)  Uid: ( 1000/   root)   Gid: ( 1000/   root)
Contexto: unconfined_u:object_r:user_home_t:s0
Acesso: 2025-10-03 00:00:00.582474442 -0300
Modificação: 2025-10-02 00:00:00.180444674 -0300
Alteração: 2025-10-02 00:00:00.180444674 -0300
Criação: 2025-10-02 00:00:00.180444674 -0300`,
    "file the-night-of-enitharmons-joy.jpg": `the-night-of-enitharmons-joy.jpg: JPEG image data, JFIF standard 1.02, aspect ratio, density 1x1, segment length 16, baseline, precision 8, 1536x1154, components 3`,
    "file poem.txt": `poem.txt: Unicode text, UTF-8 text`,
    "exiftool the-night-of-enitharmons-joy.jpg": `ExifTool Version Number         : 13.10
File Name                       : the-night-of-enitharmons-joy.jpg
Directory                       : files
File Size                       : 215 kB
File Modification Date/Time     : 2025:10:02 00:00:00-03:00
File Access Date/Time           : 2025:10:02 00:00:00-03:00
File Inode Change Date/Time     : 2025:10:02 00:00:00-03:00
File Permissions                : -rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.02
Resolution Unit                 : None
X Resolution                    : 1
Y Resolution                    : 1
Image Width                     : 1536
Image Height                    : 1154
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 1536x1154
Megapixels                      : 1.8`,
    "exiftool poem.txt": `ExifTool Version Number         : 13.10
File Name                       : poem.txt
Directory                       : files
File Size                       : 382 bytes
File Modification Date/Time     : 2025:10:02 00:00:00-03:00
File Access Date/Time           : 2025:10:02 00:00:00-03:00
File Inode Change Date/Time     : 2025:10:02 00:00:00-03:00
File Permissions                : -rw-r--r--
File Type                       : TXT
File Type Extension             : txt
MIME Type                       : text/plain
MIME Encoding                   : utf-8
Byte Order Mark                 : No
Newlines                        : Unix LF
Line Count                      : 11
Word Count                      : 59`
};

    if (command === "clear") {
        terminalOutput.innerHTML = "";
        return;
    }

    const response = responses[command] || `bash: command not found: ${command}`;
    appendToTerminal(response);
}
