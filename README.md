# C Make Folder Creator Extension for Visual Studio Code

The **C Make Folder Creator** extension for Visual Studio Code allows developers to create a new folder with a specified file inside. It prompts the user for a file name, and it automatically creates a folder and a corresponding file with the provided name inside the opened workspace. This extension is helpful for quickly setting up project structures or creating new files without manually creating folders and files.

## Features

- Prompt user for a file name (without extension).
- Automatically create a folder and a file with the specified name inside the opened workspace.
- File is created with a `.cpp` extension.
- Ability to customize the initial content of the created file.

## How to Use

1. **Open a Folder:** Open a folder in Visual Studio Code where you want to create the new folder and file.

2. **Run the Command:**
    - Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the Command Palette.
    - Type `Create Folder with Files` and select the command to run.

3. **Enter File Name:**
    - You will be prompted to enter a file name (without extension).
    - The extension will create a folder and a file named `{filename}.cpp` inside the opened workspace.

4. **File Content:**
    - The created file will contain a basic C++ template:
    ```cpp
    #include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }
    ```

5. **Terminal Command (Optional):**
    - After the folder and file are successfully created, you can specify a terminal command to run.
    - Modify the `extension.ts` file to add your desired terminal command.

## Installation

1. Launch Visual Studio Code.
2. Go to Extensions (or press `Ctrl + Shift + X`).
3. Search for "Folder Creator" and click Install.

## Contributing

If you find any issues with the extension or have suggestions for improvements, please feel free to [create a new issue](https://github.com/your-username/folder-creator-extension/issues) on GitHub.

## License

This extension is licensed under the [MIT License](LICENSE).

---

**Happy coding!** 🚀

