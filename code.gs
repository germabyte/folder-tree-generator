function createFolders() {
  var mese = 'mese esempio'; // Mese
  var parentFolderId = '1EoYssPHz7MPNraJC4mD4pLzx2v0O_SlF'; // ID cartella in cui creare mese
  var parentFolder = DriveApp.getFolderById(parentFolderId);
  var rootFolder = parentFolder.createFolder(mese);
  
  // Settimane e sottocartelle corrispondenti
  var weekFolders = [
    {
      name: 'settimana1',
      subfolders: ['Day1', 'Day2', 'Day3']
    },
    {
      name: 'settimana2',
      subfolders: ['Meeting1', 'Meeting2', 'Meeting3', 'Meeting4', 'Meeting5']
    },
    {
      name: 'settimana3',
      subfolders: ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6']
    },
    {
      name: 'settimana4',
      subfolders: ['Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28']
    },
    {
      name: 'settimana5',
      subfolders: ['Event1', 'Event2', 'Event3']
    },
    {
      name: 'settimana6',
      subfolders: ['Test1', 'Test2', 'Test3']
    }
  ];

  for (var i = 0; i < weekFolders.length; i++) {
    var weekFolder = rootFolder.createFolder(weekFolders[i].name);
    for (var j = 0; j < weekFolders[i].subfolders.length; j++) {
      weekFolder.createFolder(weekFolders[i].subfolders[j]);
    }
  }
}
