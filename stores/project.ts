export const useProjectStore = defineStore({
  id: 'myProjectStore',
  state: () => ({
    projectFiles: [
      {
        id: '1',
        name: 'assets',
        type: 'directory',
        children: [
          { id: '2', name: 'main.css', type: 'css' },
          { id: '3', name: 'background.png', type: 'png' },
        ],
        showChildren: false
      },
      {
        id: '4',
        name: 'composables',
        type: 'directory',
        children: [
          { id: '5', name: 'firebase.ts', type: 'typeScript' },
          { id: '6', name: 'formatDate.ts', type: 'typeScript' },
        ]
      },
      {
        id: '7',
        name: 'pages',
        type: 'directory',
        children: [
          { id: '8', name: 'Home.vue', type: 'vue' },
          { id: '9', name: 'Index.vue', type: 'vue' },
          { id: '10', name: 'Project.vue', type: 'vue' },
          {
            id: '11',
            name: '[Project]',
            type: 'directory',
            children: [
              { id: '12', name: 'LetterLock.vue', type: 'vue' },
              { id: '13', name: 'Stockwise.vue', type: 'vue' }
            ]
          }
        ]
      },
      {
        id: '14',
        name: 'stores',
        type: 'directory',
        children: [
          { id: '15', name: 'ads.ts', type: 'typeScript' },
          { id: '16', name: 'game.ts', type: 'typeScript' },
        ]
      },
      { id: '17', name: 'nuxt.config.ts', type: 'typeScript' },
      { id: '18', name: 'tsconfig.json', type: 'json' },
      { id: '19', name: 'package.json', type: 'json' },
      { id: '20', name: 'package-lock.json', type: 'json' },
      { id: '21', name: 'tailwind.config.js', type: 'javaScript' },
      { id: '22', name: '.gitignore', type: 'gitIgnore' },
      { id: '23', name: 'README.md', type: 'markDown' },
    ]    
  }),

  actions: {

  }
})
