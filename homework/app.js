const data = [
  {
    'folder': true,
    'title': 'Grow',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'English',
        'children': [
          {
            'title': 'Present_Perfect.txt'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Soft',
    'children': [
      {
        'folder': true,
        'title': 'NVIDIA',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'folder': true,
    'title': 'Doc',
    'children': [
      {
        'title': 'project_info.txt'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

const folderGrow = document.createElement('div');
folderGrow.className = 'folder';
rootNode.append(folderGrow);

const folderGrowTitle = document.createElement('h5');
folderGrowTitle.className = 'folder-title';
folderGrowTitle.textContent = 'Grow';
folderGrow.append(folderGrowTitle);


const wrapperGrow = document.createElement('div');
wrapperGrow.className = 'wrapper';
folderGrowTitle.after(wrapperGrow);


const folderEnglish = document.createElement('div');
folderEnglish.className = 'folder';
wrapperGrow.append(folderEnglish);

const folderEnglishTitle = document.createElement('h5');
folderEnglishTitle.className = 'folder-title';
folderEnglishTitle.textContent = 'English';
folderEnglish.append(folderEnglishTitle);


const wrapperEnglish = document.createElement('div');
wrapperEnglish.className = 'wrapper';
folderEnglishTitle.after(wrapperEnglish);

const filePresent = document.createElement('div');
filePresent.className = 'file';
wrapperEnglish.append(filePresent);

const filePresentTitle = document.createElement('span');
filePresentTitle.className = 'file-title';
filePresentTitle.textContent = 'Present_perfect.png';
filePresent.append(filePresentTitle);


const fileLogo = document.createElement('div');
fileLogo.className = 'file';
wrapperGrow.append(fileLogo);

const fileLogoTitle = document.createElement('span');
fileLogoTitle.className = 'file-title';
fileLogoTitle.textContent = 'logo.png';
fileLogo.append(fileLogoTitle);


const folderSoft = document.createElement('div');
folderSoft.className = 'folder';
rootNode.append(folderSoft);

const folderSoftTitle = document.createElement('h5');
folderSoftTitle.className = 'folder-title';
folderSoftTitle.textContent = 'Soft';
folderSoft.append(folderSoftTitle);

const wrapperSoft = document.createElement('div');
wrapperSoft.className = 'wrapper';
folderSoftTitle.after(wrapperSoft);


const folderNvidia = document.createElement('div');
folderNvidia.className = 'folder';
wrapperSoft.append(folderNvidia);

const folderNvidiaTitle = document.createElement('h5');
folderNvidiaTitle.className = 'folder-title';
folderNvidiaTitle.textContent = 'NVIDIA';
folderNvidia.append(folderNvidiaTitle);


const fileNvmSetup = document.createElement('div');
fileNvmSetup.className = 'file';
wrapperSoft.append(fileNvmSetup);

const fileNvmSetupTitle = document.createElement('span');
fileNvmSetupTitle.className = 'file-title';
fileNvmSetupTitle.textContent = 'nvm-setup.exe';
fileNvmSetup.append(fileNvmSetupTitle);


const fileNode = document.createElement('div');
fileNode.className = 'file';
wrapperSoft.append(fileNode);

const fileNodeTitle = document.createElement('span');
fileNodeTitle.className = 'file-title';
fileNodeTitle.textContent = 'node.exe';
fileNode.append(fileNodeTitle);


const folderDoc = document.createElement('div');
folderDoc.className = 'folder';
rootNode.append(folderDoc);

const folderDocTitle = document.createElement('h5');
folderDocTitle.className = 'folder-title';
folderDocTitle.textContent = 'Doc';
folderDoc.append(folderDocTitle);


const wrapperDoc = document.createElement('div');
wrapperDoc.className = 'wrapper';
folderDocTitle.after(wrapperDoc);



const fileProjectInfo = document.createElement('div');
fileProjectInfo.className = 'file';
wrapperDoc.append(fileProjectInfo);

const fileProjectInfoTitle = document.createElement('span');
fileProjectInfoTitle.className = 'file-title';
fileProjectInfoTitle.textContent = 'project_info.txt';
fileProjectInfo.append(fileProjectInfoTitle);

const fileCredent = document.createElement('div');
fileCredent.className = 'file';
rootNode.append(fileCredent);

const fileCredentTitle = document.createElement('span');
fileCredentTitle.className = 'file-title';
fileCredentTitle.textContent = 'credentials';
fileCredent.append(fileCredentTitle);

const menu = document.createElement('div');
menu.classList = 'menu';
rootNode.append(menu);

const menuItemRename = document.createElement('div');
menuItemRename.classList = 'menu-item rename';
menu.append(menuItemRename);

const spanRename = document.createElement('span');
spanRename.textContent = 'rename';
menuItemRename.append(spanRename);

const input = document.createElement('input');
input.className = 'input';
menuItemRename.append(input);

const menuItemDelete = document.createElement('div');
menuItemDelete.classList = 'menu-item delete';
menu.append(menuItemDelete);

const spanDelete = document.createElement('span');
spanDelete.textContent = 'delete';
menuItemDelete.append(spanDelete);

const outClick = document.createElement('div');
outClick.className = 'out-click';
rootNode.append(outClick);



//-----------------------------------------
folderGrowTitle.addEventListener('click', function() {
  if (folderGrowTitle.className === 'folder-title') {
      wrapperGrow.style.display = 'block';
      folderGrowTitle.className = 'folder-title-open';
  } else {
    wrapperGrow.style = 'none';
    folderGrowTitle.className = 'folder-title';
  }
});

folderEnglishTitle.addEventListener('click', function() {
  if (folderEnglishTitle.className === 'folder-title') {
    wrapperEnglish.style.display = 'block';
    folderEnglishTitle.className = 'folder-title-open';
} else {
  wrapperEnglish.style = 'none';
  folderEnglishTitle.className = 'folder-title';
}
});

folderSoftTitle.addEventListener('click', function() {
  if (folderSoftTitle.className === 'folder-title') {
    wrapperSoft.style.display = 'block';
    folderSoftTitle.className = 'folder-title-open';
} else {
  wrapperSoft.style = 'none';
  folderSoftTitle.className = 'folder-title';
}
});

folderDocTitle.addEventListener('click', function() {
  if (folderDocTitle.className === 'folder-title') {
    wrapperDoc.style.display = 'block';
    folderDocTitle.className = 'folder-title-open';
} else {
  wrapperDoc.style = 'none';
  folderDocTitle.className = 'folder-title';
}
});

const files = document.querySelectorAll('.file-title');


for (let item of files) {
  item.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  
    menu.style.top = `${e.clientY}px`
    menu.style.left = `${e.clientX}px`
    menu.classList.add('show')
    outClick.style.display = 'block';

    menuItemRename.addEventListener('click', function() {
      input.style.display = 'block';
      item.textContent = input.value;
    });

    menuItemDelete.addEventListener('click', function() {
      item.remove();
    });
  });
}

outClick.addEventListener('click', () => {
  menu.classList.remove('show');
  input.style.visibility = 'hidden';
  outClick.style.display = 'none';
});
