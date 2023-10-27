"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
function activate(context) {
    let disposable = vscode.commands.registerCommand("extension.createFolderWithFiles", async () => {
        const folderPath = vscode.workspace.rootPath;
        if (folderPath) {
            const fileName = await vscode.window.showInputBox({
                prompt: "Enter file name (without extension)",
            });
            if (fileName) {
                const folderName = `${fileName}`;
                const newFolderPath = path.join(folderPath, folderName);
                //   const newFolderPath2 = path.join(folderPath, "Makefile");
                fs.mkdirSync(newFolderPath);
                //   fs.mkdirSync(newFolderPath2);
                const filePath = path.join(newFolderPath, `${fileName}.cpp`);
                const filePath2 = path.join(newFolderPath, `Makefile`);
                // Content to be added to the new file
                const fileContent = `
#include <iostream>

int main() {
	std::cout << "Hello, World! from ${fileName}.cpp" << std::endl;
	return 0;
}
			`;
                const fileContent2 = `
# Makefile for C++ project
a.exe: ${fileName}.o
	g++ ${fileName}.cpp -o a.exe

${fileName}.o: ${fileName}.cpp
			`;
                fs.writeFileSync(filePath, fileContent);
                fs.writeFileSync(filePath2, fileContent2);
                const terminal = vscode.window.createTerminal();
                terminal.show();
                terminal.sendText(`cd ${newFolderPath}`);
                terminal.sendText(`make`);
                terminal.sendText(`./a.exe`);
                vscode.window.showTextDocument(vscode.Uri.file(filePath));
                vscode.window.showInformationMessage(`New folder and file "${folderName}" created with content successfully!`);
            }
            else {
                vscode.window.showErrorMessage("File name cannot be empty.");
            }
        }
        else {
            vscode.window.showErrorMessage("Open a folder before using this command.");
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map