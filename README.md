# folder-tree-generator

This repository contains a Google Apps Script function `createFolders()` that automates the process of creating a hierarchical folder structure in Google Drive. The function creates a root folder for a specified month and then creates weekly folders with their corresponding subfolders inside the root folder. The folder structure can be customized to fit your desired organization.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Examples](#examples)
- [Dependencies](#dependencies)

## Overview

The `createFolders()` function is designed to automatically create a folder hierarchy in Google Drive based on a predefined structure. The script can be easily modified to create any folder structure you need. 

The default folder structure created by the function is as follows:

```
mese esempio
│
└───settimana1
│   │
│   ├───Day1
│   ├───Day2
│   └───Day3
│
└───settimana2
│   │
│   ├───Meeting1
│   ├───Meeting2
│   ├───Meeting3
│   ├───Meeting4
│   └───Meeting5
│
└───settimana3
    │
    ├───Task1
    ├───Task2
    ├───Task3
    ├───Task4
    ├───Task5
    └───Task6
...
```

## Prerequisites

Before you begin, you'll need the following:

- A Google Account
- A Google Drive folder where you want to create the folder structure
- The folder ID of the parent folder (where you want the new folder structure to be created)

## Installation

1. Open the [Google Apps Script](https://script.google.com/) website and sign in with your Google Account.
2. Click on `New Project` to create a new script.
3. Replace the default code with the code provided in this repository.
4. Save the script with a desired name by clicking on `File` > `Save`.

## Usage

1. Replace the `mese` variable with the desired name for the root folder.
2. Replace the `parentFolderId` variable with the folder ID of the parent folder in Google Drive where the new folder structure will be created.
3. Customize the folder structure as needed (see [Customization](#customization) section).
4. Save your changes.
5. Run the script by clicking the `Run` button in the Google Apps Script editor.
6. When prompted, authorize the script to access your Google Drive account.

## Customization

The folder structure is defined in the `weekFolders` array. Each object in the array represents a weekly folder and contains a `name` property for the folder name and a `subfolders` property, which is an array of subfolder names.

To customize the folder structure:

1. Modify the `name` property of an existing weekly folder or add new objects to the `weekFolders` array.
2. Modify the `subfolders` array of an existing weekly folder or add new subfolders to the array.

## Examples

### Example 1: Adding a new weekly folder

To add a new weekly folder named "settimana7" with subfolders "Test4", "Test5", and "Test6", add the following object to the `weekFolders` array:

```javascript
{
  name: 'settimana7',
  subfolders: ['Test4', 'Test5', 'Test6']
}
```

### Example 2: Modifying a weekly folder's name

To change the name of the "settimana1" folder to "Week1", update the `name` property of the corresponding object in the `weekFolders` array:

```javascript
{
  name: 'Week1',
  subfolders: ['Day1', 'Day2', 'Day3']
}
```

## Dependencies

This script relies on the Google Apps Script API and Google Drive API. No additional libraries or dependencies are required.
